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
});