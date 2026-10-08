/**
 * Assets Configuration & Fallback Generators
 * Verdant Telemetry & Antenna Systems
 */

export const ASSETS = {
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
export function getFallbackSvg(type, label = '') {
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
export function safeImg(src, fallbackType, label, alt, className = '', style = '') {
  const fallback = getFallbackSvg(fallbackType, label);
  return `<img src="${src}" alt="${alt}" class="${className}" style="${style}" onerror="this.onerror=null; this.src='${fallback}';" loading="lazy" />`;
}
