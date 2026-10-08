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
      <!-- Breadcrumb & Back -->
      <div style="display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 2rem;">
        <a href="#/" style="color: var(--text-muted); text-decoration: none;">Home</a>
        <span>/</span>
        <a href="#/capabilities" style="color: ${subview === 'overview' ? 'var(--accent)' : 'var(--text-muted)'}; text-decoration: none;">Capabilities</a>
        ${subview !== 'overview' ? `<span>/</span><span style="color: var(--accent);">${active.title}</span>` : ''}
      </div>

      <!-- Header -->
      <div style="max-width: 820px; margin-bottom: 3.5rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">
          ${active.tag}
        </div>
        <h1 style="font-size: clamp(2.25rem, 4.5vw, 3.5rem); font-weight: 700; color: var(--text); margin-bottom: 1.25rem;">
          ${active.title}
        </h1>
        <p style="font-size: 1.2rem; color: var(--text-muted); line-height: 1.6; text-wrap: balance;">
          ${active.headline}
        </p>
      </div>

      <!-- Subview Navigation Tabs -->
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 3rem; border-bottom: 1px solid var(--border); padding-bottom: 1rem;">
        <a href="#/capabilities" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.85rem; min-height: 34px; ${subview === 'overview' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Overview</a>
        <a href="#/capabilities/design" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.85rem; min-height: 34px; ${subview === 'design' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Design &amp; Development</a>
        <a href="#/capabilities/manufacturing" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.85rem; min-height: 34px; ${subview === 'manufacturing' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Manufacturing</a>
        <a href="#/capabilities/customisation" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.85rem; min-height: 34px; ${subview === 'customisation' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Customisation</a>
        <a href="#/capabilities/testing" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.85rem; min-height: 34px; ${subview === 'testing' ? 'background: var(--accent); color: #05090D; font-weight: 700; border-color: var(--accent);' : ''}">Testing &amp; Qualification</a>
      </div>

      <!-- Main Content Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: start; margin-bottom: 4rem;">
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

        <!-- Real Facility/Domain Visual Asset according to subview -->
        <div class="card" style="padding: 1.25rem; background: #070D12; display: flex; flex-direction: column; overflow: hidden;">
          <div style="height: 220px; width: 100%; border-radius: 8px; overflow: hidden; background: #05090D; margin-bottom: 1rem;">
            ${subview === 'overview' ? `
              <img src="/assets/003.png" alt="Anechoic Chamber" style="width: 100%; height: 100%; object-fit: cover;" />
            ` : subview === 'design' ? `
              <img src="/assets/005.png" alt="Coimbatore R&D Design Centre" style="width: 100%; height: 100%; object-fit: cover;" />
            ` : subview === 'manufacturing' ? `
              <img src="/assets/004.jpg" alt="Composite Autoclave & CNC Facility" style="width: 100%; height: 100%; object-fit: cover;" />
            ` : subview === 'customisation' ? `
              <img src="/assets/jet.webp" alt="Aerospace Platform Customisation" style="width: 100%; height: 100%; object-fit: cover;" />
            ` : `
              <img src="/assets/002.png" alt="RF Instrumentation Lab 40 GHz" style="width: 100%; height: 100%; object-fit: cover;" />
            `}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem;">
            <span style="color: var(--text-muted); text-transform: uppercase;">
              ${subview === 'overview' ? 'ANECHOIC CHAMBER (20 GHz)' : subview === 'design' ? 'COIMBATORE R&D (2023)' : subview === 'manufacturing' ? 'COCHIN AUTOCLAVE & CNC' : subview === 'customisation' ? 'LCA TEJAS & TACTICAL JETS' : 'RF BENCHES TO 40 GHz'}
            </span>
            <span style="color: var(--accent);">VERDANT FACILITY</span>
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
