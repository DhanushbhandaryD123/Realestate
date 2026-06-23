# LUXE Estate — Premium Real Estate Website

A polished, fully responsive luxury real-estate front-end built with **React + Vite + Tailwind CSS v4 + Framer Motion**. Dark-navy and gold aesthetic, smooth scroll animations, reusable components, and 13 routed pages.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** — page transitions & scroll animations
- **React Router DOM v6** — routing
- **Lucide React** — icons

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Pages

| Route | Page |
|-------|------|
| `/` | Home (17 sections) |
| `/properties` | All listings + filters |
| `/properties/:slug` | Property detail + gallery + mortgage widget |
| `/buy` · `/rent` · `/commercial` | Filtered listings by purpose |
| `/agents` | Team + reviews |
| `/services` | Services + process |
| `/blog` · `/blog/:slug` | Journal + article |
| `/about` | Story, mission, values, timeline, team |
| `/contact` | Contact form + offices + map |
| `*` | Animated 404 |

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, Layout, Loader, ScrollToTop
│   ├── sections/    # Home sections + reusable PropertyListing
│   └── ui/          # Button, PropertyCard, SectionHeading, etc.
├── data/            # properties, agents, content (edit these to swap content)
├── pages/           # Routed pages
├── utils/           # motion variants, formatters
├── index.css        # Tailwind v4 theme tokens & utilities
└── main.jsx
```

## Customising

- **Content** — edit `src/data/properties.js`, `agents.js`, `content.js`.
- **Theme colours / fonts** — edit the `@theme` block in `src/index.css`.
- **Images** — Unsplash CDN URLs in the data files; swap for your own.
- **Maps** — OpenStreetMap embeds (no API key required).

---

Built as a front-end template. All data is mock/static — wire the forms and listings to your own API when ready.
