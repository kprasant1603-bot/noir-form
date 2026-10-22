import { MaterialFeature } from '../types';

export const CRAFTSMANSHIP_PILLARS = [
  {
    number: '01',
    title: 'Engineered Silhouettes',
    subtitle: 'Zero redundant volume',
    description: 'Precision CAD-drafted panels articulate naturally around human biomechanics, eliminating fabric drag while holding bold sculptural drape.',
    specs: ['3D Volumetric Patterning', 'Zero-Waste Pattern Yield', 'Articulated Range of Motion'],
  },
  {
    number: '02',
    title: 'Considered Materials',
    subtitle: 'Lab-tested durability',
    description: 'Balancing ultra-high tensile 500D Cordura, micro-ripstop nylon, and 380 GSM combed organic cotton for tactile richness and enduring resilience.',
    specs: ['500D Cordura® Ballistic Nylon', '3-Layer 20K/20K Breathable PTFE', '380 GSM Pre-Shrunk Combed Cotton'],
  },
  {
    number: '03',
    title: 'Everyday Utility',
    subtitle: 'Intuitive modularity',
    description: 'Fidlock magnetic quick-release closures, weatherproof taped seams, concealed dual-entry compartments, and internal hands-free transport slings.',
    specs: ['German-Engineered Magnetic Hardware', 'Fully Sealed Taped Seams', 'Internal Transition Harness'],
  },
  {
    number: '04',
    title: 'Functional Minimalism',
    subtitle: 'Restraint as power',
    description: 'Stripping away decorative clutter to elevate structural proportion, tactile texture interplay, and restrained matte-black finishes.',
    specs: ['Concealed Architectural Seamlines', 'Non-Reflective Matte Coating', 'Tactile Circuit Embossing'],
  },
];

export const MATERIAL_SWATCHES: MaterialFeature[] = [
  {
    id: 'ptfe-membrane',
    title: '3-Layer Weatherproof Membrane',
    spec: '20,000mm Hydrostatic / 20,000g/m² Breathability',
    description: 'A microporous expanded fluoropolymer core bonded between ultra-durable ripstop face and moisture-wicking tricot backing.',
    badge: 'WATERPROOF // 20K',
  },
  {
    id: 'cordura-ripstop',
    title: '500D Ballistic Cordura®',
    spec: 'High-Tenacity Nylon 6,6 with DWR Coating',
    description: 'Engineered to withstand severe abrasion, tearing, and puncture resistance in harsh urban and outdoor environments.',
    badge: 'MIL-SPEC ABRASION',
  },
  {
    id: 'cellular-sole',
    title: 'Kinetic Dual-Density Polymer Matrix',
    spec: 'Shore 45C / 60C Directional Rebound',
    description: 'Custom molded cellular sole structure delivering responsive energy return at toe-off and shock dissipation at heel contact.',
    badge: 'ENERGY RETURN',
  },
  {
    id: 'organic-cotton',
    title: '380 GSM Combed Ring-Spun Cotton',
    spec: '100% GOTS Certified Organic Long-Staple',
    description: 'Custom tight-knit weave offering heavyweight architectural drape that softens with age without losing structural silhouette.',
    badge: 'HEAVYWEIGHT DRAPE',
  },
];
