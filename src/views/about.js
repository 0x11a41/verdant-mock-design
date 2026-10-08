/**
 * About Us Page View ("From Kerala to the World")
 * Verdant Telemetry & Antenna Systems
 */

import { TIMELINE } from '../data/timeline.js';

export let timelineFilter = 'All';

export function setTimelineFilter(filter) {
  timelineFilter = filter;
  const mainContent = document.getElementById('main-content');
  if (mainContent && window.location.hash === '#/about') {
    mainContent.innerHTML = renderAboutView();
  }
}

export function renderAboutView() {
  const filteredTimeline = timelineFilter === 'All'
    ? TIMELINE
    : TIMELINE.filter(t => t.type.toLowerCase() === timelineFilter.toLowerCase());

  return `
  <section style="padding: 120px 0 80px; background: var(--bg);">
    <div class="container-wide">
      <!-- About Hero + Historic Collage Photo -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: center; margin-bottom: 5rem;">
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">
            FROM KERALA TO THE WORLD · EST. 1997
          </div>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; line-height: 1.1; color: var(--text); margin-bottom: 1.5rem; text-wrap: balance;">
            Precision antennas engineered where India meets the ocean.
          </h1>
          <p style="font-size: 1.15rem; color: var(--text-muted); line-height: 1.7; text-wrap: balance;">
            Verdant Telemetry &amp; Antenna Systems began in 1997 as a small precision workshop in Cochin. Driven by deep composite expertise and rigorous electromagnetics, we evolved from a domestic defence supplier into a globally recognized aerospace manufacturer.
          </p>
        </div>
        <div class="card" style="padding: 0.75rem; overflow: hidden; background: #05090D;">
          <img src="/assets/collage.png" alt="Verdant Telemetry 1997-2026 Journey" style="width: 100%; height: auto; border-radius: 8px; display: block;" onerror="this.style.display='none';" />
          <div style="padding: 0.75rem 0.5rem 0.25rem; display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
            <span>COCHIN HERITAGE ARCHIVE</span>
            <span style="color: var(--accent);">FOUNDED 1997</span>
          </div>
        </div>
      </div>

      <!-- Scroll-Driven Story Arc (6 Chapters) -->
      <div style="margin-bottom: 6rem;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 2rem;">
          THE STRATEGIC ARC
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.75rem;">01. ORIGIN (1997)</div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Small Workshop in Cochin</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">Founded in Cochin, Kerala, targeting sovereign capability in composite structures and electromagnetic aperture fabrication.</p>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.75rem;">02. EARLY CRAFT</div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Supplying Frontline Platforms</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">First antenna deliveries to NPOL, ECIL, DRDO, and HAL for proven combat aircraft including Jaguar, AN-32 transport, and Cheetah/Chetak helicopters.</p>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.75rem;">03. RIGID STANDARDS</div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">CEMILAC &amp; AS9100</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">CEMILAC design approval in 2008 followed by AS9100 Rev D in June 2009. Commissioning of our dedicated indoor anechoic test chamber up to 20 GHz in 2011.</p>
          </div>

          <div class="card" style="padding: 2rem; display: flex; flex-direction: column;">
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.75rem;">04. AEROSPACE RECOGNITION</div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">SIATI &amp; ADE Awards</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem; flex: 1;">SIATI Excellence in Aerospace Indigenisation (2001, 2016), ADE Creative Partnership Award (2020), and special honour at Aero India 2023.</p>
            <div style="border-radius: 6px; overflow: hidden; height: 110px; background: #05090D; border: 1px solid var(--border);">
              <img src="/assets/award.jpeg" alt="SIATI &amp; Aero India Recognition" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';" />
            </div>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.75rem;">05. ADVANCED PLATFORMS</div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">LCA Tejas to Satcom</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">Indigenised JD 202 V/UHF blade antenna under DRDO TDF for LCA Tejas. Conformal Satcom antennas (2024) and ultra-light UAV antennas (2025).</p>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.75rem;">06. GLOBAL VISION</div>
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Coimbatore R&amp;D &amp; Overseas Visits</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">Coimbatore design centre (2023) accelerating own-product lines. Overseas aerospace leaders (Thales, Raytheon, Lockheed Martin, Chelton) have visited our Cochin facility.</p>
          </div>
        </div>
      </div>

      <!-- Kerala Outward Visual Line-Art SVG -->
      <div class="card" style="padding: 2rem; margin-bottom: 6rem; background: #070D12;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); text-transform: uppercase;">GEOGRAPHIC TRACE</div>
            <h3 style="font-size: 1.2rem; color: var(--text);">Signal trajectory from Cochin outwards</h3>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
            Kochi &rarr; Bengaluru &rarr; Hyderabad &rarr; Delhi &rarr; Global Partners
          </div>
        </div>
        <svg width="100%" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="40" x2="750" y2="40" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
          <path d="M50 40H750" stroke="#03BC9F" stroke-width="2" stroke-dasharray="6 4"/>
          <!-- Origin Cochin -->
          <circle cx="60" cy="40" r="10" stroke="#03BC9F" stroke-width="1.5" fill="#05090D"/>
          <circle cx="60" cy="40" r="4" fill="#03BC9F"/>
          <text x="60" y="65" fill="#03BC9F" font-family="monospace" font-size="10" text-anchor="middle">COCHIN (1997)</text>
          <!-- Milestone nodes -->
          <circle cx="220" cy="40" r="5" fill="#EAF2F0"/>
          <text x="220" y="65" fill="#8FA3A0" font-family="monospace" font-size="10" text-anchor="middle">CEMILAC (2008)</text>
          <circle cx="380" cy="40" r="5" fill="#EAF2F0"/>
          <text x="380" y="65" fill="#8FA3A0" font-family="monospace" font-size="10" text-anchor="middle">AS9100 (2009)</text>
          <circle cx="540" cy="40" r="5" fill="#EAF2F0"/>
          <text x="540" y="65" fill="#8FA3A0" font-family="monospace" font-size="10" text-anchor="middle">LCA TEJAS (2023)</text>
          <circle cx="720" cy="40" r="8" stroke="#4DB6FF" stroke-width="1.5" fill="#05090D"/>
          <circle cx="720" cy="40" r="3" fill="#4DB6FF"/>
          <text x="720" y="65" fill="#4DB6FF" font-family="monospace" font-size="10" text-anchor="middle">GLOBAL (2026)</text>
        </svg>
      </div>

      <!-- Interactive Milestone Timeline (1997-2025) -->
      <div style="margin-bottom: 6rem;">
        <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: 2rem;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem;">
              CHRONOLOGY
            </div>
            <h2 style="font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 700; color: var(--text);">Verified Milestones (1997–2025)</h2>
          </div>

          <!-- Timeline Filters -->
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${['All', 'Awards', 'Products', 'Certifications'].map(filter => `
              <button onclick="setTimelineFilter('${filter}')" class="btn-secondary" style="padding: 0.35rem 0.85rem; font-size: 0.75rem; min-height: 32px; font-family: var(--font-mono); ${timelineFilter === filter ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">
                ${filter}
              </button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${filteredTimeline.map(item => `
            <div class="card" style="padding: 1.5rem; display: flex; flex-wrap: wrap; align-items: baseline; gap: 1.5rem;">
              <div style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 700; color: var(--accent); min-width: 60px;">
                ${item.year}
              </div>
              <div style="flex: 1; min-width: 240px;">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                  <span style="font-weight: 600; color: var(--text); font-size: 1rem;">${item.title}</span>
                  <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-subtle); padding: 0.1rem 0.4rem; background: var(--elevated); border-radius: 4px;">${item.type}</span>
                </div>
                <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5;">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Mission, Vision & 4 Core Values: 6 Compact Cards -->
      <div style="margin-bottom: 6rem;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.5rem;">
          PRINCIPLES &amp; GOVERNANCE
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 1.75rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">MISSION</div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Sovereign RF Precision</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">To design and manufacture airborne and tactical antennas that withstand the harshest aerospace environments with zero signal degradation.</p>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">VISION</div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Global Recognition</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Transitioning from India's trusted domestic defence supplier into a globally recognized aerospace brand delivering proprietary antenna and radome systems.</p>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">VALUE 01</div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Quality Without Compromise</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">AS9100 Rev D audit discipline applied to every prototype, flight test, and serial production batch.</p>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">VALUE 02</div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Engineering Integrity</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Honest, fact-grounded specs validated in-house across our anechoic chamber and 32-ft standard ground planes.</p>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">VALUE 03</div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Customer Commitment</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Direct engineering access with agile adaptation for bespoke platform constraints.</p>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">VALUE 04</div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Kerala Aerospace Heritage</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Nurturing deep indigenous scientific talent from Kochi and Coimbatore for global aerospace challenges.</p>
          </div>
        </div>
      </div>

      <!-- Facility Overview & Testing Spec Grid -->
      <div class="card" style="padding: 2.5rem; margin-bottom: 6rem;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.75rem;">
          TEST INFRASTRUCTURE SPECIFICATIONS
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text); margin-bottom: 1.5rem;">In-House RF &amp; Environmental Test Rig</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
          <div style="border-left: 2px solid var(--accent); padding-left: 1rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">ANECHOIC CHAMBER</div>
            <div style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-top: 0.25rem;">Indoor up to 20 GHz</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Gain, pattern &amp; radome insertion loss</div>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: 1rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">OUTDOOR TEST RANGES</div>
            <div style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-top: 0.25rem;">20 MHz – 500 MHz</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Long-range tactical V/UHF characterisation</div>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: 1rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">STANDARD GROUND PLANE</div>
            <div style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-top: 0.25rem;">32 ft Diameter</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Compliant with MIL-DTL-85670C (20–400 MHz)</div>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: 1rem;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">RF INSTRUMENTATION</div>
            <div style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-top: 0.25rem;">Calibrated to 40 GHz</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Vector network analyzers &amp; synthesizers</div>
          </div>
        </div>
      </div>

      <!-- Leadership Profiles & MD Pull Quote -->
      <div style="margin-bottom: 6rem;">
        <div style="max-width: 820px; margin-bottom: 3.5rem;">
          <blockquote style="font-family: var(--font-display); font-size: 1.5rem; color: var(--text); line-height: 1.5; border-left: 3px solid var(--accent); padding-left: 1.5rem;">
            “Our antennas do not just transmit signals; they protect the platforms and personnel that safeguard national sovereignty. That mandate requires absolute engineering truth.”
          </blockquote>
          <div style="margin-top: 1rem; padding-left: 1.5rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent);">
            — Louis George, CEO &amp; Founder
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text);">Louis George</h3>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 1rem;">CEO · 30+ YRS COMPOSITE DESIGN</div>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">Physics graduate from Mahatma Gandhi University with advanced composites engineering training at IIT Chennai. Leads composite aerodynamic structure synthesis and strategic manufacturing.</p>
          </div>

          <div class="card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text);">Kuruvilla George</h3>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 1rem;">CTO · 30+ YRS RF &amp; SIMULATION</div>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">Over three decades specializing in computational electromagnetics, high-frequency antenna synthesis, and MIL-STD compliance execution for airborne platforms.</p>
          </div>

          <div class="card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text);">Tony G. Thomas</h3>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 1rem;">CHIEF MENTOR · EX-AT&amp;T BELL LABS</div>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">Co-founder of AdventNet (Zoho Corporation). Alumnus of IIT Madras and Johns Hopkins University (PhD). Brings deep systems scaling and global technology leadership.</p>
          </div>
        </div>
      </div>

      <!-- Social Commitment (4 items) -->
      <div style="margin-bottom: 6rem;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.5rem;">
          COMMUNITY &amp; INDUSTRY COMMITMENT
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 1.5rem;">
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem; font-size: 0.95rem;">Aerospace Skill Incubation</div>
            <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5;">Providing engineering graduates in Kerala hands-on access to precision autoclave manufacturing and high-frequency RF instrumentation.</p>
          </div>
          <div class="card" style="padding: 1.5rem;">
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem; font-size: 0.95rem;">Academic Research Bridges</div>
            <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5;">Active collaborative test projects with Indian engineering institutions and research laboratories in Coimbatore and Kochi.</p>
          </div>
          <div class="card" style="padding: 1.5rem;">
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem; font-size: 0.95rem;">Indigenous Supply Chain Support</div>
            <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5;">Sourcing certified raw aerospace grade materials from certified domestic suppliers to reinforce India’s defence self-reliance.</p>
          </div>
          <div class="card" style="padding: 1.5rem;">
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem; font-size: 0.95rem;">Environmental Stewardship</div>
            <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5;">Strict waste reclamation for composite trimmings and VOC-compliant coating processes in accordance with ISO 14001 principles.</p>
          </div>
        </div>
      </div>

      <!-- Closing CTA -->
      <div style="text-align: center; padding: 4rem 2rem; background: var(--surface); border: 1px solid var(--border); border-radius: 12px;">
        <h3 style="font-size: 1.75rem; font-weight: 700; color: var(--text); margin-bottom: 1rem;">Initiate a Dialogue with Our Leadership</h3>
        <p style="font-size: 1rem; color: var(--text-muted); max-width: 580px; margin: 0 auto 2rem; line-height: 1.6;">
          Whether you are evaluating platform integration or exploring bespoke antenna development, our engineering leadership in Cochin is ready to assist.
        </p>
        <a href="#/contact" class="btn-primary">Contact us</a>
      </div>
    </div>
  </section>
  `;
}
