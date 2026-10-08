/**
 * Careers View (#/careers)
 * Verdant Telemetry & Antenna Systems
 */

export function renderCareersView() {
  return `
  <section style="padding: 120px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      <div style="max-width: 800px; margin-bottom: 4rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          CAREERS AT VERDANT
        </div>
        <h1 style="font-size: clamp(2.25rem, 4.5vw, 3.5rem); font-weight: 700; color: var(--text); margin-bottom: 1rem;">
          Build sovereign aerospace technology in Kerala.
        </h1>
        <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.6;">
          Join a dedicated team of RF simulation engineers, composite specialists, and aerospace technicians shaping antennas for global aviation and defence.
        </p>
      </div>

      <!-- Anchor 1: Open Roles -->
      <div id="open-roles" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 600; color: var(--text);">Open Roles</h2>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">[Active Opportunities]</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="card" style="padding: 1.75rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Senior RF Antenna Design Engineer</h3>
              <div style="font-size: 0.8125rem; color: var(--text-muted);">Coimbatore R&amp;D Centre · Full-Time · EM Simulation (C-Band, V/UHF)</div>
            </div>
            <a href="mailto:info@verdanttelemetry.com?subject=Application:%20Senior%20RF%20Engineer" class="btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem; min-height: 36px;">Apply via Email</a>
          </div>

          <div class="card" style="padding: 1.75rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Aerospace Composite Tooling Specialist</h3>
              <div style="font-size: 0.8125rem; color: var(--text-muted);">Cochin Facility · Full-Time · Autoclave, RTM &amp; Radome Moulding</div>
            </div>
            <a href="mailto:info@verdanttelemetry.com?subject=Application:%20Composite%20Tooling%20Specialist" class="btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem; min-height: 36px;">Apply via Email</a>
          </div>

          <div class="card" style="padding: 1.75rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Quality &amp; Airworthiness Compliance Engineer</h3>
              <div style="font-size: 0.8125rem; color: var(--text-muted);">Cochin Facility · Full-Time · AS9100 Rev D &amp; CEMILAC Protocols</div>
            </div>
            <a href="mailto:info@verdanttelemetry.com?subject=Application:%20Airworthiness%20Compliance%20Engineer" class="btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem; min-height: 36px;">Apply via Email</a>
          </div>
        </div>
      </div>

      <!-- Anchor 2: Life at Verdant -->
      <div id="life-at-verdant" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <h2 style="font-size: 1.5rem; font-weight: 600; color: var(--text); margin-bottom: 1.25rem;">Life at Verdant</h2>
        <div class="card" style="padding: 2rem;">
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1rem;">
            At Verdant, engineers do not work on abstract sub-components. You oversee antennas and radomes from initial Maxwell simulation through cleanroom composite moulding and anechoic chamber test firing.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
            <div>
              <div style="font-weight: 600; color: var(--text); font-size: 0.9rem;">High Responsibility</div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Direct exposure to national defence programmes and tier-1 aerospace customers.</p>
            </div>
            <div>
              <div style="font-weight: 600; color: var(--text); font-size: 0.9rem;">Kerala Work-Life Balance</div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">World-class aerospace engineering grounded in the vibrant culture of Cochin.</p>
            </div>
            <div>
              <div style="font-weight: 600; color: var(--text); font-size: 0.9rem;">Modern Facilities</div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Instrumentation calibrated to 40 GHz and AS9100 Rev D production infrastructure.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Anchor 3: Internships -->
      <div id="internships" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <h2 style="font-size: 1.5rem; font-weight: 600; color: var(--text); margin-bottom: 1.25rem;">Engineering Internships</h2>
        <div class="card" style="padding: 2rem;">
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
            Verdant offers 6-month and summer technical internships for final-year undergraduate and postgraduate students in Electrical, Electronics, Aerospace, and Materials Engineering.
          </p>
          <a href="mailto:info@verdanttelemetry.com?subject=Internship%20Inquiry%20Verdant" class="btn-primary" style="font-size: 0.8125rem;">Apply for Internship</a>
        </div>
      </div>
    </div>
  </section>
  `;
}
