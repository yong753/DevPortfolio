# Portfolio Website Design Spec

## Context

Build a personal developer portfolio website to showcase coding projects. The site should be simple but modern, easy to maintain, and allow adding new projects by dropping a markdown file and an image — no touching component code.

## Decisions Made

| Decision | Choice | Why |
|----------|--------|-----|
| Framework | **Astro** | Static site generator, content-first, zero JS by default, great GitHub Pages support |
| Language | **TypeScript** | User requirement |
| Home layout | **Compact Hero + Grid Cards** | Minimal intro, projects take the spotlight |
| Project layout | **Top Banner** | Wide screenshot at top, details below — maximum visual impact |
| Color theme | **Clean Light** | White/gray background, subtle shadows, blue accents — modern and approachable |
| Deployment | **GitHub Pages** | Free, works with Astro's static output |
| Adding projects | **Content Collections (Markdown)** | Drop a `.md` file with frontmatter, auto-generates page |

## Pages

### Home Page (`/`)

- **Navigation bar**: Site title/logo on left. Minimal nav — just "Home" link. Can add more links later as the site grows.
- **Hero section**: Compact — user's name, title (e.g. "Full-stack Developer"), one-line tagline. No large imagery, no gradient. Just clean text on white.
- **Project card grid**: 3-column responsive grid. Each card shows:
  - Thumbnail image (from frontmatter)
  - Project title
  - Short description (1 line, truncated)
  - Tech stack tags (small pills)
  - Clicking anywhere on the card navigates to the project page
- Grid is responsive: 3 columns on desktop, 2 on tablet, 1 on mobile

### Project Page (`/projects/[slug]`)

**Hard constraint: Must fit in one browser viewport — no scrolling.**

Layout (top to bottom):
1. **Navigation bar** — same as home, with a "← Back" link to home
2. **Screenshot banner** — full-width image, fixed max-height to leave room for details
3. **Details section** — below the screenshot:
   - Title (h1)
   - Description (1-3 sentences)
   - Tech stack tags (pills)
   - Links: GitHub icon/button, Live Demo icon/button (only if present)

To guarantee no-scroll on a single viewport:
- Screenshot max-height: `40vh`
- Details section uses remaining space with flexbox
- Description is kept short by design (enforced by content convention, not code)

## Project Directory Structure

```
src/
  content/
    projects/              ← Content collection
      config.ts            ← Zod schema for project frontmatter
      project-1.md
      project-2.md
  pages/
    index.astro            ← Home page
    projects/
      [slug].astro         ← Dynamic project page
  layouts/
    BaseLayout.astro       ← HTML head, nav, footer
  components/
    Nav.astro              ← Navigation bar
    Hero.astro             ← Home hero section
    ProjectCard.astro      ← Card for the home grid
    ProjectDetail.astro    ← Full project view (viewport-fit)
    TechTag.astro          ← Reusable tech stack pill
  styles/
    global.css             ← CSS custom properties, base styles, reset
public/
  images/
    projects/              ← Project screenshots
```

## Content Schema

Each project is a markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "What it does in 1-2 sentences"
thumbnail: "/images/projects/project-name.png"
techStack: ["React", "TypeScript", "Node.js"]
githubUrl: "https://github.com/..."      # optional
liveUrl: "https://example.com"           # optional
order: 1                                  # display order on home page
---
```

Validated with Zod schema in `config.ts`:
- `title`: string, required
- `description`: string, required
- `thumbnail`: string (path), required
- `techStack`: string array, required, min 1
- `githubUrl`: string (URL), optional
- `liveUrl`: string (URL), optional
- `order`: number, required (lower = first)

## Visual Design

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#fafafa` | Page background |
| `--bg-card` | `#ffffff` | Card backgrounds |
| `--border` | `#e5e5e5` | Card borders, dividers |
| `--text-primary` | `#1a1a1a` | Headings, body text |
| `--text-secondary` | `#666666` | Descriptions, meta text |
| `--accent` | `#0066ff` | Links, tech tags, interactive elements |
| `--accent-light` | `#e6f0ff` | Tag backgrounds, hover states |
| `--shadow` | `0 1px 3px rgba(0,0,0,0.08)` | Card elevation |

### Typography

- Font family: System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Headings: `font-weight: 700`
- Body: `font-weight: 400`, `line-height: 1.6`
- Scale: 14px base → cards, 16px base → project page

### Spacing

- Page max-width: `1200px`, centered
- Card grid gap: `24px`
- Section padding: `48px 0`
- Card padding: `0` (image is edge-to-edge, text padded internally `16px`)

## Adding a New Project (User Workflow)

1. Create `src/content/projects/my-project.md` with the frontmatter above
2. Put the screenshot at `public/images/projects/my-project.png`
3. Run `npm run dev` or push to Git — the project appears automatically

No code changes needed. Astro content collections handle discovery and type-safe querying.

## Deployment

- Use `@astrojs/sitemap` for SEO
- Astro config: `output: 'static'`, `site: 'https://<username>.github.io'`
- GitHub Actions workflow for auto-deploy on push to `main`
- Build command: `npm run build` → outputs to `dist/`

## Verification

1. `npm run dev` — home page shows hero + project cards
2. Click a project card → navigates to project page
3. Project page fits in viewport without scrolling
4. Add a new `.md` file + image → new project appears without code changes
5. `npm run build` succeeds with no errors
6. Deploy to GitHub Pages and verify live
