# Anna's Art Studio

Website for **Anna Goldmeier**, an artist based in London who creates original oil paintings, handcrafted jewellery, and private events. A showcase that drives enquiries (no online checkout).

🔗 https://frabjous-paprenjak.netlify.app

## Tech stack
- [Astro](https://astro.build) (static output) · **Node ≥ 20**
- Hosted on **Netlify** (auto-deploys from `main`).

## Local development
```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the built site
```

## Project structure
```
src/
  pages/        file-based routes (index, gallery, contact, private-events)
  layouts/      Layout.astro — shared shell (head, nav, footer, transitions)
  styles/       global.css (shared) + one stylesheet per page
  assets/       images optimised by Astro (paintings/, anna.jpeg, …)
  data/         paintings.js — the painting list (single source of truth)
public/         served as-is (favicons, robots.txt, media/)
```

## Editing content
- **Paintings:** add/rename in `src/data/paintings.js` (`file`, `title`, `medium`) and put the image in `src/assets/paintings/`. `heroOrder` / `selectedOrder` choose what the homepage features.
- **Page copy:** edit the relevant file in `src/pages/`.
- **Images:** `src/assets/` = optimised via `<Image>`/`getImage`; `public/` = served raw (favicons, etc.).

## Deployment
Push to `main` → Netlify builds and deploys automatically.

## Contact form
The contact page uses **Netlify Forms** — submissions appear in the Netlify dashboard. It **only works on the deployed site, not in `npm run dev`.**
