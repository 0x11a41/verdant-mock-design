/**
 * Verdant Telemetry & Antenna Systems Pvt. Ltd.
 * Single-file application script
 */

/* ==========================================================================
   1. ASSETS CONFIGURATION & FALLBACK GENERATOR
   ========================================================================== */
const ASSETS = {
  // Brand & Trust
  logoTeal: '/assets/logo-teal.webp',
  logoWhite: '/assets/logo-white.webp',
  as9100Logo: '/assets/as9100d-certified-logo.png',
  awardPhoto: '/assets/award.jpeg',
  collagePhoto: '/assets/collage.png',
  drdoLogo: '/assets/drdo.png',
  halLogo: '/assets/hal.png',
  isroLogo: '/assets/isro.png',
  // Facilities & Operations
  anechoicChamber: '/assets/003.png',
  rfTesting: '/assets/002.png',
  manufacturingDrill: '/assets/004.jpg',
  designLab: '/assets/005.png',
  radarAntenna: '/assets/001.png',
  // Products
  jc50: '/assets/JC-50.png',
  jd85: '/assets/JD-85.png',
  jd120t1b: '/assets/JD-120-T1B.jpg',
  jd401: '/assets/JD-401-S1G-A.jpg',
  jdct201: '/assets/JD-CT201.jpg',
  jh601: '/assets/JH-60-1.png',
  jh135: '/assets/JH-135.jpg',
  antennaModel: '/assets/antina.webp',
  // Platforms & Domains
  jet: '/assets/jet.webp',
  navy: '/assets/navy.webp',
  rfEngineering: '/assets/rf-engineering.webp',
  space: '/assets/space.webp'
};

