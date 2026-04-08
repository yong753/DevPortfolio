# Implementation Plan: Portfolio Website

## Context

Building a developer portfolio with Astro + TypeScript, deployed to GitHub Pages. Design spec: [docs/superpowers/specs/2026-04-08-portfolio-design.md](docs/superpowers/specs/2026-04-08-portfolio-design.md).

Key constraints:
- Each project page must fit in one viewport (no scrolling)
- Adding a project = drop a `.md` file + image, no code changes
- Clean Light theme: white/gray, blue accents, subtle shadows

## Step 1: Scaffold Astro Project

- Run `npm create astro@latest` with TypeScript (strict)
- Install dependencies
- Configure `astro.config.mjs`: `output: 'static'`, site URL
- Add `.superpowers/` to `.gitignore`

**Files created:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`

## Step 2: Global Styles + Base Layout

Build the foundation that all pages share.

- Create `src/styles/global.css` with CSS custom properties (color palette, typography, spacing)
- Create `src/layouts/BaseLayout.astro` — HTML head (meta, title, global CSS), shared structure

**Files:** `src/styles/global.css`, `src/layouts/BaseLayout.astro`

## Step 3: Nav Component

- Create `src/components/Nav.astro` — site title on left, "Home" link on right
- Simple, clean header bar with bottom border

**Files:** `src/components/Nav.astro`

## Step 4: Content Collection + Sample Data

Set up the project content pipeline.

- Create `src/content.config.ts` with Zod schema for project frontmatter (title, description, thumbnail, techStack, githubUrl?, liveUrl?, order)
- Create 2 sample project `.md` files with placeholder content
- Add placeholder images in `public/images/projects/`

**Files:** `src/content.config.ts`, `src/content/projects/sample-project-1.md`, `src/content/projects/sample-project-2.md`, `public/images/projects/` placeholders

## Step 5: Home Page (Hero + Project Cards)

Build the landing page bottom-up: small components first, then compose.

- Create `src/components/TechTag.astro` — small pill/badge for tech stack items
- Create `src/components/Hero.astro` — name, title, one-line tagline
- Create `src/components/ProjectCard.astro` — thumbnail, title, description, tech tags, clickable link
- Create `src/pages/index.astro` — uses BaseLayout, renders Hero + 3-column grid of ProjectCards
- Query content collection, sort by `order`

**Files:** `src/components/TechTag.astro`, `src/components/Hero.astro`, `src/components/ProjectCard.astro`, `src/pages/index.astro`

## Step 6: Project Detail Page

Build the full project view.

- Create `src/components/ProjectDetail.astro` — viewport-fit layout: screenshot banner (max 40vh) + title + description + tech tags + links
- Create `src/pages/projects/[slug].astro` — dynamic route using `getStaticPaths()`, renders ProjectDetail inside BaseLayout
- Use `height: 100vh` and flexbox to enforce no-scroll constraint

**Files:** `src/components/ProjectDetail.astro`, `src/pages/projects/[slug].astro`

## Step 7: Responsive Design + Polish

- Add media queries for tablet (2-col grid) and mobile (1-col)
- Card hover effects (subtle shadow lift)
- Image loading: `object-fit: cover` for consistent thumbnail sizing
- Test viewport-fit constraint on different screen sizes

**Files modified:** `src/styles/global.css`, component files as needed

## Step 8: GitHub Pages Deployment

- Create `.github/workflows/deploy.yml` — GitHub Actions workflow for Astro → GitHub Pages
- Update `astro.config.mjs` with correct `site` and `base` if needed

**Files:** `.github/workflows/deploy.yml`, `astro.config.mjs`

## Verification

1. `npm run dev` — home page shows hero + project cards in grid
2. Click a card → navigates to `/projects/[slug]`
3. Project page fits in viewport without scrolling
4. Add a 3rd `.md` file + image → appears on home without code changes
5. `npm run build` succeeds with no errors
6. Grid is responsive: 3col → 2col → 1col at breakpoints
