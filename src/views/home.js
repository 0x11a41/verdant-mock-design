/**
 * Home View Component & Scroll Orchestrator
 * Verdant Telemetry & Antenna Systems
 */

import { PRODUCTS } from '../data/products.js';
import { safeImg } from '../data/assets.js';
import { DotMatrixGlobe } from '../components/globe.js';

let globeInstance = null;

export function getGlobeInstance() {
  return globeInstance;
}

export function setGlobeInstance(instance) {
  globeInstance = instance;
}

export function renderHomeView() {
  return `
  <!-- HERO I: 100vh Full-Bleed WebGL Pinned Dot-Matrix Earth with Clean Typography -->
  <div class="hero-pinned-wrapper">
    <section id="hero-section" class="hero-sticky-container" style="display: flex; align-items: center;">
      <!-- Three.js Canvas Container -->
      <div id="globe-canvas-container" style="position: absolute; inset: 0; z-index: 1; pointer-events: auto; opacity: 1;"></div>
      <!-- Soft Ambient Globe Rim Glow -->
      <div class="globe-ambient-glow" aria-hidden="true"></div>

      <!-- Directional Scrim: solid dark on left for text legibility, transparent on right for clean 3D globe -->
      <div id="hero-scrim" style="position: absolute; inset: 0; z-index: 2; pointer-events: none; background: linear-gradient(90deg, #05090D 0%, rgba(5,9,13,0.95) 30%, rgba(5,9,13,0.52) 46%, rgba(5,9,13,0) 62%);"></div>

      <!-- Hero Content Overlay (Clean: only mainline + action CTAs) -->
      <div class="container-wide" style="position: relative; z-index: 3; pointer-events: none; width: 100%;">
        <div id="hero-text-content" style="max-width: 620px; will-change: transform, opacity;">
          <h1 style="font-family: var(--font-display); font-size: clamp(3rem, 6.2vw, 5.75rem); font-weight: 700; line-height: 1.04; letter-spacing: -0.035em; color: var(--text); margin-bottom: 2.25rem; text-wrap: balance;">
            Signals that cross every <span style="color: var(--accent); text-shadow: 0 0 32px var(--accent-glow);">border</span>
          </h1>

          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1.15rem; pointer-events: auto;">
            <a href="#how" class="btn-secondary" style="border: 1.5px solid rgba(234, 242, 240, 0.45); background: rgba(5, 9, 13, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">Learn more</a>
          </div>
        </div>
      </div>

      <!-- Scroll Cue with subtle aerospace floating animation -->
      <div id="hero-scroll-cue" class="hero-scroll-cue-floating" style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--text-subtle); font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; pointer-events: none; transition: opacity 0.3s ease;">
        <span>Scroll to explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
      </div>
    </section>

    <!-- LAYER 2: Middle Pinned Layer (Purpose, Trust, Regimes - pinned together when Regimes reaches center) -->
    <div id="middle-scroll-container" class="middle-scroll-container">
      <div id="middle-pinned-layer" class="middle-pinned-layer">
        <!-- HERO II: Word-by-Word Interactive Reveal on Scroll with Feathered Vignette (No Box / No Border) -->
        <section id="hero-statement" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; z-index: 2; padding: clamp(4rem, 10vh, 7rem) 1.25rem;">
          <div class="container-wide">
            <div class="purpose-statement-vignette" style="max-width: 1040px; margin: 0 auto; text-align: center; padding: clamp(3rem, 7vw, 5.5rem) clamp(1.25rem, 5vw, 3.5rem);">
              <div id="purpose-eyebrow" style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 2.25rem; opacity: 0.5; transition: opacity 0.3s ease;">
                OUR PURPOSE
              </div>
              <p id="purpose-statement-text" class="reveal-statement" style="font-family: var(--font-display); font-size: clamp(2rem, 4.4vw, 3.6rem); font-weight: 500; line-height: 1.35; letter-spacing: -0.025em; color: var(--text-muted); text-wrap: balance;">
                <span class="word-token">We</span>
                <span class="word-token">design</span>
                <span class="word-token">and</span>
                <span class="word-token">build</span>
                <span class="word-token">the</span>
                <span class="word-token keyword">antennas</span>
                <span class="word-token">and</span>
                <span class="word-token keyword">radomes</span>
                <span class="word-token">that</span>
                <span class="word-token">keep</span>
                <span class="word-token keyword">aircraft,</span>
                <span class="word-token keyword">ships</span>
                <span class="word-token">and</span>
                <span class="word-token keyword">ground</span>
                <span class="word-token keyword">forces</span>
                <span class="word-token accentword" style="font-weight: 600;">connected.</span>
              </p>
              <div style="margin-top: 2.5rem; display: flex; justify-content: center; align-items: center; gap: 0.75rem;">
                <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px var(--accent);"></span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle); letter-spacing: 0.08em; text-transform: uppercase;">VERDANT TELEMETRY &amp; ANTENNA SYSTEMS</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Trust Row: Defence Leaders & Quality Certifications (Unified Single Flow) -->
        <section id="trust-section" class="hero-slide-in-surface" style="padding: 2.25rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--bg); overflow: hidden;">
          <div class="container-wide">
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600;">TRUSTED BY DEFENCE LEADERS</span>
              <div id="trust-scroll-container" class="trust-scroll-container">
                <div id="trust-cards-row" class="trust-cards-row">
                  <div class="trusted-card">
                    <img src="/assets/hal.png" alt="HAL" style="height: 28px; width: auto; object-fit: contain; filter: brightness(1.1);" onerror="this.style.display='none';" />
                    <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text); font-weight: 600;">HAL</span>
                  </div>
                  <div class="trusted-card">
                    <img src="/assets/drdo.png" alt="DRDO" style="height: 28px; width: auto; object-fit: contain; filter: brightness(1.1);" onerror="this.style.display='none';" />
                    <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text); font-weight: 600;">DRDO</span>
                  </div>
                  <div class="trusted-card">
                    <img src="/assets/isro.png" alt="ISRO" style="height: 28px; width: auto; object-fit: contain; filter: brightness(1.1);" onerror="this.style.display='none';" />
                    <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text); font-weight: 600;">ISRO</span>
                  </div>
                  <div class="trusted-card" style="padding: 0.5rem 1.15rem;">
                    <img src="/assets/as9100d-certified-logo.png" alt="AS9100 Rev D Certified" style="height: 28px; width: auto; object-fit: contain;" onerror="this.style.display='none';" />
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); line-height: 1.35;">
                      <span style="color: var(--accent); font-weight: 600;">AS9100 Rev D · ISO 9001:2015</span>
                      <span style="color: var(--text-subtle); display: block;">CEMILAC Design Approval</span>
                    </div>
                  </div>
                  <div class="trusted-card" style="padding: 0.5rem 1.15rem;">
                    <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; background: rgba(3, 188, 159, 0.12); border: 1px solid rgba(3, 188, 159, 0.35); color: var(--accent); font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; flex-shrink: 0;">ADA</div>
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); line-height: 1.35;">
                      <span style="color: var(--text); font-weight: 600; font-size: 0.8125rem;">ADA</span>
                      <span style="color: var(--text-subtle); display: block;">LCA Tejas Programme</span>
                    </div>
                  </div>
                  <div class="trusted-card" style="padding: 0.5rem 1.15rem;">
                    <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; background: rgba(3, 188, 159, 0.12); border: 1px solid rgba(3, 188, 159, 0.35); color: var(--accent); font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; flex-shrink: 0;">MOD</div>
                    <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); line-height: 1.35;">
                      <span style="color: var(--text); font-weight: 600; font-size: 0.8125rem;">Indian Armed Forces</span>
                      <span style="color: var(--text-subtle); display: block;">Air Force · Navy · Army</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- OPERATIONAL REGIMES: Centered Standout Motto (Pinned Background Layer with Purpose & Trust) -->
        <section id="regimes-section" class="regimes-section-wrapper" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 4rem 0; background: #05090D; overflow: hidden; text-align: center; position: relative;">
          <div class="container-wide" style="position: relative; z-index: 2;">
            <div style="max-width: 1100px; margin: 0 auto; text-align: center;">
              <h2 id="regime-motto-heading" style="font-family: var(--font-display); font-size: clamp(3rem, 6.5vw, 5.25rem); font-weight: 700; line-height: 1.12; letter-spacing: -0.035em; color: var(--text); margin: 0 auto; text-wrap: balance; will-change: transform, letter-spacing;">
                <span class="regime-word" data-word-idx="0" style="display: inline-block; will-change: opacity, transform, filter;">Engineered</span>
                <span class="regime-word" data-word-idx="1" style="display: inline-block; will-change: opacity, transform, filter;">for</span>
                <span class="regime-word" data-word-idx="2" style="display: inline-block; will-change: opacity, transform, filter;">extreme</span>
                <span class="regime-word" data-word-idx="3" style="display: inline-block; will-change: opacity, transform, filter;">operating</span>
                <span class="regime-word regime-accent" data-word-idx="4" style="display: inline-block; color: var(--accent); will-change: opacity, transform, filter, text-shadow;">regimes.</span>
              </h2>
              <!-- 1-to-1 dynamic scrubbed telemetry precision line -->
              <div style="margin: 2.5rem auto 0; width: 140px; height: 2px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; position: relative;">
                <div id="regime-scroll-bar" style="width: 100%; height: 100%; background: linear-gradient(90deg, transparent, var(--accent), transparent); transform-origin: center; transform: scaleX(0.2); will-change: transform, opacity;"></div>
              </div>
            </div>
          </div>
        </section>
      </div> <!-- /middle-pinned-layer -->

      <!-- POST-REGIMES SURFACE: Glides on top of pinned regimes motto -->
      <div id="post-regimes-panel" class="post-regimes-surface">
      <!-- PRODUCTS: Featured Flagship Hardware Showcase (Horizontally Scrollable) -->
      <section id="featured-products-section" style="padding: clamp(4.5rem, 10vh, 7.5rem) 0; background: #05090D; border-bottom: 1px solid var(--border);">
      <div class="container-wide">
        <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1.5rem; margin-bottom: 2.25rem;">
          <div>
            <h2 style="font-family: var(--font-display); font-size: 29.1875px; font-weight: 700; color: var(--text); letter-spacing: -0.03em; margin: 0;">
              Featured Products
            </h2>
          </div>
          
          <div style="display: flex; align-items: center; gap: 1rem;">
            <!-- Scroll Arrow Controls for Horizontal Track -->
            <div style="display: flex; gap: 0.5rem;">
              <button id="feat-scroll-prev" aria-label="Scroll featured products left" class="btn-secondary" style="width: 40px; height: 40px; padding: 0; min-height: 40px; border-radius: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button id="feat-scroll-next" aria-label="Scroll featured products right" class="btn-secondary" style="width: 40px; height: 40px; padding: 0; min-height: 40px; border-radius: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            <a href="#/products" class="btn-secondary" style="font-size: 0.8125rem;">
              View all
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>

        <!-- Horizontally Scrollable Featured Showcase with Uniform Normal Hardware Cards -->
        <div id="featured-scroll-track" class="featured-horizontal-scroll" role="region" aria-label="Featured antenna systems carousel" tabindex="0">
          ${PRODUCTS.filter(p => p.featured).map((p, idx) => `
            <div class="featured-hw-card" data-product-id="${p.id}" role="button" tabindex="0" onclick="window.inspectProduct('${p.id}', this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); window.inspectProduct('${p.id}', this);}">
              <!-- 1:1 Hardware Image Frame with Corner Badges -->
              <div class="hw-stage-square">
                <div class="hw-corner-tag-tl">${p.code}</div>
                <div class="hw-corner-tag-tr">${p.platformDomain.split('·')[0].trim()}</div>
                <img src="${p.primaryImage}" alt="${p.name}" class="hw-stage-square-img" loading="lazy" onerror="this.onerror=null; this.src='${p.images[0] || '/assets/antina.webp'}';" />
              </div>

              <!-- Card Body -->
              <div class="hw-card-body">
                <h3 class="hw-card-name" title="${p.name}">
                  ${p.name}
                </h3>
                <div class="hw-card-location" title="${p.mountingLocation}">
                  <span style="color: var(--accent); font-family: var(--font-mono); font-size: 0.65rem; font-weight: 700;">LOC:</span>
                  <span>${p.mountingLocation}</span>
                </div>

                <!-- Core Engineering Specs Strip -->
                <div class="hw-specs-strip">
                  <div class="hw-spec-row">
                    <span class="hw-spec-key">BANDWIDTH</span>
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
      </div>
    </section>

    <!-- CAPABILITIES: 4 Cards with Domain Background Imagery (Fully Responsive) -->
    <section style="padding: clamp(5rem, 12vh, 8.5rem) 0; background: var(--bg); border-bottom: 1px solid var(--border);">
      <div class="container-wide">
        <div class="capabilities-layout-grid">
          <!-- Left: Sticky Title Column on Desktop, Natural Stack on Mobile -->
          <div class="capabilities-sticky-col" style="position: sticky; top: 100px; height: fit-content;">
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; font-weight: 600;">
              SYSTEM CAPABILITIES
            </div>
            <h2 style="font-size: clamp(2.2rem, 3.8vw, 3.25rem); font-weight: 700; line-height: 1.12; color: var(--text); letter-spacing: -0.03em; margin-bottom: 1.25rem; text-wrap: balance;">
              End-to-end RF &amp; structural engineering.
            </h2>
            <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 2rem;">
              From computational electromagnetics and aerodynamic radome synthesis to autoclave composite curing and anechoic chamber qualification up to 20 GHz.
            </p>
            <a href="#/capabilities" class="btn-secondary">Explore all capabilities</a>
          </div>

          <!-- Right: 4 Capability Cards with Background Images from Domains -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <a href="#/capabilities/design" class="capability-card">
              <img src="/assets/rf-engineering.webp" alt="Design &amp; Development" class="capability-bg-img" />
              <div class="capability-scrim"></div>
              <div style="position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); font-weight: 600;">01</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <h3 style="font-size: 1.35rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.6rem;">Design &amp; Development</h3>
                <p style="font-size: 0.875rem; color: #EAF2F0; opacity: 0.95; line-height: 1.55; margin-bottom: 1.25rem;">
                  Coimbatore R&amp;D centre. High-fidelity EM simulation, pattern synthesis, custom RF matching and advanced composite radome co-simulation.
                </p>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-top: auto; display: flex; align-items: center; gap: 0.4rem;">
                  <span>Coimbatore Design Centre</span> &rarr;
                </div>
              </div>
            </a>

            <a href="#/capabilities/manufacturing" class="capability-card">
              <img src="/assets/hero/rf-engineering.webp" alt="Precision Manufacturing" class="capability-bg-img" />
              <div class="capability-scrim"></div>
              <div style="position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); font-weight: 600;">02</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <h3 style="font-size: 1.35rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.6rem;">Precision Manufacturing</h3>
                <p style="font-size: 0.875rem; color: #EAF2F0; opacity: 0.95; line-height: 1.55; margin-bottom: 1.25rem;">
                  AS9100 Rev D facility in Cochin. Micro-machining, pre-preg autoclave composite curing, environmental sealing and RF integration.
                </p>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-top: auto; display: flex; align-items: center; gap: 0.4rem;">
                  <span>AS9100 Rev D Certified</span> &rarr;
                </div>
              </div>
            </a>

            <a href="#/capabilities/customisation" class="capability-card">
              <img src="/assets/jet.webp" alt="Customisation" class="capability-bg-img" />
              <div class="capability-scrim"></div>
              <div style="position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); font-weight: 600;">03</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <h3 style="font-size: 1.35rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.6rem;">Tactical Customisation</h3>
                <p style="font-size: 0.875rem; color: #EAF2F0; opacity: 0.95; line-height: 1.55; margin-bottom: 1.25rem;">
                  Aerodynamic and conformal geometry tailored to fighter aircraft, transport planes, helicopters, naval masts and armoured platforms.
                </p>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-top: auto; display: flex; align-items: center; gap: 0.4rem;">
                  <span>Platform-Specific Geometry</span> &rarr;
                </div>
              </div>
            </a>

            <a href="#/capabilities/testing" class="capability-card">
              <img src="/assets/003.png" alt="Anechoic &amp; Range Testing" class="capability-bg-img" />
              <div class="capability-scrim"></div>
              <div style="position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); font-weight: 600;">04</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
                <h3 style="font-size: 1.35rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.6rem;">Testing &amp; Qualification</h3>
                <p style="font-size: 0.875rem; color: #EAF2F0; opacity: 0.95; line-height: 1.55; margin-bottom: 1.25rem;">
                  Indoor anechoic chamber testing up to 20 GHz, outdoor ranges 20–500 MHz, 32 ft ground plane, and RF instrumentation extending to 40 GHz.
                </p>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-top: auto; display: flex; align-items: center; gap: 0.4rem;">
                  <span>Chamber to 20 GHz · 32ft Ground Plane</span> &rarr;
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT TEASER SECTION -->
    <section style="padding: clamp(5rem, 12vh, 8rem) 0; background: var(--surface); border-bottom: 1px solid var(--border);">
      <div class="container-wide">
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.25rem; font-weight: 600;">
            THE VERDANT STORY
          </div>
          <h2 style="font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 700; line-height: 1.15; color: var(--text); margin-bottom: 1.75rem; text-wrap: balance;">
            From a Cochin workshop to mission-critical defence systems worldwide.
          </h2>
          <p style="font-size: 1.125rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 2.5rem;">
            Founded in 1997 with an unyielding commitment to precision RF engineering. Today Verdant is CEMILAC approved, AS9100 Rev D certified, and the trusted partner for HAL, ISRO, and DRDO.
          </p>
          <a href="#/about" class="btn-primary">
            Read our story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- MEET OUR LEADERSHIP & CONTACT SECTION -->
    <section id="contact-section" style="padding: clamp(5rem, 12vh, 8.5rem) 0; background: var(--bg); border-bottom: 1px solid var(--border);">
      <div class="container-wide">
        <div style="margin-bottom: 4rem; text-align: center; max-width: 840px; margin-left: auto; margin-right: auto;">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; font-weight: 600;">
            LEADERSHIP &amp; ENGINEERING
          </div>
          <blockquote style="font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 500; color: var(--text); line-height: 1.35; margin-bottom: 1rem; text-wrap: balance;">
            &ldquo;We're a diverse team of thinkers and doers, united by a steadfast commitment to serving our customers.&rdquo;
          </blockquote>
        </div>

        <!-- 3 Minimal Leadership Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 5rem;">
          <div class="card" style="padding: 2rem;">
            <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--elevated); border: 1px solid var(--accent); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent); font-family: var(--font-mono); margin-bottom: 1.25rem;">
              LG
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Louis George</h3>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); margin-bottom: 1rem;">Chief Executive Officer</div>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">
              30+ years in composite structure and radome design. M.Sc. Physics (MGU), advanced composites engineering at IIT Chennai.
            </p>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--elevated); border: 1px solid var(--accent); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent); font-family: var(--font-mono); margin-bottom: 1.25rem;">
              KG
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Kuruvilla George</h3>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); margin-bottom: 1rem;">Chief Technology Officer</div>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">
              30+ years leading precision RF simulation, broadband antenna geometry execution, and military environmental qualification.
            </p>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--elevated); border: 1px solid var(--accent); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent); font-family: var(--font-mono); margin-bottom: 1.25rem;">
              TT
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Tony G. Thomas</h3>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); margin-bottom: 1rem;">Chief Mentor</div>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">
              Ex-AT&amp;T Bell Labs, Co-founder AdventNet / Zoho. B.Tech IIT Madras, Ph.D. Computer Science from Johns Hopkins University.
            </p>
          </div>
        </div>

        <!-- Contact Box & Address -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem; align-items: start;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; font-weight: 600;">
              GET IN TOUCH
            </div>
            <h2 style="font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 700; color: var(--text); margin-bottom: 1.25rem;">
              Talk to our antenna engineers.
            </h2>
            <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem;">
              Direct consultation on technical requirements, mechanical envelope integration, custom radome materials, or formal tenders.
            </p>

            <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.9rem;">
              <div>
                <span style="color: var(--text-subtle); display: block; font-family: var(--font-mono); font-size: 0.75rem;">HEADQUARTERS</span>
                <span style="color: var(--text);">26/411 A, Konthuruthy, Cochin – 682 013, Kerala, India</span>
              </div>
              <div>
                <span style="color: var(--text-subtle); display: block; font-family: var(--font-mono); font-size: 0.75rem;">TELEPHONE</span>
                <span style="color: var(--text);"><a href="tel:+914842663104" style="color: var(--text); text-decoration: none;">0091-484-2663104</a> / <a href="tel:+914842663576" style="color: var(--text); text-decoration: none;">2663576</a></span>
              </div>
              <div>
                <span style="color: var(--text-subtle); display: block; font-family: var(--font-mono); font-size: 0.75rem;">DIRECT EMAIL</span>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.2rem;">
                  <a href="mailto:info@verdanttelemetry.com" style="color: var(--accent); text-decoration: none; font-weight: 500;">info@verdanttelemetry.com</a>
                  <button type="button" onclick="window.copyContactEmail('info@verdanttelemetry.com')" style="background: none; border: 1px solid var(--border); color: var(--text-muted); border-radius: 4px; padding: 0.15rem 0.4rem; font-size: 0.7rem; cursor: pointer;">Copy</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form Component -->
          <div class="card" style="padding: 2.25rem;">
            <div style="margin-bottom: 1.5rem;">
              <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text); margin-bottom: 0.35rem;">
                Send Technical Enquiry
              </h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
                Direct channel to our antenna engineering and qualification team in Cochin.
              </p>
            </div>

            <form id="home-contact-form" onsubmit="window.handleContactSubmit(event, 'home-contact-form')" novalidate>
              <div id="form-feedback" style="display: none; margin-bottom: 1.25rem;"></div>

              <div class="contact-fields-container" style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div>
                  <label for="c-name" style="display: block; font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.4rem;">NAME *</label>
                  <input type="text" id="c-name" required placeholder="e.g. Commander R. K. Sharma" class="contact-input" style="width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.9rem; color: var(--text); font-size: 0.9rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                </div>

                <div>
                  <label for="c-email" style="display: block; font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.4rem;">WORK EMAIL *</label>
                  <input type="email" id="c-email" required placeholder="name@organisation.com" class="contact-input" style="width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.9rem; color: var(--text); font-size: 0.9rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                </div>

                <div>
                  <label for="c-org" style="display: block; font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.4rem;">ORGANISATION / DEFENCE UNIT</label>
                  <input type="text" id="c-org" placeholder="e.g. HAL / DRDO / Procurement Agency" class="contact-input" style="width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.9rem; color: var(--text); font-size: 0.9rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                </div>

                <div>
                  <label for="c-msg" style="display: block; font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.4rem;">TECHNICAL REQUIREMENTS / QUERY *</label>
                  <textarea id="c-msg" required rows="4" placeholder="Specify frequency band, platform type, mechanical constraints, or antenna model..." class="contact-input" style="width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.9rem; color: var(--text); font-size: 0.9rem; outline: none; resize: vertical; line-height: 1.5; transition: border-color 0.2s, box-shadow 0.2s;"></textarea>
                </div>

                <button type="submit" class="btn-primary" style="width: 100%; margin-top: 0.35rem; justify-content: center; font-size: 0.925rem; padding: 0.8rem 1.5rem; border-radius: 8px;">
                  Send Technical Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWSROOM / MILESTONES -->
    <section style="padding: clamp(5rem, 12vh, 8rem) 0; background: var(--surface);">
      <div class="container-wide">
        <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: 3rem;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; font-weight: 600;">
              RECOGNITION &amp; UPDATES
            </div>
            <h2 style="font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 700; color: var(--text);">
              Newsroom
            </h2>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="card" style="padding: 1.75rem; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-subtle); margin-bottom: 0.75rem;">
              <span>DEFENCE RECOGNITION</span>
              <span>2001 &amp; 2016</span>
            </div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">SIATI Award for Aerospace Indigenisation</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex: 1;">
              Conferred twice by Society of Indian Aerospace Technologies &amp; Industries for indigenous development of critical airborne antennas and RF radomes.
            </p>
            <a href="#/about" style="color: var(--accent); font-size: 0.8125rem; text-decoration: none; font-weight: 500;">Read milestone details &rarr;</a>
          </div>

          <div class="card" style="padding: 1.75rem; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-subtle); margin-bottom: 0.75rem;">
              <span>MEDIA COVERAGE</span>
              <span>TELEVISION FEATURE</span>
            </div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Verdant Featured on Manorama Channel</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex: 1;">
              Television feature highlighting Verdant's high-technology journey from Cochin to international defence supply chains and fighter jet integration.
            </p>
            <a href="#/about" style="color: var(--accent); font-size: 0.8125rem; text-decoration: none; font-weight: 500;">Learn about our journey &rarr;</a>
          </div>

          <div class="card" style="padding: 1.75rem; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-subtle); margin-bottom: 0.75rem;">
              <span>QUALITY MILESTONE</span>
              <span>JUNE 2009 – PRESENT</span>
            </div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">AS 9100 Rev D &amp; ISO 9001:2015 Certification</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex: 1;">
              Certified to AS9100 since June 2009 with continuous renewal to Rev D. Rigorous audit cycles upholding international aerospace and defence quality standards.
            </p>
            <a href="#/capabilities/testing" style="color: var(--accent); font-size: 0.8125rem; text-decoration: none; font-weight: 500;">View quality standards &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    </div> <!-- /post-regimes-panel -->
    </div> <!-- /middle-scroll-container -->
  </div> <!-- /hero-pinned-wrapper -->
  `;
}

export function initHomeView() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvasContainer = document.getElementById('globe-canvas-container');

  if (canvasContainer && !prefersReduced) {
    globeInstance = new DotMatrixGlobe(canvasContainer);
  }

  // Pure 1-to-1 Scroll Interaction Orchestrator
  const heroSection = document.getElementById('hero-section');
  const heroTextContent = document.getElementById('hero-text-content');
  const heroScrollCue = document.getElementById('hero-scroll-cue');
  const purposeSection = document.getElementById('hero-statement');
  const purposeEyebrow = document.getElementById('purpose-eyebrow');
  const wordTokens = document.querySelectorAll('#purpose-statement-text .word-token');

  function handleHomeScroll() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const vh = window.innerHeight || 800;

    // 1. Hero mainline text fade & slight lift as user scrolls down the first viewport
    if (heroTextContent) {
      const textProgress = Math.min(1, Math.max(0, scrollY / (vh * 0.55)));
      heroTextContent.style.opacity = Math.max(0, 1 - textProgress * 1.35).toFixed(3);
      heroTextContent.style.transform = `translateY(${textProgress * -40}px)`;
      heroTextContent.style.pointerEvents = textProgress > 0.8 ? 'none' : 'auto';
    }

    if (heroScrollCue) {
      heroScrollCue.style.opacity = scrollY > 30 ? '0' : '1';
    }

    // 2. Globe 1:1 scroll synchronization
    if (globeInstance) {
      const globeProgress = Math.min(2.5, scrollY / vh);
      globeInstance.onScrollUpdate(globeProgress);
    }

    if (canvasContainer) {
      canvasContainer.style.opacity = '1';
    }

    // 3. Purpose Statement Word-by-Word Scroll Reveal
    const purposeText = document.getElementById('purpose-statement-text');
    if (purposeSection && wordTokens && wordTokens.length > 0) {
      const targetElement = purposeText || purposeSection;
      const rect = targetElement.getBoundingClientRect();
      const currentPos = rect.top;

      const startTrigger = vh * 0.62;
      const endTrigger = vh * 0.28;

      let revealProgress = 0;
      if (currentPos < startTrigger) {
        revealProgress = Math.min(1, Math.max(0, (startTrigger - currentPos) / (startTrigger - endTrigger)));
      }

      if (purposeEyebrow) {
        const eyebrowTrigger = vh * 0.72;
        const eyebrowProgress = Math.min(1, Math.max(0, (eyebrowTrigger - currentPos) / (eyebrowTrigger - endTrigger)));
        purposeEyebrow.style.opacity = Math.min(1, Math.max(0.35, eyebrowProgress * 1.3)).toFixed(2);
      }

      const totalWords = wordTokens.length;
      wordTokens.forEach((token, index) => {
        const threshold = index / (totalWords - 1);
        const diff = revealProgress - threshold;

        if (diff >= 0 || prefersReduced) {
          token.classList.add('revealed');
          token.style.removeProperty('opacity');
          token.style.removeProperty('transform');
        } else {
          token.classList.remove('revealed');
          const subProgress = Math.min(1, Math.max(0, (diff + 0.08) / 0.08));
          token.style.opacity = (0.24 + subProgress * 0.34).toFixed(2);
          token.style.transform = `translateY(${(1 - subProgress) * 5}px)`;
        }
      });
    }

    // 4. Middle Stage & Operational Regimes Centered Background Pinning
    const midLayer = document.getElementById('middle-pinned-layer');
    const midContainer = document.getElementById('middle-scroll-container');
    const regimesSec = document.getElementById('regimes-section');

    if (midLayer && regimesSec && midContainer) {
      const regimesOffsetTop = regimesSec.offsetTop;
      const regimesHeight = regimesSec.offsetHeight || vh;
      const regimesCenterInLayer = regimesOffsetTop + (regimesHeight / 2);

      // Lock center of regimesSec in exact vertical center of viewport (vh / 2)
      const targetStickyTop = Math.round((vh / 2) - regimesCenterInLayer);
      midLayer.style.setProperty('--middle-sticky-top', `${targetStickyTop}px`);

      // 1-to-1 scrub: from entering screen (vh * 0.95) to settling into centered sticky anchor (vh / 2)
      const rect = regimesSec.getBoundingClientRect();
      const regimesCenterY = rect.top + (regimesHeight / 2);
      const startTrigger = vh * 0.95;
      const endTrigger = vh / 2;

      let regimeProgress = 0;
      if (regimesCenterY <= endTrigger + 2) {
        regimeProgress = 1;
      } else if (regimesCenterY < startTrigger) {
        regimeProgress = Math.min(1, Math.max(0, (startTrigger - regimesCenterY) / (startTrigger - endTrigger)));
      }

      if (prefersReduced) regimeProgress = 1;

      const words = regimesSec.querySelectorAll('.regime-word');
      const totalWords = words.length;
      words.forEach((w, idx) => {
        const threshold = idx / (totalWords - 1);
        const wordSpread = 0.42;
        const startW = threshold * (1 - wordSpread);
        const wProgress = Math.min(1, Math.max(0, (regimeProgress - startW) / wordSpread));

        const op = 0.20 + wProgress * 0.80;
        const ty = (1 - wProgress) * 20;
        const blur = (1 - wProgress) * 5;

        w.style.opacity = op.toFixed(3);
        w.style.transform = `translateY(${ty.toFixed(1)}px)`;
        w.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : 'none';

        if (w.classList.contains('regime-accent')) {
          const glow = wProgress * 36;
          w.style.textShadow = `0 0 ${glow.toFixed(1)}px var(--accent-glow)`;
        }
      });

      const bar = document.getElementById('regime-scroll-bar');
      if (bar) {
        bar.style.transform = `scaleX(${Math.max(0.12, regimeProgress).toFixed(3)})`;
        bar.style.opacity = (0.25 + regimeProgress * 0.75).toFixed(2);
      }

      const heading = document.getElementById('regime-motto-heading');
      if (heading) {
        const s = 0.93 + regimeProgress * 0.07;
        const ls = -0.012 - regimeProgress * 0.023;
        heading.style.transform = `scale(${s.toFixed(3)})`;
        heading.style.letterSpacing = `${ls.toFixed(4)}em`;
      }
    }

    // 5. System Capabilities Cards Scrolling Animation
    const capCards = document.querySelectorAll('.capability-card');
    if (capCards.length > 0) {
      capCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerY = rect.top + rect.height * 0.5;
        const screenFraction = centerY / vh;

        const enterProgress = Math.min(1, Math.max(0, (vh * 0.98 - rect.top) / (vh * 0.35)));

        if (prefersReduced) {
          card.style.transform = 'none';
          card.style.opacity = '1';
        } else {
          const ty = (1 - enterProgress) * 36;
          const rotX = (1 - enterProgress) * 4.5;
          const scale = 0.965 + enterProgress * 0.035;
          const opacity = 0.35 + enterProgress * 0.65;

          card.style.transform = `translateY(${ty.toFixed(1)}px) scale(${scale.toFixed(3)}) perspective(900px) rotateX(${rotX.toFixed(1)}deg)`;
          card.style.opacity = opacity.toFixed(3);

          const bgImg = card.querySelector('.capability-bg-img');
          if (bgImg) {
            const parallaxOffset = (screenFraction - 0.5) * -30;
            bgImg.style.transform = `translateY(${parallaxOffset.toFixed(1)}px) scale(1.08)`;
          }

          if (screenFraction >= 0.32 && screenFraction <= 0.68) {
            card.style.borderColor = 'rgba(3, 188, 159, 0.45)';
            card.style.boxShadow = '0 12px 35px rgba(3, 188, 159, 0.09), 0 16px 36px rgba(0, 0, 0, 0.6)';
          } else {
            card.style.borderColor = 'var(--border)';
            card.style.boxShadow = 'none';
          }
        }
      });
    }
  }

  window.removeEventListener('scroll', window.__homeScrollHandler);
  window.removeEventListener('resize', window.__homeScrollHandler);
  window.__homeScrollHandler = handleHomeScroll;
  window.addEventListener('scroll', handleHomeScroll, { passive: true });
  window.addEventListener('resize', handleHomeScroll, { passive: true });
  handleHomeScroll();

  // Horizontal featured products track controls
  const featTrack = document.getElementById('featured-scroll-track');
  const featPrev = document.getElementById('feat-scroll-prev');
  const featNext = document.getElementById('feat-scroll-next');

  if (featTrack) {
    if (featPrev) {
      featPrev.onclick = () => {
        featTrack.scrollBy({ left: -340, behavior: 'smooth' });
      };
    }
    if (featNext) {
      featNext.onclick = () => {
        featTrack.scrollBy({ left: 340, behavior: 'smooth' });
      };
    }
  }

  // Horizontal catalog preview controls
  const catTrack = document.getElementById('catalog-horizontal-track');
  const catLeft = document.getElementById('catalog-scroll-left');
  const catRight = document.getElementById('catalog-scroll-right');
  if (catTrack && catLeft) {
    catLeft.onclick = () => catTrack.scrollBy({ left: -340, behavior: 'smooth' });
  }
  if (catTrack && catRight) {
    catRight.onclick = () => catTrack.scrollBy({ left: 340, behavior: 'smooth' });
  }

  // Dynamic horizontal auto-scroll for trust section when horizontal space is constrained
  if (window.__trustScrollCleanup) {
    window.__trustScrollCleanup();
    window.__trustScrollCleanup = null;
  }

  const trustContainer = document.getElementById('trust-scroll-container');
  const trustRow = document.getElementById('trust-cards-row');

  if (trustContainer && trustRow) {
    let trustAnimationId = null;
    let isUserInteracting = false;
    let resumeTimeout = null;
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let currentScrollX = 0;
    let loopWidth = 0;
    let resizeObserver = null;
    let resizeDebounce = null;

    const syncScrollPos = () => {
      currentScrollX = trustContainer.scrollLeft || 0;
    };

    const pauseInteraction = (delayMs = 1200) => {
      isUserInteracting = true;
      syncScrollPos();
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isUserInteracting = false;
        syncScrollPos();
      }, delayMs);
    };

    // User hover & touch interaction listeners
    trustContainer.addEventListener('mouseenter', () => {
      isUserInteracting = true;
      syncScrollPos();
    }, { passive: true });

    trustContainer.addEventListener('mouseleave', () => {
      pauseInteraction(300);
    }, { passive: true });

    trustContainer.addEventListener('touchstart', () => pauseInteraction(1500), { passive: true });
    trustContainer.addEventListener('touchmove', () => pauseInteraction(1500), { passive: true });
    trustContainer.addEventListener('touchend', () => pauseInteraction(1200), { passive: true });

    // Trackpad / touch scroll sync
    trustContainer.addEventListener('scroll', () => {
      if (isUserInteracting) {
        syncScrollPos();
      }
    }, { passive: true });

    // Drag to scroll for mouse users
    trustContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      pauseInteraction(1500);
      trustContainer.style.cursor = 'grabbing';
      startX = e.pageX - trustContainer.offsetLeft;
      scrollStart = trustContainer.scrollLeft;
    });

    const onMouseUp = () => {
      if (isDown) {
        isDown = false;
        trustContainer.style.cursor = 'grab';
        pauseInteraction(1200);
      }
    };
    window.addEventListener('mouseup', onMouseUp);

    trustContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      pauseInteraction(1500);
      const x = e.pageX - trustContainer.offsetLeft;
      const walk = (x - startX);
      trustContainer.scrollLeft = scrollStart - walk;
      currentScrollX = trustContainer.scrollLeft;
    });

    function setupTrustScroll() {
      if (trustAnimationId) {
        cancelAnimationFrame(trustAnimationId);
        trustAnimationId = null;
      }

      // Remove existing clones before measuring natural unconstrained width
      const existingClones = trustRow.querySelectorAll('.trusted-clone');
      existingClones.forEach(el => el.remove());

      const originalCards = Array.from(trustRow.querySelectorAll('.trusted-card:not(.trusted-clone)'));
      if (originalCards.length === 0) return;

      // Available container viewport width
      const availableWidth = trustContainer.clientWidth || (trustContainer.parentElement ? trustContainer.parentElement.clientWidth : window.innerWidth);
      const naturalWidth = trustRow.scrollWidth;

      // Condition: Scroll slowly automatically ONLY when there is NOT enough horizontal space
      const hasInsufficientSpace = naturalWidth > availableWidth + 4;

      if (!hasInsufficientSpace) {
        // Space is sufficient: static presentation
        trustContainer.style.overflowX = 'hidden';
        trustContainer.style.maskImage = 'none';
        trustContainer.style.webkitMaskImage = 'none';
        trustContainer.style.cursor = 'default';
        trustContainer.scrollLeft = 0;
        currentScrollX = 0;
        return;
      }

      // Space is constrained: enable seamless slow infinite horizontal auto-scroll
      trustContainer.style.overflowX = 'auto';
      trustContainer.style.cursor = 'grab';
      const edgeMask = 'linear-gradient(90deg, transparent 0%, black 28px, black calc(100% - 28px), transparent 100%)';
      trustContainer.style.maskImage = edgeMask;
      trustContainer.style.webkitMaskImage = edgeMask;

      // Clone original cards to enable seamless infinite loop
      const copiesNeeded = Math.max(2, Math.ceil((availableWidth * 2) / naturalWidth) + 1);
      for (let c = 0; c < copiesNeeded; c++) {
        originalCards.forEach(card => {
          const clone = card.cloneNode(true);
          clone.classList.add('trusted-clone');
          clone.setAttribute('aria-hidden', 'true');
          trustRow.appendChild(clone);
        });
      }

      const firstClone = trustRow.querySelector('.trusted-clone');
      loopWidth = firstClone ? (firstClone.offsetLeft - originalCards[0].offsetLeft) : naturalWidth;

      if (prefersReduced || loopWidth <= 0) return;

      let lastTimestamp = null;
      const speedPxPerSec = 16; // Smooth, readable precision drift (~16px/sec)
      currentScrollX = trustContainer.scrollLeft || 0;

      function scrollStep(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const delta = Math.min(64, timestamp - lastTimestamp);
        lastTimestamp = timestamp;

        if (!isUserInteracting && loopWidth > 0) {
          const pxToScroll = (speedPxPerSec * delta) / 1000;
          currentScrollX += pxToScroll;

          // Seamless loop wrap
          while (currentScrollX >= loopWidth) {
            currentScrollX -= loopWidth;
          }
          while (currentScrollX < 0) {
            currentScrollX += loopWidth;
          }

          trustContainer.scrollLeft = currentScrollX;
        }

        trustAnimationId = requestAnimationFrame(scrollStep);
      }

      trustAnimationId = requestAnimationFrame(scrollStep);
    }

    const handleResize = () => {
      if (resizeDebounce) cancelAnimationFrame(resizeDebounce);
      resizeDebounce = requestAnimationFrame(() => setupTrustScroll());
    };

    window.addEventListener('resize', handleResize, { passive: true });

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(trustContainer);
    }

    // Re-check measurements when card images finish loading
    const cardImages = trustRow.querySelectorAll('img');
    cardImages.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleResize, { once: true });
        img.addEventListener('error', handleResize, { once: true });
      }
    });

    // Run setup immediately and after micro-tick
    setupTrustScroll();
    requestAnimationFrame(() => setupTrustScroll());
    setTimeout(() => setupTrustScroll(), 150);

    window.__trustScrollCleanup = () => {
      if (trustAnimationId) cancelAnimationFrame(trustAnimationId);
      if (resizeDebounce) cancelAnimationFrame(resizeDebounce);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', onMouseUp);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      const existingClones = trustRow.querySelectorAll('.trusted-clone');
      existingClones.forEach(el => el.remove());
    };
  }
}
