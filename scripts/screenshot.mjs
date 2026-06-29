/**
 * screenshot.mjs — Portfolio project detail pages → PNG export
 *
 * Usage:  npm run screenshot
 * Prereq: npm run build (builds static site to dist/)
 *
 * How it works:
 *   1. Starts `astro preview` server
 *   2. Reads all project slugs from src/content/projects/*.md
 *   3. For each slug, navigates to /DevPortfolio/projects/[slug]/
 *   4. Captures a full-page PNG via Puppeteer (headless Chrome)
 *   5. Saves to screenshots/{slug}.png
 *
 * Screenshot-only exclusions (DOM hidden before capture, pages untouched):
 *   - "담당 역할" (Role) section   → hidden via JS
 *   - ".tags" (tech stack badges)  → hidden via JS
 *
 * To customize displayed sections, edit the page.evaluate() call below.
 */

import puppeteer from 'puppeteer';
import { spawn } from 'node:child_process';
import { readdir, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SCREENSHOTS_DIR = resolve(ROOT, 'screenshots');

const BASE_URL = 'http://localhost:4321/DevPortfolio';

async function getSlugs() {
  const files = await readdir(resolve(ROOT, 'src/content/projects'));
  return files
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['astro', 'preview', '--host', '0.0.0.0'], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    });

    const timeout = setTimeout(() => {
      reject(new Error('Preview server failed to start within 30s'));
    }, 30000);

    proc.stdout.on('data', (data) => {
      const output = data.toString();
      console.log('[preview]', output.trim());
      if (output.includes('Local') || output.includes('localhost')) {
        clearTimeout(timeout);
        setTimeout(() => resolve(proc), 1000);
      }
    });

    proc.stderr.on('data', (data) => {
      console.error('[preview:err]', data.toString().trim());
    });

    proc.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

async function screenshotPages(browser, slugs) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const url = `http://localhost:4321/DevPortfolio/projects/${slug}/`;
    const outputPath = resolve(SCREENSHOTS_DIR, `${slug}.png`);

    console.log(`[${i + 1}/${slugs.length}] Capturing: ${slug}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.evaluate(() => {
        const videos = document.querySelectorAll('video');
        for (const v of videos) {
          v.pause();
        }

        const roleHeading = [...document.querySelectorAll('.content-section h2')]
          .find(h2 => h2.textContent === '담당 역할');
        if (roleHeading) roleHeading.closest('.content-section').style.display = 'none';

        const tags = document.querySelector('.tags');
        if (tags) tags.style.display = 'none';
      });
      await page.screenshot({ path: outputPath, fullPage: true });
      console.log(`  Saved: ${outputPath}`);
    } catch (err) {
      console.error(`  Failed: ${slug} - ${err.message}`);
    }
  }

  await page.close();
}

async function main() {
  await mkdir(SCREENSHOTS_DIR, { recursive: true });

  const slugs = await getSlugs();
  console.log(`Found ${slugs.length} projects: ${slugs.join(', ')}`);

  console.log('Starting preview server...');
  const serverProc = await startPreviewServer();

  let browser;
  try {
    browser = await puppeteer.launch({ headless: 'new' });
    await screenshotPages(browser, slugs);
    console.log(`\nDone! ${slugs.length} screenshots saved to screenshots/`);
  } finally {
    if (browser) await browser.close();
    serverProc.kill();
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});