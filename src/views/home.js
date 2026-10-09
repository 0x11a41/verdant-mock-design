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
    <section id="hero-section" class="hero-sticky-container">
      <!-- Three.js Canvas Container -->
      <div id="globe-canvas-container" style="position: absolute; inset: 0; z-index: 1; pointer-events: auto; opacity: 1;"></div>
      <!-- Soft Ambient Globe Rim Glow -->
      <div class="globe-ambient-glow" aria-hidden="true"></div>

      <!-- Hero Content Overlay (Left-Aligned Aerospace Typography) -->
      <div class="container-wide" style="position: relative; z-index: 3; pointer-events: none; height: 100%; display: flex; align-items: center;">
        <div id="hero-text-content" style="max-width: 640px; will-change: transform, opacity;">
          <!-- Hero Main Headline -->
          <h1 style="font-family: var(--font-display); font-size: clamp(3rem, 6.2vw, 5.5rem); font-weight: 700; line-height: 1.05; letter-spacing: -0.04em; color: #FFFFFF; margin-bottom: 2rem; text-wrap: balance;">
            Signals that cross every <span style="color: var(--accent); text-shadow: 0 0 36px var(--accent-glow);">border</span>
          </h1>

          <!-- Action CTAs -->
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; pointer-events: auto;">
            <a href="#how" class="btn-secondary" style="min-height: 48px; padding: 0.75rem 1.6rem; font-size: 0.92rem; border-radius: 9999px; text-decoration: none;">Learn more</a>
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
              <h2 id="regime-motto-heading" style="font-family: var(--font-display); font-size: clamp(3rem, 6.5vw, 5.25rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.035em; color: var(--text); margin: 0 auto; text-wrap: balance; will-change: transform, letter-spacing;">
                <div>
                  <span class="regime-word" data-word-idx="0" style="display: inline-block; will-change: opacity, transform, filter;">When</span>
                  <span class="regime-word" data-word-idx="1" style="display: inline-block; will-change: opacity, transform, filter;">a</span>
                  <span class="regime-word" data-word-idx="2" style="display: inline-block; will-change: opacity, transform, filter;">mission</span>
                  <span class="regime-word" data-word-idx="3" style="display: inline-block; will-change: opacity, transform, filter;">is</span>
                  <span class="regime-word" data-word-idx="4" style="display: inline-block; will-change: opacity, transform, filter;">calling,</span>
                </div>
                <div style="margin-top: 0.25rem;">
                  <span class="regime-word regime-accent" data-word-idx="5" style="display: inline-block; color: var(--accent); will-change: opacity, transform, filter, text-shadow;">VERDANT</span>
                  <span class="regime-word regime-accent" data-word-idx="6" style="display: inline-block; color: var(--accent); will-change: opacity, transform, filter, text-shadow;">delivers.</span>
                </div>
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
      <!-- FEATURED PRODUCTS: TEKEVER-Style 3D Depth Atmospheric Stage -->
      <section id="featured-products-section" class="featured-tekever-section" tabindex="0" aria-label="Featured antenna systems showcase">
        <!-- Top Centered Header -->
        <div class="stage-top-header">
          <span class="stage-top-eyebrow">Meet our</span>
          <h2 class="stage-top-title">Antenna Systems</h2>
          <p class="stage-top-desc">
            VERDANT offers mission-oriented RF product lines through its advanced antenna business unit, providing defense forces with superior telemetry and intelligence links.
          </p>
        </div>

        <!-- Main 3D Depth Stage Arena -->
        <div class="stage-arena-wrap" id="stage-arena-wrap" role="region" aria-label="Interactive 3D Antenna Systems Showcase">
          <!-- Giant Background Watermark (e.g. JC 50 / JD 120 / JD 401) -->
          <div id="stage-giant-watermark" class="stage-giant-watermark" aria-hidden="true">JC 50</div>

          <!-- Circular Frosted Navigation Arrows -->
          <button id="stage-arrow-prev" class="stage-circle-nav-btn prev" aria-label="Previous system">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          </button>
          <button id="stage-arrow-next" class="stage-circle-nav-btn next" aria-label="Next system">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>

          <!-- 3 Hardware Items Track in 3D Depth -->
          <div class="stage-hardware-item pos-center" id="stage-item-0" data-index="0" data-id="jc-50" role="button" tabindex="0" aria-label="JC 50 C-Band Blade Antenna">
            <div class="stage-item-float-inner">
              <img src="/assets/featured/JC-50.webp" alt="JC 50 C-Band Blade Antenna" class="stage-hardware-img" />
            </div>
          </div>

          <div class="stage-hardware-item pos-right" id="stage-item-1" data-index="1" data-id="jd-120-t1b" role="button" tabindex="0" aria-label="JD 120 Tactical V/UHF Blade">
            <div class="stage-item-float-inner">
              <img src="/assets/featured/JD-120-T1B.webp" alt="JD 120 Tactical V/UHF Blade" class="stage-hardware-img" />
            </div>
          </div>

          <div class="stage-hardware-item pos-left" id="stage-item-2" data-index="2" data-id="jd-401-s1g-a" role="button" tabindex="0" aria-label="JD 401-S1G-A High-Power Blade">
            <div class="stage-item-float-inner">
              <img src="/assets/featured/JD-401-S1G-A.webp" alt="JD 401-S1G-A High-Power Blade" class="stage-hardware-img" />
            </div>
          </div>
        </div>

        <!-- Bottom Meta Typography & Frosted Pill Action -->
        <div class="stage-bottom-meta">
          <div id="stage-meta-eyebrow" class="stage-meta-eyebrow">JC 50</div>
          <h3 id="stage-meta-title" class="stage-meta-title">The Game Changer</h3>
          <button id="stage-meta-pill" class="stage-frosted-pill-btn" aria-label="Inspect specifications for active system">
            Inspect Specifications
          </button>

          <!-- Minimal Subtle Slideshow Progress Line -->
          <div class="stage-progress-bar-wrap" aria-hidden="true">
            <div id="stage-progress-fill" class="stage-progress-bar-fill"></div>
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

    <!-- CONTACT / GET IN TOUCH SECTION -->
    <section id="contact-section" style="padding: clamp(3.5rem, 7vh, 5.5rem) 0 4.5rem; background: var(--bg); border-bottom: 1px solid var(--border); overflow: hidden;">
      <div class="container-wide">

        <!-- GET IN TOUCH SHOWCASE (SEAMLESS INTEGRATION WITH NO BORDER) -->
        <div class="contact-hero-banner" id="home-get-in-touch-banner">
          <div class="contact-hero-content">
            <h2 class="contact-hero-title">
              Get in Touch
            </h2>
            <p class="contact-hero-desc">
              The defence and aerospace operating landscape demands sovereign electromagnetic superiority. At Verdant Telemetry, partner directly with microwave engineers, radome aerodynamicists, and flight-qualification veterans on mission-critical technologies deployed and relied upon across frontline combat airframes, naval platforms, and tactical missiles.
            </p>

            <div class="contact-hero-action-row">
              <button type="button" class="contact-cta-pill" onclick="window.openEnquirySection()">
                Get started
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- DIRECT TECHNICAL ENQUIRY DIALOG (SIMPLIFIED & SLEEK) -->
        <div id="enquiry-section" role="dialog" aria-modal="true" aria-labelledby="enquiry-dialog-title" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.82); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 999; align-items: center; justify-content: center; padding: 1.25rem; overflow-y: auto;" onclick="if(event.target === this) window.closeEnquirySection()">
          <div style="background: #070D12; border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 16px; width: 100%; max-width: 520px; padding: clamp(1.5rem, 3.5vw, 2.25rem); position: relative; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85); max-height: 92vh; overflow-y: auto;" onclick="event.stopPropagation()">
            <button type="button" onclick="window.closeEnquirySection()" aria-label="Close dialog" style="position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); color: var(--text-muted); cursor: pointer; width: 32px; height: 32px; border-radius: 9999px; display: inline-flex; align-items: center; justify-content: center; font-size: 1.2rem; line-height: 1; transition: all 0.2s;">&times;</button>
            
            <div style="margin-bottom: 1.5rem; padding-right: 2rem;">
              <h3 id="enquiry-dialog-title" style="font-size: 1.35rem; font-weight: 700; color: #EAF2F0; letter-spacing: -0.01em;">
                Technical Enquiry
              </h3>
              <p style="font-size: 0.875rem; color: #8FA3A0; line-height: 1.5; margin-top: 0.35rem;">
                Connect directly with our microwave &amp; radome engineering team.
              </p>
            </div>

            <form id="home-contact-form" onsubmit="window.handleContactSubmit(event, 'home-contact-form')" novalidate>
              <div id="form-feedback" style="display: none; margin-bottom: 1.25rem;"></div>

              <div class="contact-fields-container" style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.85rem;">
                  <div>
                    <label for="c-name" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Name *</label>
                    <input type="text" id="c-name" required placeholder="Your name" class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                  </div>

                  <div>
                    <label for="c-email" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Work Email *</label>
                    <input type="email" id="c-email" required placeholder="name@company.com" class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                  </div>
                </div>

                <div>
                  <label for="c-org" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Organisation <span style="color: #5B6E6C; font-weight: 400;">(optional)</span></label>
                  <input type="text" id="c-org" placeholder="e.g. HAL, DRDO, or Defence Integrator" class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s;" />
                </div>

                <div>
                  <label for="c-msg" style="display: block; font-size: 0.78rem; font-weight: 500; color: #8FA3A0; margin-bottom: 0.35rem;">Requirements *</label>
                  <textarea id="c-msg" required rows="3" placeholder="Specify platform envelope, frequency band, or antenna model..." class="contact-input" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 0.7rem 0.85rem; color: #EAF2F0; font-size: 0.875rem; outline: none; resize: vertical; line-height: 1.5; transition: border-color 0.2s, box-shadow 0.2s;"></textarea>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.85rem; margin-top: 0.35rem; padding-top: 0.5rem;">
                  <button type="submit" class="contact-cta-pill" style="padding: 0.7rem 1.6rem; font-size: 0.875rem;">
                    Submit enquiry &rarr;
                  </button>
                  <div style="font-size: 0.78rem; color: #8FA3A0;">
                    Direct: <a href="mailto:info@verdanttelemetry.com" style="color: var(--accent); text-decoration: none;">info@verdanttelemetry.com</a>
                  </div>
                </div>
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

  // ========================================================
  // FEATURED PRODUCTS: TEKEVER-Style 3D Depth Stage & Slow Slideshow
  // ========================================================
  const STAGE_ITEMS = [
    {
      id: 'jc-50',
      code: 'JC 50',
      watermark: 'JC 50',
      tagline: 'The Game Changer',
      eyebrow: 'JC 50',
      image: '/assets/featured/JC-50.webp',
      alt: 'JC 50 C-Band Blade Antenna'
    },
    {
      id: 'jd-120-t1b',
      code: 'JD 120 T1B',
      watermark: 'JD 120',
      tagline: 'The Tactical Backbone',
      eyebrow: 'JD 120 T1B',
      image: '/assets/featured/JD-120-T1B.webp',
      alt: 'JD 120 Tactical V/UHF Blade Antenna'
    },
    {
      id: 'jd-401-s1g-a',
      code: 'JD 401-S1G-A',
      watermark: 'JD 401',
      tagline: 'The High-Power Link',
      eyebrow: 'JD 401-S1G-A',
      image: '/assets/featured/JD-401-S1G-A.webp',
      alt: 'JD 401-S1G-A High-Power Blade Antenna'
    }
  ];

  const arenaWrap = document.getElementById('stage-arena-wrap');
  const featuredSection = document.getElementById('featured-products-section');

  if (arenaWrap && featuredSection) {
    let activeStageIdx = 0;
    const watermarkEl = document.getElementById('stage-giant-watermark');
    const eyebrowEl = document.getElementById('stage-meta-eyebrow');
    const titleEl = document.getElementById('stage-meta-title');
    const pillBtn = document.getElementById('stage-meta-pill');
    const prevArrow = document.getElementById('stage-arrow-prev');
    const nextArrow = document.getElementById('stage-arrow-next');
    const progressFill = document.getElementById('stage-progress-fill');

    const itemElements = [
      document.getElementById('stage-item-0'),
      document.getElementById('stage-item-1'),
      document.getElementById('stage-item-2')
    ];

    const SLIDESHOW_INTERVAL_MS = 18000;
    let autoSlideshowTimer = null;
    let progressTimer = null;
    let progressStartTime = 0;
    let isPaused = false;

    const updateStagePositions = (newIdx) => {
      const total = STAGE_ITEMS.length;
      activeStageIdx = ((newIdx % total) + total) % total;
      const currentItem = STAGE_ITEMS[activeStageIdx];

      // Update 3D depth slots
      itemElements.forEach((el, k) => {
        if (!el) return;
        el.classList.remove('pos-center', 'pos-left', 'pos-right', 'pos-hidden');
        let diff = (k - activeStageIdx) % total;
        if (diff === 2) diff = -1;
        if (diff === -2) diff = 1;

        if (diff === 0) {
          el.classList.add('pos-center');
          el.setAttribute('aria-hidden', 'false');
          el.onclick = () => {
            if (typeof window.inspectProduct === 'function') {
              window.inspectProduct(currentItem.id, el);
            }
          };
        } else if (diff === -1) {
          el.classList.add('pos-left');
          el.setAttribute('aria-hidden', 'true');
          el.onclick = () => goToIndex(k);
        } else if (diff === 1) {
          el.classList.add('pos-right');
          el.setAttribute('aria-hidden', 'true');
          el.onclick = () => goToIndex(k);
        } else {
          el.classList.add('pos-hidden');
          el.setAttribute('aria-hidden', 'true');
        }
      });

      // Update giant watermark text with smooth fade/scale
      if (watermarkEl) {
        watermarkEl.style.opacity = '0';
        watermarkEl.style.transform = 'translate(-50%, -50%) scale(0.92)';
        setTimeout(() => {
          watermarkEl.textContent = currentItem.watermark;
          watermarkEl.style.opacity = '0.08';
          watermarkEl.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 320);
      }

      // Update bottom meta text
      if (eyebrowEl) {
        eyebrowEl.style.opacity = '0.2';
        setTimeout(() => {
          eyebrowEl.textContent = currentItem.eyebrow;
          eyebrowEl.style.opacity = '1';
        }, 220);
      }

      if (titleEl) {
        titleEl.style.opacity = '0.2';
        titleEl.style.transform = 'translateY(6px)';
        setTimeout(() => {
          titleEl.textContent = currentItem.tagline;
          titleEl.style.opacity = '1';
          titleEl.style.transform = 'translateY(0)';
        }, 220);
      }

      // Wire pill button
      if (pillBtn) {
        pillBtn.onclick = () => {
          if (typeof window.inspectProduct === 'function') {
            window.inspectProduct(currentItem.id, pillBtn);
          }
        };
      }
    };

    const goToIndex = (targetIdx) => {
      updateStagePositions(targetIdx);
      restartAutoTimer();
    };

    // Auto slideshow timers
    const tickProgress = () => {
      if (isPaused) return;
      const elapsed = Date.now() - progressStartTime;
      const pct = Math.min(100, (elapsed / SLIDESHOW_INTERVAL_MS) * 100);
      if (progressFill) {
        progressFill.style.width = `${pct.toFixed(1)}%`;
      }
    };

    const startAutoTimer = () => {
      clearInterval(autoSlideshowTimer);
      clearInterval(progressTimer);
      progressStartTime = Date.now();
      if (progressFill) progressFill.style.width = '0%';

      progressTimer = setInterval(tickProgress, 50);

      autoSlideshowTimer = setInterval(() => {
        if (!isPaused) {
          goToIndex(activeStageIdx + 1);
        }
      }, SLIDESHOW_INTERVAL_MS);
    };

    const restartAutoTimer = () => {
      startAutoTimer();
    };

    // Arrow navigation
    if (prevArrow) {
      prevArrow.onclick = () => goToIndex(activeStageIdx - 1);
    }
    if (nextArrow) {
      nextArrow.onclick = () => goToIndex(activeStageIdx + 1);
    }

    // Keyboard support on featured section
    featuredSection.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToIndex(activeStageIdx - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToIndex(activeStageIdx + 1);
      }
    });

    // Pause slideshow on hover / resume on leave
    featuredSection.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    featuredSection.addEventListener('mouseleave', () => {
      isPaused = false;
      progressStartTime = Date.now();
    });

    // Touch swipe support on arena
    let touchStartX = 0;
    arenaWrap.addEventListener('touchstart', (e) => {
      isPaused = true;
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    arenaWrap.addEventListener('touchend', (e) => {
      isPaused = false;
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) {
          goToIndex(activeStageIdx + 1);
        } else {
          goToIndex(activeStageIdx - 1);
        }
      } else {
        restartAutoTimer();
      }
    }, { passive: true });

    // Initialize first state
    updateStagePositions(0);
    startAutoTimer();

    // Clean up timer on route unload if needed
    if (window.__stageAutoCleanup) {
      window.__stageAutoCleanup();
    }
    window.__stageAutoCleanup = () => {
      clearInterval(autoSlideshowTimer);
      clearInterval(progressTimer);
    };
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
