# Verdant Telemetry & Antenna Systems — Project State & Architectural Blueprint

## 1. Project Overview & Mission
**Verdant Telemetry & Antenna Systems Pvt. Ltd.** is an Indian aerospace and defence engineering company headquartered in Cochin, Kerala, founded in 1997. The company specializes in the custom design, electromagnetic simulation, composite fabrication, and MIL-STD environmental qualification of airborne, shipborne, terrestrial, and tactical antenna systems and radomes.

This application is a production-grade, multi-view single-page web platform built for international aerospace procurement leads, avionics systems integrators, and defence engineers. The site conveys unwavering engineering integrity, airworthiness certification (AS9100 Rev D & CEMILAC), and technical sophistication under the narrative theme: **"From Kerala to the World — Precision Antennas Engineered Where India Meets the Ocean."**

---

## 2. Tech Stack & Architecture
- **Framework & Bundler:** Vite + Vanilla JavaScript / TypeScript (ES Modules).
- **Styling Architecture:** Single-source, highly organized CSS (`src/styles/main.css`) implementing the Verdant Aerospace Design System:
  - Deep dark palette (`#05090D` background, `#080D12` cockpit surface, `#111B22` elevated panels).
  - Tactical glowing accents: Emerald (`#03BC9F`) and Cyan (`#4DB6FF`).
  - Typography: Space Grotesk (display), Inter (body), JetBrains Mono (telemetry, badges, and technical specs).
  - Hairline borders (`rgba(255, 255, 255, 0.08)`), micro-LED indicators, and zero-pill discipline.
- **3D Graphics & Visual Metrology:** Three.js (WebGL) running an interactive dot-matrix Earth globe with procedurally projected land mask geojson, rotating signal arcs, and pulse rings.
- **Routing:** Client-side hash routing (`window.location.hash`) with zero-reload transitions, auto-scroll reset, active nav indicators, and dynamic document title updates.

---

## 3. Routes & Views

### `#/` — Home Page (`src/views/home.js`)
1. **Hero I (100vh):** Full-bleed interactive 3D WebGL dot-matrix globe. Cochin origin marker (`9.9312° N, 76.2673° E`) emitting animated spherical arcs to global defense hubs. Drag/touch rotation with inertial damping, intro zoom deceleration, and offscreen rendering pause to conserve frame budget.
2. **Hero II (Statement of Purpose):** Scroll-synchronized word-by-word text reveal illuminating Verdant's sovereign aerospace mission.
3. **RF Regime Sine-Wave Stage:** Real-time trigonometric sine wave canvas representing RF carrier waveforms with responsive scaling.
4. **System Capabilities Slideshow:** Pinned fullscreen sticky stage (100vh/100dvh).
   - Seamless background crossfade eliminating any black/dark gap during mobile swipe or desktop scroll.
   - Kinetic vertical HUD content transition (outgoing text glides up and dims, incoming text rises in and settles with overlapping handoff).
   - 4 capabilities: *Design & Development*, *Precision Manufacturing*, *Tactical Customisation*, and *Testing & Qualification*.
5. **Featured Products Depth Stage:** TEKEVER-style 3D interactive stage showcasing JC 50 (C-Band Blade), JD 120 T1B (Tactical V/UHF Blade), and JD 401 S1G-A (High-G Radar Altimeter) with live product linkouts.
6. **The Verdant Story Section:** Parallax-enhanced background texture (`verdant-story-section-background.webp`) framing Verdant's 29-year evolution from a Cochin workshop into a global supplier.
7. **Newsroom & Full Article Reader Modal:** Horizontal snap-scroll cards for SIATI Indigenisation Awards, National TV documentary broadcast, and AS9100 Rev D recertification, backed by a full reading modal overlay.
8. **Proven Sovereign Clients Marquee:** Auto-scrolling trust bar showcasing HAL, ISRO, DRDO, NPOL, ECIL, and AS9100D certification.
9. **Meet Our People & Direct Contact:** Leadership quote from Louis George, executive summaries, Cochin headquarters coordinates, and interactive enquiry form.

