/**
 * Products Catalog View & Precision Hardware Inspection Handlers
 * Verdant Telemetry & Antenna Systems Pvt. Ltd.
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

// Global state for active inspection modal
let currentInspectedProduct = null;
let currentInspectionImageIdx = 0;
let currentInspectionTab = 'rf';
let lastTriggerRect = null;

export function renderProductsView(detailProductId = null) {
  const applications = ['Communication', 'Navigation', 'Datalink & Telemetry', 'EW & Surveillance'];
  const types = [
    'Aerodynamic Blade',
    'Top-Loaded Aerodynamic Blade',
    'Conformal / Microstrip Patch',
    'Supersonic Combat Blade',
    'Dual Connector Multi-Band Blade',
    'Omni-Directional',
    'Ruggedised Blade'
  ];

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    if (productFilterState.search) {
      const q = productFilterState.search.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.code.toLowerCase().includes(q) ||
                    p.application.toLowerCase().includes(q) ||
                    p.platformDomain.toLowerCase().includes(q) ||
                    p.freqBand.toLowerCase().includes(q) ||
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
  } else if (productFilterState.sortBy === 'code-asc') {
    filtered.sort((a, b) => a.code.localeCompare(b.code));
  }

  const totalResults = filtered.length;
  const totalPages = Math.ceil(totalResults / productFilterState.perPage) || 1;
  const startIdx = (productFilterState.page - 1) * productFilterState.perPage;
  const paginated = filtered.slice(startIdx, startIdx + productFilterState.perPage);

  return `
  <section style="padding: 110px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      <!-- Products Header -->
      <div style="border-bottom: 1px solid var(--border); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
        <div style="max-width: 820px;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.5rem; font-weight: 600;">
            DEFENCE &amp; AEROSPACE RF HARDWARE
          </div>
          <h1 style="font-size: clamp(2.25rem, 4vw, 3.25rem); font-weight: 700; color: var(--text); margin-bottom: 0; letter-spacing: -0.03em;">
            Antennas &amp; Radomes Catalogue
          </h1>
        </div>
      </div>

      <!-- System Filters Toolbar (Integrated into page flow, not an isolated island) -->
      <div class="products-filter-toolbar">
        <!-- Top Row: Search Input + Sort & Per-Page Controls -->
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 260px; max-width: 480px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 0.5rem 0.85rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" id="prod-search-input" value="${productFilterState.search}" placeholder="Search model code, band, or platform..." oninput="window.handleProductSearch(this.value)" style="background: none; border: none; color: var(--text); outline: none; width: 100%; font-size: 0.875rem;" />
            ${productFilterState.search ? `<button onclick="window.handleProductSearch(''); document.getElementById('prod-search-input').value='';" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.9rem;">&times;</button>` : ''}
          </div>

          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; font-size: 0.8125rem;">
            <!-- Antenna Structural Form Filter Dropdown -->
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <label for="type-select" style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.75rem;">TYPE:</label>
              <select id="type-select" onchange="window.handleProductTypeSelect(this.value)" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); color: var(--text); border-radius: 6px; padding: 0.45rem 0.75rem; font-size: 0.8125rem; outline: none;">
                <option value="">All Antenna Types (${PRODUCTS.length})</option>
                ${types.map(t => {
                  const count = PRODUCTS.filter(p => p.type === t).length;
                  const isSelected = productFilterState.types.includes(t);
                  return `<option value="${t}" ${isSelected ? 'selected' : ''}>${t} (${count})</option>`;
                }).join('')}
              </select>
            </div>

            <!-- Sort Select -->
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <label for="sort-select" style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.75rem;">SORT:</label>
              <select id="sort-select" onchange="window.handleProductSort(this.value)" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); color: var(--text); border-radius: 6px; padding: 0.45rem 0.75rem; font-size: 0.8125rem; outline: none; font-family: var(--font-mono);">
                <option value="default" ${productFilterState.sortBy === 'default' ? 'selected' : ''}>Standard Order</option>
                <option value="code-asc" ${productFilterState.sortBy === 'code-asc' ? 'selected' : ''}>Part Code (A–Z)</option>
                <option value="name-asc" ${productFilterState.sortBy === 'name-asc' ? 'selected' : ''}>Model Name (A–Z)</option>
              </select>
            </div>

            ${(productFilterState.apps.length > 0 || productFilterState.types.length > 0 || productFilterState.search) ? `
              <button onclick="window.clearAllProductFilters()" class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; min-height: 32px;">
                Reset filters &times;
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Bottom Row: Mission Domain Filter Pills -->
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
          <div class="filter-domain-chips">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; margin-right: 0.35rem;">DOMAIN:</span>
            <button class="filter-chip-btn ${productFilterState.apps.length === 0 ? 'active' : ''}" onclick="window.clearProductAppFilters()">
              All (${PRODUCTS.length})
            </button>
            ${applications.map(app => {
              const count = PRODUCTS.filter(p => p.application === app).length;
              const isChecked = productFilterState.apps.includes(app);
              return `
                <button class="filter-chip-btn ${isChecked ? 'active' : ''}" onclick="window.toggleProductAppFilter('${app}')">
                  ${app} (${count})
                </button>
              `;
            }).join('')}
          </div>

          <div style="font-size: 0.8125rem; font-family: var(--font-mono); color: var(--text-muted);">
            Showing <strong style="color: var(--accent);">${paginated.length}</strong> of <strong style="color: var(--text);">${totalResults}</strong> systems
          </div>
        </div>
      </div>

      <!-- Product Cards Grid: Integrated Catalogue Layout with 1:1 Images at Top -->
      <div>
        ${paginated.length === 0 ? `
          <div class="card" style="padding: 4rem 2rem; text-align: center; border-radius: 8px;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="margin: 0 auto 1rem; color: var(--text-subtle);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <h3 style="font-size: 1.25rem; color: var(--text); margin-bottom: 0.5rem;">No hardware units match your parameters</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem;">Reset filter specifications to inspect the full inventory.</p>
            <button onclick="window.clearAllProductFilters()" class="btn-primary">Reset filters</button>
          </div>
        ` : `
          <div class="products-catalogue-grid">
            ${paginated.map(p => `
              <div class="hardware-card" data-product-id="${p.id}" onclick="window.inspectProduct('${p.id}', this)" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); window.inspectProduct('${p.id}', this);}">
                <!-- 1:1 Square Hardware Image at the Top of the Card with Corner Badges -->
                <div class="hw-stage-square">
                  <!-- Corner Overlays -->
                  <div class="hw-corner-tag-tl">${p.code}</div>
                  <div class="hw-corner-tag-tr">${p.platformDomain.split('·')[0].trim()}</div>

                  <img src="${p.primaryImage}" alt="${p.name}" class="hw-stage-square-img" loading="lazy" onerror="this.onerror=null; this.src='${p.images[0] || '/assets/antina.webp'}';" />
                </div>

                <!-- Card Body Below Image -->
                <div class="hw-card-body">
                  <!-- Product Name -->
                  <h3 class="hw-card-name" title="${p.name}">
                    ${p.name}
                  </h3>

                  <!-- Mounting Location -->
                  <div class="hw-card-location" title="${p.mountingLocation}">
                    <span style="color: var(--accent); font-family: var(--font-mono); font-size: 0.65rem; font-weight: 700;">LOC:</span>
                    <span>${p.mountingLocation}</span>
                  </div>

                  <!-- Core Engineering Specs Strip -->
                  <div class="hw-specs-strip">
                    <div class="hw-spec-row">
                      <span class="hw-spec-key">FREQUENCY</span>
                      <span class="hw-spec-val" title="${p.freqBand}">${p.freqBand.split('(')[0].trim()}</span>
                    </div>
                    <div class="hw-spec-row">
                      <span class="hw-spec-key">VSWR / POL</span>
                      <span class="hw-spec-val">${p.vswr.split(' ')[0]} ${p.vswr.split(' ')[1] || ''} · ${p.polarisation.split(' ')[0]}</span>
                    </div>
                  </div>

                  <!-- Action Cue -->
                  <div class="hw-inspect-bar">
                    <span style="font-weight: 500;">Inspect Specifications</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
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
  </section>
  `;
}

/**
 * Render the clean, calm engineering inspection dialog
 */
