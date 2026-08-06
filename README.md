# Ghaith Ghrairi — Embedded Systems & IoT Portfolio

A personal portfolio website for **Ghaith Ghrairi**, embedded systems & IoT engineering student (ISET Radès — parcours Systèmes Embarqués et Mobiles), built with plain **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step.

Live design direction: dark navy/black base with a cyan signal accent, glassmorphism panels, and a PCB-trace / circuit visual language (side dot-nav styled as vias, timeline styled as routed traces) that reflects the embedded-hardware subject matter.

---

## ✨ Features

- Fully responsive (mobile / tablet / desktop)
- Animated boot-style loader
- Fixed glass navbar + mobile full-screen menu
- Scroll-spy side navigation ("PCB via" dots)
- Scroll-reveal animations (`IntersectionObserver`, respects `prefers-reduced-motion`)
- Typed rotating hero role text
- Skills grid with tiered familiarity indicators
- Education / experience timeline + certification cards
- Featured case-study project + supporting project cards
- Full project detail modals (objectives, architecture, hardware/software, challenges, results, skills)
- Contact section with a **backend-free** contact form (opens the visitor's email client via `mailto:`)
- Back-to-top button, smooth scrolling, SEO meta tags + Open Graph/Twitter cards

---

## 📁 Project structure

```
Portfolio/
│── index.html          # all page markup + 3 project case-study modals
│── style.css            # design tokens, layout, components, animations
│── script.js             # loader, nav, scroll-spy, reveal, modals, form
│── README.md
│── assets/
│     ├── images/         # avatar badge + project illustrations (SVG)
│     ├── icons/          # favicon.svg
│     └── cv.pdf           # ⚠️ placeholder path — add your real CV here
```

---

## 🛠 Technologies

HTML5 · CSS3 (custom properties, Grid/Flexbox, `backdrop-filter`) · Vanilla JavaScript (ES5, no dependencies) · [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.

---

## ⚠️ Before you publish — things to finish

This site was generated from your CV and your **Optical Fiber Tester** PFE report. A few things need your input before it's fully ready:

1. **`assets/cv.pdf`** — add your actual CV PDF at this path (the Download CV buttons already point here).
2. **Profile photo** — the hero currently uses a stylized monogram badge (`assets/images/avatar-badge.svg`) because no photo file was accessible to generate the site. Swap in a real photo if you'd like (e.g. `assets/images/profile.jpg`, then update the `<img>` in the hero section of `index.html`).
3. **GitHub / LinkedIn links** — every GitHub and LinkedIn button currently has a placeholder `href="#"` marked `data-placeholder-link` (clicking it shows a small reminder toast instead of navigating). Search `index.html` for `data-placeholder-link` and replace the `href` values with your real profile/repo URLs, then remove the `data-placeholder-link` attribute.
4. **Project report PDFs / real photos** — each project card's "PDF" / gallery image is a generated illustration, not a real photo. Drop real photos into `assets/images/` and swap the `<img src>` paths; drop report PDFs into `assets/` and update the "Full Report" links.
5. **"Smart Monitoring System" project** — this project was mentioned in your brief but no report content or component list was provided, so it isn't built yet. Send the report (or even just a bullet list like the ones you gave for the other two) and it can be added as a fourth full project card.
6. **Smart Home Automation & RFID Access Control** — these two are built as solid **project overviews** from the component/feature lists you provided, not from full reports (unlike the Fiber Tester, which has a full case study from your PFE report). Send the actual reports if you'd like the same depth of detail for these two.
7. **Canonical/OG URL** — `index.html` currently uses a placeholder URL (`https://ghaithghrairi.github.io/portfolio/`). Update the `<link rel="canonical">` and `og:url` tags once you know your real GitHub Pages URL.

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`).
2. Push the contents of this `Portfolio/` folder to the repository root:
   ```bash
   cd Portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**, set **Source** to `main` branch / `root`, and save.
4. Your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.
5. Update the canonical/OG URL tags in `index.html` (see above) to match.

No build tools, bundlers, or `npm install` required — it's static HTML/CSS/JS.

---

## 📄 License

© Ghaith Ghrairi. Personal portfolio — feel free to reference the structure, but please don't reuse the personal content (name, project write-ups, CV data) as your own.
