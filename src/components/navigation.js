/**
 * Top Navigation & Mobile Drawer Component
 * Verdant Telemetry & Antenna Systems
 */

export function initNavigation() {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (currentScrollY > 200 && currentScrollY > lastScrollY) {
      navbar?.classList.add('nav-hidden');
    } else {
      navbar?.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileClose = document.getElementById('mobile-menu-close');
  if (mobileBtn) mobileBtn.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
}

export function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

export function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.style.display = 'none';
    document.body.style.overflow = '';
  }
}

export function highlightNav(routeKey) {
  const link = document.querySelector(`#desktop-nav [data-route="${routeKey}"]`);
  if (link) link.classList.add('active');
}