export function renderInspectionDialogContent(p, activeImgIdx = 0) {
  const images = p.images && p.images.length > 0 ? p.images : [p.primaryImage || '/assets/antina.webp'];
  const labels = p.imageLabels || images.map((_, i) => `Angle 0${i + 1}`);
  const activeImg = images[activeImgIdx] || images[0];
  const activeLabel = labels[activeImgIdx] || `Angle 0${activeImgIdx + 1}`;

  // Filter out any unique non-duplicate RF parameters
  const standardRfKeys = ['frequency band', 'frequency range', 'vswr', 'polarization', 'polarisation', 'peak gain', 'gain', 'power handling', 'nominal impedance', 'impedance', 'rf connector', 'radiation pattern'];
  const extraRf = p.fullSpecs?.rf
    ? Object.entries(p.fullSpecs.rf).filter(([k]) => !standardRfKeys.includes(k.toLowerCase()))
    : [];

  // Filter out any unique non-duplicate Mechanical parameters
  const standardMechKeys = ['dimensions', 'height', 'baseplate length', 'baseplate width', 'weight', 'total weight', 'radome material', 'finish'];
  const extraMech = p.fullSpecs?.mechanical
    ? Object.entries(p.fullSpecs.mechanical).filter(([k]) => !standardMechKeys.includes(k.toLowerCase()))
    : [];

  return `
  <!-- Top Inspection Bar: Clean Title, Single Inquire Action & Simple X Button -->
  <div class="inspection-header">
    <div class="inspection-header-title-box">
      <h2 id="dialog-product-title" class="inspection-header-title">
        ${p.name}
      </h2>
      <div class="inspection-header-subtitle">
        ${p.code} · ${p.platformDomain} · ${p.mountingLocation}
      </div>
    </div>

    <div class="inspection-header-actions">
      <button onclick="window.openEnquiryModal('${p.code}')" class="btn-primary inspection-inquire-btn">
        Inquire
      </button>
      <button onclick="window.closeInspectionModal()" aria-label="Close" class="inspection-close-icon-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  </div>

  <!-- Inspection Body: Split View (One Side ONLY Images, Other Side ALL Information Vertically Scrollable) -->
  <div class="inspection-body">
    <!-- Left Column: DEDICATED SOLELY TO IMAGERY -->
    <div class="gallery-stage-container">
      <div class="gallery-stage-wrapper">
        <!-- Angle Header Tag -->
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <span id="gallery-active-label" style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">
            ${activeLabel}
          </span>
          <span id="gallery-active-counter" style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">
            View ${activeImgIdx + 1} of ${images.length}
          </span>
        </div>

        <!-- High-Resolution Calibrated Stage -->
        <div class="gallery-calibrated-stage" id="gallery-lens-viewport" onmousemove="window.handleImageZoom(event)" onmouseleave="window.resetImageZoom()">
          <div class="stage-reticle-tl">┌ 0${activeImgIdx + 1}</div>
          <div class="stage-reticle-tr">┐ RF-CAL</div>
          <div class="stage-reticle-bl">└ 1:1</div>
          <div class="stage-reticle-br">┘ AS9100</div>
          <img id="gallery-zoom-img" src="${activeImg}" alt="${p.name} - ${activeLabel}" class="gallery-calibrated-img" />
        </div>

        <!-- Angle Thumbnails Selector Row -->
        <div class="gallery-thumbs-row" role="tablist" aria-label="Product view angles">
          ${images.map((img, idx) => `
            <button class="gallery-thumb-btn ${idx === activeImgIdx ? 'active' : ''}" onclick="window.switchInspectionView(${idx})" title="${labels[idx] || `Angle ${idx + 1}`}">
              <img src="${img}" alt="${labels[idx] || `Angle ${idx + 1}`}" class="gallery-thumb-img" />
              <span class="gallery-thumb-num">0${idx + 1}</span>
            </button>
          `).join('')}
        </div>

        <!-- Interactive Lens Zoom Cue -->
        <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-subtle); display: flex; align-items: center; gap: 0.4rem;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span>Hover over hardware surface to zoom 1.5×</span>
        </div>
      </div>
    </div>

    <!-- Right Column: ALL INFORMATION, VERTICALLY SCROLLABLE, CLEAR & ORGANIZED -->
    <div class="specs-console-container">
      <!-- Section 1: Overview & Installation Context -->
      <div class="info-section-block">
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); background: rgba(3,188,159,0.08); border: 1px solid rgba(3,188,159,0.25); border-radius: 4px; padding: 0.25rem 0.65rem; font-weight: 600;">
            MODEL ${p.code}
          </span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #EAF2F0; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 4px; padding: 0.25rem 0.65rem;">
            ${p.category || p.type}
          </span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #8FA3A0; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 4px; padding: 0.25rem 0.65rem;">
            ${p.application}
          </span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #03BC9F; background: rgba(3,188,159,0.06); border: 1px solid rgba(3,188,159,0.2); border-radius: 4px; padding: 0.25rem 0.65rem;">
            AS9100 Rev D · CEMILAC Approved
          </span>
        </div>

        <h3 class="info-section-title">
          Product Overview
        </h3>
        <p class="info-section-text">
          ${p.description}
        </p>

        <!-- Summary Metadata Strip -->
        <div class="specs-summary-strip">
          <div class="specs-summary-cell">
            <span class="specs-summary-label">Operational Domain</span>
            <span class="specs-summary-value" style="color: var(--accent);">${p.platformDomain}</span>
          </div>
          <div class="specs-summary-cell">
            <span class="specs-summary-label">Mounting Location</span>
            <span class="specs-summary-value">${p.mountingLocation}</span>
          </div>
          <div class="specs-summary-cell">
            <span class="specs-summary-label">Operating Band</span>
            <span class="specs-summary-value">${p.freqBand.split('(')[0].trim()}</span>
          </div>
        </div>
      </div>

      <!-- Section 2: Electrical & RF Specifications Table -->
      <div class="info-section-block">
        <h3 class="info-section-title">
          Electrical &amp; RF Specifications
        </h3>
        <div class="spec-table-card">
          <table class="spec-data-table">
            <tbody>
              <tr>
                <td class="spec-cell-label">Frequency Band</td>
                <td class="spec-cell-value">${p.freqBand}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">VSWR</td>
                <td class="spec-cell-value">${p.vswr}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Polarization</td>
                <td class="spec-cell-value">${p.polarisation}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Peak Gain</td>
                <td class="spec-cell-value">${p.gain}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Power Handling</td>
                <td class="spec-cell-value">${p.powerRating || p.power || '50 W CW continuous'}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Nominal Impedance</td>
                <td class="spec-cell-value">${p.impedance || '50 Ω'}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">RF Connector</td>
                <td class="spec-cell-value">${p.connector}</td>
              </tr>
              ${extraRf.map(([key, val]) => `
                <tr>
                  <td class="spec-cell-label">${key}</td>
                  <td class="spec-cell-value">${val}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Section 3: Mechanical & Environmental Specifications Table -->
      <div class="info-section-block">
        <h3 class="info-section-title">
          Mechanical &amp; Environmental Specifications
        </h3>
        <div class="spec-table-card">
          <table class="spec-data-table">
            <tbody>
              <tr>
                <td class="spec-cell-label">Dimensions (H × L × W)</td>
                <td class="spec-cell-value">${p.dimensions}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Total Weight</td>
                <td class="spec-cell-value">${p.weight}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Radome Material</td>
                <td class="spec-cell-value">${p.radome || (p.fullSpecs?.mechanical?.['Radome Material']) || 'High-modulus glass-epoxy moulded composite'}</td>
              </tr>
              ${p.fullSpecs?.mechanical?.Finish ? `
                <tr>
                  <td class="spec-cell-label">Finish / Coating</td>
                  <td class="spec-cell-value">${p.fullSpecs.mechanical.Finish}</td>
                </tr>
              ` : ''}
              ${p.fullSpecs?.interfaces?.['Mounting Flange'] ? `
                <tr>
                  <td class="spec-cell-label">Mounting Interface</td>
                  <td class="spec-cell-value">${p.fullSpecs.interfaces['Mounting Flange']}</td>
                </tr>
              ` : ''}
              <tr>
                <td class="spec-cell-label">Operating Temperature</td>
                <td class="spec-cell-value">${p.fullSpecs?.environmental?.['Operating Temperature'] || '-55°C to +85°C'}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Operational Altitude</td>
                <td class="spec-cell-value">${p.fullSpecs?.environmental?.Altitude || 'Up to 70,000 ft (21,300 m)'}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Vibration &amp; Shock</td>
                <td class="spec-cell-value">${p.fullSpecs?.environmental?.['Vibration & Shock'] || 'MIL-STD-810G Method 514.6 & 516.6'}</td>
              </tr>
              <tr>
                <td class="spec-cell-label">Airworthiness Certification</td>
                <td class="spec-cell-value">CEMILAC Flight Certified · AS9100 Rev D Standard</td>
              </tr>
              ${extraMech.map(([key, val]) => `
                <tr>
                  <td class="spec-cell-label">${key}</td>
                  <td class="spec-cell-value">${val}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Section 4: Radiation Pattern & Coverage -->
      <div class="info-section-block">
        <h3 class="info-section-title">
          Radiation Pattern &amp; Coverage
        </h3>
        <div style="background: #04070A; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 1.75rem; display: flex; flex-direction: column; align-items: center; margin-top: 0.85rem;">
          <svg width="240" height="240" viewBox="0 0 280 280" style="max-width: 100%;">
            <circle cx="140" cy="140" r="120" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
            <circle cx="140" cy="140" r="90" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3 3"/>
            <circle cx="140" cy="140" r="60" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3 3"/>
            <circle cx="140" cy="140" r="30" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3 3"/>
            <line x1="20" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <line x1="140" y1="20" x2="140" y2="260" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <text x="144" y="28" fill="#5B6E6C" font-family="monospace" font-size="9">0 dB</text>
            <text x="144" y="58" fill="#5B6E6C" font-family="monospace" font-size="9">-3 dB</text>
            <text x="144" y="88" fill="#5B6E6C" font-family="monospace" font-size="9">-10 dB</text>
            <text x="144" y="118" fill="#5B6E6C" font-family="monospace" font-size="9">-20 dB</text>
            <text x="264" y="143" fill="#8FA3A0" font-family="monospace" font-size="9">90°</text>
            <text x="140" y="14" fill="#8FA3A0" font-family="monospace" font-size="9" text-anchor="middle">0°</text>
            <text x="8" y="143" fill="#8FA3A0" font-family="monospace" font-size="9">270°</text>
            <text x="140" y="274" fill="#8FA3A0" font-family="monospace" font-size="9" text-anchor="middle">180°</text>
            <path class="polar-contour-path" d="M 140 22 C 185 24, 235 65, 238 120 C 240 165, 215 210, 175 235 C 145 250, 135 250, 105 235 C 65 210, 40 165, 42 120 C 45 65, 95 24, 140 22 Z" fill="rgba(3,188,159,0.18)" stroke="var(--accent)" stroke-width="2"/>
            <g class="polar-radar-beam-container" style="transform-origin: 140px 140px;">
              <line x1="140" y1="140" x2="140" y2="22" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.65"/>
              <circle cx="140" cy="22" r="3" fill="var(--accent)"/>
            </g>
          </svg>
          <div style="margin-top: 1.25rem; width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1rem;">
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Pattern</div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #FFFFFF; font-weight: 600; margin-top: 0.2rem;">${p.polarPattern ? p.polarPattern.type.split('/')[0] : 'Omni Azimuth'}</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">3dB Beamwidth</div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #FFFFFF; font-weight: 600; margin-top: 0.2rem;">${p.polarPattern ? p.polarPattern.beamwidth : '35° Elevation'}</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase;">Peak Gain</div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--accent); font-weight: 600; margin-top: 0.2rem;">${p.polarPattern ? p.polarPattern.gainPeak : p.gain}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5: Procurement & Technical Enquiry Action -->
      <div style="padding-top: 0.5rem; margin-bottom: 2rem;">
        <button onclick="window.openEnquiryModal('${p.code}')" class="btn-primary" style="width: 100%; min-height: 48px; font-size: 0.9375rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
          <span>Request Technical Drawings &amp; ICD (${p.code})</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-subtle); text-align: center; margin-top: 0.6rem;">
          Official STEP 3D CAD envelopes &amp; environmental qualification reports available upon request.
        </div>
      </div>
    </div>
  </div>
  `;
}

/**
 * Open product inspection with fluid card-expand transition animation
 */
export function inspectProduct(productId, triggerEl = null) {
  const product = PRODUCTS.find(p => p.id === productId || p.code.toLowerCase().replace(/\s+/g, '-') === productId);
  if (!product) return;

  currentInspectedProduct = product;
  currentInspectionImageIdx = 0;
  currentInspectionTab = 'rf';

  const overlay = document.getElementById('inspection-overlay');
  const dialog = document.getElementById('inspection-dialog');
  if (!overlay || !dialog) return;

  // Calculate starting rect from the clicked card
  let originRect = null;
  if (triggerEl && typeof triggerEl.getBoundingClientRect === 'function') {
    originRect = triggerEl.getBoundingClientRect();
  } else {
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (card) originRect = card.getBoundingClientRect();
  }

  const navHeight = window.innerWidth <= 768 ? 64 : 72;

  if (!originRect || originRect.width === 0) {
    originRect = {
      top: window.innerHeight / 2 - 160,
      left: window.innerWidth / 2 - 200,
      width: 400,
      height: 320
    };
  }
  lastTriggerRect = originRect;

  // Render content into dialog
  dialog.innerHTML = renderInspectionDialogContent(product, 0);

  // Activate overlay & dialog and freeze background scrolling
  overlay.classList.add('active');
  dialog.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Update hash safely without re-triggering whole router view replacement
  if (!window.location.hash.includes(productId)) {
    history.replaceState(null, '', `#/products/${productId}`);
  }

  // Smooth expand-open transition animation from the card into true full screen
  if (window.gsap) {
    gsap.killTweensOf(dialog);
    gsap.fromTo(dialog, {
      top: originRect.top,
      left: originRect.left,
      width: originRect.width,
      height: originRect.height,
      borderRadius: '12px',
      opacity: 0.35,
      scale: 0.96,
    }, {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: '0px',
      opacity: 1,
      scale: 1,
      duration: 0.38,
      ease: 'power3.out',
      clearProps: 'transform',
      onComplete: () => {
        dialog.style.top = '0px';
        dialog.style.left = '0px';
        dialog.style.width = '100vw';
        dialog.style.height = '100%';
        dialog.style.maxHeight = '100dvh';
      }
    });

    // Stagger inner columns entrance smoothly
    const leftPane = dialog.querySelector('.gallery-stage-container');
    const rightPane = dialog.querySelector('.specs-console-container');
    const header = dialog.querySelector('.inspection-header');
    if (header) gsap.fromTo(header, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3, delay: 0.08 });
    if (leftPane) gsap.fromTo(leftPane, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.38, delay: 0.1 });
    if (rightPane) gsap.fromTo(rightPane, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.42, delay: 0.12 });
  } else {
    // Pure CSS fallback
    dialog.style.transition = 'none';
    dialog.style.top = `${originRect.top}px`;
    dialog.style.left = `${originRect.left}px`;
    dialog.style.width = `${originRect.width}px`;
    dialog.style.height = `${originRect.height}px`;
    dialog.style.borderRadius = '12px';
    dialog.style.opacity = '0.35';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dialog.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        dialog.style.top = '0px';
        dialog.style.left = '0px';
        dialog.style.width = '100vw';
        dialog.style.height = '100vh';
        dialog.style.borderRadius = '0px';
        dialog.style.opacity = '1';
      });
    });
  }
}

