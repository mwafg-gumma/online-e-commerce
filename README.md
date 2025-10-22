# E-commerce Web (React + Vite)

A minimal E-commerce front-end built with React + Vite and Tailwind CSS.  
This README explains how to run the project, required dependencies, where to put images/data, and how the main components work with usage examples (shown with `<pre>`).

---

## Table of contents

- Project overview
- Prerequisites
- Install & run
- Build & preview
- Project structure
- Important notes (images, products.json)
- Main components — description & usage examples
  - NavBar
  - UserProfilePage (Contact)
  - ProductDetailPage
  - CategoryCircles
  - TestimonialsPage
  - Footer
- Troubleshooting

---

## Project overview

This repository contains a React single-page application scaffolded with Vite. UI styling uses Tailwind CSS utility classes. Routing is implemented with React Router. Icons used from `react-icons`.

---

## Prerequisites

- Node.js 16+ (LTS)
- npm (or yarn/pnpm)
- Images for products should be placed in `public/image/` or use absolute URLs.

Required libraries (typically already in package.json):
- react, react-dom
- react-router-dom
- react-icons
- tailwindcss (if using Tailwind)
- postcss, autoprefixer (Tailwind toolchain)

---

## Install & run (development)

Open a PowerShell / terminal at the project root (Windows):

<pre>
npm install
# if Tailwind not configured, follow Tailwind install steps
npm run dev
</pre>

Open the printed URL (usually http://localhost:5173).

---

## Build & preview

<pre>
npm run build
npm run preview
</pre>

---

## Project structure (important files)

- src/
  - main.jsx (app entry)
  - App.jsx (routes)
  - components/
    - NavBar.jsx
    - Footer.jsx
    - Product/
      - ProductDetailPage.jsx
      - CategoryCircles.jsx
      - TestimonialsPage.jsx
    - UserProfilePage.jsx
  - Links/ (About.jsx, Bags.jsx, etc)
  - products.json (product data used by product pages)
- public/
  - image/ (put product images here, e.g. `public/image/men3.jpeg`)

---

## Important notes

1. Image paths
   - For runtime loading from `products.json`, store paths as `image/filename.jpg` (no leading `./` or `/`).
   - Accessed in components as `"/" + imagePath` (e.g. `/image/men3.jpeg`).
   - If images are inside `src/assets`, you must import them in code (dynamic paths from JSON won't import from `src` automatically).

2. products.json
   - Must be valid JSON. Each item must be an object and the array must be closed.
   - Example product object:
     <pre>
{
  "id": 1,
  "name": "Casual Neck",
  "price": "$30.2",
  "originalPrice": "$100",
  "discount": "10%",
  "description": "Almost sold out!",
  "details": ["feature 1", "feature 2"],
  "image": "image/men3.jpeg"
}
     </pre>

3. Routes
   - Configure `react-router-dom` routes in `App.jsx`. Example:
     <pre>
&lt;Route path="/" element=&lt;Home /&gt; /&gt;
&lt;Route path="/about" element=&lt;About /&gt; /&gt;
&lt;Route path="/account" element=&lt;UserProfilePage /&gt; /&gt;
&lt;Route path="/card" element=&lt;Card /&gt; /&gt;
&lt;Route path="/product/:id" element=&lt;ProductDetailPage /&gt; /&gt;
     </pre>

---

## Main components — description & usage

Below are short descriptions and example usage (import + props). Use `<pre>` tags for visual code blocks below.

### NavBar
- Displays logo, search, category links, and mobile menu.
- Make the logo link to home with React Router `<Link to="/">`.

Usage / important notes:
<pre>
import NavBar from './components/NavBar';

&lt;NavBar /&gt;
</pre>

- To make "Home" navigate to `/` ensure NavLink uses `<Link to="/">`.
- Mobile menu slider opens on hamburger; submenu links should be `<Link to="/about">` etc.

### UserProfilePage (Contact)
- Controlled inputs (useState) — do not recreate input components inside the parent render to avoid focus loss.
- Use `react-icons` for icons.

Usage:
<pre>
import UserProfilePage from './components/UserProfilePage';

&lt;UserProfilePage /&gt;
</pre>

Notes: Move any nested component definitions (InputField, SocialLoginButton) outside the main component so typing doesn't lose focus.

### ProductDetailPage
- Reads product id from route (`useParams()`), looks up product in `products.json`.
- Normalize image path before setting `src`:
  <pre>
const normalizeImageSrc = (img) =&gt; {
  if (!img) return '/image/placeholder.png';
  if (/^(https?:)?\/\//.test(img)) return img;
  return `/${String(img).replace(/^\.?\/+/, '')}`;
};
  </pre>

Usage:
<pre>
import ProductDetailPage from './components/Product/ProductDetailPage';

&lt;Route path="/product/:id" element=&lt;ProductDetailPage /&gt; /&gt;
</pre>

### CategoryCircles
- Displays circular category images with titles.
- Use React Router `<Link to={link}>` for navigation from category items.

Usage:
<pre>
import CategoryCircles from './components/Product/CategoryCircles';

&lt;CategoryCircles /&gt;
</pre>

Make sure `categoriesData` entries have `link` that matches your routes, e.g. `"/men"` or `"/Men-Shop"`.

### TestimonialsPage
- UI-only component displaying cards; file name must have no spaces.
- Rename file to `TestimonialsPage.jsx` and import with that exact name.

Usage:
<pre>
import TestimonialsPage from './components/Product/TestimonialsPage';

&lt;TestimonialsPage /&gt;
</pre>

### Footer
- Rendered on pages; use `<a href="#">` for placeholders or `<NavLink to="/about">` for real routes.
- Ensure `key` is provided when mapping arrays.

Usage:
<pre>
import Footer from './Footer';

&lt;Footer /&gt;
</pre>

---

## Troubleshooting

- Focus lost while typing inputs:
  - Cause: child components recreated each render. Fix by defining InputField outside parent component.
- Images not displaying on product page:
  - Check `products.json` image path; prefer `image/filename.jpg` and ensure file exists in `public/image/`.
  - Check the network tab for 404 and the exact URL requested.
- JSON parse errors:
  - Run Node check:
    <pre>
node -e "const fs=require('fs'); try{ JSON.parse(fs.readFileSync('src/products.json','utf8')); console.log('OK'); }catch(e){ console.error(e.message); process.exit(1); }"
    </pre>
- File not found errors when importing:
  - Ensure file names have no spaces and correct casing.
  - Update import paths accordingly.

---

## Final tips

- Keep assets served from `public/` for simple runtime referencing from JSON.
- Keep route paths and `link` fields in components consistent.
- For production, validate `products.json` and test image URLs after build.

If you want, I can generate a step-by-step Tailwind + Vite setup or a small Node script to clean `products.json` automatically. Which would you like next?