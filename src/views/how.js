/**
 * "How We Build" View (#how or #/how)
 * Verdant Telemetry & Antenna Systems
 */

export function renderHowView() {
  return `
  <section style="padding: 120px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      <div style="margin-bottom: 2rem;">
        <a href="#/" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.85rem; min-height: 34px;">
          &larr; Back to Home
        </a>
      </div>

      <div style="max-width: 800px; margin-bottom: 4rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          SYSTEM METHODOLOGY
        </div>
        <h1 style="font-size: clamp(2.25rem, 4.5vw, 3.5rem); font-weight: 700; color: var(--text); margin-bottom: 1rem;">
          How We Build
        </h1>
        <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.6;">
          Our 4-step engineering lifecycle unites computational simulation, aerospace composite chemistry, custom structural synthesis, and anechoic chamber verification.
        </p>
      </div>

      <!-- 4-Step Vertical Timeline -->
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 860px; margin-bottom: 4rem;">
        <!-- Step 1 -->
        <div class="card" style="padding: 2.25rem; display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; align-items: start;">
          <div style="font-family: var(--font-mono); font-size: 2rem; font-weight: 700; color: var(--accent);">01</div>
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Design &amp; Simulation</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
              Conducted at our Coimbatore R&amp;D design centre. We simulate 3D electromagnetic aperture interactions, VSWR characteristics, and platform edge-diffractions under flight boundary conditions.
            </p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">OUTPUT: Validated RF aperture models &amp; dielectric radome stackup</div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="card" style="padding: 2.25rem; display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; align-items: start;">
          <div style="font-family: var(--font-mono); font-size: 2rem; font-weight: 700; color: var(--accent);">02</div>
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Autoclave Composite Build</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
              Precision manufacturing at our Cochin facility adhering to AS9100 Rev D. Multi-layer structural composite lay-ups cured in autoclave ovens for low aerodynamic drag, minimal dielectric loss, and high structural stiffness.
            </p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">OUTPUT: Hermetically sealed aerodynamic radome shells</div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="card" style="padding: 2.25rem; display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; align-items: start;">
          <div style="font-family: var(--font-mono); font-size: 2rem; font-weight: 700; color: var(--accent);">03</div>
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Platform Customisation</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
              Integrating internal matching circuits, lightning suppressors, and tailored mounting plates configured for specific aircraft, UAV, naval, or tactical vehicle profiles.
            </p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">OUTPUT: Platform-adapted antenna prototype ready for qualification</div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="card" style="padding: 2.25rem; display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; align-items: start;">
          <div style="font-family: var(--font-mono); font-size: 2rem; font-weight: 700; color: var(--accent);">04</div>
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Anechoic Chamber Qualification</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem;">
              Rigorous verification in our indoor anechoic test chamber up to 20 GHz, outdoor ranges (20–500 MHz), and standard 32-foot ground plane under MIL-DTL-85670C and CEMILAC airworthiness protocols.
            </p>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">OUTPUT: Serial certified flight hardware &amp; comprehensive test certificates</div>
          </div>
        </div>
      </div>

      <!-- Closing CTA -->
      <div style="text-align: center; max-width: 680px; margin: 0 auto; padding: 3rem 1.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: 12px;">
        <h3 style="font-size: 1.5rem; color: var(--text); margin-bottom: 1rem;">Ready to specify your system?</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem;">Our engineering teams in Cochin and Coimbatore provide immediate technical feasibility reviews.</p>
        <a href="#/contact" class="btn-primary">Contact us</a>
      </div>
    </div>
  </section>
  `;
}