/**
 * Close product inspection with reverse collapsing animation back to origin card
 */
export function closeInspectionModal() {
  const overlay = document.getElementById('inspection-overlay');
  const dialog = document.getElementById('inspection-dialog');
  if (!overlay || !dialog) return;

  document.body.style.overflow = '';

  const cleanup = () => {
    overlay.classList.remove('active');
    dialog.classList.remove('active');
    dialog.innerHTML = '';
    currentInspectedProduct = null;
    dialog.removeAttribute('style');
    if (window.location.hash.startsWith('#/products/')) {
      history.replaceState(null, '', '#/products');
    }
  };

  // Animate collapse back toward origin
  if (window.gsap && lastTriggerRect) {
    gsap.killTweensOf(dialog);
    gsap.to(dialog, {
      top: lastTriggerRect.top,
      left: lastTriggerRect.left,
      width: lastTriggerRect.width,
      height: lastTriggerRect.height,
      borderRadius: '12px',
      opacity: 0,
      scale: 0.96,
      duration: 0.26,
      ease: 'power3.in',
      onComplete: cleanup
    });
  } else if (lastTriggerRect) {
    dialog.style.transition = 'all 0.24s cubic-bezier(0.16, 1, 0.3, 1)';
    dialog.style.top = `${lastTriggerRect.top}px`;
    dialog.style.left = `${lastTriggerRect.left}px`;
    dialog.style.width = `${lastTriggerRect.width}px`;
    dialog.style.height = `${lastTriggerRect.height}px`;
    dialog.style.opacity = '0';
    dialog.style.borderRadius = '12px';
    setTimeout(cleanup, 250);
  } else {
    dialog.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    dialog.style.opacity = '0';
    dialog.style.transform = 'scale(0.96)';
    setTimeout(cleanup, 210);
  }
}

