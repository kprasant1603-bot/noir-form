import { Product, ProductColorVariant } from '../types';

export const SNEAKER_VARIANTS: ProductColorVariant[] = [
  {
    id: 'obsidian',
    name: 'Obsidian',
    hex: '#111115',
    accentHex: '#ccff00',
    upperColor: '#121216',
    soleColor: '#0a0a0c',
    accentColor: '#ccff00',
    lacesColor: '#282833',
    roughness: 0.65,
    metalness: 0.35,
  },
  {
    id: 'bone',
    name: 'Bone',
    hex: '#e2e0d8',
    accentHex: '#121216',
    upperColor: '#d6d3c8',
    soleColor: '#bcbaaf',
    accentColor: '#111115',
    lacesColor: '#8a8880',
    roughness: 0.5,
    metalness: 0.2,
  },
  {
    id: 'signal',
    name: 'Signal',
    hex: '#ccff00',
    accentHex: '#121216',
    upperColor: '#1e1e26',
    soleColor: '#0c0c10',
    accentColor: '#ccff00',
    lacesColor: '#ccff00',
    roughness: 0.3,
    metalness: 0.7,
  },
];

// Vector SVG product visual generators for guaranteed 100% reliable local rendering
const createProductSvg = (type: 'sneaker' | 'jacket' | 'tee' | 'cargo', accent = '#ccff00', baseColor = '#121216') => {
  let paths = '';
  if (type === 'sneaker') {
    paths = `
      <defs>
        <linearGradient id="grad-s" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#242430"/>
          <stop offset="100%" stop-color="#0e0e13"/>
        </linearGradient>
      </defs>
      <!-- Sneaker Silhouette CAD Line Art -->
      <path d="M70,250 C90,240 130,235 180,240 L340,240 C380,240 430,225 450,250 C460,265 440,285 410,290 L100,290 C75,290 60,270 70,250 Z" fill="url(#grad-s)" stroke="#3a3a4c" stroke-width="2"/>
      <!-- Outsole lug treads -->
      <path d="M110,290 L125,305 L150,290 L175,305 L200,290 L225,305 L250,290 L275,305 L300,290 L325,305 L350,290 L375,305 L395,290" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <!-- Upper Body -->
      <path d="M120,240 C140,210 180,170 240,165 C280,162 310,185 330,195 L370,220 C400,230 420,240 430,245" fill="none" stroke="#686882" stroke-width="3"/>
      <!-- Collar & Tongue -->
      <path d="M190,168 L220,110 C225,100 240,100 245,115 L260,165" fill="none" stroke="#8e8ea6" stroke-width="2.5"/>
      <!-- Speed Lace Cage -->
      <path d="M235,165 L275,210 M255,160 L295,205 M275,165 L315,200" fill="none" stroke="${accent}" stroke-width="2.5"/>
      <!-- Heel Counter Structure -->
      <path d="M90,245 C85,210 100,180 130,165 L170,165" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="4 4"/>
      <!-- Cyber tech markings -->
      <text x="320" y="275" font-family="monospace" font-size="11" fill="${accent}" letter-spacing="2">NF//001-V</text>
      <circle cx="105" cy="210" r="3" fill="${accent}"/>
    `;
  } else if (type === 'jacket') {
    paths = `
      <defs>
        <linearGradient id="grad-j" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1f1f28"/>
          <stop offset="100%" stop-color="#0f0f14"/>
        </linearGradient>
      </defs>
      <!-- Technical Parka Silhouette -->
      <path d="M160,95 L220,80 L280,80 L340,95 L420,170 L380,210 L340,175 L350,330 L150,330 L160,175 L120,210 L80,170 Z" fill="url(#grad-j)" stroke="#3a3a4c" stroke-width="2"/>
      <!-- Asymmetric Storm Flap Zipper -->
      <path d="M260,80 L255,230 L275,330" fill="none" stroke="${accent}" stroke-width="2.5" stroke-dasharray="8 4"/>
      <!-- High Ergonomic Collar -->
      <path d="M220,80 C235,60 265,60 280,80 L280,110 L220,110 Z" fill="#292938" stroke="#48485e" stroke-width="1.5"/>
      <!-- Articulated Sleeve Seams -->
      <path d="M130,195 L170,165 M370,195 L330,165" fill="none" stroke="#5a5a73" stroke-width="2"/>
      <!-- Tactical Chest Rig Pocket -->
      <rect x="175" y="160" width="60" height="75" rx="3" fill="#15151c" stroke="#444458" stroke-width="1.5"/>
      <path d="M175,185 L235,185" stroke="${accent}" stroke-width="2"/>
      <text x="180" y="220" font-family="monospace" font-size="9" fill="${accent}">CORDURA-500</text>
      <!-- Hem Drawcord Details -->
      <circle cx="160" cy="330" r="4" fill="${accent}"/>
      <circle cx="340" cy="330" r="4" fill="${accent}"/>
    `;
  } else if (type === 'tee') {
    paths = `
      <defs>
        <linearGradient id="grad-t" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1b1b22"/>
          <stop offset="100%" stop-color="#0b0b0e"/>
        </linearGradient>
      </defs>
      <!-- Oversized Heavyweight Tee Silhouette -->
      <path d="M170,100 L215,88 C235,96 265,96 285,88 L330,100 L410,145 L380,205 L335,175 L335,335 L165,335 L165,175 L120,205 L90,145 Z" fill="url(#grad-t)" stroke="#333342" stroke-width="2"/>
      <!-- Dropped Shoulder Seam -->
      <path d="M170,100 L165,175 M330,100 L335,175" fill="none" stroke="#4f4f66" stroke-width="1.5" stroke-dasharray="3 3"/>
      <!-- Thick Ribbed Crewneck -->
      <path d="M215,88 C235,102 265,102 285,88" fill="none" stroke="${accent}" stroke-width="3"/>
      <!-- Editorial Typography Print On Chest -->
      <text x="250" y="220" font-family="sans-serif" font-weight="900" font-size="28" fill="#f0f0f5" text-anchor="middle" letter-spacing="4">NOIR</text>
      <text x="250" y="242" font-family="monospace" font-size="11" fill="${accent}" text-anchor="middle" letter-spacing="6">//FORM</text>
      <text x="250" y="260" font-family="monospace" font-size="8" fill="#58586e" text-anchor="middle">380 GSM HEAVY COTTON</text>
    `;
  } else {
    paths = `
      <defs>
        <linearGradient id="grad-c" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#21212c"/>
          <stop offset="100%" stop-color="#121218"/>
        </linearGradient>
      </defs>
      <!-- Cargo Pant Silhouette -->
      <path d="M170,80 L330,80 L350,330 L285,330 L255,160 L225,160 L195,330 L130,330 Z" fill="url(#grad-c)" stroke="#38384a" stroke-width="2"/>
      <!-- High Density Webbing Belt -->
      <rect x="170" y="80" width="160" height="20" fill="#14141a" stroke="#48485e" stroke-width="1.5"/>
      <rect x="235" y="82" width="30" height="16" rx="2" fill="${accent}"/>
      <!-- 3D Bellows Cargo Pockets -->
      <rect x="135" y="165" width="55" height="75" rx="3" fill="#161620" stroke="#4a4a60" stroke-width="1.5"/>
      <path d="M135,190 L190,190" stroke="${accent}" stroke-width="2"/>
      <rect x="310" y="165" width="55" height="75" rx="3" fill="#161620" stroke="#4a4a60" stroke-width="1.5"/>
      <path d="M310,190 L365,190" stroke="${accent}" stroke-width="2"/>
      <!-- Articulated Knee Darts -->
      <path d="M150,270 L185,270 M315,270 L350,270" stroke="#63637a" stroke-width="2"/>
      <!-- Ankle Cinch Webbing -->
      <path d="M130,325 L195,325 M285,325 L350,325" stroke="${accent}" stroke-width="2.5" stroke-dasharray="4 2"/>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
    <rect width="100%" height="100%" fill="#09090c"/>
    <defs>
      <pattern id="grid-${type}" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-${type})"/>
    <!-- Framing CAD lines -->
    <line x1="40" y1="40" x2="60" y2="40" stroke="${accent}" stroke-width="2"/>
    <line x1="40" y1="40" x2="40" y2="60" stroke="${accent}" stroke-width="2"/>
    <line x1="460" y1="40" x2="440" y2="40" stroke="${accent}" stroke-width="2"/>
    <line x1="460" y1="40" x2="460" y2="60" stroke="${accent}" stroke-width="2"/>
    <line x1="40" y1="360" x2="60" y2="360" stroke="${accent}" stroke-width="2"/>
    <line x1="40" y1="360" x2="40" y2="340" stroke="${accent}" stroke-width="2"/>
    <line x1="460" y1="360" x2="440" y2="360" stroke="${accent}" stroke-width="2"/>
    <line x1="460" y1="360" x2="460" y2="340" stroke="${accent}" stroke-width="2"/>
    ${paths}
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const PRODUCTS: Product[] = [
  {
    id: 'void-runner',
    name: 'VOID RUNNER',
    tagline: 'Kinetic geometry meets technical street utility.',
    category: 'Footwear',
    price: 8499,
    colorName: 'Obsidian',
    colorHex: '#111115',
    description: 'Sculptural street sneaker with a technical silhouette. Engineered with multi-density cellular cushioning, an ergonomic exoskeleton cage, and high-traction directional tread.',
    features: [
      'Multi-density EVA & Nitrile rubber sole matrix',
      'Structural TPU heel stability chassis',
      'Engineered ballistic monofilament mesh upper',
      'Kevlar-reinforced ghillie speed lacing',
      'Reflective 3M circuit graphic accents',
    ],
    materials: 'Ballistic mesh, structural TPU, Nitrile rubber compound',
    sizes: ['US 7.5', 'US 8.5', 'US 9.5', 'US 10.5', 'US 11.5'],
    inStock: true,
    badge: 'DROP 001 HERO',
    image: createProductSvg('sneaker', '#ccff00', '#111115'),
    variants: SNEAKER_VARIANTS,
  },
  {
    id: 'phantom-shell',
    name: 'PHANTOM SHELL',
    tagline: 'Impermeable architectural layering.',
    category: 'Outerwear',
    price: 12999,
    colorName: 'Graphite',
    colorHex: '#1e1e26',
    description: 'Lightweight technical jacket with architectural paneling. Features high-funnel windproof collar, laser-cut bonded pocketing, and waterproof taped seams for extreme weather protection.',
    features: [
      '3-Layer 20K/20K breathable waterproof membrane',
      'Asymmetric dual-way YKK Aquaguard storm zippers',
      'Concealed Fidlock magnetic modular chest rig',
      'Articulated raglan ergonomics for unrestricted movement',
      'Internal harness sling for hands-free carry',
    ],
    materials: '100% Recycled Technical Polyamide, PTFE membrane',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    badge: 'TECHNICAL SHELL',
    image: createProductSvg('jacket', '#ccff00', '#1e1e26'),
  },
  {
    id: 'static-heavyweight',
    name: 'STATIC HEAVYWEIGHT',
    tagline: 'Structured drape in pure combed cotton.',
    category: 'Apparel',
    price: 4499,
    colorName: 'Washed Black',
    colorHex: '#16161c',
    description: 'Oversized heavyweight cotton tee. Built from custom 380 GSM combed organic cotton with dropped shoulders, reinforced ribbed collar, and minimal back-panel darting.',
    features: [
      'Custom 380 GSM ultra-dense combed cotton jersey',
      'Pre-shrunk vintage enzyme cold-wash finish',
      'Architectural dropped shoulder boxy silhouette',
      'High-density blind stitch hems',
      'Matte rubberized tonal branding at nape',
    ],
    materials: '100% Combed Heavy Organic Cotton (380 GSM)',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    badge: 'ESSENTIALS',
    image: createProductSvg('tee', '#ccff00', '#16161c'),
  },
  {
    id: 'afterhours-cargo',
    name: 'AFTERHOURS CARGO',
    tagline: 'Articulated utility for metropolitan nights.',
    category: 'Bottoms',
    price: 7299,
    colorName: 'Concrete',
    colorHex: '#2a2a35',
    description: 'Utility-inspired cargo trousers with a relaxed fit. Engineered with 8-pocket ergonomic modularity, articulated knee pleats, and adjustable toggle cinch hems.',
    features: [
      'Heavyweight cotton-nylon ripstop blend with DWR finish',
      '8 ergonomic pockets with concealed zipper compartments',
      'Integrated Cobra-style quick-release nylon webbing belt',
      'Double-articulated knee darts for unrestricted stride',
      'Elastic shock-cord toggle hems for silhouette adjustment',
    ],
    materials: '65% Cotton, 35% Cordura Nylon Ripstop (DWR treated)',
    sizes: ['28', '30', '32', '34', '36'],
    inStock: true,
    badge: 'MODULAR CARGO',
    image: createProductSvg('cargo', '#ccff00', '#2a2a35'),
  },
];
