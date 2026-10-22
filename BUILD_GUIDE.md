# NOIR//FORM — Workshop & Architecture Build Guide

> *Developer & Instructor Technical Manual for Live Demonstrations*

This document outlines the architectural patterns, component hierarchy, Three.js 3D pipelines, and state management techniques used throughout the **NOIR//FORM** project. It is specifically structured for technical workshops, code walkthroughs, and peer review.

---

## 1. Architecture Overview & File Map

```
noir-form/
├── public/                     # Static root assets
├── src/
│   ├── types/
│   │   └── index.ts            # Type definitions (Product, Variant, CartItem, Article)
│   ├── data/
│   │   ├── products.ts         # Fictional catalog with CAD vector generator & 3D colorways
│   │   ├── articles.ts         # Archival journal essays with complete content
│   │   └── materials.ts        # Craftsmanship pillars and textile specifications
│   ├── context/
│   │   └── CartContext.tsx     # Shopping bag provider, LocalStorage sync, toast notifications
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx      # Multi-variant high-fashion buttons (acid, secondary, outline)
│   │   │   ├── Badge.tsx       # Cyberpunk technical badges
│   │   │   ├── Toast.tsx       # Floating notification container
│   │   │   └── Modal.tsx       # Accessible dialog backdrop with ESC & click-outside handling
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx      # Sticky glassmorphic navbar with live cart badge
│   │   │   └── MobileMenu.tsx  # Fullscreen mobile overlay drawer
│   │   ├── cart/
│   │   │   └── CartDrawer.tsx  # Interactive e-commerce drawer with line totals & demo checkout
│   │   ├── product/
│   │   │   ├── ProductCard.tsx # Editorial product card with quick-view and hover states
│   │   │   └── ProductDetailModal.tsx # Deep-dive spec modal with size selector
│   │   ├── 3d/
│   │   │   ├── SneakerModel.tsx    # Procedural compound 3D sneaker mesh with PBR materials
│   │   │   ├── HeroScene.tsx       # Floating hero scene with mouse parallax rig
│   │   │   ├── SpotlightScene.tsx  # 360° OrbitControls product showcase
│   │   │   └── WebGLFallback.tsx   # Graceful SVG schematic fallback if WebGL fails
│   │   └── journal/
│   │       └── ArticleModal.tsx    # Reader modal for editorial journal articles
│   ├── sections/
│   │   ├── HeroSection.tsx         # Section A: Headline, 3D model, dual CTAs, drop metadata
│   │   ├── FeaturedSection.tsx     # Section B: 4-product editorial grid
│   │   ├── SpotlightSection.tsx    # Section C: VOID RUNNER 3D lab & variant switcher
│   │   ├── ManifestoSection.tsx    # Section D: Asymmetric typography brand manifesto
│   │   ├── CraftSection.tsx        # Section E: 4 pillars + interactive textile swatches
│   │   ├── CampaignSection.tsx     # Section F: Editorial campaign layout
│   │   ├── JournalSection.tsx      # Section G: 3-article dispatch cards
│   │   ├── NewsletterSection.tsx   # Section H: Client-validated signup terminal
│   │   └── FooterSection.tsx       # Section I: Links, social placeholders, back-to-top
│   ├── App.tsx                     # Master layout coordinator and context consumer
│   ├── main.tsx                    # React DOM entry point
│   └── index.css                   # Tailwind directives, custom scrollbars, hairline grid
├── tailwind.config.js              # Custom color tokens, fonts, and box shadows
└── vite.config.ts                  # Vite build options with chunk limit tuning
```

---

## 2. The Three.js Procedural Pipeline

### Why Procedural Compound Geometry?
External 3D model files (`.gltf` / `.glb`) frequently suffer from missing textures, large download footprints (10-30MB), or CORS issues when loaded across differing domains. 
In `src/components/3d/SneakerModel.tsx`, we construct the **VOID RUNNER** sneaker entirely using native Three.js primitives grouped under a single hierarchical scene graph:

