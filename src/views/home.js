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
          <h1 style="font-family: var(--font-display); font-size: clamp(3rem, 6.2vw, 5.5rem); font-weight: 700; line-height: 1.05; letter-spacing: -0.04em; color: #FFFFFF; margin-bottom: 2rem; text-wrap: balance; outline: none;">
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
                  <span class="regime-word" data-word-idx="0" style="display: inline-block; will-change: opacity, transform, filter;">Engineered</span>
                  <span class="regime-word" data-word-idx="1" style="display: inline-block; will-change: opacity, transform, filter;">for</span>
                  <span class="regime-word" data-word-idx="2" style="display: inline-block; will-change: opacity, transform, filter;">extreme</span>
                </div>
                <div style="margin-top: 0.25rem;">
                  <span class="regime-word regime-accent" data-word-idx="3" style="display: inline-block; color: var(--accent); will-change: opacity, transform, filter, text-shadow;">operating</span>
                  <span class="regime-word regime-accent" data-word-idx="4" style="display: inline-block; color: var(--accent); will-change: opacity, transform, filter, text-shadow;">regimes.</span>
                </div>
              </h2>
              <!-- Premium Sine Wave Line with Subtle Random Amplitude Variations (No borders, boxes, or surrounding text) -->
              <div style="margin: 2.25rem auto 0; width: 180px; max-width: 80vw; display: flex; justify-content: center; align-items: center; pointer-events: none;">
                <canvas id="regime-sine-wave-canvas" width="360" height="48" style="width: 180px; height: 24px; display: block; will-change: transform, opacity;"></canvas>
              </div>
            </div>
          </div>
        </section>
      </div> <!-- /middle-pinned-layer -->

      <!-- POST-REGIMES SURFACE: Glides on top of pinned regimes motto -->
      <div id="post-regimes-panel" class="post-regimes-surface">
      <!-- FEATURED PRODUCTS: TEKEVER-Style 3D Depth Atmospheric Stage -->
      <section id="featured-products-section" class="featured-tekever-section" tabindex="0" aria-label="Featured antenna systems showcase">
        <!-- Interactive Ambient Cursor Light & Accent Glow Follower -->
        <div class="stage-cursor-light" aria-hidden="true"></div>
        <div class="stage-cursor-core" aria-hidden="true"></div>

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
          <button id="stage-meta-pill" class="stage-frosted-pill-btn" aria-label="Explore products" onclick="window.location.hash='#/products'">
            Explore &rarr;
          </button>

          <!-- Minimal Subtle Slideshow Progress Line -->
          <div class="stage-progress-bar-wrap" aria-hidden="true">
            <div id="stage-progress-fill" class="stage-progress-bar-fill"></div>
          </div>
        </div>
      </section>

    <!-- SHORT INTRO SECTION BEFORE SLIDESHOW (OUR CAPABILITIES) -->
    <section class="capabilities-intro-header" aria-label="Our Capabilities" style="padding: clamp(3.5rem, 7vh, 5rem) 0 clamp(2.5rem, 5vh, 3.5rem); background: #05090D; display: flex; align-items: center; justify-content: center; text-align: center;">
      <div class="container-wide">
        <h2 style="font-family: var(--font-mono); font-size: clamp(0.75rem, 1.1vw, 0.8125rem); color: var(--accent); text-transform: uppercase; letter-spacing: 0.16em; font-weight: 600; margin: 0;">
          Our Capabilities
        </h2>
      </div>
    </section>

    <!-- FULLSCREEN SYSTEM CAPABILITIES SLIDESHOW (STILL STAGE WITH DYNAMIC CONTENT) -->
    <section id="capabilities-scroll-track" class="capabilities-scroll-track" aria-label="System Capabilities">
      <div id="capabilities-sticky-stage" class="capabilities-sticky-stage">

        <!-- SLIDE 0: Design & Development -->
        <article class="cap-slide active" data-slide-idx="0">
          <div class="cap-slide-bg-wrap">
            <div class="cap-slide-bg" style="background-image: url('/assets/design-and-development.webp'); --cap-scale: 1;"></div>
            <div class="cap-slide-gradient"></div>
            <div class="cap-slide-accent-glow"></div>
          </div>
          <div class="container-wide cap-slide-container">
            <div class="cap-slide-content">
              <div class="cap-slide-kicker">ELECTROMAGNETIC SYNTHESIS</div>
              <h2 class="cap-slide-title">Design &amp; Development</h2>
              <p class="cap-slide-desc">
                High-fidelity 3D computational electromagnetic modeling, aperture synthesis, radiation pattern optimisation, and composite radome co-simulation under dynamic transonic pressures.
              </p>
              <a href="#/capabilities/design" class="cap-slide-link">
                <span>Explore Design &amp; Simulation</span>
                <span class="cap-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

        <!-- SLIDE 1: Precision Manufacturing -->
        <article class="cap-slide" data-slide-idx="1">
          <div class="cap-slide-bg-wrap">
            <div class="cap-slide-bg" style="background-image: url('/assets/precision-manufacturing.webp'); --cap-scale: 1.035;"></div>
            <div class="cap-slide-gradient"></div>
            <div class="cap-slide-accent-glow"></div>
          </div>
          <div class="container-wide cap-slide-container">
            <div class="cap-slide-content">
              <div class="cap-slide-kicker">AEROSPACE COMPOSITES</div>
              <h2 class="cap-slide-title">Precision Manufacturing</h2>
              <p class="cap-slide-desc">
                AS9100 Rev D facility in Cochin. Cleanroom pre-preg lay-up, high-pressure autoclave consolidation, CNC micro-machining, and hermetic environmental sealing for mission-critical flight hardware.
              </p>
              <a href="#/capabilities/manufacturing" class="cap-slide-link">
                <span>Explore Manufacturing Facility</span>
                <span class="cap-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

        <!-- SLIDE 2: Tactical Customisation -->
        <article class="cap-slide" data-slide-idx="2">
          <div class="cap-slide-bg-wrap">
            <div class="cap-slide-bg" style="background-image: url('/assets/tactical-customization.webp'); --cap-scale: 1.035;"></div>
            <div class="cap-slide-gradient"></div>
            <div class="cap-slide-accent-glow"></div>
          </div>
          <div class="container-wide cap-slide-container">
            <div class="cap-slide-content">
              <div class="cap-slide-kicker">PLATFORM ADAPTATION</div>
              <h2 class="cap-slide-title">Tactical Customisation</h2>
              <p class="cap-slide-desc">
                Bespoke mechanical baseplates and low-profile conformal radomes tailored to fighter fuselages, helicopter tail booms, naval masts, and armoured tactical vehicle hulls.
              </p>
              <a href="#/capabilities/customisation" class="cap-slide-link">
                <span>Explore Platform Customisation</span>
                <span class="cap-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

        <!-- SLIDE 3: Testing & Qualification -->
        <article class="cap-slide" data-slide-idx="3">
          <div class="cap-slide-bg-wrap">
            <div class="cap-slide-bg" style="background-image: url('/assets/testing-and-qualification.webp'); --cap-scale: 1.035;"></div>
            <div class="cap-slide-gradient"></div>
            <div class="cap-slide-accent-glow"></div>
          </div>
          <div class="container-wide cap-slide-container">
            <div class="cap-slide-content">
              <div class="cap-slide-kicker">FULL-SPECTRUM METROLOGY</div>
              <h2 class="cap-slide-title">Testing &amp; Qualification</h2>
              <p class="cap-slide-desc">
                Indoor anechoic chamber testing up to 20 GHz, outdoor open-air ranges 20–500 MHz, 32-foot reference ground plane compliant with MIL-DTL-85670C, and environmental qualification.
              </p>
              <a href="#/capabilities/testing" class="cap-slide-link">
                <span>Explore Test Protocols</span>
                <span class="cap-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- THE VERDANT STORY SECTION -->
    <section id="verdant-story-section" class="verdant-story-section" style="position: relative; padding: clamp(6.5rem, 15vh, 9.5rem) 0; overflow: hidden; background: #05090D; border-bottom: 1px solid var(--border);">
      <div class="verdant-story-bg-wrap" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;">
        <div class="verdant-story-bg-img" style="position: absolute; inset: -60px -40px; background-image: url('/assets/verdant-story-section-background.webp'); background-size: cover; background-repeat: no-repeat; background-position: center; opacity: 0.82; mix-blend-mode: screen; filter: brightness(1.22) contrast(1.1); -webkit-mask-image: radial-gradient(ellipse 72% 65% at 50% 50%, black 25%, rgba(0,0,0,0.85) 55%, transparent 85%); mask-image: radial-gradient(ellipse 72% 65% at 50% 50%, black 25%, rgba(0,0,0,0.85) 55%, transparent 85%); will-change: transform; transition: transform 0.15s ease-out;"></div>
        <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, #05090D 0%, transparent 22%, transparent 78%, #05090D 100%), linear-gradient(to right, #05090D 0%, transparent 18%, transparent 82%, #05090D 100%);"></div>
      </div>
      <div class="container-wide" style="position: relative; z-index: 2;">
        <div style="max-width: 900px; margin: 0 auto; text-align: center; text-shadow: 0 2px 14px rgba(0,0,0,0.85);">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.25rem; font-weight: 600;">
            THE VERDANT STORY
          </div>
          <h2 style="font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 700; line-height: 1.15; color: var(--text); margin-bottom: 1.75rem; text-wrap: balance;">
            From a Cochin workshop to mission-critical defence systems worldwide.
          </h2>
          <p style="font-size: 1.125rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 2.5rem; text-wrap: balance;">
            Founded in 1997 with an unyielding commitment to precision RF engineering. Today Verdant is CEMILAC approved, AS9100 Rev D certified, and the trusted partner for HAL, ISRO, and DRDO.
          </p>
          <a href="#/about" class="btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>Read our story</span>
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

    <!-- NEWSROOM / MILESTONES (Reimagined Horizontal Vertical Rectangles) -->
    <section id="news-section" style="padding: clamp(5rem, 10vh, 7.5rem) 0; background: var(--surface); border-bottom: 1px solid var(--border); overflow: hidden;">
      <div class="container-wide">
        <div style="margin-bottom: 2.5rem;">
          <h2 style="font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 700; color: var(--text); margin: 0; letter-spacing: -0.02em;">
            News
          </h2>
        </div>

        <!-- Horizontally Scrollable Cards Row -->
        <div class="news-horizontal-track" id="news-horizontal-track" onscroll="window.handleNewsScroll(this)">
          
          <div class="news-vertical-card active" data-news-id="siati" onmouseenter="window.handleNewsCardHover(this)" onclick="window.openNewsArticle('siati')" role="button" tabindex="0">
            <img src="/assets/award.jpeg" alt="SIATI Indigenisation Award" class="news-card-img" />
            <div class="news-card-overlay"></div>
            <div class="news-card-content">
              <div class="news-card-date">2001 &amp; 2016</div>
              <h3 class="news-card-title">SIATI Award for Aerospace Indigenisation</h3>
              <p class="news-card-peek">
                Conferred twice by Society of Indian Aerospace Technologies &amp; Industries for indigenous airborne antennas and radomes on LCA Tejas and combat aircraft.
              </p>
              <div class="news-card-prompt">
                <span>Read Full Article</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>

          <div class="news-vertical-card" data-news-id="media" onmouseenter="window.handleNewsCardHover(this)" onclick="window.openNewsArticle('media')" role="button" tabindex="0">
            <img src="/assets/collage.png" alt="Verdant Media Documentary" class="news-card-img" />
            <div class="news-card-overlay"></div>
            <div class="news-card-content">
              <div class="news-card-date">OCTOBER 2023</div>
              <h3 class="news-card-title">Verdant Featured on National Television</h3>
              <p class="news-card-peek">
                Television feature highlighting Verdant's high-technology journey from Cochin to international defence supply chains and fighter jet integration.
              </p>
              <div class="news-card-prompt">
                <span>Read Full Article</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>

          <div class="news-vertical-card" data-news-id="as9100" onmouseenter="window.handleNewsCardHover(this)" onclick="window.openNewsArticle('as9100')" role="button" tabindex="0">
            <img src="/assets/as9100d-certified-logo.png" alt="AS9100 Rev D Quality Certification" class="news-card-img" />
            <div class="news-card-overlay"></div>
            <div class="news-card-content">
              <div class="news-card-date">JUNE 2024</div>
              <h3 class="news-card-title">AS 9100 Rev D &amp; ISO 9001:2015 Recertification</h3>
              <p class="news-card-peek">
                Certified to AS9100 since June 2009 with continuous renewal to Rev D. Rigorous audit cycles upholding international aerospace and defence quality standards.
              </p>
              <div class="news-card-prompt">
                <span>Read Full Article</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>

          <div class="news-vertical-card" data-news-id="satcom" onmouseenter="window.handleNewsCardHover(this)" onclick="window.openNewsArticle('satcom')" role="button" tabindex="0">
            <img src="/assets/hero/space.webp" alt="Next-Gen Airborne Satcom" class="news-card-img" />
            <div class="news-card-overlay"></div>
            <div class="news-card-content">
              <div class="news-card-date">JANUARY 2025</div>
              <h3 class="news-card-title">Next-Gen Airborne Satcom &amp; UAV Antennas</h3>
              <p class="news-card-peek">
                Coimbatore R&amp;D centre unveils ultra-low-profile conformal SATCOM apertures and lightweight UAV telemetry antennas entering flight qualification.
              </p>
              <div class="news-card-prompt">
                <span>Read Full Article</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>

          <div class="news-vertical-card" data-news-id="tejas" onmouseenter="window.handleNewsCardHover(this)" onclick="window.openNewsArticle('tejas')" role="button" tabindex="0">
            <img src="/assets/jet.webp" alt="LCA Tejas Combat Jet" class="news-card-img" />
            <div class="news-card-overlay"></div>
            <div class="news-card-content">
              <div class="news-card-date">NOVEMBER 2025</div>
              <h3 class="news-card-title">Multiband Conformal Arrays for Fighter Aircraft</h3>
              <p class="news-card-peek">
                Flush-mounted composite antenna radomes successfully completing Mach 1.8 thermal shock and high-g aerodynamic flight validation trials.
              </p>
              <div class="news-card-prompt">
                <span>Read Full Article</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- News Article Dialog Modal -->
    <div id="news-article-modal" class="news-article-overlay" role="dialog" aria-modal="true" style="display: none;" onclick="if(event.target===this) window.closeNewsArticle()">
      <div class="news-article-dialog" onclick="event.stopPropagation()">
        <button onclick="window.closeNewsArticle()" class="news-article-close-btn" aria-label="Close article">&times;</button>
        <div id="news-article-content"></div>
      </div>
    </div>
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

    // 2. Globe 1:1 scroll synchronization & performance optimization (pause when scrolled past regimes section)
    const regimesSec = document.getElementById('regimes-section');
    const regimesRect = regimesSec ? regimesSec.getBoundingClientRect() : null;
    const isPastRegimes = regimesRect ? (regimesRect.bottom < -40) : (scrollY > vh * 3.5);

    if (globeInstance) {
      if (isPastRegimes) {
        globeInstance.pause();
      } else {
        globeInstance.resume();
        const globeProgress = Math.min(2.5, scrollY / vh);
        globeInstance.onScrollUpdate(globeProgress);
      }
    }

    if (canvasContainer) {
      canvasContainer.style.opacity = isPastRegimes ? '0' : '1';
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
    const postRegimesPanel = document.getElementById('post-regimes-panel');

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

      // Scroll-away animation: as user scrolls further and post-regimes-panel glides over or moves past
      let scrollAwayProgress = 0;
      if (postRegimesPanel) {
        const panelRect = postRegimesPanel.getBoundingClientRect();
        // As postRegimesPanel top moves from bottom of screen towards center
        if (panelRect.top < vh) {
          scrollAwayProgress = Math.min(1, Math.max(0, (vh - panelRect.top) / (vh * 0.75)));
        }
      }

      const words = regimesSec.querySelectorAll('.regime-word');
      const totalWords = words.length;
      words.forEach((w, idx) => {
        const threshold = idx / (totalWords - 1);
        const wordSpread = 0.42;
        const startW = threshold * (1 - wordSpread);
        const wProgress = Math.min(1, Math.max(0, (regimeProgress - startW) / wordSpread));

        // When scrolling away: stagger words fading out, lifting, and dispersing
        const exitStagger = (totalWords - 1 - idx) / (totalWords - 1);
        const exitProgress = Math.min(1, Math.max(0, (scrollAwayProgress - exitStagger * 0.3) / 0.7));

        const baseOp = 0.20 + wProgress * 0.80;
        const finalOp = Math.max(0, baseOp * (1 - exitProgress * 0.95));

        const entryTy = (1 - wProgress) * 20;
        const exitTy = -exitProgress * 48;
        const totalTy = entryTy + exitTy;

        const entryBlur = (1 - wProgress) * 5;
        const exitBlur = exitProgress * 8;
        const totalBlur = entryBlur + exitBlur;

        w.style.opacity = finalOp.toFixed(3);
        w.style.transform = `translateY(${totalTy.toFixed(1)}px) scale(${(1 - exitProgress * 0.08).toFixed(3)})`;
        w.style.filter = totalBlur > 0.3 ? `blur(${totalBlur.toFixed(1)}px)` : 'none';

        if (w.classList.contains('regime-accent')) {
          const glow = Math.max(0, (wProgress * 36) * (1 - exitProgress));
          w.style.textShadow = glow > 0.5 ? `0 0 ${glow.toFixed(1)}px var(--accent-glow)` : 'none';
        }
      });

      const sineCanvas = document.getElementById('regime-sine-wave-canvas');
      if (sineCanvas) {
        const lineOpacity = Math.max(0, (0.25 + regimeProgress * 0.75) * (1 - scrollAwayProgress)).toFixed(2);
        sineCanvas.style.opacity = lineOpacity;
        const lineScale = Math.max(0.7, (0.85 + regimeProgress * 0.15) * (1 - scrollAwayProgress * 0.15)).toFixed(3);
        sineCanvas.style.transform = `scale(${lineScale})`;
      }

      const heading = document.getElementById('regime-motto-heading');
      if (heading) {
        const s = (0.93 + regimeProgress * 0.07) * (1 - scrollAwayProgress * 0.05);
        const ls = (-0.012 - regimeProgress * 0.023) + (scrollAwayProgress * 0.04);
        heading.style.transform = `scale(${s.toFixed(3)})`;
        heading.style.letterSpacing = `${ls.toFixed(4)}em`;
      }
    }

    // 5. System Capabilities Fullscreen Scroll Slideshow & Parallax Exit
    const capTrack = document.getElementById('capabilities-scroll-track');
    const capStage = document.getElementById('capabilities-sticky-stage');
    const storySection = document.getElementById('verdant-story-section');
    if (capTrack) {
      const rect = capTrack.getBoundingClientRect();
      const trackHeight = capTrack.offsetHeight - window.innerHeight;
      if (trackHeight > 0) {
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / trackHeight));
        if (typeof window.updateCapSlideshowProgress === 'function') {
          window.updateCapSlideshowProgress(progress);
        }
      }

      // Parallax effect when leaving capabilities section into the next section
      if (capStage) {
        const exitScrolled = window.innerHeight - rect.bottom;
        if (exitScrolled > 0) {
          const exitProgress = Math.min(1, exitScrolled / window.innerHeight);
          capStage.style.transform = `translate3d(0, ${exitProgress * -45}px, 0) scale(${(1 - exitProgress * 0.04).toFixed(3)})`;
          capStage.style.opacity = Math.max(0, 1 - exitProgress * 0.75).toFixed(3);
        } else {
          capStage.style.transform = 'translate3d(0, 0, 0) scale(1)';
          capStage.style.opacity = '1';
        }
      }
    }

    // Parallax on Verdant Story section background
    if (storySection) {
      const storyRect = storySection.getBoundingClientRect();
      if (storyRect.top < window.innerHeight && storyRect.bottom > 0) {
        const totalDist = window.innerHeight + storySection.offsetHeight;
        const storyProgress = (window.innerHeight - storyRect.top) / totalDist;
        const storyBg = storySection.querySelector('.verdant-story-bg-img');
        if (storyBg) {
          const parallaxOffset = (storyProgress - 0.5) * -45;
          storyBg.style.transform = `translate3d(0, ${parallaxOffset.toFixed(1)}px, 0)`;
        }
      }
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
      image: '/assets/products/JC-50/1.webp',
      alt: 'JC 50 C-Band Blade Antenna'
    },
    {
      id: 'jd-120-t1b',
      code: 'JD 120 T1B',
      watermark: 'JD 120',
      tagline: 'The Tactical Backbone',
      eyebrow: 'JD 120 T1B',
      image: '/assets/products/JD-120-T1B/1.webp',
      alt: 'JD 120 Tactical V/UHF Blade Antenna'
    },
    {
      id: 'jd-401-s1g-a',
      code: 'JD 401-S1G-A',
      watermark: 'JD 401',
      tagline: 'The High-Power Link',
      eyebrow: 'JD 401-S1G-A',
      image: '/assets/products/JD-401-S1G-A/1.webp',
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
        const inner = el.querySelector('.stage-item-float-inner');
        if (inner) {
          inner.style.transform = '';
          inner.style.filter = '';
        }
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

      // Wire pill button to Explore / products page
      if (pillBtn) {
        pillBtn.onclick = () => {
          window.location.hash = '#/products';
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

    // Interactive Ambient Cursor Light & Accent Glow Follower
    const cursorLight = featuredSection.querySelector('.stage-cursor-light');
    const cursorCore = featuredSection.querySelector('.stage-cursor-core');
    let cursorRaf = null;
    let targetX = -999;
    let targetY = -999;
    let currentX = -999;
    let currentY = -999;
    let isHoveringSection = false;

    const renderCursorLight = () => {
      if (isHoveringSection && targetX > -500) {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;

        if (cursorLight) {
          cursorLight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
        if (cursorCore) {
          cursorCore.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        }
      }
      cursorRaf = requestAnimationFrame(renderCursorLight);
    };
    cursorRaf = requestAnimationFrame(renderCursorLight);

    featuredSection.addEventListener('mouseenter', (e) => {
      isPaused = true;
      isHoveringSection = true;
      const rect = featuredSection.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      currentX = targetX;
      currentY = targetY;
      if (cursorLight) cursorLight.style.opacity = '1';
      if (cursorCore) cursorCore.style.opacity = '0.9';
    });

    featuredSection.addEventListener('mousemove', (e) => {
      const rect = featuredSection.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      if (!isHoveringSection) {
        isHoveringSection = true;
        if (cursorLight) cursorLight.style.opacity = '1';
        if (cursorCore) cursorCore.style.opacity = '0.9';
      }

      // 3D Parallax & specular tilt on active center product
      const activeCenterItem = featuredSection.querySelector('.stage-hardware-item.pos-center .stage-item-float-inner');
      if (activeCenterItem) {
        const itemRect = activeCenterItem.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const dx = (e.clientX - itemCenterX) / (window.innerWidth * 0.45);
        const dy = (e.clientY - itemCenterY) / (window.innerHeight * 0.45);
        const clampDx = Math.max(-1, Math.min(1, dx));
        const clampDy = Math.max(-1, Math.min(1, dy));

        const rotX = -clampDy * 12;
        const rotY = clampDx * 15;
        activeCenterItem.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
        activeCenterItem.style.filter = `drop-shadow(0 24px 38px rgba(0, 0, 0, 0.9)) drop-shadow(${(-clampDx * 14).toFixed(1)}px ${(-clampDy * 14).toFixed(1)}px 30px rgba(3, 188, 159, 0.42))`;
      }
    });

    featuredSection.addEventListener('mouseleave', () => {
      isPaused = false;
      isHoveringSection = false;
      progressStartTime = Date.now();
      if (cursorLight) cursorLight.style.opacity = '0';
      if (cursorCore) cursorCore.style.opacity = '0';

      const activeCenterItem = featuredSection.querySelector('.stage-hardware-item.pos-center .stage-item-float-inner');
      if (activeCenterItem) {
        activeCenterItem.style.transform = '';
        activeCenterItem.style.filter = '';
      }
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
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
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

  // Cursor interaction on capabilities background images
  if (window.__capMouseCleanup) {
    window.__capMouseCleanup();
    window.__capMouseCleanup = null;
  }
  const capStickyStage = document.getElementById('capabilities-sticky-stage');
  if (capStickyStage) {
    let capMouseX = 0;
    let capMouseY = 0;
    let capTargetMouseX = 0;
    let capTargetMouseY = 0;
    let capMouseRaf = null;

    const onCapMouseMove = (e) => {
      const rect = capStickyStage.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      // Subtle parallax: +/- 16px horizontal, +/- 12px vertical
      capTargetMouseX = nx * -16;
      capTargetMouseY = ny * -12;
    };

    const onCapMouseLeave = () => {
      capTargetMouseX = 0;
      capTargetMouseY = 0;
    };

    capStickyStage.addEventListener('mousemove', onCapMouseMove, { passive: true });
    capStickyStage.addEventListener('mouseleave', onCapMouseLeave, { passive: true });

    const updateCapMouse = () => {
      capMouseX += (capTargetMouseX - capMouseX) * 0.08;
      capMouseY += (capTargetMouseY - capMouseY) * 0.08;
      capStickyStage.style.setProperty('--cap-mouse-x', `${capMouseX.toFixed(2)}px`);
      capStickyStage.style.setProperty('--cap-mouse-y', `${capMouseY.toFixed(2)}px`);
      capMouseRaf = requestAnimationFrame(updateCapMouse);
    };
    capMouseRaf = requestAnimationFrame(updateCapMouse);

    window.__capMouseCleanup = () => {
      if (capMouseRaf) cancelAnimationFrame(capMouseRaf);
      capStickyStage.removeEventListener('mousemove', onCapMouseMove);
      capStickyStage.removeEventListener('mouseleave', onCapMouseLeave);
    };
  }

  // ========================================================
  // REGIMES SECTION: Premium Sine Wave Animation with Random Amplitude Variations
  // ========================================================
  if (window.__regimeSineCleanup) {
    window.__regimeSineCleanup();
    window.__regimeSineCleanup = null;
  }

  const sineCanvas = document.getElementById('regime-sine-wave-canvas');
  if (sineCanvas) {
    const ctx = sineCanvas.getContext('2d');
    let sineRafId = null;
    let phase = 0;
    
    // Perlin-like smooth random amplitude modulation using superimposed harmonics
    let targetAmp = 8;
    let currentAmp = 7;
    let ampTimer = 0;

    const renderSine = (timestamp) => {
      if (!ctx || !sineCanvas) return;
      const w = sineCanvas.width;
      const h = sineCanvas.height;
      const midY = h / 2;

      // Check visibility optimization
      const rect = sineCanvas.getBoundingClientRect();
      const isVisible = rect.bottom > -50 && rect.top < window.innerHeight + 50;

      if (isVisible) {
        ctx.clearRect(0, 0, w, h);

        // Slow, premium drift (not too fast)
        phase += 0.024;
        ampTimer += 0.009;

        // Smoothly fluctuating subtle amplitude (between 4.5px and 9.5px) with layered sine harmonics
        const randomFluctuation = Math.sin(ampTimer * 0.7) * 2.2 + Math.cos(ampTimer * 1.3) * 1.4 + Math.sin(ampTimer * 0.23) * 0.9;
        targetAmp = 6.8 + randomFluctuation;
        currentAmp += (targetAmp - currentAmp) * 0.04;

        // Draw soft ambient baseline glow line
        ctx.beginPath();
        ctx.moveTo(0, midY);
        ctx.lineTo(w, midY);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Draw animated sine wave with subtle tapered ends (fade to 0 at edges)
        ctx.beginPath();
        const cycles = 2.4; // 2.4 wavelengths across the line width
        const totalPoints = 120;

        for (let i = 0; i <= totalPoints; i++) {
          const t = i / totalPoints;
          const x = t * w;
          
          // Windowing envelope (sinusoidal taper at start & end so edges blend seamlessly into line)
          const envelope = Math.sin(t * Math.PI);

          // Subtle secondary harmonic for aerospace signal texture
          const wave = Math.sin(t * Math.PI * 2 * cycles - phase) * 0.88 + Math.sin(t * Math.PI * 4 * cycles - phase * 1.25) * 0.12;
          const y = midY + wave * currentAmp * envelope;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Premium gradient stroke (Teal / Emerald accent with soft glowing ends)
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, 'rgba(3, 188, 159, 0.1)');
        grad.addColorStop(0.18, 'rgba(3, 188, 159, 0.8)');
        grad.addColorStop(0.5, 'rgba(122, 245, 224, 1.0)');
        grad.addColorStop(0.82, 'rgba(3, 188, 159, 0.8)');
        grad.addColorStop(1, 'rgba(3, 188, 159, 0.1)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(3, 188, 159, 0.45)';
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      sineRafId = requestAnimationFrame(renderSine);
    };

    sineRafId = requestAnimationFrame(renderSine);

    window.__regimeSineCleanup = () => {
      if (sineRafId) cancelAnimationFrame(sineRafId);
    };
  }
}

// ========================================================
// SYSTEM CAPABILITIES: Still Stage with Seamless Image Fade & Kinetic HUD Transition
// ========================================================
window.updateCapSlideshowProgress = function(progress) {
  const slides = document.querySelectorAll('.cap-slide');
  if (!slides || slides.length === 0) return;

  const total = slides.length; // 4
  const intervals = total - 1; // 3
  const p = Math.max(0, Math.min(intervals, progress * intervals));

  // Determine current active pair: baseIdx and nextIdx
  let baseIdx = Math.floor(p);
  if (baseIdx >= total - 1) {
    baseIdx = total - 2;
  }
  const nextIdx = baseIdx + 1;
  const frac = Math.max(0, Math.min(1, p - baseIdx));

  // Smoothstep easing for background crossfade
  const bgEased = frac * frac * (3 - 2 * frac);

  slides.forEach((slide, idx) => {
    const bgWrap = slide.querySelector('.cap-slide-bg-wrap');
    const bgImg = slide.querySelector('.cap-slide-bg');
    const content = slide.querySelector('.cap-slide-content');
    if (!bgWrap || !content) return;

    if (idx === baseIdx) {
      // Base slide: sits underneath at z-index 1, stays visible until next slide covers it
      slide.style.zIndex = '1';
      slide.style.pointerEvents = frac < 0.5 ? 'auto' : 'none';
      bgWrap.style.opacity = '1';

      const scale = 1.0 + bgEased * 0.035;
      if (bgImg) {
        bgImg.style.setProperty('--cap-scale', scale.toFixed(3));
      }

      // Content transition out (plateau until 0.35, then glides up & fades)
      if (frac <= 0.35) {
        content.style.opacity = '1';
        content.style.transform = 'translate3d(0, 0, 0)';
        content.style.pointerEvents = 'auto';
      } else if (frac < 0.58) {
        const tOut = (frac - 0.35) / 0.23;
        const easedOut = tOut * tOut * (3 - 2 * tOut);
        const op = Math.max(0, 1 - easedOut);
        const y = -36 * easedOut;
        content.style.opacity = op.toFixed(3);
        content.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
        content.style.pointerEvents = op > 0.4 ? 'auto' : 'none';
      } else {
        content.style.opacity = '0';
        content.style.transform = 'translate3d(0, -36px, 0)';
        content.style.pointerEvents = 'none';
      }

    } else if (idx === nextIdx) {
      // Next slide: sits on top at z-index 2, background fades in smoothly over base slide
      slide.style.zIndex = '2';
      slide.style.pointerEvents = frac >= 0.5 ? 'auto' : 'none';
      bgWrap.style.opacity = bgEased.toFixed(3);

      const scale = 1.035 - bgEased * 0.035;
      if (bgImg) {
        bgImg.style.setProperty('--cap-scale', scale.toFixed(3));
      }

      // Content transition in (emerges from 0.42, rises into view, settles at 0.65)
      if (frac < 0.42) {
        content.style.opacity = '0';
        content.style.transform = 'translate3d(0, 36px, 0)';
        content.style.pointerEvents = 'none';
      } else if (frac <= 0.65) {
        const tIn = (frac - 0.42) / 0.23;
        const easedIn = tIn * tIn * (3 - 2 * tIn);
        const op = Math.min(1, easedIn);
        const y = 36 * (1 - easedIn);
        content.style.opacity = op.toFixed(3);
        content.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
        content.style.pointerEvents = op > 0.4 ? 'auto' : 'none';
      } else {
        content.style.opacity = '1';
        content.style.transform = 'translate3d(0, 0, 0)';
        content.style.pointerEvents = 'auto';
      }

    } else {
      // Inactive slide
      slide.style.zIndex = '0';
      slide.style.pointerEvents = 'none';
      bgWrap.style.opacity = '0';
      content.style.opacity = '0';
      content.style.pointerEvents = 'none';
      if (bgImg) {
        bgImg.style.setProperty('--cap-scale', '1.035');
      }
    }
  });
};

// ========================================================
// NEWSROOM: Reimagined Horizontal Cards & Full Story Modal
// ========================================================
export const NEWS_ARTICLES = {
  siati: {
    id: 'siati',
    title: 'SIATI Award for Aerospace Indigenisation',
    date: '2001 & 2016',
    category: 'DEFENCE RECOGNITION',
    image: '/assets/award.jpeg',
    summary: 'Conferred twice by Society of Indian Aerospace Technologies & Industries for critical airborne antennas and RF radomes on LCA Tejas and combat aircraft.',
    body: [
      'The Society of Indian Aerospace Technologies & Industries (SIATI) conferred its prestigious National Award for Aerospace Indigenisation upon Verdant Telemetry in both 2001 and 2016. The honor recognizes more than two decades of groundbreaking domestic self-reliance in aerospace RF engineering.',
      'From custom C-Band telemetry apertures to high-G supersonic blade antennas, Verdant succeeded in engineering sovereign alternatives to critical imported avionics antennas. These systems have accumulated tens of thousands of incident-free flight hours across India\'s frontline fighter fleets and transport aircraft.',
      '“Indigenous microwave hardware requires mastery across electromagnetic simulation, precision composite chemistry, and rigorous environmental stress screening,” remarked Verdant\'s leadership. “This recognition stands as a testament to our engineering team\'s relentless commitment to certified airworthiness.”'
    ]
  },
  media: {
    id: 'media',
    title: 'Verdant Featured on National Television',
    date: 'OCTOBER 2023',
    category: 'MEDIA BROADCAST',
    image: '/assets/collage.png',
    summary: 'Television documentary showcasing Verdant\'s high-technology journey from Cochin to international defence supply chains and fighter jet integration.',
    body: [
      'In a special primetime documentary broadcast across national television, Verdant Telemetry was highlighted as one of India\'s quintessential aerospace success stories, tracing its roots from a small Cochin workshop in 1997 to a tier-1 defence supplier today.',
      'The broadcast offered viewers rare behind-the-scenes access to Verdant\'s cleanroom composite fabrication suites, where autoclave-cured radomes are manufactured to sub-millimeter tolerances, alongside the microwave testing ranges in Cochin and the dedicated R&D Design Centre in Coimbatore.',
      'Interviews with leading RF engineers underscored how Verdant supplies mission-critical apertures to HAL, ISRO, and DRDO, as well as international aerospace integrators such as Elbit Systems and Sierra Nevada Corporation.'
    ]
  },
  as9100: {
    id: 'as9100',
    title: 'AS 9100 Rev D & ISO 9001:2015 Recertification',
    date: 'JUNE 2024',
    category: 'AEROSPACE QUALITY',
    image: '/assets/as9100d-certified-logo.png',
    summary: 'Continuous aerospace certification since June 2009 upholding stringent international defence quality standards across composites, RF metrology, and airworthiness.',
    body: [
      'Verdant Telemetry has successfully renewed its AS9100 Rev D and ISO 9001:2015 aerospace quality certifications, continuing a continuous certification record that began in June 2009.',
      'AS9100 Rev D incorporates all requirements of ISO 9001 with comprehensive aerospace additions governing risk management, configuration control, traceability, and product safety throughout design and manufacturing cycles.',
      'Combined with CEMILAC design and manufacturing approvals, this certification verifies that every antenna leaving the Cochin facility meets the exacting quality thresholds demanded by supersonic military aircraft and civil aviation regulators.'
    ]
  },
  satcom: {
    id: 'satcom',
    title: 'Next-Gen Airborne Satcom & UAV Antennas',
    date: 'JANUARY 2025',
    category: 'R&D INNOVATION',
    image: '/assets/hero/space.webp',
    summary: 'Coimbatore R&D centre unveils ultra-low-profile conformal SATCOM apertures and lightweight UAV telemetry antennas entering flight qualification.',
    body: [
      'Engineers at Verdant\'s Coimbatore R&D Design Centre unveiled a new generation of conformal airborne SATCOM and ultra-lightweight UAV telemetry antenna systems designed for next-generation autonomous flight platforms.',
      'Featuring microstrip patch arrays integrated flush into composite fuselage skins, these antennas eliminate parasitic aerodynamic drag while providing wideband satellite uplink channels in challenging operational environments.',
      'The initial flight-test units have completed comprehensive vibration, shock, and thermal cycling tests in accordance with MIL-STD-810G, paving the way for customer platform integration trials in late 2025.'
    ]
  },
  tejas: {
    id: 'tejas',
    title: 'Multiband Conformal Arrays for Fighter Aircraft',
    date: 'NOVEMBER 2025',
    category: 'AIRBORNE COMBAT',
    image: '/assets/jet.webp',
    summary: 'Flush-mounted composite antenna radomes successfully completing Mach 1.8 thermal shock and high-g aerodynamic flight validation trials.',
    body: [
      'Verdant Telemetry has completed supersonic qualification trials for its multiband conformal blade antenna suite engineered for high-performance combat airframes including the LCA Tejas Mk1A and future frontline platforms.',
      'The consolidated multi-connector assembly allows multiple communication and electronic warfare radios to share a single aerodynamic airfoil, reducing total aircraft drag and weight while maintaining superior RF isolation between transceiver channels.',
      'Environmental testing confirmed zero degradation under Mach 1.8 kinetic heating and high-g transonic buffeting, confirming full readiness for serial production delivery.'
    ]
  }
};

window.openNewsArticle = function(id) {
  const article = NEWS_ARTICLES[id];
  if (!article) return;
  const modal = document.getElementById('news-article-modal');
  const content = document.getElementById('news-article-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="position: relative; height: 230px; overflow: hidden; border-radius: 12px 12px 0 0; background: #05090D;">
      <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.55;" />
      <div style="position: absolute; inset: 0; background: linear-gradient(to top, #070D12 0%, rgba(7,13,18,0.4) 60%, transparent 100%);"></div>
      <div style="position: absolute; bottom: 1.25rem; left: 1.5rem; right: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); text-transform: uppercase; margin-bottom: 0.35rem; font-weight: 600;">
          <span>${article.category}</span>
          <span>·</span>
          <span>${article.date}</span>
        </div>
        <h2 style="font-size: clamp(1.3rem, 2.8vw, 1.75rem); font-weight: 700; color: #FFFFFF; line-height: 1.25; margin: 0; letter-spacing: -0.02em;">
          ${article.title}
        </h2>
      </div>
    </div>
    <div style="padding: 1.75rem 1.5rem 2rem; color: #BACDC9; font-size: 0.95rem; line-height: 1.75; display: flex; flex-direction: column; gap: 1rem; max-height: calc(85vh - 230px); overflow-y: auto;">
      ${article.body.map(p => `<p style="margin: 0;">${p}</p>`).join('')}
      <div style="margin-top: 1rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">Verdant Telemetry Corporate Archive</span>
        <button onclick="window.closeNewsArticle()" class="btn-secondary" style="padding: 0.4rem 1.1rem; font-size: 0.8125rem; min-height: 36px;">Close Story</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeNewsArticle = function() {
  const modal = document.getElementById('news-article-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
};

window.handleNewsCardHover = function(cardEl) {
  const track = document.getElementById('news-horizontal-track');
  if (!track) return;
  const cards = track.querySelectorAll('.news-vertical-card');
  cards.forEach(c => c.classList.remove('active'));
  cardEl.classList.add('active');
};

window.handleNewsScroll = function(trackEl) {
  if (!trackEl) return;
  const cards = trackEl.querySelectorAll('.news-vertical-card');
  const trackCenter = trackEl.scrollLeft + trackEl.clientWidth / 2;
  let closestCard = null;
  let minDiff = Infinity;
  cards.forEach(c => {
    const cardCenter = c.offsetLeft + c.offsetWidth / 2;
    const diff = Math.abs(trackCenter - cardCenter);
    if (diff < minDiff) {
      minDiff = diff;
      closestCard = c;
    }
  });
  if (closestCard && !closestCard.classList.contains('active')) {
    cards.forEach(c => c.classList.remove('active'));
    closestCard.classList.add('active');
  }
};