/**
 * Switch gallery view angle in inspection modal without losing right column scroll state
 */
export function switchInspectionView(idx) {
  if (!currentInspectedProduct) return;
  currentInspectionImageIdx = idx;

  const images = currentInspectedProduct.images && currentInspectedProduct.images.length > 0
    ? currentInspectedProduct.images
    : [currentInspectedProduct.primaryImage || '/assets/antina.webp'];
  const labels = currentInspectedProduct.imageLabels || images.map((_, i) => `Angle 0${i + 1}`);

  const activeImg = images[idx] || images[0];
  const activeLabel = labels[idx] || `Angle 0${idx + 1}`;

  // Update zoom image
  const zoomImg = document.getElementById('gallery-zoom-img');
  if (zoomImg) {
    zoomImg.src = activeImg;
    zoomImg.alt = `${currentInspectedProduct.name} - ${activeLabel}`;
    zoomImg.style.animation = 'none';
    zoomImg.offsetHeight; // trigger reflow
    zoomImg.style.animation = 'galleryAngleFade 0.22s cubic-bezier(0.16, 1, 0.3, 1)';
  }

  // Update labels
  const labelEl = document.getElementById('gallery-active-label');
  if (labelEl) labelEl.textContent = activeLabel;

  const counterEl = document.getElementById('gallery-active-counter');
  if (counterEl) counterEl.textContent = `View ${idx + 1} of ${images.length}`;

  // Update reticle indicator
  const reticleEl = document.querySelector('.stage-reticle-tl');
  if (reticleEl) reticleEl.textContent = `┌ 0${idx + 1}`;

  // Update thumb active state
  const thumbs = document.querySelectorAll('.gallery-thumb-btn');
  thumbs.forEach((thumb, tIdx) => {
    if (tIdx === idx) thumb.classList.add('active');
    else thumb.classList.remove('active');
  });
}

