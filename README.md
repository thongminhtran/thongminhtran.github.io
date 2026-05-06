# Tim Tran — Portfolio

Personal portfolio site for **Tim Tran** (Thong Minh Tran), full-stack developer based in Calgary.

> Live: **[thongminhtran.github.io](https://thongminhtran.github.io)**

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router) with static export (`output: "export"`)
- **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-first config) + custom OKLCH theme
- **[Motion](https://motion.dev)** for scroll/section animations
- **[next-themes](https://github.com/pacocoursey/next-themes)** for dark/light mode
- **[Lucide](https://lucide.dev)** icons
- Deployed to **GitHub Pages** from the `gh-pages` branch via `gh-pages` CLI

## Project structure

```
.
├── app/
│   ├── globals.css      # Tailwind v4 + theme tokens
│   ├── layout.tsx       # Root layout, fonts, theme provider, nav, footer
│   └── page.tsx         # Home — composes all sections
├── components/
│   ├── nav.tsx          # Sticky glass nav with mobile drawer
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── section-heading.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── experience.tsx
│       ├── skills.tsx
│       ├── projects.tsx
│       ├── education.tsx
│       └── contact.tsx
├── lib/
│   ├── data.ts          # Profile, experiences, skills, projects (single source of truth)
│   └── utils.ts         # cn() helper
├── public/
│   ├── Tim_Tran_Resume.pdf
│   └── favicon.svg
├── next.config.ts       # output: "export" for GitHub Pages
└── package.json
```

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build

```bash
npm run build        # Outputs static site to ./out
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

Under the hood this runs `next build`, drops a `.nojekyll` flag, and pushes the
contents of `out/` to the `gh-pages` branch via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) CLI.

## Updating content

All content lives in **`lib/data.ts`** — profile, experiences, skills, projects,
and education. No CMS, no markdown — just edit the typed objects and redeploy.

## License

MIT
