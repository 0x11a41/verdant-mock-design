/**
 * Products Source Data (Strict factual seed)
 * Verdant Telemetry & Antenna Systems
 */

import { ASSETS } from './assets.js';

export const PRODUCTS = [
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
