/* ============================================================
   Safe Cycle Tech — script.js
   Vanilla JS only. No frameworks, no build step, GitHub Pages ready.
   Contact is direct (call/text/email) — no form, no backend,
   no GitHub token, no Gist, no JSON files needed.
   ============================================================ */

/* ---------- Tiny helpers ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Footer year (keeps the copyright current forever) ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Mobile nav (hamburger) ---------- */
const burger = $("#navBurger");
const navLinks = $("#navLinks");

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
});

// Close the mobile menu after tapping any link in it
$$("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  })
);

/* ---------- FAQ: only one open at a time (progressive enhancement;
     the FAQ still works fine even if JS never loads) ---------- */
$$(".faq__item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      $$(".faq__item").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
