/**
 * Products Source Data (Precision Aerospace & Defence RF Hardware)
 * Verdant Telemetry & Antenna Systems Pvt. Ltd.
 */

export const PRODUCTS = [
  {
    id: 'jc-50',
    code: 'JC 50',
    name: 'JC 50 C-Band Aerodynamic Blade Antenna',
    category: 'Aerodynamic Blade',
    application: 'Datalink & Telemetry',
    platformDomain: 'Airborne · Combat Aircraft',
    mountingLocation: 'Fuselage Dorsal / Ventral Centerline',
    freqBand: '4.4 – 5.0 GHz (C-Band Telemetry)',
    type: 'Aerodynamic Blade',
    vswr: '≤ 1.8:1 across band',
    polarisation: 'Linear Vertical',
    powerRating: '50 W CW / 500 W Peak',
    impedance: '50 Ω Nominal',
    gain: '≥ 4.5 dBi at Peak Elevation',
    connector: 'TNC Female (50 Ω)',
    weight: '380 g',
    dimensions: '135 mm (H) × 48 mm (W) × 182 mm (L)',
    featured: true,
    fallbackType: 'blade',
    images: [
      '/assets/featured/JC-50.webp',
      '/assets/products/JC-50/1.webp',
      '/assets/products/JC-50/2.webp',
      '/assets/products/JC-50/3.webp',
      '/assets/products/JC-50/4.webp'
    ],
    imageLabels: [
      'Isometric Assembly',
      'Baseplate & RF Port Interface',
      'Aerodynamic Elevation Profile',
      'Radome Leading Edge Sweep'
    ],
    primaryImage: '/assets/featured/JC-50.webp',
    keySpecs: {
      'Frequency Range': '4.4 – 5.0 GHz (C-Band)',
      'VSWR': '≤ 1.8:1 max across band',
      'Polarisation': 'Linear Vertical',
      'Power Handling': '50 W CW continuous',
      'Impedance': '50 Ω nominal',
      'RF Connector': 'TNC Female (MIL-C-39012)'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '4.40 GHz to 5.00 GHz',
        'Radiation Pattern': 'Omnidirectional in Azimuth, broad elevation beam',
        'VSWR': '≤ 1.8:1 across operating band',
        'Gain': '≥ 4.5 dBi at peak elevation',
        'Polarisation': 'Linear Vertical',
        'Power Handling': '50 W CW continuous / 500 W Peak Pulse',
        'Impedance': '50 Ohms nominal'
      },
      mechanical: {
        'Height': '135 mm above skin line',
        'Baseplate Length': '182 mm',
        'Baseplate Width': '48 mm',
        'Weight': '380 grams (nominal)',
        'Radome Material': 'High-modulus glass-epoxy moulded aerodynamic composite',
        'Finish': 'Polyurethane anti-static paint (Mil-Spec Grey)'
      },
      environmental: {
        'Operating Temperature': '-55°C to +85°C (Intermittent aerodynamic heating to +125°C)',
        'Altitude': 'Up to 70,000 feet (21,300 m)',
        'Vibration & Shock': 'MIL-STD-810G Method 514.6 & 516.6',
        'Aerodynamic Drag': 'Optimised low-drag airfoil profile for high-g transonic maneuvers',
        'Approval': 'CEMILAC Design Approval · AS9100 Rev D Quality Standard'
      },
      interfaces: {
        'RF Connector': 'TNC Female hermetically sealed (50 Ohms)',
        'Mounting Flange': '6-Hole standard ARINC-compatible base pattern',
        'Sealing': 'Conductive elastomer O-ring environmental gasket',
        'Ground Plane': 'Requires minimum 0.5 m metallic ground plane'
      }
    },
    polarPattern: {
      type: 'Azimuth 360° Omni / Elevation 35° 3dB Beamwidth',
      beamwidth: '35°',
      azimuthRipple: '< 1.5 dB',
      gainPeak: '4.5 dBi'
    },
    description: 'Engineered for supersonic airborne telemetry, drone command links, and wideband C-band tactical tracking. The JC 50 features a high-strength composite radome that withstands severe dynamic pressures and extreme aero-thermal gradients while preserving phase-stable transmission.'
  },
  {
    id: 'jd-120-t1b',
    code: 'JD 120 T1B',
    name: 'JD 120 V/UHF Tactical Top-Loaded Blade Antenna',
    category: 'Top-Loaded Blade',
    application: 'Communication',
    platformDomain: 'Airborne · Fighters & Tactical Helicopters',
    mountingLocation: 'Fuselage Dorsal Spine / Vertical Fin',
    freqBand: '30 – 512 MHz (V/UHF Tactical)',
    type: 'Top-Loaded Aerodynamic Blade',
    vswr: '≤ 2.5:1 across 30–512 MHz',
    polarisation: 'Linear Vertical',
    powerRating: '100 W CW / 400 W Peak',
    impedance: '50 Ω Nominal',
    gain: '-2 dBi (low VHF) to +2.5 dBi (UHF)',
    connector: 'Type-N Female (50 Ω)',
    weight: '1,250 g',
    dimensions: '295 mm (H) × 78 mm (W) × 310 mm (L)',
    featured: true,
    fallbackType: 'blade',
    images: [
      '/assets/featured/JD-120-T1B.webp',
      '/assets/products/JD-120-T1B/1.webp',
      '/assets/products/JD-120-T1B/2.webp',
      '/assets/products/JD-120-T1B/3.webp',
      '/assets/products/JD-120-T1B/4.webp'
    ],
    imageLabels: [
      'Isometric Assembly',
      'Heavy-Duty Baseplate Pattern',
      'Side Elevation & Sweep',
      'Bottom Port & Ground Interface'
    ],
    primaryImage: '/assets/featured/JD-120-T1B.webp',
    keySpecs: {
      'Frequency Range': '30 – 512 MHz (V/UHF)',
      'VSWR': '≤ 2.5:1 across full band',
      'Polarisation': 'Linear Vertical',
      'Power Handling': '100 W CW continuous',
      'Top-Load Design': 'High radiation efficiency in compact height',
      'RF Connector': 'Type-N Female'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '30 MHz to 512 MHz continuous tactical spectrum',
        'Radiation Pattern': 'Omni-directional in azimuth',
        'VSWR': '≤ 2.5:1 across specified band',
        'Gain': '-2 dBi at 30 MHz rising to +2.5 dBi across UHF band',
        'Polarisation': 'Linear Vertical',
        'Power Handling': '100 W CW continuous / 400 W Peak',
        'Impedance': '50 Ohms nominal'
      },
      mechanical: {
        'Height': '295 mm',
        'Baseplate Length': '310 mm',
        'Baseplate Width': '78 mm',
        'Weight': '1,250 grams',
        'Housing Material': 'Reinforced glass-epoxy moulded aerodynamic housing',
        'Finish': 'Radar-absorbing matte polyurethane'
      },
      environmental: {
        'Operating Temperature': '-55°C to +85°C',
        'Altitude': '60,000 feet',
        'Lightning Protection': 'High-energy spark gap suppression to airframe ground',
        'Vibration': 'MIL-STD-810G rotary and fixed-wing tactical vibration curves',
        'Approval': 'CEMILAC Qualified for military fixed & rotary-wing platforms'
      },
      interfaces: {
        'RF Connector': 'Type-N Female (MIL-C-39012)',
        'Baseplate': 'Standard military 6-bolt mounting flange',
        'Ground Plane': 'Qualified on standard 32-ft reference ground plane'
      }
    },
    polarPattern: {
      type: 'Omnidirectional Azimuth (360°) / Vertical Dipole Equivalent',
      beamwidth: '78°',
      azimuthRipple: '< 2.0 dB',
      gainPeak: '2.5 dBi'
    },
    description: 'Top-loaded reactive element architecture delivers extended electrical length within a compressed physical envelope. Delivers exceptional radiation efficiency across the 30–512 MHz frequency range for tactical airborne voice, secure frequency hopping, and data networks.'
  },
  {
    id: 'jh-60',
    code: 'JH 60-1',
    name: 'JH 60-1 Conformal Radio Altimeter Antenna',
    category: 'Conformal Patch',
    application: 'Navigation',
    platformDomain: 'Airborne · Fast Jet, Transport & Helicopter',
    mountingLocation: 'Aircraft Underbelly (Flush Conformal)',
    freqBand: '4.2 – 4.4 GHz (Radio Altimeter)',
    type: 'Conformal / Microstrip Patch',
    vswr: '≤ 1.4:1 at Center Frequency',
    polarisation: 'Linear (Pitch / Roll Optimized)',
    powerRating: '10 W Peak Pulse',
    impedance: '50 Ω Nominal',
    gain: '≥ 10.5 dBi Nadir Bore-sight',
    connector: 'TNC Female Flush-Mount',
    weight: '340 g',
    dimensions: '16 mm (Profile Depth) × 140 mm × 140 mm',
    featured: false,
    fallbackType: 'altimeter',
    images: [
      '/assets/products/JH-60/1.webp',
      '/assets/products/JH-60/2.webp',
      '/assets/products/JH-60/3.webp',
      '/assets/products/JH-60/4.webp'
    ],
    imageLabels: [
      'Radiating Aperture & Composite Face',
      'Flush-Mount Flange & Ground Skirt',
      'Ultra-Low Profile Side Elevation',
      'Backplane Connector & Tuning Ports'
    ],
    primaryImage: '/assets/products/JH-60/1.webp',
    keySpecs: {
      'Frequency Range': '4.2 – 4.4 GHz (ARINC 707)',
      'VSWR': '≤ 1.4:1 across ARINC band',
      'Mounting': 'Conformal flush-mount skin integration',
      'Bore-Sight Gain': '≥ 10.5 dBi nadir pointing',
      'Form Factor': 'Ultra-low drag conformal microstrip patch',
      'RF Connector': 'TNC Female Flush'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '4.20 GHz to 4.40 GHz (Aviation Radio Altimeter Band)',
        'Radiation Pattern': 'Directional nadir pointing with tailored roll-off',
        'VSWR': '≤ 1.4:1 across 4.2–4.4 GHz (typically 1.25:1 at 4.3 GHz)',
        'Gain': '≥ 10.5 dBi at nadir bore-sight',
        'E-Plane Beamwidth': '45° ± 3°',
        'H-Plane Beamwidth': '50° ± 3°',
        'Polarisation': 'Linear',
        'Isolation': '≥ 75 dB Tx/Rx antenna pair isolation at standard spacing'
      },
      mechanical: {
        'Profile Thickness': '16 mm flush with airframe skin',
        'Aperture Dimensions': '140 mm × 140 mm square footprint',
        'Weight': '340 grams',
        'Substrate': 'Low-loss temperature-stable PTFE/ceramic composite',
        'Protective Face': 'Erosion-resistant thermoset dielectric radome window'
      },
      environmental: {
        'Operating Temperature': '-55°C to +95°C',
        'Altitude': '80,000 feet',
        'Thermal Shock': 'MIL-STD-810G Method 503.5',
        'Moisture / Sealing': 'IP68 hermetically sealed cavity with nitrogen purge',
        'Standards': 'ARINC 552 / ARINC 707 compliant · CEMILAC Type Approved'
      },
      interfaces: {
        'RF Connector': 'TNC Female recessed rear connection',
        'Fastener Pattern': '4-Corner countersunk mounting screws',
        'Seal': 'Moulded conductive fluorosilicone boundary gasket'
      }
    },
    polarPattern: {
      type: 'Directional Nadir Bore-sight Lobe (E: 45° / H: 50°)',
      beamwidth: '48°',
      azimuthRipple: 'N/A (Directional)',
      gainPeak: '10.5 dBi'
    },
    description: 'Flush-mounted aerodynamic patch antenna providing high-precision height-above-ground measurements for automatic flight control systems, terrain warning, and precision instrument landings on supersonic combat jets and military helicopters.'
  },
  {
    id: 'jd-202',
    code: 'JD 202',
    name: 'JD 202 LCA Tejas Supersonic Combat Blade Antenna',
    category: 'Supersonic Combat Blade',
    application: 'Communication',
    platformDomain: 'Supersonic Combat · LCA Tejas Fighter',
    mountingLocation: 'Dorsal Fuselage Spine (Mach 1.6+ Flight Regime)',
    freqBand: '100 – 400 MHz (V/UHF Tactical)',
    type: 'Supersonic Combat Blade',
    vswr: '≤ 2.0:1 across operational band',
    polarisation: 'Linear Vertical',
    powerRating: '60 W CW / 300 W Peak',
    impedance: '50 Ω Nominal',
    gain: '0 to +3 dBi Omnidirectional in Azimuth',
    connector: 'TNC Female with Viton Environmental Seal',
    weight: '820 g',
    dimensions: '220 mm (H) × 62 mm (W) × 245 mm (L)',
    featured: false,
    fallbackType: 'blade',
    images: [
      '/assets/products/JD-401-S1G-A/1.webp',
      '/assets/products/JD-401-S1G-A/2.webp',
      '/assets/products/JD-401-S1G-A/3.webp',
      '/assets/products/JD-401-S1G-A/4.webp'
    ],
    imageLabels: [
      'Supersonic Blade Assembly (Mach 1.6+ Certified)',
      'Precision Machined Baseplate & Gasket Groove',
      'Sharpened Leading Edge Aerodynamic Sweep',
      'Hermetic RF Feed & Lightning Bond'
    ],
    primaryImage: '/assets/products/JD-401-S1G-A/1.webp',
    keySpecs: {
      'Platform': 'LCA Tejas Light Combat Aircraft (Indigenously Developed)',
      'Speed Rating': 'Mach 1.6+ supersonic flight certified',
      'Frequency Band': '100 – 400 MHz tactical V/UHF',
      'VSWR': '≤ 2.0:1 across operational band',
      'Recognition': 'Honoured at Aero India 2023 under DRDO TDF Scheme',
      'RF Connector': 'TNC Female with Viton environmental seal'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '100 MHz to 400 MHz',
        'Radiation Pattern': 'Omnidirectional in azimuth plane',
        'VSWR': '≤ 2.0:1 across channels',
        'Gain': '0 to +3.0 dBi across tactical frequencies',
        'Polarisation': 'Linear Vertical',
        'Power Handling': '60 W CW / 300 W Peak',
        'Impedance': '50 Ohms nominal'
      },
      mechanical: {
        'Height': '220 mm',
        'Baseplate Length': '245 mm',
        'Baseplate Width': '62 mm',
        'Weight': '820 grams',
        'Radome Material': 'Advanced quartz-polyimide composite core with erosion cap',
        'Mach Rating': 'Certified for Mach 1.6+ high dynamic pressure airloads'
      },
      environmental: {
        'Operating Temperature': '-55°C to +150°C (aerodynamic heating skin temp)',
        'G-Loading': '9g sustained / 13.5g ultimate aircraft load factor',
        'Lightning Shielding': 'High-current divertor strip integrated into leading edge',
        'Program': 'Indigenously developed under TDF Scheme with ADA / DRDO hand-holding'
      },
      interfaces: {
        'RF Connector': 'TNC Female with Viton environmental seal',
        'Mounting': '8-Hole flush fastener layout',
        'Lightning Bond': 'Low-impedance beryllium-copper bonding strap'
      }
    },
    polarPattern: {
      type: 'Omnidirectional Azimuth / Shaped Transonic Elevation',
      beamwidth: '82°',
      azimuthRipple: '< 1.8 dB',
      gainPeak: '3.0 dBi'
    },
    description: 'Honoured at Aero India 2023. Indigenously developed for the LCA Tejas supersonic fighter aircraft under the DRDO Technology Development Fund (TDF) Scheme with Aeronautical Development Agency (ADA) technical hand-holding. Delivers omnidirectional communications in high-g combat regimes up to Mach 1.6+.'
  },
  {
    id: 'jd-85',
    code: 'JD 85',
    name: 'JD 85 Airborne Tactical V/UHF Blade Antenna',
    category: 'Aerodynamic Blade',
    application: 'Communication',
    platformDomain: 'Airborne · Fixed-Wing & Rotary-Wing',
    mountingLocation: 'Fuselage Dorsal / Ventral',
    freqBand: '30 – 400 MHz V/UHF',
    type: 'Airborne Blade',
    vswr: '≤ 2.2:1',
    polarisation: 'Linear Vertical',
    powerRating: '75 W CW',
    impedance: '50 Ω Nominal',
    gain: '-2.5 dBi (VHF) to +2.0 dBi (UHF)',
    connector: 'Type-N Female (50 Ω)',
    weight: '980 g',
    dimensions: '260 mm (H) × 72 mm (W) × 285 mm (L)',
    featured: false,
    fallbackType: 'blade',
    images: [
      '/assets/products/JD-85/1.webp',
      '/assets/products/JD-85/2.webp',
      '/assets/products/JD-85/3.webp',
      '/assets/products/JD-85/4.webp'
    ],
    imageLabels: [
      'Isometric Assembly Overview',
      'Machined Aluminium Baseplate',
      'Aerodynamic Swept Leading Edge',
      'Hermetic Base Seal Interface'
    ],
    primaryImage: '/assets/products/JD-85/1.webp',
    keySpecs: {
      'Frequency Range': '30 – 400 MHz V/UHF',
      'VSWR': '≤ 2.2:1 across band',
      'Polarisation': 'Linear Vertical',
      'Power Handling': '75 W CW continuous',
      'Radome': 'Glass-epoxy molded composite',
      'RF Connector': 'Type-N Female'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '30 MHz to 400 MHz',
        'Radiation Pattern': 'Omnidirectional in azimuth',
        'VSWR': '≤ 2.2:1 across band',
        'Gain': '-2.5 dBi to +2.0 dBi',
        'Polarisation': 'Linear Vertical',
        'Power Handling': '75 W CW',
        'Impedance': '50 Ohms'
      },
      mechanical: {
        'Height': '260 mm',
        'Baseplate Length': '285 mm',
        'Baseplate Width': '72 mm',
        'Weight': '980 grams',
        'Radome': 'Moulded glass-epoxy aerodynamic shell'
      },
      environmental: {
        'Operating Temperature': '-55°C to +85°C',
        'Altitude': '55,000 feet',
        'Vibration': 'MIL-STD-810G',
        'Approval': 'CEMILAC Qualified'
      },
      interfaces: {
        'RF Connector': 'Type-N Female',
        'Baseplate': 'Standard 6-hole ARINC pattern'
      }
    },
    polarPattern: {
      type: 'Omnidirectional Azimuth 360°',
      beamwidth: '80°',
      azimuthRipple: '< 2.2 dB',
      gainPeak: '2.0 dBi'
    },
    description: 'Ruggedised military V/UHF tactical communications blade engineered for general transport aircraft, maritime patrol platforms, and tactical helicopters with internal broadband matching networks.'
  },
  {
    id: 'jd-401-s1g-a',
    code: 'JD 401-S1G-A',
    name: 'JD 401-S1G-A High-Power V/UHF Blade Antenna',
    category: 'Aerodynamic Blade',
    application: 'Communication',
    platformDomain: 'Airborne · Fast Jet & Heavy Transport',
    mountingLocation: 'Upper / Lower Fuselage',
    freqBand: '118 – 400 MHz',
    type: 'Aerodynamic Blade',
    vswr: '≤ 2.0:1',
    polarisation: 'Linear Vertical',
    powerRating: '100 W CW',
    impedance: '50 Ω Nominal',
    gain: '≥ 0 dBi across band',
    connector: 'Type-N Female',
    weight: '1,100 g',
    dimensions: '275 mm (H) × 74 mm (W) × 290 mm (L)',
    featured: true,
    fallbackType: 'blade',
    images: [
      '/assets/featured/JD-401-S1G-A.webp',
      '/assets/products/JD-401-S1G-A/1.webp',
      '/assets/products/JD-401-S1G-A/2.webp',
      '/assets/products/JD-401-S1G-A/3.webp',
      '/assets/products/JD-401-S1G-A/4.webp'
    ],
    imageLabels: [
      'High-Power Blade Assembly',
      'Baseplate Bolt Circle & Grounding',
      'Aerodynamic Blade Profile',
      'Internal Cavity Port Interface'
    ],
    primaryImage: '/assets/featured/JD-401-S1G-A.webp',
    keySpecs: {
      'Frequency Range': '118 – 400 MHz V/UHF',
      'VSWR': '≤ 2.0:1 across spectrum',
      'Polarisation': 'Linear Vertical',
      'Power Handling': '100 W CW continuous',
      'Construction': 'High-strength structural composite',
      'RF Connector': 'Type-N Female'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '118 MHz to 400 MHz',
        'Radiation Pattern': 'Omni-directional azimuth',
        'VSWR': '≤ 2.0:1 across spectrum',
        'Gain': '0 to +2.5 dBi',
        'Power Handling': '100 W CW continuous',
        'Impedance': '50 Ohms'
      },
      mechanical: {
        'Height': '275 mm',
        'Baseplate Length': '290 mm',
        'Baseplate Width': '74 mm',
        'Weight': '1,100 grams',
        'Radome': 'Glass-epoxy high temperature composite'
      },
      environmental: {
        'Operating Temperature': '-55°C to +95°C',
        'Altitude': '65,000 feet',
        'Approval': 'CEMILAC Approved · AS9100 Rev D'
      },
      interfaces: {
        'RF Connector': 'Type-N Female',
        'Mounting': 'ARINC 546 footprint'
      }
    },
    polarPattern: {
      type: 'Omnidirectional Azimuth 360°',
      beamwidth: '75°',
      azimuthRipple: '< 1.8 dB',
      gainPeak: '2.5 dBi'
    },
    description: 'High-power airborne blade engineered for continuous-duty military voice, tactical datalink transceivers, and secure communications under high aerothermal dynamic pressure.'
  },
  {
    id: 'jd-ct201',
    code: 'JD-CT201',
    name: 'JD-CT201 Dual-Port Multi-Band Tactical Blade',
    category: 'Dual-Port Blade',
    application: 'EW & Surveillance',
    platformDomain: 'Airborne & Armoured Platforms',
    mountingLocation: 'Fuselage Dorsal / Armoured Mast',
    freqBand: 'V/UHF + L/S Band Dual Architecture',
    type: 'Dual Connector Multi-Band Blade',
    vswr: '≤ 2.2:1 (Port 1) / ≤ 1.9:1 (Port 2)',
    polarisation: 'Linear Vertical',
    powerRating: '50 W CW per port',
    impedance: '50 Ω Nominal',
    gain: '+1.0 dBi (V/UHF) / +4.0 dBi (L/S)',
    connector: 'Dual TNC Female Ports',
    weight: '920 g',
    dimensions: '240 mm (H) × 65 mm (W) × 270 mm (L)',
    featured: false,
    fallbackType: 'blade',
    images: [
      '/assets/products/JD-CT201/1.webp',
      '/assets/products/JD-CT201/2.webp',
      '/assets/products/JD-CT201/3.webp',
      '/assets/products/JD-CT201/4.webp'
    ],
    imageLabels: [
      'Dual-Port Blade Isometric View',
      'Dual RF Coaxial Port Interface',
      'Aerodynamic Profile & Sweep',
      'Base Flange & Conductive Seal'
    ],
    primaryImage: '/assets/products/JD-CT201/1.webp',
    keySpecs: {
      'Ports': 'Dual isolated RF ports',
      'Bands': 'Simultaneous V/UHF + L/S Band operation',
      'Port Isolation': '≥ 25 dB inter-port isolation',
      'Power Handling': '50 W CW per port',
      'RF Connectors': '2 × TNC Female',
      'Aperture Economy': 'Consolidates two antennas into one shell'
    },
    fullSpecs: {
      rf: {
        'Port 1 Band': 'V/UHF (30 – 512 MHz)',
        'Port 2 Band': 'L/S Band (960 – 2400 MHz)',
        'VSWR Port 1': '≤ 2.2:1',
        'VSWR Port 2': '≤ 1.9:1',
        'Inter-Port Isolation': '≥ 25 dB across common bands',
        'Power Handling': '50 W CW per port',
        'Impedance': '50 Ohms'
      },
      mechanical: {
        'Height': '240 mm',
        'Baseplate Length': '270 mm',
        'Baseplate Width': '65 mm',
        'Weight': '920 grams',
        'Radome': 'High-temperature composite radome'
      },
      environmental: {
        'Operating Temperature': '-55°C to +85°C',
        'Altitude': '60,000 feet',
        'Vibration': 'MIL-STD-810G Method 514.6'
      },
      interfaces: {
        'RF Connectors': '2 × TNC Female ports',
        'Baseplate': 'Standardised multi-port footprint'
      }
    },
    polarPattern: {
      type: 'Dual Dipole / Dual Resonant Omni',
      beamwidth: '70°',
      azimuthRipple: '< 2.0 dB',
      gainPeak: '4.0 dBi'
    },
    description: 'Consolidates two distinct avionics bands into a single low-drag radome, cutting fuselage aperture requirements in half while maintaining high inter-port isolation for electronic warfare and surveillance.'
  },
  {
    id: 'jh-135',
    code: 'JH 135',
    name: 'JH 135 Heavy-Duty Shipborne Omni Antenna',
    category: 'Omni Mast',
    application: 'Datalink & Telemetry',
    platformDomain: 'Naval · Shipborne & Coastal Radars',
    mountingLocation: 'Mast Yardarm / Bulkhead Bracket',
    freqBand: 'C-Band (4.0 – 8.0 GHz)',
    type: 'Omni-Directional',
    vswr: '≤ 1.8:1',
    polarisation: 'Linear Vertical',
    powerRating: '150 W CW',
    impedance: '50 Ω Nominal',
    gain: '≥ 6.0 dBi Omnidirectional in Azimuth',
    connector: 'Type-N Female Heavy-Duty',
    weight: '2,400 g',
    dimensions: '480 mm (H) × 65 mm (Dia)',
    featured: false,
    fallbackType: 'omni',
    images: [
      '/assets/products/JH-135/1.webp',
      '/assets/products/JH-135/2.webp',
      '/assets/products/JH-135/3.webp'
    ],
    imageLabels: [
      'Collinear Radome Cylinder',
      'Flanged Mast Mounting Base',
      'Marine-Grade Weatherproof Seal'
    ],
    primaryImage: '/assets/products/JH-135/1.webp',
    keySpecs: {
      'Frequency Range': 'C-Band (4.0 – 8.0 GHz)',
      'VSWR': '≤ 1.8:1 across band',
      'Gain': '≥ 6.0 dBi collinear array gain',
      'Azimuth Coverage': 'Continuous 360° omnidirectional',
      'Environment': 'Marine salt fog & naval shock qualified',
      'RF Connector': 'Type-N Female Heavy-Duty'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '4.0 GHz to 8.0 GHz',
        'Radiation Pattern': '360° continuous omnidirectional in azimuth',
        'VSWR': '≤ 1.8:1',
        'Gain': '≥ 6.0 dBi',
        'Polarisation': 'Linear Vertical',
        'Power Handling': '150 W CW',
        'Impedance': '50 Ohms'
      },
      mechanical: {
        'Height': '480 mm',
        'Radome Diameter': '65 mm',
        'Weight': '2,400 grams',
        'Material': 'Weatherproof composite radome with polyurethane marine coat',
        'Flange': 'Aluminium alloy marine anodised base flange'
      },
      environmental: {
        'Operating Temperature': '-40°C to +75°C',
        'Salt Fog': 'MIL-STD-810G Method 509.5 (48 hr)',
        'Wind Load': 'Rated for 160 km/h continuous winds'
      },
      interfaces: {
        'RF Connector': 'Type-N Female 50 Ohm hermetic',
        'Mounting': '4-Hole mast flange bolt pattern'
      }
    },
    polarPattern: {
      type: 'Collinear 360° Omni Azimuth / Narrow Elevation 18°',
      beamwidth: '18°',
      azimuthRipple: '< 0.8 dB',
      gainPeak: '6.0 dBi'
    },
    description: 'Ruggedised shipborne and coastal telemetry omni antenna delivering high collinear gain across C-band. Built to endure continuous corrosive sea-spray, salt fog, and heavy deck vibrations.'
  },
  {
    id: 'jc-07',
    code: 'JC 07',
    name: 'JC 07 Airborne C-Band Omni Antenna',
    category: 'Omni',
    application: 'Datalink & Telemetry',
    platformDomain: 'Airborne · Missile & Target Drone',
    mountingLocation: 'Airframe Pod / Fin Tip',
    freqBand: '4.0 – 8.0 GHz',
    type: 'Omni-Directional',
    vswr: '≤ 2.0:1',
    polarisation: 'Linear Vertical',
    powerRating: '30 W CW',
    impedance: '50 Ω Nominal',
    gain: '≥ 2.5 dBi',
    connector: 'SMA Female',
    weight: '160 g',
    dimensions: '95 mm (H) × 32 mm (Dia)',
    featured: false,
    fallbackType: 'omni',
    images: [
      '/assets/antina.webp'
    ],
    imageLabels: [
      'Compact Omni Assembly'
    ],
    primaryImage: '/assets/antina.webp',
    keySpecs: {
      'Frequency Range': '4.0 – 8.0 GHz C-Band',
      'VSWR': '≤ 2.0:1 across band',
      'Polarisation': 'Linear Vertical',
      'Power Handling': '30 W CW',
      'Weight': '160 grams ultra-lightweight',
      'RF Connector': 'SMA Female'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '4.0 GHz to 8.0 GHz',
        'Radiation Pattern': 'Omnidirectional in azimuth',
        'VSWR': '≤ 2.0:1',
        'Gain': '≥ 2.5 dBi',
        'Polarisation': 'Linear Vertical',
        'Power Handling': '30 W CW',
        'Impedance': '50 Ohms'
      },
      mechanical: {
        'Height': '95 mm',
        'Diameter': '32 mm',
        'Weight': '160 grams',
        'Radome': 'Low-loss composite cylinder'
      },
      environmental: {
        'Operating Temperature': '-55°C to +100°C',
        'Altitude': '70,000 feet',
        'Shock': 'MIL-STD-810G'
      },
      interfaces: {
        'RF Connector': 'SMA Female',
        'Mounting': 'Threaded bulkhead mount'
      }
    },
    polarPattern: {
      type: 'Omnidirectional Azimuth (360°)',
      beamwidth: '60°',
      azimuthRipple: '< 1.2 dB',
      gainPeak: '2.5 dBi'
    },
    description: 'Miniature high-frequency omni antenna developed for target drones, airborne telemetry test pods, and missile datalinks requiring reliable 360° coverage in minimum volume.'
  },
  {
    id: 'jd-300',
    code: 'JD 300',
    name: 'JD 300 Modular Military Tactical Blade Series',
    category: 'Ruggedised Blade',
    application: 'Communication',
    platformDomain: 'Airborne · Fixed-Wing & Rotary-Wing',
    mountingLocation: 'Fuselage Dorsal / Ventral (ARINC)',
    freqBand: '30 – 512 MHz Modular',
    type: 'Ruggedised Blade',
    vswr: '≤ 2.0:1',
    polarisation: 'Linear Vertical',
    powerRating: '100 W CW',
    impedance: '50 Ω Nominal',
    gain: '0 to +2.5 dBi',
    connector: 'Type N / TNC Options',
    weight: '1,050 g',
    dimensions: '270 mm (H) × 70 mm (W) × 295 mm (L)',
    featured: false,
    fallbackType: 'blade',
    images: [
      '/assets/products/JD-CT201/1.webp',
      '/assets/products/JD-CT201/2.webp'
    ],
    imageLabels: [
      'Tactical Blade Assembly',
      'ARINC Baseplate Pattern'
    ],
    primaryImage: '/assets/products/JD-CT201/1.webp',
    keySpecs: {
      'Frequency Range': '30 – 512 MHz Modular',
      'VSWR': '≤ 2.0:1 across configured band',
      'Variants': 'B02, D02, L02 tailored baseplates',
      'Power Handling': '100 W CW continuous',
      'Standard': 'MIL-DTL-85670C compliant',
      'RF Connector': 'Type N / TNC'
    },
    fullSpecs: {
      rf: {
        'Frequency Band': '30 MHz to 512 MHz',
        'Radiation Pattern': 'Omni-directional azimuth',
        'VSWR': '≤ 2.0:1',
        'Gain': '0 to +2.5 dBi',
        'Power Handling': '100 W CW',
        'Impedance': '50 Ohms'
      },
      mechanical: {
        'Height': '270 mm',
        'Baseplate Length': '295 mm',
        'Baseplate Width': '70 mm',
        'Weight': '1,050 grams',
        'Radome': 'Reinforced glass-epoxy moulded aerodynamic housing'
      },
      environmental: {
        'Operating Temperature': '-55°C to +90°C',
        'Altitude': '60,000 feet',
        'Approval': 'CEMILAC Qualified'
      },
      interfaces: {
        'RF Connector': 'Type N / TNC options',
        'Mounting': 'ARINC military standard footprint'
      }
    },
    polarPattern: {
      type: 'Omnidirectional Azimuth (360°)',
      beamwidth: '76°',
      azimuthRipple: '< 2.0 dB',
      gainPeak: '2.5 dBi'
    },
    description: 'Modular V/UHF tactical blade family engineered for drop-in interchangeability across military fixed-wing and rotary-wing aircraft with tailored baseplates and pinouts.'
  }
];
