# Jean-Philippe Perron — Portfolio

A modern, responsive portfolio website built with **Nuxt 3 + Vue 3 + Tailwind CSS**.

## Features

- 🎨 Dark glassmorphism design with smooth animations
- 🔐 Password-protected projects section
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌐 Bilingual-ready content structure (FR/EN)
- ⚡ Static site generation for fast load times
- 🚀 Vercel deployment ready

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (SSG)
npx nuxi generate

# Preview production build
npx nuxi preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
NUXT_PUBLIC_PROJECTS_PASSWORD=your_password_here
```

The default password for development is `demo123`.

## Updating Content

All content is stored in JSON files in the `/content` directory:

| File | Purpose |
|------|---------|
| `content/projects.json` | Project cards and details |
| `content/experience.json` | Professional experience timeline |
| `content/skills.json` | Skills grouped by category |

Each content file uses a bilingual structure with `en` and `fr` keys.

## Project Structure

```
├── app/
│   ├── components/     # Reusable Vue components
│   ├── composables/    # Vue composables (auth, scroll reveal)
│   ├── layouts/        # Layout templates
│   ├── pages/          # File-based routing
│   │   ├── index.vue          # Home
│   │   ├── about.vue          # About
│   │   ├── experience.vue     # Experience timeline
│   │   ├── contact.vue        # Contact form
│   │   └── projects/
│   │       ├── index.vue      # Projects grid (protected)
│   │       └── [slug].vue     # Project detail (protected)
│   └── app.vue
├── assets/css/         # Global styles
├── content/            # JSON content files
├── public/             # Static assets
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.ts  # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

When prompted, set the environment variable:
```
NUXT_PUBLIC_PROJECTS_PASSWORD=your_secure_password
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and import your GitHub repository
2. Framework will be auto-detected as Nuxt
3. Add environment variable `NUXT_PUBLIC_PROJECTS_PASSWORD` in project settings
4. Deploy

## Tech Stack

- **Framework**: Nuxt 3 / Vue 3
- **Styling**: Tailwind CSS
- **Typography**: Inter + JetBrains Mono (Google Fonts)
- **Animations**: CSS transitions + VueUse IntersectionObserver
- **Deployment**: Vercel (SSG)
