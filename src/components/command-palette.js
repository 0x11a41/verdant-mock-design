/**
 * Command Palette Search Overlay ("/" to open, Escape to close)
 * Verdant Telemetry & Antenna Systems
 */

import { PRODUCTS } from '../data/products.js';

export function initCommandPalette() {
  const palette = document.getElementById('cmd-palette');
  const input = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');
  const triggerBtn = document.getElementById('search-trigger-btn');

  function openPalette() {
    if (palette) {
      palette.classList.add('open');
      if (input) {
        input.value = '';
        input.focus();
        renderPaletteResults('');
      }
    }
  }

  function closePalette() {
    if (palette) palette.classList.remove('open');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openPalette();
    }
    if (e.key === 'Escape' && palette && palette.classList.contains('open')) {
      closePalette();
    }
  });

  palette?.addEventListener('click', (e) => {
    if (e.target === palette) closePalette();
  });

  if (input) {
    input.addEventListener('input', (e) => renderPaletteResults(e.target.value));
  }

  function renderPaletteResults(q) {
    if (!results) return;
    const query = q.toLowerCase().trim();

    const pages = [
      { name: 'Products Catalogue', hash: '#/products', desc: 'Browse all 10 antennas & radomes' },
      { name: 'About Us', hash: '#/about', desc: 'The Kerala-to-the-world story & milestones' },
      { name: 'Infrastructure & Test Ranges', hash: '#/infrastructure', desc: 'Anechoic chamber to 20 GHz, RF lab to 40 GHz & autoclave' },
      { name: 'Design & Development', hash: '#/capabilities/design', desc: 'Coimbatore R&D design centre' },
      { name: 'Precision Manufacturing', hash: '#/capabilities/manufacturing', desc: 'AS9100 Rev D facility in Cochin' },
      { name: 'Testing & Qualification', hash: '#/capabilities/testing', desc: 'Anechoic chamber to 20 GHz' },
      { name: 'Platform Customisation', hash: '#/capabilities/customisation', desc: 'Bespoke tactical geometries' },
      { name: 'How We Build', hash: '#how', desc: '4-step engineering lifecycle' },
      { name: 'Careers & Internships', hash: '#/careers', desc: 'Open roles in Cochin & Coimbatore' },
      { name: 'Contact Engineering', hash: '#/contact', desc: 'HQ in Cochin: +91-484-2663104' }
    ];

    const matchedPages = pages.filter(p => !query || p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));
    const matchedProducts = PRODUCTS.filter(p => !query || p.name.toLowerCase().includes(query) || p.code.toLowerCase().includes(query) || p.application.toLowerCase().includes(query));

    let html = '';
    if (matchedPages.length > 0) {
      html += `<div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--accent); padding: 0.5rem 0.75rem; text-transform: uppercase;">PAGES</div>`;
      matchedPages.slice(0, 4).forEach(p => {
        html += `
          <a href="${p.hash}" onclick="document.getElementById('cmd-palette').classList.remove('open')" style="display: block; padding: 0.6rem 0.75rem; text-decoration: none; border-radius: 6px; transition: background 0.15s ease;" class="cmd-item">
            <div style="font-weight: 600; color: #EAF2F0; font-size: 0.85rem;">${p.name}</div>
            <div style="font-size: 0.75rem; color: #8FA3A0;">${p.desc}</div>
          </a>
        `;
      });
    }

    if (matchedProducts.length > 0) {
      html += `<div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--accent); padding: 0.5rem 0.75rem; margin-top: 0.5rem; text-transform: uppercase;">PRODUCTS</div>`;
      matchedProducts.slice(0, 5).forEach(p => {
        html += `
          <a href="#/products/${p.id}" onclick="document.getElementById('cmd-palette').classList.remove('open')" style="display: block; padding: 0.6rem 0.75rem; text-decoration: none; border-radius: 6px;" class="cmd-item">
            <div style="display: flex; justify-content: space-between;">
              <span style="font-weight: 600; color: #EAF2F0; font-size: 0.85rem;">${p.code} · ${p.name}</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">${p.application}</span>
            </div>
            <div style="font-size: 0.75rem; color: #8FA3A0;">${p.freqBand}</div>
          </a>
        `;
      });
    }

    if (!matchedPages.length && !matchedProducts.length) {
      html = `<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">No results found for "${q}".</div>`;
    }

    results.innerHTML = html;
  }
}
