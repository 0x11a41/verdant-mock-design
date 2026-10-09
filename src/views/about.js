/**
 * About Us Page View ("From Kerala to the World")
 * Verdant Telemetry & Antenna Systems
 * Re-architected with clear narrative focus, real imagery, and zero jargon.
 */

import { TIMELINE } from '../data/timeline.js';

export let timelineFilter = 'All';

export function getFilteredMilestones(filter) {
  if (!filter || filter === 'All') return TIMELINE;
  
  if (filter === 'Foundations') {
    return TIMELINE.filter(t => parseInt(t.year) <= 2007);
  }
  if (filter === 'Certifications') {
    return TIMELINE.filter(t => parseInt(t.year) >= 2008 && parseInt(t.year) <= 2020);
  }
  if (filter === 'Modern') {
    return TIMELINE.filter(t => parseInt(t.year) >= 2021);
  }
  
  return TIMELINE.filter(t => t.type.toLowerCase() === filter.toLowerCase());
}

export function renderTimelineItems(filter) {
  const items = getFilteredMilestones(filter);
  return items.map(item => `
    <div class="about-timeline-card">
      <div class="about-timeline-year">${item.year}</div>
      <div class="about-timeline-content">
        <div class="about-timeline-headline">
          <span class="about-timeline-title">${item.title}</span>
          <span class="about-timeline-tag">${item.type}</span>
        </div>
        <p class="about-timeline-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

export function setTimelineFilter(filter) {
  timelineFilter = filter;
  const listContainer = document.getElementById('about-timeline-list');
  const buttons = document.querySelectorAll('.about-timeline-btn');
  
  if (listContainer) {
    listContainer.innerHTML = renderTimelineItems(filter);
    buttons.forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  } else {
    const mainContent = document.getElementById('main-content');
    if (mainContent && window.location.hash.startsWith('#/about')) {
      mainContent.innerHTML = renderAboutView();
    }
  }
}

if (typeof window !== 'undefined') {
  window.setTimelineFilter = setTimelineFilter;
}

export function renderAboutView() {
  return `
  <section style="padding: clamp(90px, 12vh, 130px) 0 80px; background: var(--bg); position: relative; overflow: hidden;">
    <div class="container-wide">

      <!-- ========================================================
           1. HERO: BOLD PURPOSE & HERITAGE
           ======================================================== -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: clamp(2rem, 5vw, 4.5rem); align-items: center; margin-bottom: 5.5rem;">
        <div>
          <div class="about-kicker">
            <span class="about-pulse-dot"></span>
            <span>VERDANT TELEMETRY &amp; ANTENNA SYSTEMS · EST. 1997</span>
          </div>

          <h1 style="font-family: var(--font-display); font-size: clamp(2.4rem, 4.8vw, 3.85rem); font-weight: 700; line-height: 1.1; color: #FFFFFF; letter-spacing: -0.03em; margin-bottom: 1.5rem; text-wrap: balance;">
            Precision antennas engineered where India meets the ocean.
          </h1>

          <p style="font-size: clamp(1.05rem, 1.4vw, 1.2rem); color: var(--text-muted); line-height: 1.7; margin-bottom: 2rem; max-width: 620px;">
            For nearly three decades, Verdant has engineered flight-critical antennas and radomes for frontline airframes, naval vessels, and tactical forces worldwide. From our headquarters in Kochi to global flight lines, we design systems that never compromise on signal fidelity.
          </p>

          <!-- 4 Focused Telemetry Metrics -->
          <div class="about-stats-ribbon">
            <div class="about-stat-box">
              <div class="about-stat-num">1997</div>
              <div class="about-stat-label">Founded in Kochi</div>
              <div class="about-stat-desc">29 years of sovereign aerospace heritage</div>
            </div>
            <div class="about-stat-box">
              <div class="about-stat-num">100+</div>
              <div class="about-stat-label">Active Fleets</div>
              <div class="about-stat-desc">Airborne, naval &amp; tactical deployments</div>
            </div>
            <div class="about-stat-box">
              <div class="about-stat-num">20 GHz</div>
              <div class="about-stat-label">In-House Test Range</div>
              <div class="about-stat-desc">Proprietary microwave anechoic chamber</div>
            </div>
            <div class="about-stat-box">
              <div class="about-stat-num">AS9100D</div>
              <div class="about-stat-label">Aerospace Certified</div>
              <div class="about-stat-desc">CEMILAC design &amp; airworthiness approval</div>
            </div>
          </div>
        </div>

        <!-- Historic Archive Visual Cockpit Card -->
        <div class="card" style="padding: 1rem; background: #060A0E; border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; position: relative; overflow: hidden; box-shadow: 0 20px 48px rgba(0,0,0,0.7);">
          <!-- Telemetry Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.65rem 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.06); font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-subtle);">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent);"></span>
              <span>KOCHI ARCHIVE // HISTORIC FLIGHT DECK</span>
            </div>
            <span style="color: var(--accent);">MISSION-PROVEN SINCE 1997</span>
          </div>

          <!-- Main Image -->
          <div style="position: relative; border-radius: 8px; overflow: hidden; margin: 0.75rem 0; background: #030608;">
            <img src="/assets/collage.png" alt="Verdant Telemetry 29-Year Journey" style="width: 100%; height: auto; display: block; filter: contrast(1.05) brightness(0.98); transition: transform 0.4s ease;" onerror="this.src='/assets/jet.webp';" />
            
            <!-- Quality Seal Floating Badge -->
            <div style="position: absolute; bottom: 0.85rem; right: 0.85rem; background: rgba(5, 9, 13, 0.92); border: 1px solid rgba(3, 188, 159, 0.4); backdrop-filter: blur(8px); padding: 0.45rem 0.75rem; border-radius: 8px; display: flex; align-items: center; gap: 0.65rem;">
              <img src="/assets/as9100d-certified-logo.png" alt="AS9100 Rev D Certified" style="height: 24px; width: auto; object-fit: contain;" onerror="this.style.display='none';" />
              <div style="text-align: left; line-height: 1.15;">
                <div style="font-family: var(--font-mono); font-size: 0.625rem; font-weight: 700; color: #FFFFFF;">AS9100 REV D</div>
                <div style="font-family: var(--font-mono); font-size: 0.5625rem; color: var(--accent);">AEROSPACE QUALITY</div>
              </div>
            </div>
          </div>

          <!-- Card Footer Metadata -->
          <div style="padding: 0.5rem 0.65rem 0.25rem; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-subtle);">
            <span>ORIGIN: KONTHURUTHY, COCHIN</span>
            <span style="color: #EAF2F0;">GLOBAL TIER-1 INTEGRATION</span>
          </div>
        </div>
      </div>

      <!-- ========================================================
           2. SOVEREIGN PARTNERS TRUST STRIP
           ======================================================== -->
      <div class="about-trust-strip">
        <div style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.25rem; font-weight: 600;">
          TRUSTED BY DEFENCE LEADERS &amp; QUALIFIED TO AEROSPACE STANDARDS
        </div>
        <div class="about-trust-row">
          <!-- DRDO -->
          <div class="about-trust-unit" title="Defence Research and Development Organisation">
            <img src="/assets/drdo.png" alt="DRDO" onerror="this.style.display='none';" />
            <div>
              <div style="font-size: 0.8125rem; font-weight: 600; color: #FFFFFF; font-family: var(--font-mono);">DRDO</div>
              <div style="font-size: 0.6875rem; color: var(--text-subtle);">Defence R&amp;D Org</div>
            </div>
          </div>

          <!-- HAL -->
          <div class="about-trust-unit" title="Hindustan Aeronautics Limited">
            <img src="/assets/hal.png" alt="HAL" onerror="this.style.display='none';" />
            <div>
              <div style="font-size: 0.8125rem; font-weight: 600; color: #FFFFFF; font-family: var(--font-mono);">HAL</div>
              <div style="font-size: 0.6875rem; color: var(--text-subtle);">Hindustan Aeronautics</div>
            </div>
          </div>

          <!-- ISRO -->
          <div class="about-trust-unit" title="Indian Space Research Organisation">
            <img src="/assets/isro.png" alt="ISRO" onerror="this.style.display='none';" />
            <div>
              <div style="font-size: 0.8125rem; font-weight: 600; color: #FFFFFF; font-family: var(--font-mono);">ISRO</div>
              <div style="font-size: 0.6875rem; color: var(--text-subtle);">Space Research Org</div>
            </div>
          </div>

          <!-- Indian Armed Forces -->
          <div class="about-trust-unit">
            <div style="padding: 0.4rem 0.75rem; background: rgba(255,255,255,0.05); border-radius: 6px; font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 600; color: #FFFFFF;">
              ARMED FORCES
            </div>
            <div>
              <div style="font-size: 0.8125rem; font-weight: 600; color: #FFFFFF; font-family: var(--font-mono);">IAF · NAVY · ARMY</div>
              <div style="font-size: 0.6875rem; color: var(--text-subtle);">Combat Platforms</div>
            </div>
          </div>

          <!-- CEMILAC -->
          <div class="about-trust-unit" title="Centre for Military Airworthiness and Certification">
            <div style="padding: 0.4rem 0.75rem; background: rgba(3,188,159,0.1); border: 1px solid rgba(3,188,159,0.3); border-radius: 6px; font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 600; color: var(--accent);">
              CEMILAC
            </div>
            <div>
              <div style="font-size: 0.8125rem; font-weight: 600; color: #FFFFFF; font-family: var(--font-mono);">CEMILAC</div>
              <div style="font-size: 0.6875rem; color: var(--text-subtle);">Airworthiness Design Approval</div>
            </div>
          </div>

          <!-- AS9100 Rev D -->
          <div class="about-trust-unit" title="AS9100 Rev D Aerospace Quality">
            <img src="/assets/as9100d-certified-logo.png" alt="AS9100 Rev D" onerror="this.style.display='none';" />
            <div>
              <div style="font-size: 0.8125rem; font-weight: 600; color: #FFFFFF; font-family: var(--font-mono);">AS9100 REV D</div>
              <div style="font-size: 0.6875rem; color: var(--accent);">Certified Since 2009</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================================
           3. THE VERDANT STORY: WHO WE ARE & HOW WE STARTED
           Clear, compelling editorial narrative without jargon.
           ======================================================== -->
      <div class="about-story-section">
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; font-weight: 600;">
            THE ORIGIN &amp; PURPOSE
          </div>
          <h2 style="font-family: var(--font-display); font-size: clamp(1.85rem, 3.2vw, 2.6rem); font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; margin-bottom: 1.25rem;">
            From a Cochin Workshop to Frontline Skies
          </h2>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.25rem;">
            In 1997, aerospace engineers Louis George and Kuruvilla George recognized a critical vulnerability in Indian aviation: frontline combat aircraft depended completely on imported antennas and radomes. If an antenna failed or detuned during high-speed maneuvers, replacements took months to arrive from overseas.
          </p>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
            Starting in Cochin, Verdant took on the challenge of designing and manufacturing antennas from first principles. By mastering both electromagnetic physics and composite radome manufacturing under one roof, Verdant quickly began delivering custom apertures for proven aircraft including the SEPECAT Jaguar strike fighter and AN-32 transports.
          </p>
          <div style="padding: 1.1rem 1.25rem; background: rgba(3,188,159,0.06); border-left: 3px solid var(--accent); border-radius: 0 8px 8px 0;">
            <div style="font-size: 0.875rem; color: #FFFFFF; font-weight: 600; margin-bottom: 0.25rem;">
              "When an aircraft pulls 9G in combat, the antenna cannot fail."
            </div>
            <div style="font-size: 0.8125rem; color: var(--text-muted);">
              Every design is qualified to withstand extreme vibration, supersonic temperatures, and electromagnetic interference before entering service.
            </div>
          </div>
        </div>

        <!-- Visual Media Grid with Real Assets -->
        <div class="about-story-media-grid">
          <div class="about-story-img-card">
            <img src="/assets/001.png" alt="Aperture craftsmanship in Cochin workshop" onerror="this.src='/assets/antina.webp';" />
            <div class="about-story-img-label">
              <span>WORKSHOP ORIGINS</span>
              <span style="color: var(--accent);">COCHIN 1997</span>
            </div>
          </div>
          <div class="about-story-img-card">
            <img src="/assets/jet.webp" alt="Frontline fighter aircraft integrations" onerror="this.src='/assets/hero/jet.webp';" />
            <div class="about-story-img-label">
              <span>FRONTLINE AIRFRAMES</span>
              <span style="color: var(--accent);">JAGUAR · TEJAS</span>
            </div>
          </div>
          <div class="about-story-img-card">
            <img src="/assets/award.jpeg" alt="National Aerospace Indigenisation Award" style="object-position: center 25%;" onerror="this.src='/assets/collage.png';" />
            <div class="about-story-img-label">
              <span>NATIONAL HONOURS</span>
              <span style="color: var(--accent);">SIATI AWARD</span>
            </div>
          </div>
          <div class="about-story-img-card">
            <img src="/assets/tactical-customization.webp" alt="Supersonic radome fabrication" onerror="this.src='/assets/products-banner.webp';" />
            <div class="about-story-img-label">
              <span>SUPERSONIC RADOMES</span>
              <span style="color: var(--accent);">DRDO TDF</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================================
           4. OUR CORE TENETS: HOW WE THINK & WORK
           Clean, structured 3-pillar philosophy (Replaces generic values).
           ======================================================== -->
      <div style="margin-bottom: 5.5rem;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; font-weight: 600;">
          ENGINEERING DISCIPLINE
        </div>
        <h2 style="font-family: var(--font-display); font-size: clamp(1.85rem, 3.2vw, 2.5rem); font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; margin-bottom: 2rem;">
          Three Principles That Define Every Antenna We Build
        </h2>

        <div class="about-pillars-grid">
          <div class="about-pillar-card">
            <div class="about-pillar-num">01 // INTEGRATED SOVEREIGNTY</div>
            <h3 class="about-pillar-title">Physics to Flight-Line Under One Roof</h3>
            <p class="about-pillar-desc">
              We do not outsource critical engineering steps. From electromagnetic simulation in Coimbatore, to autoclave composite curing and 20 GHz anechoic testing in Kochi, every stage is executed by our own engineers.
            </p>
          </div>

          <div class="about-pillar-card">
            <div class="about-pillar-num">02 // UNCOMPROMISING AIRWORTHINESS</div>
            <h3 class="about-pillar-title">Certified to Military Standards</h3>
            <p class="about-pillar-desc">
              Continuous AS9100 Rev D audit discipline and CEMILAC airworthiness design approvals govern all our serial production batches. Every unit is screened for extreme altitude, shock, and temperature cycles.
            </p>
          </div>

          <div class="about-pillar-card">
            <div class="about-pillar-num">03 // DIRECT ENGINEERING ACCESS</div>
            <h3 class="about-pillar-title">Collaborate Directly with Specialists</h3>
            <p class="about-pillar-desc">
              When defence programs need a custom baseplate, tailored radiation pattern, or bespoke aerodynamic radome, our senior microwave and mechanical engineers work directly with your platform design team.
            </p>
          </div>
        </div>
      </div>

      <!-- ========================================================
           5. IN-HOUSE FACILITIES: WHERE THE CRAFT HAPPENS
           Clean 4-card showcase using authentic assets.
           ======================================================== -->
      <div style="margin-bottom: 5.5rem;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 1rem; margin-bottom: 2rem;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; font-weight: 600;">
              FACILITIES &amp; METROLOGY
            </div>
            <h2 style="font-family: var(--font-display); font-size: clamp(1.85rem, 3.2vw, 2.5rem); font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em;">
              In-House RF &amp; Environmental Test Infrastructure
            </h2>
          </div>
          <p style="font-size: 0.9375rem; color: var(--text-muted); max-width: 480px; margin: 0; line-height: 1.6;">
            Every antenna design undergoes rigorous electrical characterization and environmental qualification across our proprietary test ranges.
          </p>
        </div>

        <div class="about-facility-grid">
          <!-- 1. Coimbatore Simulation Lab -->
          <div class="about-facility-card">
            <div class="about-facility-img-box">
              <img src="/assets/005.png" alt="Coimbatore R&D Design Centre" loading="lazy" onerror="this.src='/assets/design-and-development.webp';" />
              <span class="about-facility-pill">COIMBATORE R&amp;D</span>
            </div>
            <div class="about-facility-content">
              <h3 class="about-facility-title">Electromagnetic Simulation Lab</h3>
              <p class="about-facility-desc">
                Full-wave 3D electromagnetic modeling, phased array synthesis, and transonic aerodynamic flow simulation before fabricating physical prototypes.
              </p>
              <div class="about-facility-footer">
                <span>Domain: 3D Computational EM</span>
                <span>Coimbatore, TN</span>
              </div>
            </div>
          </div>

          <!-- 2. Composite Autoclave Cleanroom -->
          <div class="about-facility-card">
            <div class="about-facility-img-box">
              <img src="/assets/004.jpg" alt="Composite & Autoclave Cleanroom" loading="lazy" onerror="this.src='/assets/precision-manufacturing.webp';" />
              <span class="about-facility-pill">AS9100 CLEANROOM</span>
            </div>
            <div class="about-facility-content">
              <h3 class="about-facility-title">Composite Radome Cleanroom</h3>
              <p class="about-facility-desc">
                Class-controlled cleanroom for pre-preg composite lay-up, high-pressure autoclave consolidation, and CNC machining of aerospace radomes.
              </p>
              <div class="about-facility-footer">
                <span>Materials: Low-Loss Dielectrics</span>
                <span>Kochi, Kerala</span>
              </div>
            </div>
          </div>

          <!-- 3. RF Metrology Lab -->
          <div class="about-facility-card">
            <div class="about-facility-img-box">
              <img src="/assets/002.png" alt="RF Metrology Laboratory" loading="lazy" onerror="this.src='/assets/rf-engineering.webp';" />
              <span class="about-facility-pill">UP TO 40 GHz</span>
            </div>
            <div class="about-facility-content">
              <h3 class="about-facility-title">RF Metrology &amp; Network Analysis</h3>
              <p class="about-facility-desc">
                Calibrated Vector Network Analyzers and microwave test stations measuring VSWR, power handling, and signal phase with NABL traceability.
              </p>
              <div class="about-facility-footer">
                <span>Instrumentation: Keysight &amp; R&amp;S</span>
                <span>Kochi, Kerala</span>
              </div>
            </div>
          </div>

          <!-- 4. Anechoic Chamber -->
          <div class="about-facility-card">
            <div class="about-facility-img-box">
              <img src="/assets/003.png" alt="Indoor Anechoic Chamber up to 20 GHz" loading="lazy" onerror="this.src='/assets/testing-and-qualification.webp';" />
              <span class="about-facility-pill">1 GHz – 20 GHz</span>
            </div>
            <div class="about-facility-content">
              <h3 class="about-facility-title">Indoor Microwave Anechoic Chamber</h3>
              <p class="about-facility-desc">
                Fully shielded chamber lined with carbon-loaded absorbers for high-precision 3D radiation patterns, gain calibration, and radome insertion loss.
              </p>
              <div class="about-facility-footer">
                <span>Standard: IEEE-149 Test Range</span>
                <span>Kochi, Kerala</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Open-Air Range & Ground Plane Note -->
        <div class="card" style="padding: 1.35rem 1.75rem; background: #060A0E; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(3,188,159,0.1); border: 1px solid rgba(3,188,159,0.3); display: flex; align-items: center; justify-content: center; color: var(--accent); font-family: var(--font-mono); font-weight: 700; flex-shrink: 0;">
              32'
            </div>
            <div>
              <div style="font-weight: 600; color: #FFFFFF; font-size: 0.95rem;">32-Foot Ground Plane &amp; Outdoor Test Ranges</div>
              <div style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 0.15rem;">Outdoor ranges from 20 MHz to 500 MHz for tactical VHF/UHF tactical vehicle and mast qualification.</div>
            </div>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); background: rgba(3,188,159,0.08); padding: 0.35rem 0.8rem; border-radius: 6px; border: 1px solid rgba(3,188,159,0.25);">
            RANGE: 20 MHz – 500 MHz
          </div>
        </div>
      </div>

      <!-- ========================================================
           6. VERIFIED MILESTONES (1997–2025)
           Interactive tabbed timeline with clean, readable summaries.
           ======================================================== -->
      <div class="about-timeline-section">
        <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: 2rem;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; font-weight: 600;">
              PROVEN TRACK RECORD
            </div>
            <h2 style="font-family: var(--font-display); font-size: clamp(1.85rem, 3.2vw, 2.5rem); font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em;">
              Milestones Across Three Decades
            </h2>
          </div>

          <!-- Timeline Filter Tabs -->
          <div class="about-timeline-tabs">
            <button onclick="setTimelineFilter('All')" data-filter="All" class="about-timeline-btn ${timelineFilter === 'All' ? 'active' : ''}">All Milestones</button>
            <button onclick="setTimelineFilter('Foundations')" data-filter="Foundations" class="about-timeline-btn ${timelineFilter === 'Foundations' ? 'active' : ''}">1997–2007 Foundations</button>
            <button onclick="setTimelineFilter('Certifications')" data-filter="Certifications" class="about-timeline-btn ${timelineFilter === 'Certifications' ? 'active' : ''}">2008–2020 Certifications</button>
            <button onclick="setTimelineFilter('Modern')" data-filter="Modern" class="about-timeline-btn ${timelineFilter === 'Modern' ? 'active' : ''}">2021–Present Innovation</button>
          </div>
        </div>

        <div id="about-timeline-list" class="about-timeline-list">
          ${renderTimelineItems(timelineFilter)}
        </div>
      </div>

      <!-- ========================================================
           7. LEADERSHIP: GUIDED BY EXPERIENCE
           Real, respectful leadership dossiers.
           ======================================================== -->
      <div id="leadership" class="about-leadership-section">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.5rem; font-weight: 600;">
          EXECUTIVE LEADERSHIP &amp; MENTORSHIP
        </div>
        
        <div style="max-width: 860px; margin-bottom: 3rem;">
          <blockquote style="font-family: var(--font-display); font-size: clamp(1.35rem, 2.4vw, 1.85rem); font-weight: 500; color: #FFFFFF; line-height: 1.45; border-left: 3px solid var(--accent); padding-left: 1.5rem; margin-bottom: 0.85rem;">
            &ldquo;We're a team of thinkers and doers united by a simple mission: build communication systems that never fail when lives and missions depend on them.&rdquo;
          </blockquote>
          <div style="padding-left: 1.5rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent);">
            — Louis George, CEO &amp; Founder
          </div>
        </div>

        <div class="about-leaders-grid">
          <!-- Louis George -->
          <div class="about-leader-card">
            <div class="about-leader-avatar">LG</div>
            <h3 class="about-leader-name">Louis George</h3>
            <div class="about-leader-role">CHIEF EXECUTIVE OFFICER &amp; FOUNDER</div>
            <p class="about-leader-bio">
              Physics graduate from Mahatma Gandhi University with advanced composites engineering training at IIT Chennai. Over three decades leading composite aerodynamic structure synthesis and sovereign defence manufacturing.
            </p>
          </div>

          <!-- Kuruvilla George -->
          <div class="about-leader-card">
            <div class="about-leader-avatar">KG</div>
            <h3 class="about-leader-name">Kuruvilla George</h3>
            <div class="about-leader-role">CHIEF TECHNOLOGY OFFICER</div>
            <p class="about-leader-bio">
              Over three decades specializing in high-frequency computational electromagnetics, microwave antenna synthesis, and rigorous military-standard flight qualification for high-speed airborne platforms.
            </p>
          </div>

          <!-- Tony G. Thomas -->
          <div class="about-leader-card">
            <div class="about-leader-avatar">TT</div>
            <h3 class="about-leader-name">Dr. Tony G. Thomas</h3>
            <div class="about-leader-role">CHIEF MENTOR · EX-AT&amp;T BELL LABS</div>
            <p class="about-leader-bio">
              Co-founder of AdventNet (Zoho Corporation). Alumnus of IIT Madras and Johns Hopkins University (PhD). Brings deep systems scaling, strategic governance, and global technology leadership to Verdant.
            </p>
          </div>
        </div>
      </div>

      <!-- ========================================================
           8. CLOSING DIALOGUE & KOCHI COORDINATES
           ======================================================== -->
      <div class="about-cta-cockpit">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; font-weight: 600;">
          DIRECT COCHIN HEADQUARTERS COORDINATES
        </div>

        <h3 style="font-family: var(--font-display); font-size: clamp(2rem, 3.8vw, 2.75rem); font-weight: 700; color: #FFFFFF; margin-bottom: 1rem; letter-spacing: -0.02em;">
          Initiate a Dialogue with Our Engineers
        </h3>

        <p style="font-size: 1.05rem; color: var(--text-muted); max-width: 620px; margin: 0 auto 2.25rem; line-height: 1.65;">
          Whether you are evaluating platform integration for fighter, naval, or tactical platforms, or exploring bespoke aperture synthesis, our engineering team in Kochi is ready to assist.
        </p>

        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="#/contact" class="btn-primary" style="min-width: 190px; text-decoration: none; justify-content: center;">
            Talk to our engineers
          </a>
          <a href="#/products" class="btn-secondary" style="min-width: 190px; text-decoration: none; justify-content: center;">
            Explore hardware catalogue
          </a>
        </div>

        <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.06); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle); display: flex; flex-wrap: wrap; justify-content: center; gap: 1.75rem;">
          <span>HQ: 26/411 A, Konthuruthy, Cochin – 682 013, India</span>
          <span>TEL: 0091-484-2663104 / 2663576</span>
          <span style="color: var(--accent);">info@verdanttelemetry.com</span>
        </div>
      </div>

    </div>
  </section>
  `;
}