### `#/products` — Products Catalogue & Cockpit (`src/views/products.js`)
- **Product Banner:** Top hero banner featuring high-visibility aerospace background imagery anchored cleanly to the bottom.
- **Filter Rail (Desktop) / Sheet (Mobile):** Multi-parameter filtering by Application (*Navigation, Communication, EW, Identification, Datalink & Telemetry*), Frequency Band (*VHF, UHF, C-Band, L-Band, S-Band*), and Type (*Blade, Omni, Altimeter, Conformal*).
- **Real-Time Controls:** Live search, sorting (*Default, Name A-Z, Name Z-A*), active filter count, and reset triggers.
- **Hardware Cards:** Interactive cards featuring rigid uniform-height HUD telemetry compartments (`.hw-specs-compartment`), hover lifts, and direct deep-link triggers.
- **Hardware Inspection Cockpit Modal (`div#inspection-dialog`):**
  - Minimalist header bar displaying product title and inquiry controls.
  - Left pane: High-contrast product imagery with zoom inspection.
  - Right pane: Tabbed technical dossiers including Overview, Electrical/RF specifications, Mechanical envelope, Operational domain, and MIL-STD compliance.
  - Direct RF procurement inquiry trigger with automatic product pre-population.

### `#/about` — About Us ("From Kerala to the World") (`src/views/about.js`)
- **Hero & Telemetry Ribbon:** Clean aerospace headline with 4 focused metrics (1997 Founding, 100+ Active Fleets, 20 GHz Chamber, AS9100D Aerospace Certification).
- **Historic Archive Cockpit:** Visual showcase displaying the 29-year archive collage (`/assets/collage.png`) with the official AS9100 Rev D quality seal (`/assets/as9100d-certified-logo.png`).
- **Sovereign Partner Trust Strip:** High-contrast institutional trust row for DRDO, HAL, ISRO, Indian Armed Forces, CEMILAC design approval, and AS9100 Rev D.
- **The Verdant Story (Human Origin & Frontline Fleets):** Plain-English, compelling narrative of how two engineers in Cochin established sovereign RF aperture engineering to replace foreign imports. Paired with authentic media grid (`/assets/001.png`, `/assets/jet.webp`, `/assets/award.jpeg`, `/assets/tactical-customization.webp`).
- **Core Engineering Principles:** Three foundational tenets (Integrated Sovereignty: Physics to Flight-Line; Uncompromising Airworthiness; Direct Engineering Access).
- **In-House RF & Environmental Infrastructure:** Four visual facility showcases:
  - *Coimbatore Electromagnetic Simulation Lab* (`/assets/005.png`)
  - *Composite Radome Autoclave Cleanroom* (`/assets/004.jpg`)
  - *RF Metrology & Network Analysis to 40 GHz* (`/assets/002.png`)
  - *Indoor Microwave Anechoic Chamber 1–20 GHz* (`/assets/003.png`)
  - *32-Foot Ground Plane & Open-Air Test Ranges (20–500 MHz)*.
- **Verified Milestones (1997–2025):** Organized era switcher (All, 1997–2007 Foundations, 2008–2020 Certifications, 2021–Present Innovation) with smooth non-jumping tab updates.
- **Executive Leadership & Mentorship:** Focus dossiers on Louis George (CEO & Founder), Kuruvilla George (CTO), and Dr. Tony G. Thomas (Chief Mentor).
- **Direct Cochin Headquarters Dialogue:** Contact coordinates in Konthuruthy, Cochin with direct engineering inquiry triggers.

### `#/capabilities` & Sub-Views (`src/views/capabilities.js`)
- Capabilities overview and dedicated deep-dives:
  - `#/capabilities/design`: 3D computational EM modeling, aperture synthesis, transonic CFD.
  - `#/capabilities/manufacturing`: AS9100 Rev D autoclave cleanroom, CNC micro-milling, hermetic sealing.
  - `#/capabilities/customisation`: Low-profile conformal radomes, tailored aerodynamic baseplates.
  - `#/capabilities/testing`: 20 GHz indoor chamber, 32-ft ground plane, MIL-STD-810H environmental testing.

### Additional Views
- `#/contact` (`src/views/contact.js`): Interactive contact cockpit with verified address, phone lines, email, and procurement inquiry routing.
- `#/careers` (`src/views/careers.js`): Open roles, culture, and Kerala aerospace engineering talent recruitment.
- `#/how`: Step-by-step engineering methodology (*Design → Build → Customise → Test*).

---

