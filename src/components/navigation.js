/**
 * Top Navigation & Mobile Drawer Component
 * Verdant Telemetry & Antenna Systems
 */

let routeHandler = null;

export function setRouteHandler(fn) {
  routeHandler = fn;
}

export function initNavigation(customRouteHandler = null) {
  if (customRouteHandler) {
    routeHandler = customRouteHandler;
  }

  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY || window.pageYOffset || 0;

  const updateNavbarScroll = () => {
    const currentScrollY = window.scrollY || window.pageYOffset || 0;

    if (currentScrollY > 20) {
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
  };

  // Immediate evaluation on load
  updateNavbarScroll();
  window.addEventListener('scroll', updateNavbarScroll, { passive: true });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileClose = document.getElementById('mobile-menu-close');
  if (mobileBtn) mobileBtn.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

  // Close mobile menu and guarantee immediate routing on internal link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    // Handle skip-link or pure in-page anchor jumps
    if (href === '#main-content') return;
    if (href.startsWith('#open-') || href.startsWith('#life-')) {
      closeMobileMenu();
      return;
    }

    closeMobileMenu();

    if (window.location.hash !== href) {
      window.location.hash = href;
    }

    // Call route directly and reliably
    if (routeHandler) {
      routeHandler();
    } else {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  });
}

export function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  if (menu) {
    menu.classList.add('active');
    menu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
}

export function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  if (menu) {
    menu.classList.remove('active');
    menu.style.display = 'none';
    document.body.style.overflow = '';
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
}

export function highlightNav(routeKey) {
  const link = document.querySelector(`#desktop-nav [data-route="${routeKey}"]`);
  if (link) link.classList.add('active');
}