// Graceful fallback SVG generator if asset file is missing in empty folder
function getFallbackSvg(type, label = '') {
  const enc = (svg) => 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  if (type === 'blade') {
    return enc(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260" fill="none">
      <rect width="400" height="260" fill="#0B1217"/>
      <path d="M70 210H330V220H70V210Z" fill="#111B22" stroke="rgba(255,255,255,0.15)"/>
      <path d="M120 210L170 60C175 48 190 40 205 40H220C235 40 245 48 245 60L280 210H120Z" fill="#111B22" stroke="#03BC9F" stroke-width="2"/>
      <circle cx="150" cy="215" r="3" fill="#03BC9F"/>
      <circle cx="200" cy="215" r="3" fill="#03BC9F"/>
      <circle cx="250" cy="215" r="3" fill="#03BC9F"/>
      <path d="M185 85L215 85" stroke="rgba(3,188,159,0.5)" stroke-width="2"/>
      <text x="200" y="248" fill="#8FA3A0" font-family="monospace" font-size="11" text-anchor="middle">${label || 'VERDANT ANTENNA'}</text>
    </svg>`);
  }
  if (type === 'altimeter') {
    return enc(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260" fill="none">
      <rect width="400" height="260" fill="#0B1217"/>
      <rect x="110" y="70" width="180" height="110" rx="12" fill="#111B22" stroke="#03BC9F" stroke-width="2"/>
      <circle cx="200" cy="125" r="32" stroke="rgba(3,188,159,0.4)" stroke-dasharray="3 3"/>
      <circle cx="200" cy="125" r="14" fill="#03BC9F" fill-opacity="0.2" stroke="#03BC9F"/>
      <text x="200" y="245" fill="#8FA3A0" font-family="monospace" font-size="11" text-anchor="middle">${label || 'RADIO ALTIMETER'}</text>
    </svg>`);
  }
  if (type === 'omni') {
    return enc(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260" fill="none">
      <rect width="400" height="260" fill="#0B1217"/>
      <rect x="188" y="50" width="24" height="150" rx="12" fill="#111B22" stroke="#03BC9F" stroke-width="2"/>
      <circle cx="200" cy="45" r="28" stroke="rgba(3,188,159,0.3)" stroke-dasharray="2 4"/>
      <circle cx="200" cy="45" r="48" stroke="rgba(3,188,159,0.15)" stroke-dasharray="2 4"/>
      <rect x="160" y="200" width="80" height="15" rx="3" fill="#16222A" stroke="rgba(255,255,255,0.15)"/>
      <text x="200" y="245" fill="#8FA3A0" font-family="monospace" font-size="11" text-anchor="middle">${label || 'OMNI ANTENNA'}</text>
    </svg>`);
  }
  if (type === 'chamber') {
    return enc(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none">
      <rect width="600" height="400" fill="#0B1217"/>
      <path d="M40 40L70 80L100 40L130 80L160 40L190 80L220 40L250 80L280 40L310 80L340 40L370 80L400 40L430 80L460 40L490 80L520 40L550 80" stroke="rgba(3,188,159,0.3)" stroke-width="2"/>
      <path d="M40 360L70 320L100 360L130 320L160 360L190 320L220 360L250 320L280 360L310 320L340 360L370 320L400 360L430 320L460 360L490 320L520 360L550 320" stroke="rgba(3,188,159,0.3)" stroke-width="2"/>
      <circle cx="300" cy="200" r="40" stroke="#03BC9F" stroke-width="2"/>
      <circle cx="300" cy="200" r="8" fill="#03BC9F"/>
      <text x="300" y="280" fill="#EAF2F0" font-family="monospace" font-size="13" text-anchor="middle">ANECHOIC TEST FACILITY (UP TO 20 GHz)</text>
    </svg>`);
  }
  return enc(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260" fill="none">
    <rect width="400" height="260" fill="#0B1217"/>
    <text x="200" y="135" fill="#8FA3A0" font-family="monospace" font-size="12" text-anchor="middle">${label || 'VERDANT TELEMETRY'}</text>
  </svg>`);
}

// Fallback image helper: handles onerror smoothly
function safeImg(src, fallbackType, label, alt, className = '', style = '') {
  const fallback = getFallbackSvg(fallbackType, label);
  return `<img src="${src}" alt="${alt}" class="${className}" style="${style}" onerror="this.onerror=null; this.src='${fallback}';" loading="lazy" />`;
}

/* ==========================================================================
   2. PRODUCTS SOURCE DATA (STRICT FACTUAL SEED)
   ========================================================================== */
const PRODUCTS = [
  {
    id: 'jc-07',
    code: 'JC 07',
    name: 'JC 07 C Band Omni Antenna',
    category: 'Omni',
    application: 'Datalink & Telemetry',
    freqBand: 'C Band (4.0 – 8.0 GHz)',
    type: 'Omni-Directional',
    image: ASSETS.antennaModel,
    fallbackType: 'omni',
    datasheetUrl: '#/contact?enquiry=JC-07',
    specs: {
      'Frequency Range': 'C-Band',
      'Radiation Pattern': 'Omnidirectional in azimuth',
      'Polarisation': 'Linear / Vertical',
      'Impedance': '50 Ohms',
      'Qualification': 'Airborne / Ground telemetry environmental standards',
      'Construction': 'High-strength low-loss composite radome'
    },
    description: 'Designed for telemetry datalink transceivers requiring continuous 360-degree azimuthal coverage on airborne and ground test platforms.'
  },
  {
    id: 'jc-1003-1006',
    code: 'JC 1003 / 1006',
    name: 'JC 1003 and JC 1006 Radio Altimeter',
    category: 'Altimeter',
    application: 'Navigation',
    freqBand: '4.2 – 4.4 GHz (Radio Altimeter Band)',
    type: 'Conformal / Microstrip Patch',
    image: ASSETS.jh601,
    fallbackType: 'altimeter',
    datasheetUrl: '#/contact?enquiry=JC-1003',
    specs: {
      'Frequency Range': '4.2 GHz to 4.4 GHz ARINC / Military altimeter band',
      'Beamwidth': 'Designed for high nadir pointing accuracy',
      'VSWR': 'Typically < 1.5:1 across operating band',
      'Mounting': 'Conformal flush-mount aircraft skin integration',
      'Environmental': 'Tested to MIL-STD-810 & airborne thermal cycles'
    },
    description: 'Precision flush-mounted airborne radio altimeter antennas engineered for military fast jets, transport aircraft, and helicopters.'
  },
  {
    id: 'jc-50',
    code: 'JC 50',
    name: 'JC 50 C-Band Blade Antenna',
    category: 'Blade',
    application: 'Datalink & Telemetry',
    freqBand: 'C Band (Specification per requirement: Editable)',
    type: 'Aerodynamic Blade',
    image: ASSETS.jc50,
    fallbackType: 'blade',
    datasheetUrl: '#/contact?enquiry=JC-50',
    specs: {
      'Frequency Band': 'C-Band',
      'Form Factor': 'Low-drag aerodynamic composite blade',
      'Power Handling': 'High RF pulse & CW capability',
      'Structural': 'Designed for supersonic/high dynamic pressure flight'
    },
    description: 'Low-drag blade antenna developed for airborne telemetry and C-band tracking links under high dynamic pressure regimes.'
  },
  {
    id: 'jc-62',
    code: 'JC 62',
    name: 'JC 62 C Band Omni Antenna',
    category: 'Omni',
    application: 'Datalink & Telemetry',
    freqBand: 'C Band (Specification per requirement: Editable)',
    type: 'Omni-Directional',
    image: ASSETS.jh135,
    fallbackType: 'omni',
    datasheetUrl: '#/contact?enquiry=JC-62',
    specs: {
      'Frequency Range': 'C-Band',
      'Coverage': 'Omnidirectional azimuth',
      'Connector': 'TNC / N-Type female',
      'Radome': 'Weatherproof composite structure'
    },
    description: 'Ruggedised shipborne and terrestrial C-band omni antenna providing wide-area line-of-sight tracking and command telemetry.'
  },
  {
    id: 'jd-118',
    code: 'JD 118',
    name: 'JD 118 V/UHF Blade Antenna',
    category: 'Blade',
    application: 'Communication',
    freqBand: 'VHF/UHF (30 – 400 MHz: Editable)',
    type: 'Airborne Blade',
    image: ASSETS.jd85,
    fallbackType: 'blade',
    datasheetUrl: '#/contact?enquiry=JD-118',
    specs: {
      'Frequency Band': 'V/UHF Communication',
      'VSWR': '< 2.5:1 across specified band',
      'Ground Plane': 'Qualified on standard 32-ft reference ground plane',
      'Platform': 'Airborne fighters and tactical helicopters'
    },
    description: 'Standard military VHF/UHF communications blade engineered with integrated matching network and lightning suppression.'
  },
  {
    id: 'jd-120-t1b',
    code: 'JD 120 T1B-A / T1B / T2G',
    name: 'JD 120 V/UHF Top-Load Blade',
    category: 'Blade',
    application: 'Communication',
    freqBand: 'VHF/UHF Tactical Communication (30 – 512 MHz: Editable)',
    type: 'Top-Loaded Aerodynamic Blade',
    image: ASSETS.jd120t1b,
    fallbackType: 'blade',
    datasheetUrl: '#/contact?enquiry=JD-120-T1B',
    specs: {
      'Top-Load Design': 'Provides extended electrical length in reduced physical height',
      'Variants': 'JD 120 T1B-A, JD 120 T1B, JD 120 T2G',
      'Impedance': '50 Ohms nominal',
      'Mechanical': 'Reinforced glass-epoxy moulded aerodynamic housing'
    },
    description: 'Compact top-loaded blade series delivering high radiation efficiency across tactical VHF and UHF spectrums.'
  },
  {
    id: 'jd-201',
    code: 'JD 201',
    name: 'JD 201 VHF/UHF Blade Antenna',
    category: 'Blade',
    application: 'Communication',
    freqBand: 'VHF/UHF (Specification: Editable)',
    type: 'Airborne Blade',
    image: ASSETS.jd401,
    fallbackType: 'blade',
    datasheetUrl: '#/contact?enquiry=JD-201',
    specs: {
      'Frequency Coverage': 'Tactical VHF/UHF',
      'Polarisation': 'Vertical',
      'Pattern': 'Omni-directional in azimuth plane',
      'Approval': 'CEMILAC / Airborne qualified'
    },
    description: 'High-reliability airborne blade antenna providing robust tactical voice and data links for defence aircraft.'
  },
  {
    id: 'jd-202',
    code: 'JD 202',
    name: 'JD 202 V/UHF Blade Antenna (LCA Tejas)',
    category: 'Blade',
    application: 'Communication',
    freqBand: 'Very/Ultra High Frequency Blade (LCA Tejas: Fact)',
    type: 'Supersonic Combat Blade',
    image: ASSETS.awardPhoto,
    fallbackType: 'blade',
    datasheetUrl: '#/contact?enquiry=JD-202',
    specs: {
      'Platform': 'LCA Tejas Light Combat Aircraft',
      'Program': 'Indigenously developed under TDF Scheme with ADA / DRDO technical hand-holding',
      'Speed Rating': 'Mach 1.6+ supersonic flight certified',
      'Function': 'Navigation and tactical V/UHF communication with omni reception'
    },
    description: 'Honoured at Aero India 2023. Indigenously developed for LCA Tejas under the DRDO TDF Scheme with ADA hand-holding, delivering omni V/UHF coverage in extreme flight regimes.'
  },
  {
    id: 'jd-252-a-ht',
    code: 'JD 252 A HT',
    name: 'JD 252 A HT Triband Dual Connector Blade',
    category: 'Blade',
    application: 'EW',
    freqBand: 'Triband Multi-Port (Specification: Editable)',
    type: 'Dual Connector Multi-Band Blade',
    image: ASSETS.jdct201,
    fallbackType: 'blade',
    datasheetUrl: '#/contact?enquiry=JD-252-A-HT',
    specs: {
      'Ports': 'Dual RF connector architecture',
      'Bands': 'Triband simultaneous operation',
      'Isolation': 'High port-to-port isolation',
      'Environmental': 'High temperature (HT) composite radome'
    },
    description: 'Triband multi-port antenna consolidating multiple avionics bands into a single composite structure, saving fuselage aperture space.'
  },
  {
    id: 'jd-300',
    code: 'JD 300 B02 / D02 / L02',
    name: 'JD 300 V/UHF Tactical Blade Series',
    category: 'Blade',
    application: 'Communication',
    freqBand: 'Tactical V/UHF (Variants B02, D02, L02: Editable)',
    type: 'Ruggedised Blade',
    image: ASSETS.jdct201,
    fallbackType: 'blade',
    datasheetUrl: '#/contact?enquiry=JD-300',
    specs: {
      'Configurations': 'B02, D02, L02 tailored baseplates and pinouts',
      'Frequency': 'Broadband V/UHF tactical',
      'Reliability': 'Tested to MIL-DTL-85670C ground plane standards',
      'Finish': 'Anti-static radar absorbent or camouflage polyurethane'
    },
    description: 'Modular V/UHF tactical blade family engineered for interchangeability across military fixed-wing and rotary-wing aircraft.'
  }
];

/* ==========================================================================
   3. HISTORICAL TIMELINE & MILESTONES (STRICT REAL FACTS)
   ========================================================================== */
const TIMELINE = [
  { year: '1997', type: 'Origin', title: 'Founded in Cochin', desc: 'Verdant Telemetry started as a small precision workshop in Cochin, Kerala, focusing on RF and composite structures.' },
  { year: '2001', type: 'Awards', title: 'SIATI Excellence Award', desc: 'Conferred the SIATI Excellence in Aerospace Indigenisation Award for indigenous RF components.' },
  { year: '2008', type: 'Certifications', title: 'CEMILAC Design Approval', desc: 'Received formal Design Approval from CEMILAC (Centre for Military Airworthiness & Certification).' },
  { year: '2009', type: 'Certifications', title: 'AS9100 Rev D & ISO 9001', desc: 'Achieved AS9100 certification (June 2009), maintained continuously alongside ISO 9001:2015 with regular surveillance audits.' },
  { year: '2011', type: 'Testing', title: 'Anechoic Chamber Commissioning', desc: 'Commissioned in-house indoor anechoic test chamber up to 20 GHz and outdoor 20–500 MHz ranges.' },
  { year: '2016', type: 'Awards', title: 'Second SIATI Indigenisation Award', desc: 'Recognised again by SIATI for sustained indigenisation of mission-critical airborne antenna systems.' },
  { year: '2020', type: 'Awards', title: 'ADE Creative Partnership Award', desc: 'Honoured by Aeronautical Development Establishment (ADE) for collaborative aerospace development.' },
  { year: '2023', type: 'Products', title: 'Coimbatore Design Centre & Aero India Launch', desc: 'Opened dedicated R&D design centre in Coimbatore. Launched JD 202 V/UHF blade for LCA Tejas under DRDO TDF at Aero India 2023.' },
  { year: '2024', type: 'Products', title: 'Conformal Satcom Antennas', desc: 'Engineered advanced low-profile conformal Satcom antennas for high-speed airborne links.' },
  { year: '2025', type: 'Products', title: 'Ultra-Light UAV Antenna', desc: 'Developed next-generation ultra-light composite antenna for unmanned airborne platforms.' }
];

console.log('Verdant Telemetry Data Initialised. Products:', PRODUCTS.length);

/* ==========================================================================
   4. THREE.JS PROCEDURAL DOT-MATRIX GLOBE WITH KOCHI ORIGIN
   ========================================================================== */
/* ==========================================================================
   4. THREE.JS PROCEDURAL ACCURATE DOT-MATRIX GLOBE WITH KOCHI ORIGIN
   ========================================================================== */
let globeInstance = null;

// Accurate Natural Earth 90x180 Raster Land Mask (Base64 encoded bitmask)
const LAND_MASK_B64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4AP/AAAAAAAAAAAAAAAAAAAAAAAAX/z///+AAAAAAAABAAAAAAAAAAAAAYd8P///wAA+AAAAAA8AAAAAAAAAAAwAnw////4AAIAAAAAAGAAAAAAAAAAADivwAf//wAAAAADAAf/wAHYAAAAAADoi3sAP//gAAAAAMAD///sAAAAgBgACfwz/AD/+gAAAwAEHf///+/8gBAP/7/nJdjwD/+AAAH/AA7f///////f4P//////h8H/gAAAf/6//f////////Mf/////9H4D8AeAA+ev///////////AP/////4A0B4AAAD5/////////////Af3////gHgA4AAAH5///////////LwAHgH///gHkAAAAAH4/////////+CIAABAB///4D+AAAAGCx/////////4A8AAIAAf///n/gAAAOCD/////////wA4AAAAAf///n/wAAAbP///////////AgAAAAAP/////wAAADf//////////9AAAAAAAF////0YAAAB///////////9AAAAAAAD////8EAAAB///////////5AAAAAAAD////2AAAAB/f5f///////wAAAAAAAD////gAAAAfxnwP///////jAAAAAAAD////AAAAAPCb3///////+CAAAAAAAD///8AAAAAfALf//////+ECAAAAAAAB///8AAAAAGHQP///////mMAAAAAAAA///8AAAAAH+Ai///////E8AAAAAAAAf//wAAAAAP/AA///////BgAAAAAAAAP//gAAAAAf/73///////gAAAAAAAAAD/AQAAAAAf////f/////gAAAAAAAAAF+AQAAAAB///+/n/////AAAAAAAAAAC+AAAAAAB///+f0H////AAAAAAAAAAAeAwAAAAD////f/B///8gAAAAAAAAAAeGEAAAAH////v+B/z/AAAAAAAAAAAAPMAgAAAD////n+A/B+gAAAAAAAAAAAD8AAAAAD////n4AeB/AgAAAAAAAAAAAPAAAAAH////3gAcAfAgAAAAAAAAAAADAAAAAD////6AAcAfggAAAAAAAAAAABDwAAAD////8wAMATAIAAAAAAAAAAAAr/AAAB/////gAKASAAAAAAAAAAAAAAH/gAAA/////gACAAAIAAAAAAAAAAAAH/8AAAaH///AAAAsGAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAB//8AAAAYegAAAAAAAAAAAAP//gAAAD//4AAAAMeBgAAAAAAAAAAAP//8AAAB//wAAAAGdiuAAAAAAAAAAAf///AAAA//wAAAACAQHgAAAAAAAAAAP///gAAA//wAAAABwAHwgAAAAAAAAAH///AAAA//wAAAAACIDQIAAAAAAAAAH//+AAAAf/wAAAAAAAAAAAAAAAAAAAD//+AAAA//wgAAAAABxAAAAAAAAAAAD//+AAAA//wgAAAAAPxgBAAAAAAAAAA//8AAAA//jgAAAAAf5gAAAAAAAAAAAf/8AAAA//DgAAAAAf/gAAAAAAAAAAAf/8AAAAf/DAAAAAD//4CAAAAAAAAAAf/wAAAAf/DAAAAAH//4AAAAAAAAAAAf/AAAAAf+CAAAAAH//8AAAAAAAAAAAf/AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAH4AAAAAAD//+AAAAAAAAAAA/8AAAAAHwAAAAAADwf8AAAAAAAAAAA/gAAAAAAAAAAAAACAH4AIAAAAAAAAB/wAAAAAAAAAAAAAAAD4AEAAAAAAAAB+AAAAAAAAAAAAAAAAAAAGAAAAAAAAB6AAAAAAAAAAAAAAAAAwAMAAAAAAAAA8AAAAAAAAAAAAAAAAAQAYAAAAAAAAB4AAAAAAAAAAAAAAAAAAAwAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAACAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAeAAIP+f/gAAAAAAAAAAAMAAAAAAABP/+H//////AAAAAAAAAAA+AAAAAf////8////////AAAAAAAOEAPAAAB///////////////gAAAP//T//8AAAH//////////////+AAAH/////4AAAH///////////////8AAE//////4ABw////////////////8AAAD//////gCA////////////////wAAAf/////////////////////////+A/4A///////////////////////////////////////////////////////////////////////////////////////";

let landMaskCache = null;
function getLandMaskBytes() {
  if (landMaskCache) return landMaskCache;
  if (typeof atob !== 'undefined') {
    const bin = atob(LAND_MASK_B64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    landMaskCache = arr;
    return arr;
  }
  return null;
}

function checkLandAccurate(lat, lon) {
  const bytes = getLandMaskBytes();
  if (!bytes) return false;
  const rows = 90;
  const cols = 180;
  const r = Math.max(0, Math.min(rows - 1, Math.floor((90 - lat) / (180 / rows))));
  const c = Math.max(0, Math.min(cols - 1, Math.floor((lon + 180) / (360 / cols))));
  const idx = r * cols + c;
  const byteIdx = Math.floor(idx / 8);
  const bitIdx = 7 - (idx % 8);
  if (byteIdx < bytes.length) {
    return (bytes[byteIdx] & (1 << bitIdx)) !== 0;
  }
  return false;
}

class DotMatrixGlobe {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.animId = null;
    this.isDestroyed = false;
    this.isPaused = false;
    this.targetRotationY = 0.45;
    this.targetRotationX = 0.16;
    this.rotationY = 0.45;
    this.rotationX = 0.16;
    this.scrollRotationBoost = 0;
    this.isDragging = false;
    this.prevMousePos = { x: 0, y: 0 };
    this.lastTime = performance.now();
    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded. Skipping WebGL globe.');
      return;
    }

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 245;

    // WebGL Renderer with High-Performance Settings
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);

    this.globeGroup = new THREE.Group();
    this.scene.add(this.globeGroup);

    // Shift globe cleanly to the right side on desktop so left-side hero typography breathes cleanly
    this.updateGlobePosition();

    // High quality soft textures
    this.pointTexture = this.createSoftPointTexture();
    this.headTexture = this.createSoftHeadTexture();

    // Build procedural dot matrix sphere with accurate continents, subtle atmosphere, stations, and refined signals
    this.buildDots();
    this.buildSubtleAtmosphere();
    this.buildStations();
    this.buildSignalSystem();

    this.bindEvents();
    this.animate();
  }

  updateGlobePosition() {
    if (!this.globeGroup) return;
    const w = window.innerWidth;
    if (w >= 1400) {
      this.globeGroup.position.x = 74;
    } else if (w >= 1024) {
      this.globeGroup.position.x = 60;
    } else if (w >= 768) {
      this.globeGroup.position.x = 28;
    } else {
      this.globeGroup.position.x = 0;
    }
    this.globeGroup.position.y = (w > 768) ? 0 : -4;
    this.globeGroup.position.z = 0;
  }

  // Smooth, high-fidelity circular anti-aliased dot with crisp central core
  createSoftPointTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 28);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(240, 255, 250, 0.95)');
    grad.addColorStop(0.6, 'rgba(3, 188, 159, 0.6)');
    grad.addColorStop(0.85, 'rgba(3, 188, 159, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 28, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }

  // Crisp, brilliant point for signal heads: visible luminous center without bloat
  createSoftHeadTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 26);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.28, 'rgba(240, 255, 252, 0.95)');
    grad.addColorStop(0.55, 'rgba(3, 188, 159, 0.65)');
    grad.addColorStop(0.8, 'rgba(3, 188, 159, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 26, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }

  latLongToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  // Accurate continent distribution using Natural Earth vector rasterization (High-density 11,800 points)
  buildDots() {
    const radius = 84;
    const dotsCount = 11800;
    const positions = [];
    const colors = [];

    // Sophisticated palette: luminous teal-cyan for landmasses; soft deep slate for oceans
    const landColor = new THREE.Color('#03BC9F');
    const oceanColor = new THREE.Color('#102533');

    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) % 360 - 180;

      const isLand = checkLandAccurate(lat, lon);
      const r = radius * (isLand ? 1.004 : 0.996);

      const v = this.latLongToVector3(lat, lon, r);
      positions.push(v.x, v.y, v.z);

      if (isLand) {
        // High-definition luminous emerald-teal continent dots
        colors.push(landColor.r * 1.2, landColor.g * 1.2, landColor.b * 1.2);
      } else {
        // Deep quiet tactical ocean grid points
        colors.push(oceanColor.r * 0.6, oceanColor.g * 0.6, oceanColor.b * 0.6);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Refined point size (2.25) for ultra-sharp high-definition definition
    const material = new THREE.PointsMaterial({
      size: 2.25,
      map: this.pointTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.dotsMesh = new THREE.Points(geometry, material);
    this.globeGroup.add(this.dotsMesh);

    // Dark occlusion sphere inside to prevent back-facing dots from cluttering front hemisphere
    const coreGeo = new THREE.SphereGeometry(radius * 0.985, 40, 40);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x05090D });
    this.globeGroup.add(new THREE.Mesh(coreGeo, coreMat));
  }

  // Soft procedural radial glow texture for ethereal ambient aura
  createGlobeGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(256, 256, 120, 256, 256, 256);
    grad.addColorStop(0, 'rgba(3, 188, 159, 0.18)');
    grad.addColorStop(0.3, 'rgba(10, 155, 135, 0.09)');
    grad.addColorStop(0.65, 'rgba(30, 111, 140, 0.03)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(canvas);
  }

  // Soft, faded, high-quality ethereal atmosphere (celestial glow with subtle telemetry)
  buildSubtleAtmosphere() {
    const radius = 84;

    // Soft celestial aura sprite behind the globe for delicate halo depth
    const glowTex = this.createGlobeGlowTexture();
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xffffff,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const glowSprite = new THREE.Sprite(glowMat);
    glowSprite.scale.set(radius * 2.7, radius * 2.7, 1);
    glowSprite.position.set(0, 0, -3);
    this.globeGroup.add(glowSprite);

    // Faded soft inner halo
    const atmoInnerGeo = new THREE.SphereGeometry(radius * 1.025, 48, 48);
    const atmoInnerMat = new THREE.MeshBasicMaterial({
      color: 0x03BC9F,
      transparent: true,
      opacity: 0.10,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.globeGroup.add(new THREE.Mesh(atmoInnerGeo, atmoInnerMat));

    // Mid atmosphere halo
    const atmoMidGeo = new THREE.SphereGeometry(radius * 1.06, 48, 48);
    const atmoMidMat = new THREE.MeshBasicMaterial({
      color: 0x0ab59b,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.globeGroup.add(new THREE.Mesh(atmoMidGeo, atmoMidMat));

    // Outer faint atmospheric haze
    const atmoOuterGeo = new THREE.SphereGeometry(radius * 1.12, 48, 48);
    const atmoOuterMat = new THREE.MeshBasicMaterial({
      color: 0x1E6F8C,
      transparent: true,
      opacity: 0.028,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    this.globeGroup.add(new THREE.Mesh(atmoOuterGeo, atmoOuterMat));

    // Thin, clean equator reference line
    const equatorGeo = new THREE.BufferGeometry();
    const eqPts = [];
    for (let deg = 0; deg <= 360; deg += 3) {
      const rad = (deg * Math.PI) / 180;
      eqPts.push(new THREE.Vector3(Math.cos(rad) * radius * 1.002, 0, Math.sin(rad) * radius * 1.002));
    }
    equatorGeo.setFromPoints(eqPts);
    const equatorMat = new THREE.LineBasicMaterial({
      color: 0x03BC9F,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending
    });
    this.globeGroup.add(new THREE.Line(equatorGeo, equatorMat));

    // Subtle 30-degree orbital inclination track for defence satcom telemetry
    const satOrbitGeo = new THREE.BufferGeometry();
    const satOrbitPts = [];
    const tilt = 32 * (Math.PI / 180);
    for (let deg = 0; deg <= 360; deg += 4) {
      const rad = (deg * Math.PI) / 180;
      const x = Math.cos(rad) * radius * 1.045;
      const z = Math.sin(rad) * radius * 1.045;
      const y = Math.sin(rad) * Math.sin(tilt) * radius * 0.45;
      satOrbitPts.push(new THREE.Vector3(x, y, z));
    }
    satOrbitGeo.setFromPoints(satOrbitPts);
    const satOrbitMat = new THREE.LineBasicMaterial({
      color: 0x4DB6FF,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending
    });
    this.globeGroup.add(new THREE.Line(satOrbitGeo, satOrbitMat));
  }

  buildStations() {
    const radius = 84;
    // Cochin / Kochi coordinates: 9.9312° N, 76.2673° E (HQ & Main Production)
    this.kochiPos = this.latLongToVector3(9.9312, 76.2673, radius);

    // Global partner & defence telemetry network (38 Key Aerospace, Spaceport & Naval Nodes)
    this.stations = [
      // Primary Origin: Verdant Telemetry HQ
      { name: 'Cochin / Verdant HQ', lat: 9.9312, lon: 76.2673, isOrigin: true },
      // India Defence & Space Infrastructure
      { name: 'Bengaluru / ISRO & HAL', lat: 12.9716, lon: 77.5946 },
      { name: 'Hyderabad / DRDO Labs', lat: 17.3850, lon: 78.4867 },
      { name: 'New Delhi / MoD Air HQ', lat: 28.6139, lon: 77.2090 },
      { name: 'Coimbatore / Design Centre', lat: 11.0168, lon: 76.9558 },
      { name: 'Thiruvananthapuram / VSSC ISRO', lat: 8.5241, lon: 76.9366 },
      { name: 'Mumbai / Western Fleet', lat: 18.9220, lon: 72.8347 },
      { name: 'Visakhapatnam / Eastern Fleet', lat: 17.6868, lon: 83.2185 },
      { name: 'Chandipur / ITR Missile Range', lat: 21.4682, lon: 87.0167 },
      { name: 'Sriharikota / SDSC Spaceport', lat: 13.7199, lon: 80.2304 },
      // Europe Aerospace & Defence Centres
      { name: 'London / Farnborough BAE', lat: 51.2882, lon: -0.7583 },
      { name: 'Paris / Toulouse Airbus', lat: 43.6047, lon: 1.4442 },
      { name: 'Munich / Ottobrunn Eurofighter', lat: 48.0694, lon: 11.6667 },
      { name: 'Rome / Leonardo Avionics', lat: 41.9028, lon: 12.4964 },
      { name: 'Stockholm / Linköping Saab', lat: 58.4108, lon: 15.6214 },
      { name: 'Madrid / Getafe Defence', lat: 40.3083, lon: -3.7327 },
      { name: 'Kiruna / Esrange Space Center', lat: 67.8558, lon: 20.2253 },
      // Middle East & Africa
      { name: 'Tel Aviv / LCA EW Partner', lat: 32.0853, lon: 34.7818 },
      { name: 'Dubai / Gulf Aviation', lat: 25.2048, lon: 55.2708 },
      { name: 'Abu Dhabi / EDGE Aerospace', lat: 24.4539, lon: 54.3773 },
      { name: 'Overberg / Flight Test Range RSA', lat: -34.6167, lon: 20.3000 },
      // North America Aerospace & Defense
      { name: 'Washington DC / Pentagon', lat: 38.8719, lon: -77.0563 },
      { name: 'Seattle / Boeing Defense', lat: 47.6062, lon: -122.3321 },
      { name: 'Los Angeles / Space Systems Command', lat: 33.9192, lon: -118.3797 },
      { name: 'Cape Canaveral / Space Force', lat: 28.4889, lon: -80.5778 },
      { name: 'Dallas / Fort Worth Lockheed', lat: 32.7555, lon: -97.3308 },
      { name: 'Reno / Sierra Nevada Corp', lat: 39.5296, lon: -119.8138 },
      { name: 'Colorado Springs / Peterson SFB', lat: 38.8339, lon: -104.8214 },
      { name: 'White Sands / Missile Range', lat: 32.3838, lon: -106.4764 },
      { name: 'Boston / MIT Lincoln Lab', lat: 42.3601, lon: -71.0589 },
      // Asia-Pacific & Ocean Tracking
      { name: 'Singapore / Changi Aviation Hub', lat: 1.3521, lon: 103.8198 },
      { name: 'Tokyo / Tsukuba JAXA', lat: 36.0645, lon: 140.1264 },
      { name: 'Seoul / Sacheon Aerospace', lat: 35.0883, lon: 128.0833 },
      { name: 'Canberra / Defence HQ', lat: -35.2809, lon: 149.1300 },
      { name: 'Woomera / Range Complex', lat: -31.1983, lon: 136.8256 },
      { name: 'Perth / Deep Space Tracking', lat: -31.9505, lon: 115.8605 },
      { name: 'Guam / Pacific Relay', lat: 13.4443, lon: 144.7937 },
      { name: 'Honolulu / INDOPACOM Fleet', lat: 21.3069, lon: -157.8583 },
      // South America
      { name: 'São José dos Campos / Embraer', lat: -23.1791, lon: -45.8872 }
    ];

    this.stationPositions = [];
    this.ripples = [];

    this.stations.forEach((st) => {
      const pos = this.latLongToVector3(st.lat, st.lon, radius);
      this.stationPositions.push(pos);

      const isOrigin = !!st.isOrigin;
      // Clean micro-dot node
      const dotGeo = new THREE.SphereGeometry(isOrigin ? 1.2 : 0.72, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: isOrigin ? 0x03BC9F : 0x8FA3A0,
        blending: THREE.AdditiveBlending
      });
      const m = new THREE.Mesh(dotGeo, dotMat);
      m.position.copy(pos);
      this.globeGroup.add(m);

      // Delicate halo
      const spriteMat = new THREE.SpriteMaterial({
        map: this.headTexture,
        color: isOrigin ? 0x03BC9F : 0x1E6F8C,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: isOrigin ? 0.75 : 0.32,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.copy(pos);
      sprite.scale.set(isOrigin ? 5.2 : 2.6, isOrigin ? 5.2 : 2.6, 1);
      this.globeGroup.add(sprite);

      if (isOrigin) {
        this.kochiMesh = m;
        this.kochiSprite = sprite;
      }
    });

    // Gentle radiating broadcast pulse from Cochin / Kochi (Verdant HQ)
    this.kochiWaves = [];
    for (let w = 0; w < 2; w++) {
      const waveGeo = new THREE.RingGeometry(1.6, 2.4, 32);
      const waveMat = new THREE.MeshBasicMaterial({
        color: 0x03BC9F,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });
      const waveMesh = new THREE.Mesh(waveGeo, waveMat);
      waveMesh.position.copy(this.kochiPos);
      waveMesh.lookAt(new THREE.Vector3(0, 0, 0));
      this.globeGroup.add(waveMesh);
      this.kochiWaves.push({ mesh: waveMesh, phase: w * 0.5 });
    }
  }

  // Shader-driven calm, slow signal system: elegant RF waveguide conduit with single smooth traveling packet
  createSignalShaderMaterial(colorHex) {
    const vertexShader = `
      attribute float arcProgress;
      varying float vProgress;
      void main() {
        vProgress = arcProgress;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uProgress;
      uniform vec3 uColor;
      uniform vec3 uGlowColor;
      uniform float uBaseAlpha;
      varying float vProgress;

      void main() {
        // Subtle, quiet static waveguide conduit track
        float baseLine = uBaseAlpha * smoothstep(0.0, 0.04, vProgress) * smoothstep(1.0, 0.96, vProgress);

        // Single smooth, traveling RF packet centered at uProgress
        float dist = vProgress - uProgress;
        float packet = 0.0;
        
        // Soft tapering tail behind the head (tail length ~ 0.16)
        if (dist <= 0.0 && dist >= -0.16) {
          packet = smoothstep(-0.16, 0.0, dist);
          packet = pow(packet, 2.0);
        } else if (dist > 0.0 && dist <= 0.02) {
          // Soft leading tip ahead
          packet = smoothstep(0.02, 0.0, dist);
        }

        // Taper smoothly at start and destination station antennas
        float endpointTaper = smoothstep(0.0, 0.035, vProgress) * smoothstep(1.0, 0.965, vProgress);
        packet *= endpointTaper;

        // Elegant chromatic blend: quiet base line + radiant traveling packet
        vec3 col = mix(uColor, uGlowColor, packet * 0.7);
        float alpha = baseLine + packet * 0.85;

        gl_FragColor = vec4(col, alpha);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms: {
        uProgress: { value: 0.0 },
        uColor: { value: new THREE.Color(colorHex) },
        uGlowColor: { value: new THREE.Color(0xFFFFFF) },
        uBaseAlpha: { value: 0.09 } // Crisp, subtle resting conduit line
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }

  buildSignalSystem() {
    this.activeSignals = [];
    const numSignals = 8; // Balanced, brisk concurrency across worldwide telemetry network
    const signalColors = [0x03BC9F, 0x4DB6FF, 0x2ECC8F, 0x64D2FF, 0x38BDF8, 0x34D399, 0xF2B84B];

    for (let i = 0; i < numSignals; i++) {
      const initialProgress = i / numSignals;
      const colorHex = signalColors[i % signalColors.length];
      const sig = this.createSignalSlot(initialProgress, colorHex);
      this.activeSignals.push(sig);
    }
  }

  createSignalSlot(initialProgress = 0, colorHex = 0x03BC9F) {
    const total = this.stationPositions.length;
    let fromIdx = 0;
    let toIdx = 1;
    if (Math.random() < 0.35) {
      fromIdx = 0; // Cochin HQ
      toIdx = 1 + Math.floor(Math.random() * (total - 1));
    } else if (Math.random() < 0.20) {
      fromIdx = 1 + Math.floor(Math.random() * (total - 1));
      toIdx = 0;
    } else {
      fromIdx = Math.floor(Math.random() * total);
      toIdx = Math.floor(Math.random() * total);
      if (toIdx === fromIdx) toIdx = (fromIdx + 1) % total;
    }

    const p1 = this.stationPositions[fromIdx];
    const p2 = this.stationPositions[toIdx];

    const curve = this.generateArcCurve(p1, p2);
    const arcPoints = curve.getPoints(64);
    const progressArr = new Float32Array(arcPoints.length);
    for (let k = 0; k < arcPoints.length; k++) {
      progressArr[k] = k / (arcPoints.length - 1);
    }

    // 1. Shader-driven quiet waveguide track with smooth single traveling packet
    const trackGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    trackGeo.setAttribute('arcProgress', new THREE.BufferAttribute(progressArr, 1));
    const shaderMat = this.createSignalShaderMaterial(colorHex);
    shaderMat.uniforms.uProgress.value = initialProgress;
    const trackLine = new THREE.Line(trackGeo, shaderMat);
    this.globeGroup.add(trackLine);

    // 2. Refined, visible signal head sprite
    const headSpriteMat = new THREE.SpriteMaterial({
      map: this.headTexture,
      color: colorHex,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      depthWrite: false
    });
    const headSprite = new THREE.Sprite(headSpriteMat);
    headSprite.scale.set(2.8, 2.8, 1);
    this.globeGroup.add(headSprite);

    // Small clean point core
    const headCoreGeo = new THREE.SphereGeometry(0.5, 8, 8);
    const headCoreMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      blending: THREE.AdditiveBlending
    });
    const headCore = new THREE.Mesh(headCoreGeo, headCoreMat);
    this.globeGroup.add(headCore);

    // 3. Subtle, streamlined fading trail
    const tailSprites = [];
    const tailCount = 5;
    for (let k = 0; k < tailCount; k++) {
      const frac = k / (tailCount - 1);
      const sSize = 1.9 * (1.0 - frac * 0.65);
      const sMat = new THREE.SpriteMaterial({
        map: this.headTexture,
        color: colorHex,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.45 * (1.0 - frac * 0.8),
        depthWrite: false
      });
      const s = new THREE.Sprite(sMat);
      s.scale.set(sSize, sSize, 1);
      this.globeGroup.add(s);
      tailSprites.push(s);
    }

    return {
      fromIdx,
      toIdx,
      curve,
      trackLine,
      shaderMat,
      headSprite,
      headCore,
      tailSprites,
      progress: initialProgress,
      speed: 0.22 + Math.random() * 0.08, // Brisk, smooth and clearly alive travel
      colorHex
    };
  }

  generateArcCurve(p1, p2) {
    const radius = 84;
    const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    const dist = p1.distanceTo(p2);
    // Graceful parabolic arc
    midPoint.setLength(radius + Math.max(8, dist * 0.28));
    return new THREE.QuadraticBezierCurve3(p1, midPoint, p2);
  }

  resetSignal(sig) {
    const total = this.stationPositions.length;
    let fromIdx = 0;
    let toIdx = 1;
    if (Math.random() < 0.35) {
      fromIdx = 0; // Cochin HQ
      toIdx = 1 + Math.floor(Math.random() * (total - 1));
    } else if (Math.random() < 0.20) {
      fromIdx = 1 + Math.floor(Math.random() * (total - 1));
      toIdx = 0;
    } else {
      fromIdx = Math.floor(Math.random() * total);
      toIdx = Math.floor(Math.random() * total);
      if (toIdx === fromIdx) toIdx = (fromIdx + 1) % total;
    }

    sig.fromIdx = fromIdx;
    sig.toIdx = toIdx;
    const p1 = this.stationPositions[fromIdx];
    const p2 = this.stationPositions[toIdx];
    sig.curve = this.generateArcCurve(p1, p2);

    const arcPoints = sig.curve.getPoints(64);
    const progressArr = new Float32Array(arcPoints.length);
    for (let k = 0; k < arcPoints.length; k++) {
      progressArr[k] = k / (arcPoints.length - 1);
    }
    if (sig.trackLine && sig.trackLine.geometry) {
      sig.trackLine.geometry.dispose();
    }
    const newGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    newGeo.setAttribute('arcProgress', new THREE.BufferAttribute(progressArr, 1));
    sig.trackLine.geometry = newGeo;

    const colors = [0x03BC9F, 0x4DB6FF, 0x2ECC8F, 0x64D2FF, 0x38BDF8, 0x34D399, 0xF2B84B];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    sig.colorHex = newColor;

    if (sig.shaderMat && sig.shaderMat.uniforms) {
      sig.shaderMat.uniforms.uColor.value.setHex(newColor);
      sig.shaderMat.uniforms.uProgress.value = 0;
    }
    sig.headSprite.material.color.setHex(newColor);
    sig.tailSprites.forEach(s => s.material.color.setHex(newColor));

    sig.progress = 0;
    sig.speed = 0.22 + Math.random() * 0.08; // Brisk, smooth pace
  }

  triggerArrivalRipple(pos, colorHex = 0x03BC9F) {
    const ringGeo = new THREE.RingGeometry(1.2, 2.0, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(ringGeo, ringMat);
    mesh.position.copy(pos);
    mesh.lookAt(new THREE.Vector3(0, 0, 0));
    this.globeGroup.add(mesh);

    this.ripples.push({ mesh, scale: 1.0, opacity: 0.65 });
  }

  bindEvents() {
    this.onMouseDown = (e) => {
      this.isDragging = true;
      this.prevMousePos = { x: e.clientX, y: e.clientY };
    };

    this.onMouseMove = (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.prevMousePos.x;
      const deltaY = e.clientY - this.prevMousePos.y;
      this.targetRotationY += deltaX * 0.0035;
      this.targetRotationX += deltaY * 0.0035;
      this.targetRotationX = Math.max(-0.6, Math.min(0.6, this.targetRotationX));
      this.prevMousePos = { x: e.clientX, y: e.clientY };
    };

    this.onMouseUp = () => { this.isDragging = false; };

    this.onTouchStart = (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    this.onTouchMove = (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.prevMousePos.x;
      const deltaY = e.touches[0].clientY - this.prevMousePos.y;
      this.targetRotationY += deltaX * 0.004;
      this.targetRotationX += deltaY * 0.004;
      this.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    this.onTouchEnd = () => { this.isDragging = false; };

    this.onResize = () => {
      if (!this.container || this.isDestroyed) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
      this.updateGlobePosition();
    };

    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    this.container.addEventListener('touchstart', this.onTouchStart, { passive: true });
    this.container.addEventListener('touchmove', this.onTouchMove, { passive: true });
    this.container.addEventListener('touchend', this.onTouchEnd, { passive: true });
    window.addEventListener('resize', this.onResize);
  }

  // 1-to-1 scroll synchronization called on user scroll
  onScrollUpdate(scrollFraction) {
    // Smoothly turn the globe slightly as user scrolls down, creating an organic 1:1 responsive feel
    this.scrollRotationBoost = scrollFraction * 1.2;
    if (this.globeGroup) {
      // Gentle depth scale: globe stays pinned behind and recedes slightly into depth
      const s = Math.max(0.72, 1.0 - scrollFraction * 0.28);
      this.globeGroup.scale.set(s, s, s);
    }
  }

  animate() {
    if (this.isDestroyed) return;

    this.animId = requestAnimationFrame(() => this.animate());

    if (this.isPaused) return;

    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    // Stately, calm self-rotation (reduced speed: 0.0007 per frame)
    if (!this.isDragging) {
      this.targetRotationY += 0.00085;
    }

    // Easing toward target rotation + 1-to-1 scroll rotation boost
    this.rotationY += (this.targetRotationY - this.rotationY) * 0.05;
    this.rotationX += (this.targetRotationX - this.rotationX) * 0.05;

    this.globeGroup.rotation.y = this.rotationY + this.scrollRotationBoost;
    this.globeGroup.rotation.x = this.rotationX;

    // Update clean dynamic signals: slow, graceful, and smooth
    if (this.activeSignals) {
      this.activeSignals.forEach((sig) => {
        sig.progress += dt * sig.speed;

        // Drive the shader's progress uniform directly for silky smooth wave packet gliding
        if (sig.shaderMat && sig.shaderMat.uniforms && sig.shaderMat.uniforms.uProgress) {
          sig.shaderMat.uniforms.uProgress.value = sig.progress;
        }

        const t = Math.min(sig.progress, 1.0);
        const currentPos = sig.curve.getPointAt(t);
        sig.headSprite.position.copy(currentPos);
        sig.headCore.position.copy(currentPos);

        const tailCount = sig.tailSprites.length;
        const trailSpan = 0.065;
        for (let j = 0; j < tailCount; j++) {
          const frac = j / (tailCount - 1);
          const tTrail = Math.max(0, t - (1 - frac) * trailSpan);
          const pt = sig.curve.getPointAt(tTrail);
          sig.tailSprites[j].position.copy(pt);
        }

        if (sig.progress >= 1.0) {
          const destPos = this.stationPositions[sig.toIdx];
          this.triggerArrivalRipple(destPos, sig.colorHex);
          this.resetSignal(sig);
        }
      });
    }

    // Soft subtle ripples
    for (let r = this.ripples.length - 1; r >= 0; r--) {
      const rip = this.ripples[r];
      rip.scale += dt * 3.6;
      rip.opacity -= dt * 1.35;
      rip.mesh.scale.set(rip.scale, rip.scale, rip.scale);
      rip.mesh.material.opacity = Math.max(0, rip.opacity);
      if (rip.opacity <= 0) {
        this.globeGroup.remove(rip.mesh);
        this.ripples.splice(r, 1);
      }
    }

    // Soft pulse at Cochin origin
    const timeSec = now * 0.001;
    if (this.kochiWaves) {
      this.kochiWaves.forEach((w) => {
        const cycle = ((timeSec * 0.45 + w.phase) % 1.0);
        const s = 1.0 + cycle * 3.2;
        w.mesh.scale.set(s, s, s);
        w.mesh.material.opacity = (1.0 - cycle) * 0.55;
      });
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('resize', this.onResize);
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}

/* ==========================================================================
   5. ROUTE VIEW TEMPLATES
   ========================================================================== */

function renderHomeView() {
  return `
  <!-- HERO I: 100vh Full-Bleed WebGL Pinned Dot-Matrix Earth with Clean Typography -->
  <div class="hero-pinned-wrapper">
    <section id="hero-section" class="hero-sticky-container" style="display: flex; align-items: center;">
      <!-- Three.js Canvas Container -->
      <div id="globe-canvas-container" style="position: absolute; inset: 0; z-index: 1; pointer-events: auto; opacity: 1;"></div>
      <!-- Soft Ambient Globe Rim Glow -->
      <div class="globe-ambient-glow" aria-hidden="true"></div>

      <!-- Directional Scrim: solid dark on left for text legibility, transparent on right for clean 3D globe -->
      <div id="hero-scrim" style="position: absolute; inset: 0; z-index: 2; pointer-events: none; background: linear-gradient(90deg, #05090D 0%, rgba(5,9,13,0.95) 30%, rgba(5,9,13,0.52) 46%, rgba(5,9,13,0) 62%);"></div>

      <!-- Hero Content Overlay (Clean: only mainline + action CTAs) -->
      <div class="container-wide" style="position: relative; z-index: 3; pointer-events: none; width: 100%;">
        <div id="hero-text-content" style="max-width: 620px; will-change: transform, opacity;">
          <h1 style="font-family: var(--font-display); font-size: clamp(3rem, 6.2vw, 5.75rem); font-weight: 700; line-height: 1.04; letter-spacing: -0.035em; color: var(--text); margin-bottom: 2.25rem; text-wrap: balance;">
            Signals that cross every <span style="color: var(--accent); text-shadow: 0 0 32px var(--accent-glow);">border</span>.
          </h1>

          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1.15rem; pointer-events: auto;">
            <a href="#how" class="btn-secondary" style="border: 1.5px solid rgba(234, 242, 240, 0.45); background: rgba(5, 9, 13, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">Learn more</a>
          </div>
        </div>
      </div>

      <!-- Scroll Cue -->
      <div id="hero-scroll-cue" style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--text-subtle); font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; pointer-events: none; transition: opacity 0.3s ease;">
        <span>Scroll to explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
      </div>
    </section>

    <!-- SLIDING CONTENT LAYER: Smoothly slides up from below over pinned hero -->
    <div id="hero-sliding-panel" class="hero-sliding-content">
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
      <section class="hero-slide-in-surface" style="padding: 2.25rem 0; border-bottom: 1px solid var(--border); background: var(--bg);">
        <div class="container-wide">
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600;">TRUSTED BY DEFENCE LEADERS</span>
            <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.85rem;">
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
            </div>
          </div>
        </div>
      </section>

  <!-- OPERATIONAL REGIMES: Centered Big Standout Motto (Pinned Background Layer) -->
  <section id="regimes-section" class="regimes-pinned-backdrop" style="padding: clamp(5.5rem, 12vh, 8.5rem) 0; background: #05090D; overflow: hidden; text-align: center; margin-bottom: clamp(14vh, 22vh, 30vh);">
    <div class="container-wide" style="position: relative; z-index: 2;">
      <div style="max-width: 1100px; margin: 0 auto; text-align: center;">
        <h2 id="regime-motto-heading" style="font-family: var(--font-display); font-size: clamp(3rem, 6.5vw, 5.25rem); font-weight: 700; line-height: 1.12; letter-spacing: -0.035em; color: var(--text); margin: 0 auto; text-wrap: balance; will-change: transform, letter-spacing;">
          <span class="regime-word" data-word-idx="0" style="display: inline-block; will-change: opacity, transform, filter;">Engineered</span>
          <span class="regime-word" data-word-idx="1" style="display: inline-block; will-change: opacity, transform, filter;">for</span>
          <span class="regime-word" data-word-idx="2" style="display: inline-block; will-change: opacity, transform, filter;">extreme</span>
          <span class="regime-word" data-word-idx="3" style="display: inline-block; will-change: opacity, transform, filter;">operating</span>
          <span class="regime-word regime-accent" data-word-idx="4" style="display: inline-block; color: var(--accent); will-change: opacity, transform, filter, text-shadow;">regimes.</span>
        </h2>
        <!-- 1-to-1 dynamic scrubbed telemetry precision line -->
        <div style="margin: 2.5rem auto 0; width: 140px; height: 2px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; position: relative;">
          <div id="regime-scroll-bar" style="width: 100%; height: 100%; background: linear-gradient(90deg, transparent, var(--accent), transparent); transform-origin: center; transform: scaleX(0.2); will-change: transform, opacity;"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- POST-REGIMES SURFACE: Glides on top of pinned regimes motto -->
  <div id="post-regimes-panel" class="post-regimes-surface">
    <!-- PRODUCTS: Horizontally Scrollable Track -->
    <section id="featured-products-section" style="padding: clamp(4rem, 10vh, 7rem) 0; background: #05090D; border-bottom: 1px solid var(--border);">
    <div class="container-wide">
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem; margin-bottom: 2.5rem;">
        <div>
          <h2 style="font-family: var(--font-display); font-size: clamp(2rem, 3.5vw, 2.85rem); font-weight: 700; color: var(--text); letter-spacing: -0.03em;">
            Products
          </h2>
        </div>
        
        <div>
          <!-- View all button -->
          <a href="#/products" class="btn-secondary" style="font-size: 0.8125rem;">
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>

      <!-- Horizontally Scrollable Track -->
      <div id="catalog-horizontal-track" class="catalog-horizontal-track" role="region" aria-label="Featured antennas track" tabindex="0">
        ${PRODUCTS.map(p => `
          <div class="catalog-product-card">
            <div style="height: 185px; width: 100%; border-radius: 10px; overflow: hidden; background: radial-gradient(circle at center, rgba(3,188,159,0.07) 0%, #05090D 80%); margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.05); position: relative;">
              ${safeImg(p.image, p.fallbackType, p.code, p.name, '', 'width: 100%; height: 100%; object-fit: contain; padding: 0.75rem;')}
              <span style="position: absolute; top: 0.6rem; right: 0.6rem; font-family: var(--font-mono); font-size: 0.6875rem; color: var(--accent); background: rgba(5,9,13,0.85); border: 1px solid var(--border); border-radius: 4px; padding: 0.15rem 0.45rem;">
                ${p.category}
              </span>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; font-size: 0.75rem;">
              <span style="font-family: var(--font-mono); color: var(--accent); font-weight: 600;">${p.code}</span>
              <span style="color: var(--text-muted);">${p.application}</span>
            </div>

            <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.45rem; line-height: 1.3;">
              ${p.name}
            </h3>

            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle); margin-bottom: 1.25rem;">
              ${p.freqBand}
            </div>

            <div style="display: flex; gap: 0.65rem; padding-top: 1rem; border-top: 1px solid var(--border); margin-top: auto;">
              <a href="#/products/${p.id}" class="btn-secondary" style="flex: 1; padding: 0.45rem 0.75rem; font-size: 0.75rem; min-height: 38px;">Details</a>
              <a href="#/contact?enquiry=${encodeURIComponent(p.code)}" class="btn-primary" style="flex: 1; padding: 0.45rem 0.75rem; font-size: 0.75rem; min-height: 38px;">Enquire</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CAPABILITIES: 4 Cards with Domain Background Imagery (Fully Responsive) -->
  <section style="padding: clamp(5rem, 12vh, 8.5rem) 0; background: var(--bg); border-bottom: 1px solid var(--border);">
    <div class="container-wide">
      <div class="capabilities-layout-grid">
        <!-- Left: Sticky Title Column on Desktop, Natural Stack on Mobile -->
        <div class="capabilities-sticky-col" style="position: sticky; top: 100px; height: fit-content;">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; font-weight: 600;">
            SYSTEM CAPABILITIES
          </div>
          <h2 style="font-size: clamp(2.2rem, 3.8vw, 3.25rem); font-weight: 700; line-height: 1.12; color: var(--text); letter-spacing: -0.03em; margin-bottom: 1.25rem; text-wrap: balance;">
            End-to-end RF &amp; structural engineering.
          </h2>
          <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 2rem;">
            From computational electromagnetics and aerodynamic radome synthesis to autoclave composite curing and anechoic chamber qualification up to 20 GHz.
          </p>
          <a href="#/capabilities" class="btn-secondary">Explore all capabilities</a>
        </div>

        <!-- Right: 4 Capability Cards with Background Images from Domains -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <!-- 01. Design & Development -> rf-engineering.webp -->
          <a href="#/capabilities/design" class="capability-card">
            <img src="/assets/rf-engineering.webp" alt="Design &amp; Development" class="capability-bg-img" />
            <div class="capability-scrim"></div>
            <div style="position: relative; z-index: 2; display: flex; flex-direction: column; height: 100%;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
                <span style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--accent); font-weight: 600; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">01</span>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent);">
                  <svg width="40" height="16" viewBox="0 0 100 24" fill="none" stroke="#03BC9F" stroke-width="2"><path d="M0 12 Q 25 0, 50 12 T 100 12"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
              <h3 style="font-size: 1.45rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.65rem; letter-spacing: -0.02em; text-shadow: 0 2px 8px rgba(0,0,0,0.95);">Design &amp; Development</h3>
              <p style="font-size: 0.925rem; color: #E0EBE9; line-height: 1.6; margin: 0; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">
                Dedicated Coimbatore design centre (2023), advanced EM simulations, custom antenna aperture design, and composite radome synthesis.
              </p>
            </div>
          </a>

          <!-- 02. Precision Manufacturing -> jet.webp -->
          <a href="#/capabilities/manufacturing" class="capability-card">
            <img src="/assets/jet.webp" alt="Precision Manufacturing" class="capability-bg-img" />
            <div class="capability-scrim"></div>
            <div style="position: relative; z-index: 2; display: flex; flex-direction: column; height: 100%;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
                <span style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--accent); font-weight: 600; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">02</span>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent);">
                  <svg width="40" height="16" viewBox="0 0 100 24" fill="none" stroke="#03BC9F" stroke-width="2"><path d="M0 12 L 20 12 L 30 2 L 40 22 L 50 8 L 60 16 L 70 12 L 100 12"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
              <h3 style="font-size: 1.45rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.65rem; letter-spacing: -0.02em; text-shadow: 0 2px 8px rgba(0,0,0,0.95);">Precision Manufacturing</h3>
              <p style="font-size: 0.925rem; color: #E0EBE9; line-height: 1.6; margin: 0; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">
                AS9100 Rev D facility in Cochin. In-house composite moulding, CNC micro-machining, cleanroom layup, and specialized RF feed assembly.
              </p>
            </div>
          </a>

          <!-- 03. Platform Customisation -> navy.webp -->
          <a href="#/capabilities/customisation" class="capability-card">
            <img src="/assets/navy.webp" alt="Platform Customisation" class="capability-bg-img" />
            <div class="capability-scrim"></div>
            <div style="position: relative; z-index: 2; display: flex; flex-direction: column; height: 100%;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
                <span style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--accent); font-weight: 600; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">03</span>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent);">
                  <svg width="40" height="16" viewBox="0 0 100 24" fill="none" stroke="#03BC9F" stroke-width="2"><path d="M0 12 C 30 2, 40 22, 60 12 S 90 2, 100 12"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
              <h3 style="font-size: 1.45rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.65rem; letter-spacing: -0.02em; text-shadow: 0 2px 8px rgba(0,0,0,0.95);">Platform Customisation</h3>
              <p style="font-size: 0.925rem; color: #E0EBE9; line-height: 1.6; margin: 0; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">
                Low-to-medium volume bespoke geometries tailored for supersonic aircraft skins, combat UAVs, naval masts, and armoured combat vehicles.
              </p>
            </div>
          </a>

          <!-- 04. Testing & Qualification -> space.webp -->
          <a href="#/capabilities/testing" class="capability-card">
            <img src="/assets/space.webp" alt="Testing &amp; Qualification" class="capability-bg-img" />
            <div class="capability-scrim"></div>
            <div style="position: relative; z-index: 2; display: flex; flex-direction: column; height: 100%;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
                <span style="font-family: var(--font-mono); font-size: 0.875rem; color: var(--accent); font-weight: 600; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">04</span>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent);">
                  <circle cx="20" cy="12" r="8"/><circle cx="50" cy="12" r="4"/><circle cx="80" cy="12" r="8"/>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
              <h3 style="font-size: 1.45rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.65rem; letter-spacing: -0.02em; text-shadow: 0 2px 8px rgba(0,0,0,0.95);">Testing &amp; Qualification</h3>
              <p style="font-size: 0.925rem; color: #E0EBE9; line-height: 1.6; margin: 0; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">
                Indoor anechoic chamber up to 20 GHz, outdoor ranges 20–500 MHz, 32 ft ground plane (MIL-DTL-85670C), VSWR, pattern, and radome transmission tests.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT TEASER: Kerala-to-the-world Story + Collage -->
  <section style="padding: 12vh 0; background: var(--surface); border-bottom: 1px solid var(--border);">
    <div class="container-wide">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: center;">
        <div>
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">
            THE VERDANT JOURNEY
          </div>
          <h2 style="font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 700; color: var(--text); margin-bottom: 1.5rem; text-wrap: balance;">
            From a 1997 Cochin workshop to frontline aerospace programmes.
          </h2>
          <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 2rem;">
            Verdant began with a core belief: sovereign precision RF and composite antenna structures could be engineered right here in Kerala. Today, our antennas fly on LCA Tejas and serve India’s defence forces alongside international aerospace tier-1 partners.
          </p>
          <a href="#/about" class="btn-secondary">
            Read our story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        <!-- Real Photographic Collage Asset -->
        <div class="card" style="padding: 0.75rem; overflow: hidden; background: #05090D;">
          <img src="/assets/collage.png" alt="Verdant Telemetry Journey &amp; Milestones" style="width: 100%; height: auto; border-radius: 8px; display: block; object-fit: cover;" onerror="this.style.display='none';" />
          <div style="padding: 0.75rem 0.5rem 0.25rem; display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">
            <span>COCHIN FACILITY HERITAGE</span>
            <span style="color: var(--accent);">EST. 1997</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LEADERSHIP & CONTACT: Meet our people & Send inquiry -->
  <section id="contact-home-section" style="padding: 12vh 0; background: var(--bg);">
    <div class="container-wide">
      <!-- Quote -->
      <div style="max-width: 900px; margin-bottom: 4rem;">
        <blockquote style="font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2.1rem); font-weight: 500; color: var(--text); line-height: 1.4; border-left: 3px solid var(--accent); padding-left: 1.5rem;">
          “We're a diverse team of thinkers and doers, united by a steadfast commitment to serving our customers.”
        </blockquote>
      </div>

      <!-- Leadership Cards: 3 members -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 4rem;">
        <div class="card" style="padding: 1.75rem;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--elevated); border: 1px solid var(--border-accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-weight: 700; color: var(--accent); font-size: 1.1rem; margin-bottom: 1.25rem;">
            LG
          </div>
          <h3 style="font-size: 1.2rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Louis George</h3>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.75rem;">Chief Executive Officer</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">30+ years in composite design and aerospace structures. Physics (MGU), specialized composites training at IIT Chennai.</p>
        </div>

        <div class="card" style="padding: 1.75rem;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--elevated); border: 1px solid var(--border-accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-weight: 700; color: var(--accent); font-size: 1.1rem; margin-bottom: 1.25rem;">
            KG
          </div>
          <h3 style="font-size: 1.2rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Kuruvilla George</h3>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.75rem;">Chief Technology Officer</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">30+ years leading advanced RF design, simulation, and precision execution across tactical antenna systems.</p>
        </div>

        <div class="card" style="padding: 1.75rem;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--elevated); border: 1px solid var(--border-accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-weight: 700; color: var(--accent); font-size: 1.1rem; margin-bottom: 1.25rem;">
            TT
          </div>
          <h3 style="font-size: 1.2rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">Tony G. Thomas</h3>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.75rem;">Chief Mentor</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Ex-AT&amp;T Bell Labs, Co-founder AdventNet/Zoho. IIT Madras, Johns Hopkins PhD.</p>
        </div>
      </div>

      <!-- Contact Form & Headquarters Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: start;">
        <!-- Left: Verified Contact details -->
        <div class="card" style="padding: 2.25rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">
            HEADQUARTERS &amp; R&amp;D
          </div>
          <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text); margin-bottom: 0.4rem;">
            Verdant Telemetry &amp; Antenna Systems
          </h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.75rem;">
            AS9100 Rev D &bull; CEMILAC Certified Aerospace Facility &bull; Est. 1997
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem;">
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="margin-top: 3px; color: var(--accent); flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong style="color: var(--text); display: block; margin-bottom: 0.2rem;">Cochin Headquarters &amp; Manufacturing</strong>
                26/411 A, Konthuruthy, Cochin – 682 013, Kerala, India
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="margin-top: 3px; color: var(--accent); flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong style="color: var(--text); display: block; margin-bottom: 0.2rem;">Coimbatore R&amp;D Centre</strong>
                Aerospace &amp; Defence Innovation Corridor, Tamil Nadu, India
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="color: var(--accent); flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <a href="tel:+914842663104" style="color: var(--text); text-decoration: none;">+91-484-2663104</a> / <a href="tel:+914842663576" style="color: var(--text); text-decoration: none;">2663576</a>
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="color: var(--accent); flex-shrink: 0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div>
                <a href="mailto:info@verdanttelemetry.com" style="color: var(--accent); text-decoration: none;">info@verdanttelemetry.com</a>
              </div>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border); padding-top: 1.25rem; font-size: 0.8125rem; color: var(--text-muted); line-height: 1.6;">
            <div style="color: var(--text); font-weight: 600; margin-bottom: 0.25rem;">Direct Engineering Communication</div>
            <div>Direct dialogue with microwave RF designers and structural composite engineers. Priority response within 24 hours.</div>
          </div>
        </div>

        <!-- Right: Focused Contact Form -->
        <div class="card" style="padding: 2.25rem;">
          <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem;">
            Send a Technical Enquiry
          </h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.75rem; line-height: 1.5;">
            Direct channel to our engineering team. All enquiries receive prompt review by technical leadership.
          </p>

          <form id="home-contact-form" onsubmit="handleContactSubmit(event, 'home-contact-form')" novalidate>
            <div class="contact-fields-container" style="display: flex; flex-direction: column; gap: 1.15rem;">
              <div>
                <label for="c-name" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">
                  Full Name *
                </label>
                <input type="text" id="c-name" required placeholder="Your full name" style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none;" />
              </div>

              <div>
                <label for="c-email" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">
                  Work Email *
                </label>
                <input type="email" id="c-email" required placeholder="name@company.com" style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none;" />
              </div>

              <div>
                <label for="c-org" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">
                  Organisation *
                </label>
                <input type="text" id="c-org" required placeholder="Company or Defence Agency" style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none;" />
              </div>

              <div>
                <label for="c-msg" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">
                  Technical Requirements / Message *
                </label>
                <textarea id="c-msg" rows="4" required placeholder="Describe your frequency range, platform envelope, or requirements..." style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none; resize: vertical; line-height: 1.5;"></textarea>
              </div>

              <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; font-size: 0.925rem; padding: 0.8rem 1.5rem; border-radius: 8px; margin-top: 0.35rem;">
                Send Message
              </button>
            </div>

            <div id="form-feedback" style="display: none; margin-top: 1rem;"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- NEWSROOM: Milestones & Real Award Ceremony Photograph -->
  <section style="padding: 10vh 0; background: var(--surface); border-top: 1px solid var(--border);">
    <div class="container-wide">
      <div style="margin-bottom: 2.5rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          MEDIA &amp; CERTIFICATIONS
        </div>
        <h2 style="font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 700; color: var(--text);">Verified Newsroom &amp; Milestones</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <!-- Card 1: Award Ceremony with Real Photo -->
        <div class="card" style="padding: 1.75rem; display: flex; flex-direction: column;">
          <div style="height: 160px; overflow: hidden; border-radius: 8px; margin-bottom: 1.25rem; background: #05090D;">
            <img src="/assets/award.jpeg" alt="Aerospace Indigenisation Award Ceremony" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';" />
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-subtle); margin-bottom: 0.75rem;">
            <span>AEROSPACE AWARD</span>
            <span>2001, 2016 &amp; 2023</span>
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">SIATI Award for Excellence in Aerospace Indigenisation</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex: 1;">
            Conferred by SIATI in recognition of pioneering indigenisation of airborne RF antennas and radomes, and honoured at Aero India 2023 for the LCA Tejas V/UHF blade.
          </p>
          <a href="#/about" style="color: var(--accent); font-size: 0.8125rem; text-decoration: none; font-weight: 500;">Read in timeline &rarr;</a>
        </div>

        <div class="card" style="padding: 1.75rem; display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-subtle); margin-bottom: 0.75rem;">
            <span>TELEVISION BROADCAST</span>
            <span>FEATURED</span>
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Verdant on Manorama Channel Feature</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex: 1;">
            Special documentary report on Kerala’s defence manufacturing pioneers, highlighting Cochin design excellence and contribution to frontline national aerospace programmes.
          </p>
          <a href="#/about" style="color: var(--accent); font-size: 0.8125rem; text-decoration: none; font-weight: 500;">Learn about Verdant &rarr;</a>
        </div>

        <div class="card" style="padding: 1.75rem; display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-subtle); margin-bottom: 0.75rem;">
            <span>QUALITY MILESTONE</span>
            <span>JUNE 2009 – PRESENT</span>
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">AS 9100 Rev D &amp; ISO 9001:2015 Certification</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex: 1;">
            Certified to AS9100 since June 2009 with continuous renewal to Rev D. Rigorous audit cycles upholding international aerospace and defence quality standards.
          </p>
          <a href="#/capabilities/testing" style="color: var(--accent); font-size: 0.8125rem; text-decoration: none; font-weight: 500;">View quality standards &rarr;</a>
        </div>
      </div>
    </div>
  </section>
      </div> <!-- /post-regimes-panel -->
    </div> <!-- /hero-sliding-panel -->
  </div> <!-- /hero-pinned-wrapper -->
  `;
}

/* ==========================================================================
   6. PRODUCTS PAGE VIEW & CONTROLS
   ========================================================================== */
let productFilterState = {
  search: '',
  apps: [],
  types: [],
  sortBy: 'default',
  perPage: 15,
  page: 1
};

function renderProductsView(detailProductId = null) {
  // Extract state or URL parameters
  const applications = ['Navigation', 'Communication', 'EW', 'Identification', 'Datalink & Telemetry'];
  const types = ['Aerodynamic Blade', 'Omni-Directional', 'Conformal / Microstrip Patch', 'Supersonic Combat Blade', 'Dual Connector Multi-Band Blade', 'Ruggedised Blade'];

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    if (productFilterState.search) {
      const q = productFilterState.search.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.code.toLowerCase().includes(q) ||
                    p.application.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (productFilterState.apps.length > 0 && !productFilterState.apps.includes(p.application)) {
      return false;
    }
    if (productFilterState.types.length > 0 && !productFilterState.types.includes(p.type)) {
      return false;
    }
    return true;
  });

  // Sort
  if (productFilterState.sortBy === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (productFilterState.sortBy === 'name-desc') {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  const totalResults = filtered.length;
  const totalPages = Math.ceil(totalResults / productFilterState.perPage) || 1;
  const startIdx = (productFilterState.page - 1) * productFilterState.perPage;
  const paginated = filtered.slice(startIdx, startIdx + productFilterState.perPage);

  // Deep-link product modal if requested
  let activeModalProduct = null;
  if (detailProductId) {
    activeModalProduct = PRODUCTS.find(p => p.id === detailProductId || p.code.toLowerCase().replace(/\s+/g, '-') === detailProductId);
  }

  return `
  <section style="padding: 120px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      <!-- Products Header -->
      <div style="border-bottom: 1px solid var(--border); padding-bottom: 2.5rem; margin-bottom: 2.5rem; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1.5rem;">
        <div style="max-width: 720px;">
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
            PRODUCT CATALOGUE
          </div>
          <h1 style="font-size: clamp(2.25rem, 4vw, 3.25rem); font-weight: 700; color: var(--text); margin-bottom: 0.75rem;">
            Antennas &amp; Radomes
          </h1>
          <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6;">
            RF and composite expertise for tailored antennas and radomes across low-to-medium volumes. Qualified for airborne, naval, and ground tactical platforms.
          </p>
        </div>
        <button onclick="openEnquiryModal('General Product Catalogue')" class="btn-primary">
          Make an enquiry
        </button>
      </div>

      <!-- Controls Bar: Search, Sort, Per Page -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1; max-width: 420px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 0.4rem 0.85rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" id="prod-search-input" value="${productFilterState.search}" placeholder="Search antenna code, band, or application..." oninput="handleProductSearch(this.value)" style="background: none; border: none; color: var(--text); outline: none; width: 100%; font-size: 0.875rem;" />
          ${productFilterState.search ? `<button onclick="handleProductSearch(''); document.getElementById('prod-search-input').value='';" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.8rem;">&times;</button>` : ''}
        </div>

        <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.8125rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <label for="sort-select" style="color: var(--text-muted);">Sort:</label>
            <select id="sort-select" onchange="handleProductSort(this.value)" style="background: var(--surface); border: 1px solid var(--border); color: var(--text); border-radius: 6px; padding: 0.4rem 0.6rem; font-size: 0.8125rem; outline: none;">
              <option value="default" ${productFilterState.sortBy === 'default' ? 'selected' : ''}>Default</option>
              <option value="name-asc" ${productFilterState.sortBy === 'name-asc' ? 'selected' : ''}>Name (A–Z)</option>
              <option value="name-desc" ${productFilterState.sortBy === 'name-desc' ? 'selected' : ''}>Name (Z–A)</option>
            </select>
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <label for="per-page-select" style="color: var(--text-muted);">Per page:</label>
            <select id="per-page-select" onchange="handleProductPerPage(this.value)" style="background: var(--surface); border: 1px solid var(--border); color: var(--text); border-radius: 6px; padding: 0.4rem 0.6rem; font-size: 0.8125rem; outline: none;">
              <option value="15" ${productFilterState.perPage === 15 ? 'selected' : ''}>15</option>
              <option value="30" ${productFilterState.perPage === 30 ? 'selected' : ''}>30</option>
              <option value="60" ${productFilterState.perPage === 60 ? 'selected' : ''}>60</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Active Filter Chips & Result Counter -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 2rem;" aria-live="polite">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8125rem; font-family: var(--font-mono); color: var(--text-muted);">
            Showing <strong style="color: var(--text);">${paginated.length}</strong> of <strong style="color: var(--text);">${totalResults}</strong> products
          </span>
          ${(productFilterState.apps.length > 0 || productFilterState.types.length > 0 || productFilterState.search) ? `
            <button onclick="clearAllProductFilters()" class="btn-secondary" style="padding: 0.2rem 0.6rem; font-size: 0.75rem; min-height: 28px; margin-left: 0.5rem;">
              Clear all filters &times;
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Main Layout: Left Filter Rail + Product Grid -->
      <div class="products-catalog-layout">
        <!-- Left Filter Rail -->
        <aside class="products-filter-aside" style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <h3 style="font-size: 0.875rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--text);">Filters</h3>
            ${(productFilterState.apps.length || productFilterState.types.length) ? `
              <button onclick="clearAllProductFilters()" style="background:none; border:none; color:var(--accent); font-size:0.75rem; cursor:pointer;">Reset</button>
            ` : ''}
          </div>

          <!-- Application Filter -->
          <div style="margin-bottom: 1.75rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--accent); margin-bottom: 0.75rem; text-transform: uppercase;">
              APPLICATION
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${applications.map(app => {
                const count = PRODUCTS.filter(p => p.application === app).length;
                const isChecked = productFilterState.apps.includes(app);
                return `
                  <label style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8125rem; color: ${isChecked ? 'var(--text)' : 'var(--text-muted)'}; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleProductAppFilter('${app}')" style="accent-color: var(--accent);" />
                      <span>${app}</span>
                    </div>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">${count}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Type Filter -->
          <div>
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--accent); margin-bottom: 0.75rem; text-transform: uppercase;">
              ANTENNA TYPE
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${types.map(t => {
                const count = PRODUCTS.filter(p => p.type === t).length;
                const isChecked = productFilterState.types.includes(t);
                return `
                  <label style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8125rem; color: ${isChecked ? 'var(--text)' : 'var(--text-muted)'}; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleProductTypeFilter('${t}')" style="accent-color: var(--accent);" />
                      <span style="max-width: 130px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${t}</span>
                    </div>
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle);">${count}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </aside>

        <!-- Product Cards Grid -->
        <div>
          ${paginated.length === 0 ? `
            <div class="card" style="padding: 4rem 2rem; text-align: center;">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="margin: 0 auto 1rem; color: var(--text-subtle);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <h3 style="font-size: 1.25rem; color: var(--text); margin-bottom: 0.5rem;">No antennas matched your filters</h3>
              <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.5rem;">Try resetting your filters or search terms.</p>
              <button onclick="clearAllProductFilters()" class="btn-primary">Clear all filters</button>
            </div>
          ` : `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1.5rem;">
              ${paginated.map(p => `
                <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column;">
                  <div style="height: 190px; width: 100%; border-radius: 8px; overflow: hidden; background: #05090D; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: center;">
                    ${safeImg(p.image, p.fallbackType, p.code, p.name, '', 'width: 100%; height: 100%; object-fit: contain; padding: 0.5rem;')}
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                    <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); font-weight: 600;">${p.code}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${p.application}</span>
                  </div>
                  <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem; line-height: 1.3;">${p.name}</h3>
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-subtle); margin-bottom: 1.25rem;">${p.freqBand}</div>
                  <div style="display: flex; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--border); margin-top: auto;">
                    <button onclick="openProductDrawer('${p.id}')" class="btn-secondary" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.75rem; min-height: 36px;">
                      Show details
                    </button>
                    <a href="#/contact?enquiry=${encodeURIComponent(p.code)}" class="btn-primary" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.75rem; min-height: 36px;">
                      Datasheet / Enquiry
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Pagination Bar -->
            ${totalPages > 1 ? `
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 3rem;">
                <button onclick="setProductPage(${productFilterState.page - 1})" ${productFilterState.page <= 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} class="btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; min-height: 36px;">
                  &larr; Prev
                </button>
                <div style="display: flex; gap: 0.35rem;">
                  ${Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNo => `
                    <button onclick="setProductPage(${pageNo})" class="btn-secondary" style="min-height: 36px; width: 36px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-family: var(--font-mono); ${pageNo === productFilterState.page ? 'background:var(--accent); color:#05090D; font-weight:700; border-color:var(--accent);' : ''}">
                      ${pageNo}
                    </button>
                  `).join('')}
                </div>
                <button onclick="setProductPage(${productFilterState.page + 1})" ${productFilterState.page >= totalPages ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} class="btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; min-height: 36px;">
                  Next &rarr;
                </button>
              </div>
            ` : ''}
          `}
        </div>
      </div>
    </div>
  </section>

  <!-- Product Side Drawer / Modal (Deep-linkable) -->
  <div id="product-detail-modal" style="display: ${activeModalProduct ? 'flex' : 'none'}; position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px); z-index: 120; align-items: center; justify-content: center; padding: 1.5rem;">
    ${activeModalProduct ? renderProductModalContent(activeModalProduct) : ''}
  </div>

  <!-- General Enquiry Modal -->
  <div id="general-enquiry-modal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px); z-index: 130; align-items: center; justify-content: center; padding: 1.5rem;">
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; width: 100%; max-width: 520px; padding: 2rem; position: relative;">
      <button onclick="closeEnquiryModal()" style="position: absolute; top: 1.25rem; right: 1.25rem; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.25rem;">&times;</button>
      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.5rem;">TECHNICAL PROCUREMENT</div>
      <h3 style="font-size: 1.35rem; color: var(--text); margin-bottom: 0.5rem;" id="enquiry-modal-title">Make an Enquiry</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Speak directly with Verdant RF &amp; radome engineering.</p>
      <form onsubmit="handleContactSubmit(event, 'modal-enquiry-form')" id="modal-enquiry-form">
        <input type="hidden" id="modal-product-ref" value="" />
        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          <input type="text" id="m-name" required placeholder="Full Name" style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;" />
          <input type="email" id="m-email" required placeholder="Work Email" style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;" />
          <input type="text" id="m-org" required placeholder="Organisation / Defence Agency" style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;" />
          <textarea id="m-msg" rows="3" required placeholder="Specific frequency, platform environment, qualification standards..." style="background: var(--elevated); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem 0.8rem; color: var(--text); font-size: 0.85rem;"></textarea>
          <button type="submit" class="btn-primary" style="width: 100%; margin-top: 0.5rem;">Submit Enquiry</button>
        </div>
      </form>
    </div>
  </div>
  `;
}

function renderProductModalContent(p) {
  return `
  <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; width: 100%; max-width: 680px; max-height: 90vh; overflow-y: auto; padding: 2.25rem; position: relative;">
    <button onclick="closeProductDrawer()" aria-label="Close product details" style="position: absolute; top: 1.25rem; right: 1.25rem; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.5rem; line-height: 1;">&times;</button>
    <div style="display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); margin-bottom: 0.5rem;">
      <span>${p.code}</span>
      <span style="color: var(--border);">·</span>
      <span>${p.application}</span>
    </div>
    <h2 style="font-size: 1.6rem; font-weight: 700; color: var(--text); margin-bottom: 1rem;">${p.name}</h2>
    
    <div style="height: 220px; width: 100%; background: #05090D; border-radius: 8px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;">
      ${safeImg(p.image, p.fallbackType, p.code, p.name, '', 'width: 100%; height: 100%; object-fit: contain; padding: 1rem;')}
    </div>

    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.75rem;">${p.description}</p>

    <h3 style="font-size: 0.875rem; font-family: var(--font-mono); text-transform: uppercase; color: var(--text); margin-bottom: 0.75rem;">Technical Specifications</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.8125rem; margin-bottom: 2rem;">
      <tbody>
        ${Object.entries(p.specs).map(([key, val]) => `
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 0.6rem 0.5rem; color: var(--text-muted); width: 40%; font-family: var(--font-mono); font-size: 0.75rem;">${key}</td>
            <td style="padding: 0.6rem 0.5rem; color: var(--text); font-weight: 500;">${val}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div style="display: flex; gap: 1rem;">
      <button onclick="openEnquiryModal('${p.code}')" class="btn-primary" style="flex: 1;">
        Request Datasheet &amp; Quote
      </button>
      <button onclick="closeProductDrawer()" class="btn-secondary">
        Close
      </button>
    </div>
  </div>
  `;
}

/* ==========================================================================
   7. ABOUT US PAGE VIEW ("KERALA TO THE WORLD")
   ========================================================================== */
let timelineFilter = 'All';

function renderAboutView() {
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

/* ==========================================================================
   8. CAPABILITIES DETAIL VIEWS (#/capabilities/...)
   ========================================================================== */
function renderCapabilitiesView(subview = 'overview') {
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

/* ==========================================================================
   9. CAREERS VIEW (#/careers)
   ========================================================================== */
function renderCareersView() {
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
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">[Editable Content Field]</span>
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

/* ==========================================================================
   10. CONTACT VIEW (#/contact)
   ========================================================================== */
function renderContactView() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const enquiryItem = urlParams.get('enquiry') || '';

  return `
  <section style="padding: 120px 0 80px; background: var(--bg); min-height: 85vh;">
    <div class="container-wide">
      <div style="max-width: 720px; margin-bottom: 3rem;">
        <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          DIRECT ENGINEERING CONTACT
        </div>
        <h1 style="font-size: clamp(2.25rem, 4vw, 3.25rem); font-weight: 700; color: var(--text); margin-bottom: 0.75rem;">
          Contact Us
        </h1>
        <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6;">
          Reach our aerospace microwave and radome engineering team directly for custom antenna design, qualification queries, and technical specifications.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: start;">
        <!-- Left: Contact Details Card -->
        <div class="card" style="padding: 2.25rem;">
          <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text); margin-bottom: 0.35rem;">
            Verdant Telemetry &amp; Antenna Systems
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.75rem;">
            AS9100 Rev D &bull; CEMILAC Certified Aerospace Facility &bull; Est. 1997
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem;">
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="margin-top: 3px; color: var(--accent); flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong style="color: var(--text); display: block; margin-bottom: 0.2rem;">Headquarters &amp; Manufacturing Facility</strong>
                26/411 A, Konthuruthy, Cochin – 682 013, Kerala, India
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="margin-top: 3px; color: var(--accent); flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong style="color: var(--text); display: block; margin-bottom: 0.2rem;">R&amp;D &amp; Design Centre</strong>
                Aerospace &amp; Defence Innovation Corridor, Coimbatore, Tamil Nadu, India
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="color: var(--accent); flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <a href="tel:+914842663104" style="color: var(--text); text-decoration: none;">+91-484-2663104</a> / <a href="tel:+914842663576" style="color: var(--text); text-decoration: none;">2663576</a>
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="color: var(--accent); flex-shrink: 0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div>
                <a href="mailto:info@verdanttelemetry.com" style="color: var(--accent); text-decoration: none;">info@verdanttelemetry.com</a>
              </div>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border); padding-top: 1.25rem; font-size: 0.8125rem; color: var(--text-muted); line-height: 1.6;">
            <div style="color: var(--text); font-weight: 600; margin-bottom: 0.25rem;">Operating Hours</div>
            <div>Monday &ndash; Friday: 09:00 &ndash; 18:00 IST (UTC+5:30)</div>
          </div>
        </div>

        <!-- Right: Focused Contact Form -->
        <div class="card" style="padding: 2.25rem;">
          <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem;">
            Send an Enquiry
          </h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.75rem; line-height: 1.5;">
            ${enquiryItem ? `Direct inquiry regarding antenna reference: <strong style="color:var(--text);">${enquiryItem}</strong>` : 'Direct channel to technical procurement and RF system architects.'}
          </p>

          <form id="page-contact-form" onsubmit="handleContactSubmit(event, 'page-contact-form')" novalidate>
            <div class="contact-fields-container" style="display: flex; flex-direction: column; gap: 1.15rem;">
              <div>
                <label for="p-name" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">Full Name *</label>
                <input type="text" id="p-name" required placeholder="Your full name" style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none;" />
              </div>

              <div>
                <label for="p-email" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">Work Email *</label>
                <input type="email" id="p-email" required placeholder="name@company.com" style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none;" />
              </div>

              <div>
                <label for="p-org" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">Organisation *</label>
                <input type="text" id="p-org" required placeholder="Company or Defence Agency" style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none;" />
              </div>

              <div>
                <label for="p-msg" style="display: block; font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.4rem;">Technical Requirements / Message *</label>
                <textarea id="p-msg" rows="4" required placeholder="Please describe your requirements..." style="width: 100%; background: var(--elevated); border: 1px solid var(--border); border-radius: 8px; padding: 0.7rem 0.85rem; color: var(--text); font-size: 0.875rem; outline: none; resize: vertical; line-height: 1.5;">${enquiryItem ? `Inquiry regarding antenna ${enquiryItem}:\n` : ''}</textarea>
              </div>

              <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; font-size: 0.925rem; padding: 0.8rem 1.5rem; border-radius: 8px; margin-top: 0.35rem;">
                Send Message
              </button>
            </div>

            <div id="page-form-feedback" style="display: none; margin-top: 1rem;"></div>
          </form>
        </div>
      </div>
    </div>
  </section>
  `;
}

/* ==========================================================================
   11. "HOW WE BUILD" VIEW (#how or #/how)
   ========================================================================== */
function renderHowView() {
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

/* ==========================================================================
   11.5 INFRASTRUCTURE & IN-HOUSE FACILITIES VIEW (#/infrastructure)
   ========================================================================== */
function renderInfrastructureView() {
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

/* ==========================================================================
   12. 404 NOT FOUND VIEW
   ========================================================================== */
function render404View() {
  return `
  <section style="padding: 160px 0 100px; background: var(--bg); text-align: center; min-height: 80vh; display: flex; align-items: center;">
    <div class="container-wide">
      <div style="font-family: var(--font-mono); font-size: 1rem; color: var(--accent); margin-bottom: 1rem;">404 · FREQUENCY OUT OF RANGE</div>
      <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: var(--text); margin-bottom: 1rem;">View Not Found</h1>
      <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 500px; margin: 0 auto 2rem; line-height: 1.6;">
        The requested routing does not match any Verdant Telemetry page or product category.
      </p>
      <a href="#/" class="btn-primary">Return to Homepage</a>
    </div>
  </section>
  `;
}

/* ==========================================================================
   13. ROUTER & VIEW ORCHESTRATION
   ========================================================================== */
function route() {
  const hash = window.location.hash || '#/';
  const cleanHash = hash.split('?')[0];
  const mainContent = document.getElementById('main-content');

  // Tear down any previous globe or triggers when navigating away from Home
  if (window.__homeScrollHandler) {
    window.removeEventListener('scroll', window.__homeScrollHandler);
    window.__homeScrollHandler = null;
  }
  if (globeInstance && cleanHash !== '#/' && cleanHash !== '') {
    globeInstance.destroy();
    globeInstance = null;
  }
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  // Active navigation highlight
  document.querySelectorAll('#desktop-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  let pageTitle = 'Verdant Telemetry & Antenna Systems';

  if (cleanHash === '#/' || cleanHash === '') {
    mainContent.innerHTML = renderHomeView();
    pageTitle = 'Verdant Telemetry & Antenna Systems | Aerospace & Defence Antennas';
    initHomeView();
  } else if (cleanHash === '#/products' || cleanHash.startsWith('#/products/')) {
    const detailId = cleanHash.startsWith('#/products/') ? cleanHash.replace('#/products/', '') : null;
    mainContent.innerHTML = renderProductsView(detailId);
    pageTitle = 'Products & Radomes | Verdant Telemetry';
    highlightNav('products');
  } else if (cleanHash === '#/about') {
    mainContent.innerHTML = renderAboutView();
    pageTitle = 'About Us | Kerala to the World | Verdant Telemetry';
    highlightNav('about');
  } else if (cleanHash === '#/infrastructure') {
    mainContent.innerHTML = renderInfrastructureView();
    pageTitle = 'Infrastructure & Facilities | Verdant Telemetry';
    highlightNav('infrastructure');
  } else if (cleanHash === '#/capabilities') {
    mainContent.innerHTML = renderCapabilitiesView('overview');
    pageTitle = 'Capabilities | Verdant Telemetry';
  } else if (cleanHash.startsWith('#/capabilities/')) {
    const sub = cleanHash.replace('#/capabilities/', '');
    mainContent.innerHTML = renderCapabilitiesView(sub);
    pageTitle = `Capabilities · ${sub.charAt(0).toUpperCase() + sub.slice(1)} | Verdant Telemetry`;
  } else if (cleanHash === '#/careers') {
    mainContent.innerHTML = renderCareersView();
    pageTitle = 'Careers in Aerospace | Verdant Telemetry';
  } else if (cleanHash === '#/contact') {
    mainContent.innerHTML = renderContactView();
    pageTitle = 'Contact Engineering | Verdant Telemetry';
    highlightNav('contact');
  } else if (cleanHash === '#how' || cleanHash === '#/how') {
    mainContent.innerHTML = renderHowView();
    pageTitle = 'How We Build | Engineering Process | Verdant Telemetry';
  } else {
    mainContent.innerHTML = render404View();
    pageTitle = 'Page Not Found | Verdant Telemetry';
  }

  // Update title & reset scroll
  document.title = pageTitle;
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Move accessibility focus to <h1>
  const h1 = mainContent.querySelector('h1');
  if (h1) {
    h1.setAttribute('tabindex', '-1');
    h1.focus({ preventScroll: true });
  }

  // Close mobile drawer if open
  closeMobileMenu();
}

function highlightNav(routeKey) {
  const link = document.querySelector(`#desktop-nav [data-route="${routeKey}"]`);
  if (link) link.classList.add('active');
}

/* ==========================================================================
   14. HOME VIEW INITIALIZATION (GLOBE + 1-TO-1 SCROLL INTERACTIONS)
   ========================================================================== */
function initHomeView() {
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

    // 2. Globe 1:1 scroll synchronization (active throughout hero and purpose statement)
    if (globeInstance) {
      const globeProgress = Math.min(2.5, scrollY / vh);
      globeInstance.onScrollUpdate(globeProgress);
    }

    if (canvasContainer) {
      // Keep globe fully vibrant during hero statement; only subtle tint adjustment
      canvasContainer.style.opacity = '1';
    }

    // 3. Purpose Statement (Hero Scene 2) Word-by-Word Scroll Reveal
    const purposeText = document.getElementById('purpose-statement-text');
    if (purposeSection && wordTokens && wordTokens.length > 0) {
      // Calculate progress based on the purpose text element itself
      const targetElement = purposeText || purposeSection;
      const rect = targetElement.getBoundingClientRect();
      const currentPos = rect.top;

      // Start revealing only AFTER the text card has emerged nicely into view from below:
      // Start when text reaches 62% of viewport height (well into lower-middle screen, fully emerged)
      // Complete as it centers near 28% of viewport height
      const startTrigger = vh * 0.62;
      const endTrigger = vh * 0.28;

      let revealProgress = 0;
      if (currentPos < startTrigger) {
        revealProgress = Math.min(1, Math.max(0, (startTrigger - currentPos) / (startTrigger - endTrigger)));
      }

      if (purposeEyebrow) {
        // Eyebrow illuminates smoothly as card ascends
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

    // 4. Operational Regimes Section 1-to-1 Scroll-Driven Scrub & Centered Background Pinning
    const regimesSec = document.getElementById('regimes-section');
    if (regimesSec) {
      const rect = regimesSec.getBoundingClientRect();
      const secHeight = regimesSec.offsetHeight || 340;
      // Sticky top offset so that the section locks exactly in the vertical center of the viewport
      const targetStickyTop = Math.max(20, Math.round((vh - secHeight) / 2));
      regimesSec.style.setProperty('--regime-sticky-top', `${targetStickyTop}px`);

      // 1-to-1 scrub: from entering screen (vh * 0.92) to settling into centered sticky anchor (targetStickyTop + 15)
      const startTrigger = vh * 0.92;
      const endTrigger = targetStickyTop + 15;
      let regimeProgress = 0;
      if (rect.top <= endTrigger) {
        regimeProgress = 1;
      } else if (rect.top < startTrigger) {
        regimeProgress = Math.min(1, Math.max(0, (startTrigger - rect.top) / (startTrigger - endTrigger)));
      }

      if (prefersReduced) regimeProgress = 1;

      const words = regimesSec.querySelectorAll('.regime-word');
      const totalWords = words.length;
      words.forEach((w, idx) => {
        const threshold = idx / (totalWords - 1);
        const wordSpread = 0.42;
        const startW = threshold * (1 - wordSpread);
        const wProgress = Math.min(1, Math.max(0, (regimeProgress - startW) / wordSpread));

        const op = 0.20 + wProgress * 0.80;
        const ty = (1 - wProgress) * 20;
        const blur = (1 - wProgress) * 5;

        w.style.opacity = op.toFixed(3);
        w.style.transform = `translateY(${ty.toFixed(1)}px)`;
        w.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : 'none';

        if (w.classList.contains('regime-accent')) {
          const glow = wProgress * 36;
          w.style.textShadow = `0 0 ${glow.toFixed(1)}px var(--accent-glow)`;
        }
      });

      const bar = document.getElementById('regime-scroll-bar');
      if (bar) {
        bar.style.transform = `scaleX(${Math.max(0.12, regimeProgress).toFixed(3)})`;
        bar.style.opacity = (0.25 + regimeProgress * 0.75).toFixed(2);
      }

      const heading = document.getElementById('regime-motto-heading');
      if (heading) {
        const s = 0.93 + regimeProgress * 0.07;
        const ls = -0.012 - regimeProgress * 0.023;
        heading.style.transform = `scale(${s.toFixed(3)})`;
        heading.style.letterSpacing = `${ls.toFixed(4)}em`;
      }
    }

    // 5. System Capabilities Cards Scrolling Animation
    const capCards = document.querySelectorAll('.capability-card');
    if (capCards.length > 0) {
      capCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerY = rect.top + rect.height * 0.5;
        const screenFraction = centerY / vh;

        // Smooth entry reveal: when card enters lower viewport
        const enterProgress = Math.min(1, Math.max(0, (vh * 0.98 - rect.top) / (vh * 0.35)));

        if (prefersReduced) {
          card.style.transform = 'none';
          card.style.opacity = '1';
        } else {
          // 3D perspective glide, subtle tilt and lift
          const ty = (1 - enterProgress) * 36;
          const rotX = (1 - enterProgress) * 4.5;
          const scale = 0.965 + enterProgress * 0.035;
          const opacity = 0.35 + enterProgress * 0.65;

          card.style.transform = `translateY(${ty.toFixed(1)}px) scale(${scale.toFixed(3)}) perspective(900px) rotateX(${rotX.toFixed(1)}deg)`;
          card.style.opacity = opacity.toFixed(3);

          // Parallax depth scrub on background image (-25px to +25px)
          const bgImg = card.querySelector('.capability-bg-img');
          if (bgImg) {
            const parallaxOffset = (screenFraction - 0.5) * -30;
            bgImg.style.transform = `translateY(${parallaxOffset.toFixed(1)}px) scale(1.08)`;
          }

          // Active spotlight glow when card is focused near center of viewport
          if (screenFraction >= 0.32 && screenFraction <= 0.68) {
            card.style.borderColor = 'rgba(3, 188, 159, 0.45)';
            card.style.boxShadow = '0 12px 35px rgba(3, 188, 159, 0.09), 0 16px 36px rgba(0, 0, 0, 0.6)';
          } else {
            card.style.borderColor = 'var(--border)';
            card.style.boxShadow = 'none';
          }
        }
      });
    }
  }

  window.removeEventListener('scroll', window.__homeScrollHandler);
  window.removeEventListener('resize', window.__homeScrollHandler);
  window.__homeScrollHandler = handleHomeScroll;
  window.addEventListener('scroll', handleHomeScroll, { passive: true });
  window.addEventListener('resize', handleHomeScroll, { passive: true });
  // Initial check on load
  handleHomeScroll();

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
}

/* ==========================================================================
   15. PRODUCTS INTERACTION HANDLERS
   ========================================================================== */
function handleProductSearch(val) {
  productFilterState.search = val;
  productFilterState.page = 1;
  refreshProductsView();
}

function handleProductSort(val) {
  productFilterState.sortBy = val;
  refreshProductsView();
}

function handleProductPerPage(val) {
  productFilterState.perPage = parseInt(val, 10);
  productFilterState.page = 1;
  refreshProductsView();
}

function toggleProductAppFilter(app) {
  const idx = productFilterState.apps.indexOf(app);
  if (idx > -1) productFilterState.apps.splice(idx, 1);
  else productFilterState.apps.push(app);
  productFilterState.page = 1;
  refreshProductsView();
}

function toggleProductTypeFilter(type) {
  const idx = productFilterState.types.indexOf(type);
  if (idx > -1) productFilterState.types.splice(idx, 1);
  else productFilterState.types.push(type);
  productFilterState.page = 1;
  refreshProductsView();
}

function clearAllProductFilters() {
  productFilterState.search = '';
  productFilterState.apps = [];
  productFilterState.types = [];
  productFilterState.page = 1;
  refreshProductsView();
}

function setProductPage(p) {
  productFilterState.page = p;
  refreshProductsView();
  window.scrollTo({ top: 320, behavior: 'smooth' });
}

function refreshProductsView() {
  const mainContent = document.getElementById('main-content');
  if (mainContent && window.location.hash.startsWith('#/products')) {
    mainContent.innerHTML = renderProductsView();
  }
}

function openProductDrawer(productId) {
  window.location.hash = `#/products/${productId}`;
}

function closeProductDrawer() {
  window.location.hash = '#/products';
}

function openEnquiryModal(productRef = '') {
  const modal = document.getElementById('general-enquiry-modal');
  const title = document.getElementById('enquiry-modal-title');
  const inputRef = document.getElementById('modal-product-ref');
  if (modal) {
    if (title) title.innerText = productRef ? `Enquiry: ${productRef}` : 'Make an Enquiry';
    if (inputRef) inputRef.value = productRef;
    modal.style.display = 'flex';
  }
}

function closeEnquiryModal() {
  const modal = document.getElementById('general-enquiry-modal');
  if (modal) modal.style.display = 'none';
}

function setTimelineFilter(filter) {
  timelineFilter = filter;
  const mainContent = document.getElementById('main-content');
  if (mainContent && window.location.hash === '#/about') {
    mainContent.innerHTML = renderAboutView();
  }
}

/* ==========================================================================
   16. FORM SUBMISSION VALIDATION & ADVANCED TECHNICAL ROUTING
   ========================================================================== */
function showToast(msg) {
  let toast = document.getElementById('verdant-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'verdant-toast';
    toast.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#05090D;border:1px solid #03BC9F;color:#EAF2F0;padding:0.75rem 1.25rem;border-radius:8px;font-size:0.875rem;font-family:var(--font-mono);box-shadow:0 8px 30px rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;gap:0.6rem;transition:all 0.25s ease;transform:translateY(100px);opacity:0;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color:#03BC9F;font-size:0.9rem;">●</span> ${msg}`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 3200);
}
window.showToast = showToast;

function copyContactEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copied ${email} to clipboard`);
  }).catch(() => {
    const temp = document.createElement('input');
    temp.value = email;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    showToast(`Copied ${email} to clipboard`);
  });
}
window.copyContactEmail = copyContactEmail;

function resetContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.reset();
  const feedbackId = formId === 'home-contact-form' ? 'form-feedback' :
                     formId === 'page-contact-form' ? 'page-form-feedback' :
                     formId === 'modal-enquiry-form' ? 'modal-enquiry-feedback' : null;
  const feedbackEl = feedbackId ? document.getElementById(feedbackId) : null;
  if (feedbackEl) {
    feedbackEl.style.display = 'none';
    feedbackEl.innerHTML = '';
  }
  const fields = form.querySelector('.contact-fields-container');
  if (fields) fields.style.display = 'flex';
}
window.resetContactForm = resetContactForm;

function handleContactSubmit(e, formId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  if (!form) return;

  const prefix = formId === 'home-contact-form' ? 'c-' :
                 formId === 'modal-enquiry-form' ? 'm-' : 'p-';
  const nameEl = form.querySelector(`#${prefix}name`);
  const emailEl = form.querySelector(`#${prefix}email`);
  const orgEl = form.querySelector(`#${prefix}org`);
  const msgEl = form.querySelector(`#${prefix}msg`);

  const name = nameEl?.value.trim() || '';
  const email = emailEl?.value.trim() || '';
  const org = orgEl?.value.trim() || '';
  const msg = msgEl?.value.trim() || '';

  const feedbackId = formId === 'home-contact-form' ? 'form-feedback' :
                     formId === 'page-contact-form' ? 'page-form-feedback' :
                     formId === 'modal-enquiry-form' ? 'modal-enquiry-feedback' : null;
  let feedbackEl = feedbackId ? document.getElementById(feedbackId) : null;

  if (!name || !email || !msg) {
    if (feedbackEl) {
      feedbackEl.style.display = 'block';
      feedbackEl.style.background = 'rgba(255, 92, 108, 0.12)';
      feedbackEl.style.border = '1px solid rgba(255, 92, 108, 0.35)';
      feedbackEl.style.color = '#FF5C6C';
      feedbackEl.style.padding = '0.85rem 1rem';
      feedbackEl.style.borderRadius = '8px';
      feedbackEl.style.fontSize = '0.85rem';
      feedbackEl.innerHTML = 'Please fill out all required fields (Name, Work Email, and Requirements).';
    }
    return;
  }

  // Generate Reference Tracking Code
  const refCode = `VRD-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  // Construct mailto link
  const emailSubject = encodeURIComponent(`[${refCode}] Technical Enquiry - ${org || name}`);
  const emailBody = encodeURIComponent(
    `REF: ${refCode}\n` +
    `REQUESTER: ${name}\n` +
    `ORGANISATION: ${org}\n` +
    `EMAIL: ${email}\n\n` +
    `REQUIREMENTS:\n${msg}\n\n` +
    `-- Verdant Engineering Portal`
  );
  const mailtoUrl = `mailto:info@verdanttelemetry.com?subject=${emailSubject}&body=${emailBody}`;

  // Hide fields container and show focused confirmation receipt
  const fieldsContainer = form.querySelector('.contact-fields-container');
  if (fieldsContainer) fieldsContainer.style.display = 'none';

  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    feedbackEl.style.background = 'rgba(3, 188, 159, 0.08)';
    feedbackEl.style.border = '1px solid rgba(3, 188, 159, 0.4)';
    feedbackEl.style.borderRadius = '8px';
    feedbackEl.style.padding = '1.5rem';
    feedbackEl.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(3, 188, 159, 0.25); padding-bottom: 0.6rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent); font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent); display: inline-block;"></span>
          ENQUIRY RECEIVED
        </div>
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${refCode}</span>
      </div>

      <p style="font-size: 0.95rem; color: var(--text); line-height: 1.5; margin-bottom: 0.5rem;">
        Thank you, <strong>${name}</strong>.
      </p>
      <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem;">
        Your enquiry has been routed directly to our engineering team in Cochin and Coimbatore. We will review your specifications and follow up at <strong>${email}</strong>.
      </p>

      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <a href="${mailtoUrl}" class="btn-primary" style="font-size: 0.8rem; padding: 0.45rem 0.9rem; text-decoration: none;">
          Open in Email Client
        </a>
        <button type="button" onclick="window.resetContactForm('${formId}')" class="btn-secondary" style="font-size: 0.8rem; padding: 0.45rem 0.9rem;">
          Send Another Message
        </button>
      </div>
    `;
  }
}
window.handleContactSubmit = handleContactSubmit;

/* ==========================================================================
   17. COMMAND PALETTE SEARCH (KEYBOARD "/" TO OPEN, ESC TO CLOSE)
   ========================================================================== */
function initCommandPalette() {
  const palette = document.getElementById('cmd-palette');
  const input = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');
  const triggerBtn = document.getElementById('search-trigger-btn');

  function openPalette() {
    if (palette) {
      palette.classList.add('open');
      if (input) {
        input.value = '';
        input.focus();
        renderPaletteResults('');
      }
    }
  }

  function closePalette() {
    if (palette) palette.classList.remove('open');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openPalette();
    }
    if (e.key === 'Escape' && palette && palette.classList.contains('open')) {
      closePalette();
    }
  });

  palette.addEventListener('click', (e) => {
    if (e.target === palette) closePalette();
  });

  if (input) {
    input.addEventListener('input', (e) => renderPaletteResults(e.target.value));
  }

  function renderPaletteResults(q) {
    if (!results) return;
    const query = q.toLowerCase().trim();

    const pages = [
      { name: 'Products Catalogue', hash: '#/products', desc: 'Browse all 10 antennas & radomes' },
      { name: 'About Us', hash: '#/about', desc: 'The Kerala-to-the-world story & milestones' },
      { name: 'Infrastructure & Test Ranges', hash: '#/infrastructure', desc: 'Anechoic chamber to 20 GHz, RF lab to 40 GHz & autoclave' },
      { name: 'Design & Development', hash: '#/capabilities/design', desc: 'Coimbatore R&D design centre' },
      { name: 'Precision Manufacturing', hash: '#/capabilities/manufacturing', desc: 'AS9100 Rev D facility in Cochin' },
      { name: 'Testing & Qualification', hash: '#/capabilities/testing', desc: 'Anechoic chamber to 20 GHz' },
      { name: 'Platform Customisation', hash: '#/capabilities/customisation', desc: 'Bespoke tactical geometries' },
      { name: 'How We Build', hash: '#how', desc: '4-step engineering lifecycle' },
      { name: 'Careers & Internships', hash: '#/careers', desc: 'Open roles in Cochin & Coimbatore' },
      { name: 'Contact Engineering', hash: '#/contact', desc: 'HQ in Cochin: +91-484-2663104' }
    ];

    const matchedPages = pages.filter(p => !query || p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));
    const matchedProducts = PRODUCTS.filter(p => !query || p.name.toLowerCase().includes(query) || p.code.toLowerCase().includes(query) || p.application.toLowerCase().includes(query));

    let html = '';
    if (matchedPages.length > 0) {
      html += `<div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--accent); padding: 0.5rem 0.75rem; text-transform: uppercase;">PAGES</div>`;
      matchedPages.slice(0, 4).forEach(p => {
        html += `
          <a href="${p.hash}" onclick="document.getElementById('cmd-palette').classList.remove('open')" style="display: block; padding: 0.6rem 0.75rem; text-decoration: none; border-radius: 6px; transition: background 0.15s ease;" class="cmd-item">
            <div style="font-weight: 600; color: #EAF2F0; font-size: 0.85rem;">${p.name}</div>
            <div style="font-size: 0.75rem; color: #8FA3A0;">${p.desc}</div>
          </a>
        `;
      });
    }

    if (matchedProducts.length > 0) {
      html += `<div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--accent); padding: 0.5rem 0.75rem; margin-top: 0.5rem; text-transform: uppercase;">PRODUCTS</div>`;
      matchedProducts.slice(0, 5).forEach(p => {
        html += `
          <a href="#/products/${p.id}" onclick="document.getElementById('cmd-palette').classList.remove('open')" style="display: block; padding: 0.6rem 0.75rem; text-decoration: none; border-radius: 6px;" class="cmd-item">
            <div style="display: flex; justify-content: space-between;">
              <span style="font-weight: 600; color: #EAF2F0; font-size: 0.85rem;">${p.code} · ${p.name}</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent);">${p.application}</span>
            </div>
            <div style="font-size: 0.75rem; color: #8FA3A0;">${p.freqBand}</div>
          </a>
        `;
      });
    }

    if (!matchedPages.length && !matchedProducts.length) {
      html = `<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">No results found for "${q}".</div>`;
    }

    results.innerHTML = html;
  }
}

/* ==========================================================================
   18. TOP NAVIGATION SCROLL BEHAVIOUR & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (currentScrollY > 200 && currentScrollY > lastScrollY) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileClose = document.getElementById('mobile-menu-close');
  if (mobileBtn) mobileBtn.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
}

function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.style.display = 'none';
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   19. GLOBAL BOOTSTRAP
   ========================================================================== */
function bootstrap() {
  initNavigation();
  initCommandPalette();
  window.addEventListener('hashchange', route);
  route();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}