```tsx
<group scale={[scale, scale, scale]}>
  <group ref={floatRef}>
    {/* 1. Outsole base & multi-lug directional treads */}
    <mesh position={[0.2, -0.4, 0]} material={soleMaterial} ... />
    
    {/* 2. Midsole cushioning with exposed air pods */}
    <mesh position={[0.1, -0.15, 0]} material={soleMaterial} ... />
    
    {/* 3. Upper body with ballistic mesh curvature */}
    <mesh position={[0.85, 0.15, 0]} material={upperMaterial} ... />
    
    {/* 4. External TPU exoskeleton cage & lateral support ribs */}
    <mesh position={[-1.25, 0.35, 0]} material={cageMaterial} ... />
    
    {/* 5. Tubular speed lacing cords */}
    <cylinderGeometry args={[0.035, 0.035, 0.82, 12]} ... />
    
    {/* 6. Reflective kinetic brand slash & heel pull loop */}
    <mesh material={accentMaterial} ... />
  </group>
</group>
```

### Real-time Material Shader Updates
When the user selects between `Obsidian`, `Bone`, or `Signal` in the 3D Spotlight:
1. `SpotlightSection.tsx` updates `selectedVariant: ProductColorVariant`.
2. `SneakerModel.tsx` re-computes `THREE.MeshStandardMaterial`:
   - `upperMaterial.color = new THREE.Color(variant.upperColor)`
   - `upperMaterial.roughness = variant.roughness`
   - `upperMaterial.metalness = variant.metalness`
   - `accentMaterial.color = new THREE.Color(variant.accentColor)`
   - `accentMaterial.emissive = new THREE.Color(variant.accentColor)`
3. The lighting rig (`SpotlightLighting`) also updates its rim light to reflect the selected variant's accent color!

---

## 3. Cart State & Persistent Storage

Managed in `src/context/CartContext.tsx`:
- **State Model**: Array of `CartItem` objects:
  ```ts
  type CartItem = {
    productId: string;
    name: string;
    price: number;
    colorVariant: string;
    size: string;
    quantity: number;
    image: string;
    category: string;
  };
  ```
- **Compound Key Matching**: An item in the cart is uniquely identified by `productId + colorVariant + size`. Adding the same shoe in a different size creates a separate line item rather than replacing the previous size.
- **LocalStorage Resilience**:
  ```ts
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('noir_form_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  ```
- **Real-Time INR Formatting**: All price numbers are formatted using `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })`.

---

## 4. How to Customize the Project

### Changing Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  noir: {
    950: '#060608', // Deepest background
    ...
  },
  acid: {
    DEFAULT: '#ccff00', // Electric lime accent (try #00f0ff for cyber cyan)
  }
}
```

### Adding a New Product
Open `src/data/products.ts` and append to `PRODUCTS`:
```ts
{
  id: 'kinetic-hoodie',
  name: 'KINETIC HOODIE',
  tagline: 'Sculptural thermal drape.',
  category: 'Apparel',
  price: 6499,
  colorName: 'Carbon',
  colorHex: '#141418',
  description: 'Heavyweight thermal fleece with concealed acoustic funnel hood.',
  features: ['450 GSM French Terry', 'Thumbhole cuffs'],
  materials: '100% Cotton',
  sizes: ['S', 'M', 'L', 'XL'],
  inStock: true,
  image: createProductSvg('jacket', '#ccff00', '#141418'),
}
```

### Adjusting 3D Camera & Parallax Speed
In `src/components/3d/HeroScene.tsx`:
- Adjust parallax responsiveness: change `0.05` in `THREE.MathUtils.lerp(..., 0.05)`.
- Adjust float amplitude: in `SneakerModel.tsx`, modify `Math.sin(t * 1.5) * 0.12`.

---

## 5. Troubleshooting & Workshop FAQ

1. **Why does WebGL fallback appear?**
   - If WebGL hardware acceleration is disabled in the user's browser, `isWebGLSupported()` returns `false`, gracefully displaying the vector CAD schematic without breaking the layout.
2. **How to test responsive views in DevTools?**
   - Desktop: `1440px` (Full 12-column layout)
   - Tablet: `768px` (2-column featured grid, stacked spotlight)
   - Mobile: `390px` (Single column, sticky mobile action bar)
3. **Can I integrate Stripe / Razorpay later?**
   - Yes! The `handleDemoCheckout` method in `CartDrawer.tsx` is cleanly decoupled and can be plugged directly into any payment gateway SDK.
