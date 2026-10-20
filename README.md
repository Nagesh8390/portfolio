# Nagesh Jayache, Portfolio

A one-page portfolio built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Folder structure

```
nagesh-portfolio/
├── index.html        ← the content (what the page says)
├── css/
│   └── style.css     ← the design (how it looks)
├── js/
│   └── script.js     ← the behaviour (what it does)
├── assets/
│   └── stars-*.svg   ← star patterns used as the background
└── README.md
```

## Run it on your computer

- Quickest: double-click `index.html`.
- Better: in VS Code install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**. The page refreshes every time you save.

## Host it for free

**Netlify (you already use it)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `nagesh-portfolio` folder onto the page.
3. You get a live link in seconds. Rename it in Site settings, for example `nagesh-jayache.netlify.app`.

**GitHub Pages**
1. Create a repository (for example `portfolio`) and upload these files.
2. Settings → Pages → Branch: `main` → Save.
3. Your site appears at `https://nagesh8390.github.io/portfolio/`.

## Change the content

| I want to change… | Open this file | Look for |
|---|---|---|
| Text, projects, links, email | `index.html` | the section with the matching comment, such as `<!-- ===== V. Projects ===== -->` |
| Colours, fonts | `css/style.css` | `1. DESIGN TOKENS` at the top (the `--accent`, `--bg`, `--ink` variables) |
| Animation speed, behaviour | `js/script.js` | the numbered sections 1 to 5 |

To add a project, copy one `<div class="pj">…</div>` block in `index.html` and edit the text.

## Skills used here, and where to revise them

| Skill | Where to see it |
|---|---|
| Semantic HTML (`main`, `nav`, `section`, headings, `aria-label`) | `index.html` |
| Linking CSS and JS files, `defer`, meta tags, Open Graph | `<head>` of `index.html` |
| CSS custom properties (variables) | `style.css` → design tokens |
| Dark and light themes (`prefers-color-scheme`, `data-theme`) | `style.css` top, `script.js` section 2 |
| Flexbox and Grid layout | `.sc`, `.row`, `.sk`, `.pj .d` in `style.css` |
| Responsive design with media queries | every `@media (max-width: …)` block |
| Fluid typography with `clamp()` | `h1`, `.big`, `.mail` |
| Scroll snapping | `html { scroll-snap-type … }` and `.sc { scroll-snap-align … }` |
| Gradient text (`background-clip: text`) | `h1 em`, `.big em` |
| Transitions and keyframe animations | `.js .rv`, `.cue`, `@keyframes` |
| Accessibility (focus rings, reduced motion, `aria-current`) | `:focus-visible`, `prefers-reduced-motion` |
| DOM selection and events | `script.js` sections 1 and 2 |
| IntersectionObserver API | `script.js` sections 3 and 4 |
| localStorage (remembering the theme) | `script.js` section 2, `<head>` script |
| Scroll events and performance (`passive: true`) | `script.js` section 5 |

## Practice ideas (to learn by changing things)

1. Change `--accent` in `style.css` to a colour you like and see the whole page update.
2. Add a third project block in `index.html`.
3. Change the stagger in `script.js` from `i * 0.1` to `i * 0.25` and watch the reveal slow down.
4. Add a seventh section (for example "Education") and add its dot to the `<nav class="dots">`. Update `ROMAN` and the `/ VI` text in `script.js`.
5. Rebuild the Skills section with a JavaScript array and a `for` loop instead of hand-written HTML.
6. Add a contact form with Netlify Forms (`<form netlify>`).