## 4. Complete Asset Inventory (`/public/assets/` & `/assets/`)
| Asset Name | Type / Size | Primary Usage |
|---|---|---|
| `001.png` | PNG (171 KB) | About Us (Chapter 01: Early Aperture & Radar Synthesis) |
| `002.png` | PNG (180 KB) | About Us & Infrastructure (RF Metrology Bench to 40 GHz) |
| `003.png` | PNG (386 KB) | About Us & Infrastructure (Indoor Anechoic Chamber up to 20 GHz) |
| `004.jpg` | JPG (194 KB) | About Us & Infrastructure (Composite Autoclave Cleanroom) |
| `005.png` | PNG (265 KB) | About Us & Infrastructure (Coimbatore R&D Design Centre) |
| `as9100d-certified-logo.png` | PNG (68 KB) | Navigation, Trust Bars, Newsroom, About Us Quality Seal |
| `award.jpeg` | JPG (117 KB) | About Us & Newsroom (SIATI Indigenisation Award Trophy) |
| `collage.png` | PNG (549 KB) | About Us Hero Archive & Newsroom Television Documentary |
| `drdo.png` | PNG (920 KB) | Home & About Us Sovereign Client Trust Bar (DRDO) |
| `hal.png` | PNG (147 KB) | Home & About Us Sovereign Client Trust Bar (HAL) |
| `isro.png` | PNG (40 KB) | Home & About Us Sovereign Client Trust Bar (ISRO) |
| `jet.webp` | WebP (162 KB) | Home Hero, Domains & About Us Chapter 02 (Combat Airframes) |
| `navy.webp` | WebP (543 KB) | Operational Domains (Naval & Shipborne Systems) |
| `space.webp` | WebP (435 KB) | Operational Domains (Satellite & Space Payloads) |
| `design-and-development.webp` | WebP (98 KB) | Capabilities Slideshow (Slide 0: Design & Development) |
| `precision-manufacturing.webp` | WebP (101 KB) | Capabilities Slideshow (Slide 1: Precision Manufacturing) |
| `tactical-customization.webp` | WebP (48 KB) | Capabilities Slideshow (Slide 2: Tactical Customisation) & About Us Chapter 05 |
| `testing-and-qualification.webp`| WebP (48 KB) | Capabilities Slideshow (Slide 3: Testing & Qualification) |
| `products-banner.webp` | WebP (70 KB) | Products Page Top Hero Banner |
| `verdant-story-section-background.webp` | WebP (75 KB) | The Verdant Story Section Parallax Background |
| `JC-50.png` / `/products/JC-50/1.webp` | Product Assets | JC 50 C-Band Blade Antenna |
| `JD-120-T1B.jpg` / `/products/JD-120-T1B/1.webp` | Product Assets | JD 120 Tactical V/UHF Blade Antenna |
| `JD-401-S1G-A.jpg` / `/products/JD-401-S1G-A/1.webp` | Product Assets | JD 401 Radar Altimeter Antenna |
| `land_mask.json` | JSON (2.7 KB) | 3D WebGL Dot-Matrix Globe Procedural Land Projection |

---

## 5. Key Verified Brand & Operational Facts
- **Full Legal Name:** Verdant Telemetry & Antenna Systems Pvt. Ltd.
- **Headquarters:** 26/411 A, Konthuruthy, Cochin – 682 013, Kerala, India.
- **Telephones:** 0091-484-2663104 / 0091-484-2663576.
- **Official Inquiries:** info@verdanttelemetry.com
- **Accreditations:**
  - AS9100 Rev D & ISO 9001:2015 (Certified continuously since June 2009).
  - CEMILAC Design Approval (Ministry of Defence, India, since 2008).
- **Core Facilities:**
  - Indoor microwave anechoic chamber up to 20 GHz (gain, VSWR, 3D patterns, radome transmission).
  - Outdoor open-air antenna test ranges (20 MHz – 500 MHz).
  - Standard 32-ft circular ground plane compliant with MIL-DTL-85670C (20–400 MHz).
  - RF instrumentation calibrated to 40 GHz (Keysight, Rohde & Schwarz).
  - Dedicated Advanced R&D Design Centre in Coimbatore (established 2023).
- **Awards & Honours:**
  - SIATI National Award for Excellence in Aerospace Indigenisation (2001, 2016).
  - Aeronautical Development Establishment (ADE) Creative Partnership Award (2020).
  - Special Honour at Aero India 2023 for LCA Tejas JD 202 V/UHF blade development under DRDO TDF.
- **Key Leadership:**
  - **Louis George:** CEO & Founder (30+ years composite aerodynamic structures, Physics graduate from MGU, advanced composites at IIT Chennai).
  - **Kuruvilla George:** CTO (30+ years computational electromagnetics, microwave simulation, MIL-STD flight testing).
  - **Tony G. Thomas:** Chief Mentor (Ex-AT&T Bell Labs, Co-founder of AdventNet / Zoho Corporation, IIT Madras, Johns Hopkins PhD).
- **Sovereign & Global Integrators:**
  - Domestic: HAL, ISRO, DRDO, ECIL, NPOL.
  - International: Elbit Systems (LCA Tejas EW apertures), Sierra Nevada Corporation (V/UHF blades).
  - Delegations from Thales, Raytheon, Lockheed Martin, and Chelton have visited the Cochin facility.
