/**
 * Client-Side Hash Router & View Orchestrator
 * Verdant Telemetry & Antenna Systems
 */

import { renderHomeView, initHomeView, getGlobeInstance, setGlobeInstance } from '../views/home.js';
import { renderProductsView } from '../views/products.js';
import { renderAboutView } from '../views/about.js';
import { renderInfrastructureView } from '../views/infrastructure.js';
import { renderCapabilitiesView } from '../views/capabilities.js';
import { renderCareersView } from '../views/careers.js';
import { renderContactView } from '../views/contact.js';
import { renderHowView } from '../views/how.js';
import { render404View } from '../views/not-found.js';
import { highlightNav, closeMobileMenu } from './navigation.js';

export function route() {
  const hash = window.location.hash || '#/';
  const cleanHash = hash.split('?')[0];
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Tear down any previous home scroll listeners when navigating away
  if (window.__homeScrollHandler) {
    window.removeEventListener('scroll', window.__homeScrollHandler);
    window.removeEventListener('resize', window.__homeScrollHandler);
    window.__homeScrollHandler = null;
  }
  if (window.__trustScrollCleanup) {
    window.__trustScrollCleanup();
    window.__trustScrollCleanup = null;
  }

  const globeInstance = getGlobeInstance();
  if (globeInstance && cleanHash !== '#/' && cleanHash !== '') {
    globeInstance.destroy();
    setGlobeInstance(null);
  }

  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  // Always restore document scrolling and clean up overlays on route change
  document.body.style.overflow = '';
  const overlay = document.getElementById('inspection-overlay');
  const dialog = document.getElementById('inspection-dialog');
  if (window.gsap) {
    if (dialog) gsap.killTweensOf(dialog);
    if (overlay) gsap.killTweensOf(overlay);
  }
  const isProductDetail = cleanHash.startsWith('#/products/') || cleanHash.startsWith('#products/');
  if (dialog && !isProductDetail) {
    dialog.classList.remove('active');
    dialog.removeAttribute('style');
    dialog.innerHTML = '';
  }
  if (overlay && !isProductDetail) {
    overlay.classList.remove('active');
    overlay.removeAttribute('style');
  }
  const generalModal = document.getElementById('general-enquiry-modal');
  if (generalModal) generalModal.style.display = 'none';

  // Active navigation highlight reset
  document.querySelectorAll('#desktop-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  let pageTitle = 'Verdant Telemetry & Antenna Systems';

  const isProductsRoute = cleanHash === '#/products' || cleanHash === '#products' ||
                          cleanHash.startsWith('#/products/') || cleanHash.startsWith('#products/');

  if (cleanHash === '#/' || cleanHash === '') {
    mainContent.innerHTML = renderHomeView();
    pageTitle = 'Verdant Telemetry & Antenna Systems | Aerospace & Defence Antennas';
    initHomeView();
  } else if (isProductsRoute) {
    let detailId = null;
    if (cleanHash.startsWith('#/products/')) {
      detailId = cleanHash.replace('#/products/', '');
    } else if (cleanHash.startsWith('#products/')) {
      detailId = cleanHash.replace('#products/', '');
    }
    mainContent.innerHTML = renderProductsView(detailId);
    pageTitle = 'Products & Radomes | Verdant Telemetry';
    highlightNav('products');
    if (detailId) {
      setTimeout(() => {
        const trigger = document.querySelector(`[data-product-id="${detailId}"]`);
        if (window.inspectProduct) {
          window.inspectProduct(detailId, trigger);
        }
      }, 60);
    }
  } else if (cleanHash === '#/about' || cleanHash === '#about') {
    mainContent.innerHTML = renderAboutView();
    pageTitle = 'About Us | Kerala to the World | Verdant Telemetry';
    highlightNav('about');
  } else if (cleanHash === '#/infrastructure') {
    mainContent.innerHTML = renderInfrastructureView();
    pageTitle = 'Infrastructure & Facilities | Verdant Telemetry';
    const capBtn = document.getElementById('capabilities-btn');
    if (capBtn) capBtn.classList.add('active');
  } else if (cleanHash === '#/capabilities') {
    mainContent.innerHTML = renderCapabilitiesView('overview');
    pageTitle = 'Capabilities | Verdant Telemetry';
    const capBtn = document.getElementById('capabilities-btn');
    if (capBtn) capBtn.classList.add('active');
  } else if (cleanHash.startsWith('#/capabilities/')) {
    const sub = cleanHash.replace('#/capabilities/', '');
    mainContent.innerHTML = renderCapabilitiesView(sub);
    pageTitle = `Capabilities · ${sub.charAt(0).toUpperCase() + sub.slice(1)} | Verdant Telemetry`;
    const capBtn = document.getElementById('capabilities-btn');
    if (capBtn) capBtn.classList.add('active');
  } else if (cleanHash === '#/careers') {
    mainContent.innerHTML = renderCareersView();
    pageTitle = 'Careers in Aerospace | Verdant Telemetry';
  } else if (cleanHash === '#/contact') {
    mainContent.innerHTML = renderContactView();
    pageTitle = 'Contact Engineering | Verdant Telemetry';
    highlightNav('contact');
  } else if (cleanHash === '#how' || cleanHash === '#/how') {
    mainContent.innerHTML = renderHowView();
    pageTitle = 'How We Build | Engineering Process | Verdant Telemetry';
  } else {
    mainContent.innerHTML = render404View();
    pageTitle = 'Page Not Found | Verdant Telemetry';
  }

  // Update title & reset scroll
  document.title = pageTitle;
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Move accessibility focus to <h1>
  const h1 = mainContent.querySelector('h1');
  if (h1) {
    h1.setAttribute('tabindex', '-1');
    h1.focus({ preventScroll: true });
  }

  // Close mobile drawer if open
  closeMobileMenu();
}
