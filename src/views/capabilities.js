/**
 * Capabilities Detail Views (#/capabilities/...)
 * Verdant Telemetry & Antenna Systems
 */

export function renderCapabilitiesView(subview = 'overview') {
  const capData = {
    overview: {
      title: 'Aerospace & Defence Capabilities',
      tag: 'COMPREHENSIVE SYSTEMS',
      headline: 'From initial antenna synthesis to supersonic flight qualification.',
      bullets: [
        'CEMILAC design approved facility (since 2008) and AS9100 Rev D certified.',
        'Dedicated R&D design centre established in Coimbatore (2023).',
        'State-of-the-art indoor anechoic chamber operating up to 20 GHz.',
        'Proven record on frontline combat platforms including LCA Tejas, Jaguar, and AN-32.'
      ]
    },
    design: {
      title: 'Design & Development',
      tag: 'ELECTROMAGNETIC SYNTHESIS',
      headline: 'Computational RF modeling, aperture synthesis & composite radomes.',
      bullets: [
        'Dedicated R&D design centre established in Coimbatore (2023) driving high-frequency innovations.',
        'Electromagnetic 3D simulation for radiation patterns, input impedance, and mutual coupling.',
        'Radome structural and dielectric optimisation for supersonic dynamic pressures.',
        'Recent innovations: Conformal Satcom antennas (2024) and ultra-light UAV antennas (2025).'
      ]
    },
    manufacturing: {
      title: 'Precision Manufacturing',
      tag: 'AEROSPACE FABRICATION',
      headline: 'Autoclave composite curing and micro-machined RF assemblies in Cochin.',
      bullets: [
        'AS9100 Rev D certified production facility located at Konthuruthy, Cochin.',
        'Specialised composite moulding, resin transfer moulding (RTM), and autoclave consolidation.',
        'Cleanroom lay-up environment upholding aerospace structural airworthiness standards.',
        'Dedicated RF cable assembly, connector integration, and environmental hermetic sealing.'
      ]
    },
    customisation: {
      title: 'Platform Customisation',
      tag: 'BESPOKE TAILORING',
      headline: 'Low-to-medium volume antennas tailored to complex airframes.',
      bullets: [
        'Bespoke mechanical baseplates and aerodynamic contours matched to fuselage curves.',
        'Supplied custom airborne EW antennas for LCA Tejas (with Elbit) and V/UHF blades for Sierra Nevada Corp.',
        'Custom multi-connector blades consolidating dual or triband avionics into single apertures.',
        'Tactical vehicle and naval mast conformal mount engineering for DRDO, NPOL, and ECIL.'
      ]
    },
    testing: {
      title: 'Testing & Qualification',
      tag: 'RIGOROUS VERIFICATION',
      headline: 'Indoor anechoic chamber to 20 GHz & 32 ft standard ground plane.',
      bullets: [
        'Indoor anechoic chamber capable of precision pattern and gain measurements up to 20 GHz.',
        'Outdoor open-air test ranges covering 20 MHz to 500 MHz for low-frequency tactical antennas.',
        '32-foot reference ground plane compliant with MIL-DTL-85670C (20–400 MHz).',
        'Calibrated RF test instrumentation operational up to 40 GHz; radome transmission loss verification.'
      ]
    }
  };

  const active = capData[subview] || capData.overview;

  return `
  <section style="padding: 120px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      <!-- Clean Uncluttered Breadcrumb -->
      <div style="display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1.5rem;">
        <a href="#/" style="color: var(--text-muted); text-decoration: none;">Home</a>
        <span aria-hidden="true" style="opacity: 0.4;">·</span>
        <a href="#/capabilities" style="color: ${subview === 'overview' ? 'var(--accent)' : 'var(--text-muted)'}; text-decoration: none;">Capabilities</a>
        ${subview !== 'overview' ? `<span aria-hidden="true" style="opacity: 0.4;">·</span><span style="color: var(--accent); font-weight: 600;">${active.title}</span>` : ''}
      </div>

      <!-- Refined Header -->
      <div style="max-width: 800px; margin-bottom: 2.25rem;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; font-weight: 600;">
          ${active.tag}
        </div>
        <h1 style="font-family: var(--font-display); font-size: clamp(2.25rem, 4.2vw, 3.25rem); font-weight: 700; color: #FFFFFF; line-height: 1.15; margin-bottom: 1rem; letter-spacing: -0.025em;">
          ${active.title}
        </h1>
        <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.6; margin: 0; text-wrap: balance;">
          ${active.headline}
        </p>
      </div>

      <!-- Sleek Segmented Subview Navigation -->
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 2.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1rem;">
        <a href="#/capabilities" class="btn-secondary" style="font-size: 0.8125rem; padding: 0.4rem 0.9rem; min-height: 36px; ${subview === 'overview' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Overview</a>
        <a href="#/capabilities/design" class="btn-secondary" style="font-size: 0.8125rem; padding: 0.4rem 0.9rem; min-height: 36px; ${subview === 'design' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Design &amp; Development</a>
        <a href="#/capabilities/manufacturing" class="btn-secondary" style="font-size: 0.8125rem; padding: 0.4rem 0.9rem; min-height: 36px; ${subview === 'manufacturing' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Manufacturing</a>
        <a href="#/capabilities/customisation" class="btn-secondary" style="font-size: 0.8125rem; padding: 0.4rem 0.9rem; min-height: 36px; ${subview === 'customisation' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Customisation</a>
        <a href="#/capabilities/testing" class="btn-secondary" style="font-size: 0.8125rem; padding: 0.4rem 0.9rem; min-height: 36px; ${subview === 'testing' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Testing &amp; Qualification</a>
        <a href="#/infrastructure" class="btn-secondary" style="font-size: 0.8125rem; padding: 0.4rem 0.9rem; min-height: 36px; color: var(--accent); border-color: rgba(3,188,159,0.35);">Facilities &rarr;</a>
      </div>

      <!-- Main Content Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; align-items: start; margin-bottom: 3.5rem;">
        <div class="card" style="padding: 2.25rem;">
          <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--text); margin-bottom: 1.5rem;">Factual Deliverables</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 1.25rem;">
            ${active.bullets.map(b => `
              <li style="display: flex; gap: 0.75rem; font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
                <span style="color: var(--accent); font-weight: 700;" aria-hidden="true">&bull;</span>
                <span>${b}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Lineart Visual Asset Matching Subview -->
        <div class="card" style="padding: 1.25rem; background: #070D12; display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(3,188,159,0.25);">
          <div style="height: 240px; width: 100%; border-radius: 8px; overflow: hidden; background: #05090D; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; padding: 1rem;">
            ${subview === 'overview' ? `
              <img src="/assets/system-methodology-cover.webp" alt="System Methodology" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
            ` : subview === 'design' ? `
              <img src="/assets/design-and-development.webp" alt="Design &amp; Development" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
            ` : subview === 'manufacturing' ? `
              <img src="/assets/precision-manufacturing.webp" alt="Precision Manufacturing" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
            ` : subview === 'customisation' ? `
              <img src="/assets/tactical-customization.webp" alt="Tactical Customisation" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
            ` : `
              <img src="/assets/testing-and-qualification.webp" alt="Testing &amp; Qualification" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
            `}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem;">
            <span style="color: var(--text-muted); text-transform: uppercase;">
              ${subview === 'overview' ? 'SYSTEM METHODOLOGY' : subview === 'design' ? 'COIMBATORE R&D (2023)' : subview === 'manufacturing' ? 'COCHIN AUTOCLAVE & CNC' : subview === 'customisation' ? 'LCA TEJAS & TACTICAL JETS' : 'ANECHOIC CHAMBER (20 GHz)'}
            </span>
            <span style="color: var(--accent);">VERDANT ARCHITECTURE</span>
          </div>
        </div>
      </div>

      <!-- Call to Actions -->
      <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
        <a href="#/products" class="btn-primary">View Antennas in Catalogue</a>
        <a href="#/contact" class="btn-secondary">Inquire with Engineering</a>
      </div>
    </div>
  </section>
  `;
}
