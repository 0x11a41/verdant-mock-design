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

      <!-- Header & Top Methodology Cover Lineart Illustration -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: center; margin-bottom: 4rem;">
        <div style="max-width: 620px;">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; font-weight: 600;">
            SYSTEM METHODOLOGY
          </div>
          <h1 style="font-size: clamp(2.25rem, 4.5vw, 3.5rem); font-weight: 700; color: #FFFFFF; line-height: 1.15; margin-bottom: 1.25rem; letter-spacing: -0.03em;">
            How We Build
          </h1>
          <p style="font-size: 1.125rem; color: var(--text-muted); line-height: 1.7; margin: 0;">
            Our 4-step engineering lifecycle unites computational simulation, aerospace composite chemistry, custom structural synthesis, and anechoic chamber verification into flight-certified hardware.
          </p>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; position: relative; overflow: visible; background: transparent; border: none; padding: 0;">
          <div style="position: absolute; inset: -15%; background: radial-gradient(circle at 50% 50%, rgba(3,188,159,0.12) 0%, transparent 68%); pointer-events: none; filter: blur(30px);"></div>
          <img src="/assets/system-methodology-cover.webp" alt="Verdant System Methodology Engineering Lifecycle" style="width: 100%; max-width: 520px; height: auto; max-height: 400px; object-fit: contain; mix-blend-mode: screen; filter: brightness(1.18) contrast(1.12); border: none; background: transparent; -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 55%, rgba(0,0,0,0.85) 75%, transparent 100%); mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 55%, rgba(0,0,0,0.85) 75%, transparent 100%);" />
        </div>
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

      <!-- System Methodology Blueprint Architecture Visual (21:9 Panoramic Frame, Zoomed in, Anchored to bottom) -->
      <div style="max-width: 1040px; margin: 0 auto 4.5rem; position: relative;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.75rem;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600;">
            STAGE INTEGRATION FLOWCHART
          </span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">
            AS9100 REV D &amp; CEMILAC APPROVED
          </span>
        </div>
        <div style="position: relative; width: 100%; aspect-ratio: 21 / 9; overflow: hidden; background: transparent; display: flex; align-items: flex-end; justify-content: center; -webkit-mask-image: linear-gradient(to top, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%); mask-image: linear-gradient(to top, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%); -webkit-mask-composite: source-in; mask-composite: intersect;">
          <img src="/assets/system-methodology-bottom.webp" alt="Verdant System Methodology Stage Flow" style="width: 100%; height: 100%; object-fit: cover; object-position: center bottom; transform: scale(1.18); transform-origin: center bottom; display: block; mix-blend-mode: screen; filter: brightness(1.22) contrast(1.12);" />
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
