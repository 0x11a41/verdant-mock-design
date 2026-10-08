/**
 * Products Catalog View & Control Handlers
 * Verdant Telemetry & Antenna Systems
 */

import { PRODUCTS } from '../data/products.js';
import { safeImg } from '../data/assets.js';

export let productFilterState = {
  search: '',
  apps: [],
  types: [],
  sortBy: 'default',
  perPage: 15,
  page: 1
};

export function renderProductsView(detailProductId = null) {
  const applications = ['Navigation', 'Communication', 'EW', 'Identification', 'Datalink & Telemetry'];
  const types = ['Aerodynamic Blade', 'Omni-Directional', 'Conformal / Microstrip Patch', 'Supersonic Combat Blade', 'Dual Connector Multi-Band Blade', 'Ruggedised Blade'];

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    if (productFilterState.search) {
      const q = productFilterState.search.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.code.toLowerCase().includes(q) ||
                    p.application.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (productFilterState.apps.length > 0 && !productFilterState.apps.includes(p.application)) {
      return false;
    }
    if (productFilterState.types.length > 0 && !productFilterState.types.includes(p.type)) {
      return false;
    }
    return true;
  });

  // Sort
  if (productFilterState.sortBy === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (productFilterState.sortBy === 'name-desc') {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  const totalResults = filtered.length;
  const totalPages = Math.ceil(totalResults / productFilterState.perPage) || 1;
  const startIdx = (productFilterState.page - 1) * productFilterState.perPage;
  const paginated = filtered.slice(startIdx, startIdx + productFilterState.perPage);

  // Deep-link product modal if requested
  let activeModalProduct = null;
  if (detailProductId) {
    activeModalProduct = PRODUCTS.find(p => p.id === detailProductId || p.code.toLowerCase().replace(/\s+/g, '-') === detailProductId);
  }

  return `
  <section style="padding: 120px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      <!-- Products Header -->
      <div style="border-bottom: 1px solid var(--border); padding-bottom: 2.5rem; margin-bottom: 2.5rem; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1.5rem;">
        <div style="max-width: 720px;">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
            PRODUCT CATALOGUE
          </div>
          <h1 style="font-size: clamp(2.25rem, 4vw, 3.25rem); font-weight: 700; color: var(--text); margin-bottom: 0.75rem;">
            Antennas &amp; Radomes
          </h1>
          <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6;">
            RF and composite expertise for tailored antennas and radomes across low-to-medium volumes. Qualified for airborne, naval, and ground tactical platforms.
          </p>
        </div>
        <button onclick="window.openEnquiryModal('General Product Catalogue')" class="btn-primary">
          Make an enquiry
        </button>
      </div>

      <!-- Controls Bar: Search, Sort, Per Page -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1; max-width: 420px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 0.4rem 0.85rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" id="prod-search-input" value="${productFilterState.search}" placeholder="Search antenna code, band, or application..." oninput="window.handleProductSearch(this.value)" style="background: none; border: none; color: var(--text); outline: none; width: 100%; font-size: 0.875rem;" />
          ${productFilterState.search ? `<button onclick="window.handleProductSearch(''); document.getElementById('prod-search-input').value='';" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.8rem;">&times;</button>` : ''}
        </div>

        <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.8125rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <label for="sort-select" style="color: var(--text-muted);">Sort:</label>
            <select id="sort-select" onchange="window.handleProductSort(this.value)" style="background: var(--surface); border: 1px solid var(--border); color: var(--text); border-radius: 6px; padding: 0.4rem 0.6rem; font-size: 0.8125rem; outline: none;">
              <option value="default" ${productFilterState.sortBy === 'default' ? 'selected' : ''}>Default</option>
              <option value="name-asc" ${productFilterState.sortBy === 'name-asc' ? 'selected' : ''}>Name (A–Z)</option>
              <option value="name-desc" ${productFilterState.sortBy === 'name-desc' ? 'selected' : ''}>Name (Z–A)</option>
            </select>
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <label for="per-page-select" style="color: var(--text-muted);">Per page:</label>
            <select id="per-page-select" onchange="window.handleProductPerPage(this.value)" style="background: var(--surface); border: 1px solid var(--border); color: var(--text); border-radius: 6px; padding: 0.4rem 0.6rem; font-size: 0.8125rem; outline: none;">
              <option value="15" ${productFilterState.perPage === 15 ? 'selected' : ''}>15</option>
              <option value="30" ${productFilterState.perPage === 30 ? 'selected' : ''}>30</option>
              <option value="60" ${productFilterState.perPage === 60 ? 'selected' : ''}>60</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Active Filter Chips & Result Counter -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 2rem;" aria-live="polite">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8125rem; font-family: var(--font-mono); color: var(--text-muted);">
            Showing <strong style="color: var(--text);">${paginated.length}</strong> of <strong style="color: var(--text);">${totalResults}</strong> products
          </span>
          ${(productFilterState.apps.length > 0 || productFilterState.types.length > 0 || productFilterState.search) ? `
            <button onclick="window.clearAllProductFilters()" class="btn-secondary" style="padding: 0.2rem 0.6rem; font-size: 0.75rem; min-height: 28px; margin-left: 0.5rem;">
              Clear all filters &times;
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Main Layout: Left Filter Rail + Product Grid -->
      <div class="products-catalog-layout">
        <!-- Left Filter Rail -->
        <aside class="products-filter-aside" style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <h3 style="font-size: 0.875rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--text);">Filters</h3>
            ${(productFilterState.apps.length || productFilterState.types.length) ? `
              <button onclick="window.clearAllProductFilters()" style="background:none; border:none; color:var(--accent); font-size:0.75rem; cursor:pointer;">Reset</button>
            ` : ''}
          </div>

          <!-- Application Filter -->
          <div style="margin-bottom: 1.75rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--accent); margin-bottom: 0.75rem; text-transform: uppercase;">
              APPLICATION
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${applications.map(app => {
                const count = PRODUCTS.filter(p => p.application === app).length;
                const isChecked = productFilterState.apps.includes(app);
                return `
                  <label style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8125rem; color: ${isChecked ? 'var(--text)' : 'var(--text-muted)'}; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="window.toggleProductAppFilter('${app}')" style="accent-color: var(--accent);" />
                      <span>${app}</span>
                    </div>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">${count}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Type Filter -->
          <div>
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--accent); margin-bottom: 0.75rem; text-transform: uppercase;">
              ANTENNA TYPE
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${types.map(t => {
                const count = PRODUCTS.filter(p => p.type === t).length;
                const isChecked = productFilterState.types.includes(t);
                return `
                  <label style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8125rem; color: ${isChecked ? 'var(--text)' : 'var(--text-muted)'}; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="window.toggleProductTypeFilter('${t}')" style="accent-color: var(--accent);" />
                      <span style="max-width: 130px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${t}</span>
                    </div>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">${count}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </aside>

        <!-- Product Cards Grid -->
        <div>
          ${paginated.length === 0 ? `
            <div class="card" style="padding: 4rem 2rem; text-align: center;">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="margin: 0 auto 1rem; color: var(--text-subtle);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <h3 style="font-size: 1.25rem; color: var(--text); margin-bottom: 0.5rem;">No antennas matched your filters</h3>
              <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem;">Try resetting your filters or search terms.</p>
              <button onclick="window.clearAllProductFilters()" class="btn-primary">Clear all filters</button>
            </div>
          ` : `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1.5rem;">
              ${paginated.map(p => `
                <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column;">
                  <div style="height: 190px; width: 100%; border-radius: 8px; overflow: hidden; background: #05090D; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: center;">
                    ${safeImg(p.image, p.fallbackType, p.code, p.name, '', 'width: 100%; height: 100%; object-fit: contain; padding: 0.5rem;')}
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                    <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); font-weight: 600;">${p.code}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${p.application}</span>
                  </div>
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem; line-height: 1.3;">${p.name}</h3>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle); margin-bottom: 1.25rem;">${p.freqBand}</div>
                  <div style="display: flex; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--border); margin-top: auto;">
                    <button onclick="window.openProductDrawer('${p.id}')" class="btn-secondary" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.75rem; min-height: 36px;">
                      Show details
                    </button>
                    <a href="#/contact?enquiry=${encodeURIComponent(p.code)}" class="btn-primary" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.75rem; min-height: 36px;">
                      Datasheet / Enquiry
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Pagination Bar -->
            ${totalPages > 1 ? `
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 3rem;">
                <button onclick="window.setProductPage(${productFilterState.page - 1})" ${productFilterState.page <= 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} class="btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; min-height: 36px;">
                  &larr; Prev
                </button>
                <div style="display: flex; gap: 0.35rem;">
                  ${Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNo => `
                    <button onclick="window.setProductPage(${pageNo})" class="btn-secondary" style="min-height: 36px; width: 36px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-family: var(--font-mono); ${pageNo === productFilterState.page ? 'background:var(--accent); color:#05090D; font-weight:700; border-color:var(--accent);' : ''}">
                      ${pageNo}
                    </button>
                  `).join('')}
                </div>
                <button onclick="window.setProductPage(${productFilterState.page + 1})" ${productFilterState.page >= totalPages ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} class="btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; min-height: 36px;">
                  Next &rarr;
                </button>
              </div>
            ` : ''}
          `}
        </div>
      </div>
    </div>
  </section>

  <!-- Product Side Drawer / Modal (Deep-linkable) -->
  <div id="product-detail-modal" style="display: ${activeModalProduct ? 'flex' : 'none'}; position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px); z-index: 120; align-items: center; justify-content: center; padding: 1.5rem;">
    ${activeModalProduct ? renderProductModalContent(activeModalProduct) : ''}
  </div>

  <!-- General Enquiry Modal -->
  <div id="general-enquiry-modal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px); z-index: 130; align-items: center; justify-content: center; padding: 1.5rem;">
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; width: 100%; max-width: 520px; padding: 2rem; position: relative;">
      <button onclick="window.closeEnquiryModal()" style="position: absolute; top: 1.25rem; right: 1.25rem; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.25rem;">&times;</button>
      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">TECHNICAL PROCUREMENT</div>
      <h3 style="font-size: 1.35rem; color: var(--text); margin-bottom: 0.5rem;" id="enquiry-modal-title">Make an Enquiry</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Speak directly with Verdant RF &amp; radome engineering.</p>
      <form onsubmit="window.handleContactSubmit(event, 'modal-enquiry-form')" id="modal-enquiry-form">
        <input type="hidden" id="modal-product-ref" value="" />
        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          <input type="text" id="m-name" required placeholder="Full Name" style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;" />
          <input type="email" id="m-email" required placeholder="Work Email" style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;" />
          <input type="text" id="m-org" required placeholder="Organisation / Defence Agency" style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;" />
          <textarea id="m-msg" rows="3" required placeholder="Specific frequency, platform environment, qualification standards..." style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;"></textarea>
          <button type="submit" class="btn-primary" style="width: 100%; margin-top: 0.5rem;">Submit Enquiry</button>
        </div>
      </form>
    </div>
  </div>
  `;
}

export function renderProductModalContent(p) {
  return `
  <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; width: 100%; max-width: 680px; max-height: 90vh; overflow-y: auto; padding: 2.25rem; position: relative;">
    <button onclick="window.closeProductDrawer()" aria-label="Close product details" style="position: absolute; top: 1.25rem; right: 1.25rem; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.5rem; line-height: 1;">&times;</button>
    <div style="display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.5rem;">
      <span>${p.code}</span>
      <span style="color: var(--border);">·</span>
      <span>${p.application}</span>
    </div>
    <h2 style="font-size: 1.6rem; font-weight: 700; color: var(--text); margin-bottom: 1rem;">${p.name}</h2>
    
    <div style="height: 220px; width: 100%; background: #05090D; border-radius: 8px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;">
      ${safeImg(p.image, p.fallbackType, p.code, p.name, '', 'width: 100%; height: 100%; object-fit: contain; padding: 1rem;')}
    </div>

    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.75rem;">${p.description}</p>

    <h3 style="font-size: 0.875rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--text); margin-bottom: 0.75rem;">Technical Specifications</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.8125rem; margin-bottom: 2rem;">
      <tbody>
        ${Object.entries(p.specs).map(([key, val]) => `
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 0.6rem 0.5rem; color: var(--text-muted); width: 40%; font-family: var(--font-mono); font-size: 0.75rem;">${key}</td>
            <td style="padding: 0.6rem 0.5rem; color: var(--text); font-weight: 500;">${val}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div style="display: flex; gap: 1rem;">
      <button onclick="window.openEnquiryModal('${p.code}')" class="btn-primary" style="flex: 1;">
        Request Datasheet &amp; Quote
      </button>
      <button onclick="window.closeProductDrawer()" class="btn-secondary">
        Close
      </button>
    </div>
  </div>
  `;
}

export function handleProductSearch(val) {
  productFilterState.search = val;
  productFilterState.page = 1;
  refreshProductsView();
}

export function handleProductSort(val) {
  productFilterState.sortBy = val;
  refreshProductsView();
}

export function handleProductPerPage(val) {
  productFilterState.perPage = parseInt(val, 10);
  productFilterState.page = 1;
  refreshProductsView();
}

export function toggleProductAppFilter(app) {
  const idx = productFilterState.apps.indexOf(app);
  if (idx > -1) productFilterState.apps.splice(idx, 1);
  else productFilterState.apps.push(app);
  productFilterState.page = 1;
  refreshProductsView();
}

export function toggleProductTypeFilter(type) {
  const idx = productFilterState.types.indexOf(type);
  if (idx > -1) productFilterState.types.splice(idx, 1);
  else productFilterState.types.push(type);
  productFilterState.page = 1;
  refreshProductsView();
}

export function clearAllProductFilters() {
  productFilterState.search = '';
  productFilterState.apps = [];
  productFilterState.types = [];
  productFilterState.page = 1;
  refreshProductsView();
}

export function setProductPage(p) {
  productFilterState.page = p;
  refreshProductsView();
  window.scrollTo({ top: 320, behavior: 'smooth' });
}

export function refreshProductsView() {
  const mainContent = document.getElementById('main-content');
  if (mainContent && window.location.hash.startsWith('#/products')) {
    mainContent.innerHTML = renderProductsView();
  }
}

export function openProductDrawer(productId) {
  window.location.hash = `#/products/${productId}`;
}

export function closeProductDrawer() {
  window.location.hash = '#/products';
}

export function openEnquiryModal(productRef = '') {
  const modal = document.getElementById('general-enquiry-modal');
  const title = document.getElementById('enquiry-modal-title');
  const inputRef = document.getElementById('modal-product-ref');
  if (modal) {
    if (title) title.innerText = productRef ? `Enquiry: ${productRef}` : 'Make an Enquiry';
    if (inputRef) inputRef.value = productRef;
    modal.style.display = 'flex';
  }
}

export function closeEnquiryModal() {
  const modal = document.getElementById('general-enquiry-modal');
  if (modal) modal.style.display = 'none';
}
