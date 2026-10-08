/**
 * Infrastructure & In-House Facilities View (#/infrastructure)
 * Verdant Telemetry & Antenna Systems
 */

export function renderInfrastructureView() {
  return `
  <!-- INFRASTRUCTURE HERO -->
  <section style="padding: 160px 0 80px; background: radial-gradient(circle at 80% 20%, rgba(3,188,159,0.08) 0%, #05090D 70%); border-bottom: 1px solid var(--border);">
    <div class="container-wide">
      <div style="max-width: 860px;">
        <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; font-weight: 600;">
          IN-HOUSE FACILITIES &amp; TEST RANGES
        </div>
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: var(--text); line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em;">
          Precision Infrastructure for Sovereign Aerospace Qualification.
        </h1>
        <p style="font-size: clamp(1.05rem, 1.8vw, 1.25rem); color: var(--text-muted); line-height: 1.7; margin-bottom: 2rem;">
          Verdant Telemetry operates end-to-end design, advanced composite fabrication, and micro-machined RF production across its AS9100 Rev D facility in Cochin, Kerala and dedicated R&amp;D Design Centre in Coimbatore. From microwave vector instrumentation calibrated to 40 GHz to indoor anechoic testing to 20 GHz, our infrastructure delivers certified airworthiness.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
          <a href="#/contact?enquiry=Facility%20Tour%20and%20Test%20Protocols" class="btn-primary">Request Facility Tour / Protocols</a>
          <a href="#/capabilities" class="btn-secondary">Explore Capabilities</a>
        </div>
      </div>
    </div>
  </section>

  <!-- KEY SPECIFICATIONS BAR -->
  <section style="background: var(--surface); border-bottom: 1px solid var(--border); padding: 2.5rem 0;">
    <div class="container-wide">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
        <div style="border-left: 2px solid var(--accent); padding-left: 1.25rem;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">RF Metrology</div>
          <div style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 700; color: var(--text); margin-top: 0.25rem;">Up to 40 GHz</div>
          <div style="font-size: 0.8rem; color: var(--text-subtle);">Calibrated multi-port VNAs</div>
        </div>
        <div style="border-left: 2px solid var(--accent); padding-left: 1.25rem;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Anechoic Chamber</div>
          <div style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 700; color: var(--text); margin-top: 0.25rem;">100 MHz – 20 GHz</div>
          <div style="font-size: 0.8rem; color: var(--text-subtle);">Far-field 3D spherical scans</div>
        </div>
        <div style="border-left: 2px solid var(--accent); padding-left: 1.25rem;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Airworthiness</div>
          <div style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 700; color: var(--text); margin-top: 0.25rem;">AS9100 Rev D</div>
          <div style="font-size: 0.8rem; color: var(--text-subtle);">CEMILAC Design Approval</div>
        </div>
        <div style="border-left: 2px solid var(--accent); padding-left: 1.25rem;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Ground Plane Rig</div>
          <div style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 700; color: var(--text); margin-top: 0.25rem;">32 ft Metallic</div>
          <div style="font-size: 0.8rem; color: var(--text-subtle);">MIL-DTL-85670C compliance</div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN FACILITIES GRID -->
  <section style="padding: clamp(4rem, 10vh, 7rem) 0; background: var(--bg); border-bottom: 1px solid var(--border);">
    <div class="container-wide">
      <div style="margin-bottom: 3.5rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; font-weight: 600;">
          FACILITY BREAKDOWN
        </div>
        <h2 style="font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 700; color: var(--text); letter-spacing: -0.03em;">
          Specialized In-House Aerospace Laboratories
        </h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        <!-- 01. Anechoic Chamber -->
        <div class="card" style="overflow: hidden; display: flex; flex-direction: column;">
          <div style="height: 220px; overflow: hidden; background: #05090D; position: relative;">
            <img src="/assets/003.png" alt="Indoor Anechoic Chamber" style="width: 100%; height: 100%; object-fit: cover;" />
            <span style="position: absolute; top: 0.75rem; right: 0.75rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent); background: rgba(5,9,13,0.85); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border);">COCHIN HQ</span>
          </div>
          <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; font-weight: 600;">01 · MICROWAVE ANECHOIC CHAMBER</div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem;">Indoor Far-Field Range to 20 GHz</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              Full far-field characterisation chamber fitted with polyurethane pyramidal absorbing materials rated to -45 dB reflectivity. Measures 3D spherical radiation patterns, gain calibration against standard gain horns, VSWR, axial ratio, and radome transmission efficiency / boresight error.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
              Capabilities: 100 MHz – 20 GHz &bull; Automated positioner &bull; Polar &amp; 3D patterns
            </div>
          </div>
        </div>

        <!-- 02. RF Metrology Lab -->
        <div class="card" style="overflow: hidden; display: flex; flex-direction: column;">
          <div style="height: 220px; overflow: hidden; background: #05090D; position: relative;">
            <img src="/assets/002.png" alt="RF Instrumentation Lab" style="width: 100%; height: 100%; object-fit: cover;" />
            <span style="position: absolute; top: 0.75rem; right: 0.75rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent); background: rgba(5,9,13,0.85); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border);">METROLOGY</span>
          </div>
          <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; font-weight: 600;">02 · RF INSTRUMENTATION &amp; TEST</div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem;">Vector Analysis Calibrated to 40 GHz</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              High-precision microwave test bench equipped with 2-port and 4-port Vector Network Analyzers, calibrated noise figure meters, high-power CW and pulse RF amplifiers, and precision synthesizers. Provides rigorous phase tracking, S-parameter characterisation, and high-power handling stress checks.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
              Capabilities: 40 GHz bandwidth &bull; PIM &amp; Harmonics &bull; S11 / S21 characterisation
            </div>
          </div>
        </div>

        <!-- 03. Composite & Autoclave Fabrication -->
        <div class="card" style="overflow: hidden; display: flex; flex-direction: column;">
          <div style="height: 220px; overflow: hidden; background: #05090D; position: relative;">
            <img src="/assets/004.jpg" alt="Composite &amp; Autoclave Fabrication" style="width: 100%; height: 100%; object-fit: cover;" />
            <span style="position: absolute; top: 0.75rem; right: 0.75rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent); background: rgba(5,9,13,0.85); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border);">CLEANROOM</span>
          </div>
          <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; font-weight: 600;">03 · COMPOSITE RADOME FABRICATION</div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem;">Autoclave Curing &amp; Micro-CNC</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              Climate-controlled composite cleanroom for precision pre-preg layup of quartz, cyanate ester, and low-dielectric fiberglass radome shells. High-pressure autoclave curing guarantees void-free structural consolidation engineered for Mach 1.6+ aerodynamic heating and rain erosion resistance.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
              Capabilities: Autoclave curing &bull; 5-Axis CNC &bull; Resin transfer moulding (RTM)
            </div>
          </div>
        </div>

        <!-- 04. Coimbatore R&D Design Centre -->
        <div class="card" style="overflow: hidden; display: flex; flex-direction: column;">
          <div style="height: 220px; overflow: hidden; background: #05090D; position: relative;">
            <img src="/assets/005.png" alt="Coimbatore Design Centre" style="width: 100%; height: 100%; object-fit: cover;" />
            <span style="position: absolute; top: 0.75rem; right: 0.75rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent); background: rgba(5,9,13,0.85); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border);">EST. 2023</span>
          </div>
          <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; font-weight: 600;">04 · R&amp;D DESIGN CENTRE</div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem;">Coimbatore Simulation &amp; Prototyping</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              Advanced computational electromagnetics (CEM) workstation cluster running 3D finite-element and method-of-moments solvers. Accelerates conformal patch synthesis, phased array layout, co-site RF isolation studies, and rapid PCB/3D prototyping prior to serial tooling.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
              Capabilities: 3D EM simulation &bull; Conformal arrays &bull; Rapid aperture modeling
            </div>
          </div>
        </div>

        <!-- 05. Environmental & Dynamic Rig -->
        <div class="card" style="overflow: hidden; display: flex; flex-direction: column;">
          <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column; background: #080E14;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; font-weight: 600;">05 · ENVIRONMENTAL STRESS TEST</div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem;">MIL-STD-810H &amp; DO-160G Protocols</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              Thermal shock cycling chambers (-55°C to +150°C), electro-dynamic vibration shaker rigs (up to 30g RMS), altitude decompression simulators (70,000 ft), and salt-fog corrosion chambers verifying long-term operational resilience on naval vessels and combat aircraft.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
              Capabilities: 30g vibration &bull; -55°C to +150°C thermal &bull; Salt fog &amp; altitude
            </div>
          </div>
        </div>

        <!-- 06. 32-Foot Metallic Ground Plane -->
        <div class="card" style="overflow: hidden; display: flex; flex-direction: column;">
          <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column; background: #080E14;">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem; font-weight: 600;">06 · OPEN-AIR TEST RANGE</div>
            <h3 style="font-size: 1.35rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem;">32-Foot Metallic Ground Plane</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
              Elevated outdoor copper ground plane matching MIL-DTL-85670C requirements for testing low-frequency tactical V/UHF blade antennas (20–500 MHz). Replicates airframe curvature and mast ground conditions to ensure impedance and radiation pattern matching prior to aircraft trials.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
              Capabilities: 20–500 MHz outdoor range &bull; 32 ft ground plane &bull; Airframe replication
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- QUALITY & CEMILAC CERTIFICATIONS SECTION -->
  <section style="padding: clamp(4rem, 8vh, 6rem) 0; background: var(--surface); border-bottom: 1px solid var(--border);">
    <div class="container-wide">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 3rem; align-items: center;">
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem; font-weight: 600;">
            DEFENCE ACCREDITATION
          </div>
          <h2 style="font-size: clamp(1.85rem, 3vw, 2.5rem); font-weight: 700; color: var(--text); margin-bottom: 1.25rem; letter-spacing: -0.02em;">
            Audited, Approved, and Proven in Frontline Defence Programmes.
          </h2>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
            Verdant Telemetry operates in strict adherence to global aerospace standards. Since receiving CEMILAC Design Approval in 2008 and AS9100 Rev D certification in 2009, our facilities undergo regular audits by the Ministry of Defence, DRDO, ADA, and premier global Tier-1 aerospace contractors.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.8125rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text);">
              <span style="color: var(--accent); font-weight: 700;">&check;</span> AS9100 Rev D Certified (Production &amp; Quality Management)
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text);">
              <span style="color: var(--accent); font-weight: 700;">&check;</span> CEMILAC Design Approval for Airborne Antennas &amp; Radomes
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text);">
              <span style="color: var(--accent); font-weight: 700;">&check;</span> ISO 9001:2015 Continuous Quality Conformance
            </div>
          </div>
        </div>

        <div class="card" style="padding: 2.25rem; background: #05090D; display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 1.25rem;">
            <img src="/assets/as9100d-certified-logo.png" alt="AS9100 Rev D Certified" style="height: 52px; width: auto; object-fit: contain;" />
            <div>
              <div style="font-weight: 700; color: var(--text); font-size: 1.05rem;">AS9100 Rev D Certified</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">Certified since June 2009 &bull; Konthuruthy, Cochin</div>
            </div>
          </div>
          <div style="height: 1px; background: var(--border);"></div>
          <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
            Every production batch is accompanied by serialised CoCs (Certificate of Conformance), vector network return-loss plots, insertion loss records, and environmental test witness sheets.
          </div>
          <a href="#/contact?enquiry=Quality%20Standards%20and%20Certificates" class="btn-secondary" style="font-size: 0.8125rem; width: fit-content;">Request Quality Documentation</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FACILITY VISIT CTA -->
  <section style="padding: 5rem 0; background: var(--bg); text-align: center;">
    <div class="container-wide">
      <div style="max-width: 720px; margin: 0 auto; padding: 3rem 2rem; background: var(--surface); border: 1px solid var(--border); border-radius: 14px;">
        <h2 style="font-size: 1.85rem; font-weight: 700; color: var(--text); margin-bottom: 1rem;">
          Arrange a Technical Facility Visit
        </h2>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem;">
          Our technical directors and RF engineers welcome defence procurement teams, platform integrators, and tier-1 aerospace partners to our Cochin manufacturing plant and Coimbatore design centre.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
          <a href="#/contact?enquiry=Arrange%20Facility%20Visit" class="btn-primary">Schedule Engineering Visit</a>
          <a href="#/products" class="btn-secondary">Browse Products</a>
        </div>
      </div>
    </div>
  </section>
  `;
}
