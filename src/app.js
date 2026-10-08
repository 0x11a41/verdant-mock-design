/**
 * Verdant Telemetry & Antenna Systems Pvt. Ltd.
 * Main Application Entry Point & Modular Bootstrap
 */

// Import Styles
import './styles/main.css';

// Import Navigation & Global Components
import { initNavigation, openMobileMenu, closeMobileMenu } from './components/navigation.js';
import { initCommandPalette } from './components/command-palette.js';
import { openEnquiryModal, closeEnquiryModal, showToast } from './components/modals.js';
import { route } from './components/router.js';

// Import Product Handlers
import {
  handleProductSearch,
  handleProductSort,
  handleProductPerPage,
  toggleProductAppFilter,
  toggleProductTypeFilter,
  clearAllProductFilters,
  setProductPage,
  openProductDrawer,
  closeProductDrawer
} from './views/products.js';

// Import About Handlers
import { setTimelineFilter } from './views/about.js';

// Import Contact Handlers
import {
  handleContactSubmit,
  resetContactForm,
  copyContactEmail
} from './views/contact.js';

// Expose handlers globally on window for inline HTML template compatibility
window.openProductDrawer = openProductDrawer;
window.closeProductDrawer = closeProductDrawer;
window.openEnquiryModal = openEnquiryModal;
window.closeEnquiryModal = closeEnquiryModal;
window.handleProductSearch = handleProductSearch;
window.handleProductSort = handleProductSort;
window.handleProductPerPage = handleProductPerPage;
window.toggleProductAppFilter = toggleProductAppFilter;
window.toggleProductTypeFilter = toggleProductTypeFilter;
window.clearAllProductFilters = clearAllProductFilters;
window.setProductPage = setProductPage;
window.setTimelineFilter = setTimelineFilter;
window.handleContactSubmit = handleContactSubmit;
window.resetContactForm = resetContactForm;
window.copyContactEmail = copyContactEmail;
window.showToast = showToast;
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;

/**
 * Bootstrap Application
 */
export function bootstrap() {
  initNavigation();
  initCommandPalette();
  window.addEventListener('hashchange', route);
  route();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
