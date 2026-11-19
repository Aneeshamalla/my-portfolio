# Anisha Malla · Portfolio

Personal portfolio built with **React**, **Tailwind CSS** and **Vite**.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serves the production build locally
```

## Project structure

```
public/            static files served as-is (CV, favicon)
src/
  assets/          images imported by components
  components/      one component per section, plus shared ui.jsx and Icon.jsx
  hooks/           useReveal (scroll fade-in)
  data.js          all page content: text, links, projects, skills
  index.css        Tailwind theme, light/dark colors, animations
```

To update text, links or projects, edit `src/data.js`.