/**
 * Switch specification tab in inspection modal
 */
export function switchSpecsTab(tabName) {
  if (!currentInspectedProduct) return;
  currentInspectionTab = tabName;
}

/**
 * Image zoom on hover for precision surface inspection
 */
export function handleImageZoom(event) {
  const viewport = document.getElementById('gallery-lens-viewport');
  const img = document.getElementById('gallery-zoom-img');
  if (!viewport || !img) return;

  const rect = viewport.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = 'scale(1.45)';
}

export function resetImageZoom() {
  const img = document.getElementById('gallery-zoom-img');
  if (img) {
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
  }
}

// Global Filter Handlers
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

export function clearProductAppFilters() {
  productFilterState.apps = [];
  productFilterState.page = 1;
  refreshProductsView();
}

export function handleProductTypeSelect(val) {
  productFilterState.types = val ? [val] : [];
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
  window.scrollTo({ top: 280, behavior: 'smooth' });
}

export function refreshProductsView() {
  const mainContent = document.getElementById('main-content');
  if (mainContent && window.location.hash.startsWith('#/products')) {
    mainContent.innerHTML = renderProductsView();
  }
}

export function openEnquiryModal(productRef = '') {
  const modal = document.getElementById('general-enquiry-modal');
  const title = document.getElementById('enquiry-modal-title');
  const inputRef = document.getElementById('modal-product-ref');
  if (modal) {
    if (title) title.innerText = productRef ? `Request ICD / Specs: ${productRef}` : 'Make an Enquiry';
    if (inputRef) inputRef.value = productRef;
    modal.style.display = 'flex';
  }
}

export function closeEnquiryModal() {
  const modal = document.getElementById('general-enquiry-modal');
  if (modal) modal.style.display = 'none';
}
