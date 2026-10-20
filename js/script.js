/* ==========================================================================
   Nagesh Jayache, portfolio script
   --------------------------------------------------------------------------
   What this file does
   1. Footer year        keeps the © year current
   2. Theme toggle       light / dark button, remembered with localStorage
   3. Scroll reveal      content fades up when it enters the screen
   4. Active section     highlights the side dot and updates the I / VI counter
   5. Progress line      thin gold line at the top showing how far you scrolled
   ========================================================================== */

'use strict';

/* 1. FOOTER YEAR ---------------------------------------------------------- */
document.getElementById('yr').textContent = new Date().getFullYear();


/* 2. THEME TOGGLE --------------------------------------------------------- */
const root = document.documentElement;          // the <html> element
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  // Work out the current theme: either the one chosen earlier, or the device default
  const current =
    root.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);        // CSS reacts to [data-theme="..."]

  try { localStorage.setItem('theme', next); }  // remember for next visit
  catch (e) { /* storage can be blocked in private mode; that's fine */ }
});


/* 3. SCROLL REVEAL -------------------------------------------------------- */
const sections = document.querySelectorAll('.sc');
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

// An IntersectionObserver calls our function whenever watched elements enter/leave the screen
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');         // CSS turns .rv into a visible state
      revealObserver.unobserve(entry.target);   // only animate once
    }
  });
}, { threshold: 0.12 });                        // 12% visible counts as "entered"

sections.forEach((section) => {
  const items = section.querySelectorAll(
    '.lab, .big, .facts, .sk, .row, .pj, .mail, .ln, .sub, .cue, h1, .fine'
  );
  items.forEach((el, i) => {
    el.classList.add('rv');                           // start hidden (see .js .rv in CSS)
    el.style.setProperty('--d', (i * 0.1) + 's');     // stagger: each item 0.1s later
    revealObserver.observe(el);
  });
});


/* 4. ACTIVE SECTION: side dots + counter ---------------------------------- */
const dots = document.querySelectorAll('.dots a');
const counter = document.getElementById('cnt');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const index = [...sections].indexOf(entry.target);
    dots.forEach((dot, j) => dot.setAttribute('aria-current', j === index ? 'true' : 'false'));
    counter.textContent = ROMAN[index] + ' / VI';
  });
}, { threshold: 0.5 });                         // section is "current" when half visible

sections.forEach((section) => sectionObserver.observe(section));


/* 5. PROGRESS LINE -------------------------------------------------------- */
const progress = document.getElementById('prog');

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const percent = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
  progress.style.width = percent + '%';
}

addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
