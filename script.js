document.addEventListener("DOMContentLoaded", () => {
  // Footer Year
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Hero Slideshow Logic
  const slides = document.querySelectorAll(".hero__slide");
  let currentSlide = 0;
  const slideDuration = 5000;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, slideDuration);
  }

  // --- NEW: PREMIUM NAVBAR SCROLL LOGIC ---
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      // If user scrolls down more than 50px, activate the frosted glass mode
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
  // Mobile menu toggle
  const toggle = document.getElementById("navToggle");
  if (navbar && toggle) {
    const setMenu = (open) => {
      navbar.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open);
    };
    toggle.addEventListener("click", () => setMenu(!navbar.classList.contains("menu-open")));
    navbar.querySelectorAll(".nav__links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    window.addEventListener("resize", () => { if (window.innerWidth > 1050) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  }
  // Smooth scrolling for in-page anchor links
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const hash = link.getAttribute("href");
    if (hash.length < 2 && hash !== "#top") return;
    link.addEventListener("click", (e) => {
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      // Compact (scrolled) navbar height, so headings aren't hidden under it
      const offset = window.innerWidth <= 760 ? 70 : 58;
      const top = hash === "#top" ? 0 : target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      history.pushState(null, "", hash);
    });
  });
});