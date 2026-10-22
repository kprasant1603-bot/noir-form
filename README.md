# NOIR//FORM — Premium 3D Streetwear E-Commerce Experience

> *“Wear the Unseen.”*

**NOIR//FORM** is a production-grade 3D digital fashion and e-commerce experience built for a fictional luxury streetwear brand. Conceived at the intersection of architectural drape, underground metropolitan subculture, and kinetic 3D geometry, this storefront features real-time procedural Three.js rendering, dynamic PBR shader materials, interactive cart management in INR (₹), and editorial typography.

---

## 🌟 Key Features

### 1. Interactive 3D Hero Experience
- **Kinetic Centerpiece**: A custom 3D technical sneaker (`VOID RUNNER`) engineered from compound Three.js geometries (segmented lugged outsole, aerodynamic midsole dampers, breathable vamp mesh, TPU heel counter, speed-lacing ghillie cords, and kinetic graphic accents).
- **Parallax Physics**: Pointer-driven micro-rotation with smooth lerp physics and floating animation.
- **Studio Lighting Rig**: Three-point studio illumination with directional key light, cool fill light, and vibrant electric lime rim accents (`#ccff00`).
- **WebGL Fallback**: Graceful fallback to a vector blueprint schematic if hardware acceleration is unavailable or disabled.

### 2. Live 3D Product Spotlight (`VOID RUNNER`)
- **360° Orbit Viewport**: Touch- and drag-responsive orbit controls with elevation constraints and damping.
- **Dynamic PBR Material Variants**:
  - `Obsidian`: Stealth matte black with carbon fiber texture and electric lime highlights.
  - `Bone`: Architectural chalk white with graphite contrast trims.
  - `Signal`: High-contrast tactical graphite with glowing neon green details.
  - *Switching variants updates the actual 3D shader uniforms and material properties in real time.*
- **Camera Re-centering**: Dedicated reset controls and camera boundary enforcement.

### 3. Complete Drop 001 Collection
- Four fictional catalog items rendered in high-definition CAD technical blueprints:
  - **VOID RUNNER** (Footwear) — ₹8,499 (Obsidian, Bone, Signal)
  - **PHANTOM SHELL** (Outerwear) — ₹12,999 (Graphite)
  - **STATIC HEAVYWEIGHT** (Apparel) — ₹4,499 (Washed Black)
  - **AFTERHOURS CARGO** (Bottoms) — ₹7,299 (Concrete)
- Quick-view product detail modal with full technical specifications, material composition, size selectors, and instant Add-to-Bag functionality.

### 4. Fully Functional E-Commerce Cart Drawer
- Real-time sliding drawer with backdrop blur.
- Live item quantity adjustments (`+` / `-`), line total calculations, and item deletion.
- Real-time currency formatting in Indian Rupees (`₹`).
- Free domestic shipping meter (progress bar toward ₹10,000 threshold).
- Client-side persistence via `localStorage` with parse error recovery.
- Non-blocking toast notifications on bag additions and modifications.
- Sandbox demo checkout simulation with honest, transparent messaging.

### 5. Architectural Editorial & Brand Content
- **Brand Manifesto**: Asymmetrical typographic manifesto (*“Not Made to Blend In”*).
- **Materials & Craftsmanship Lab**: Interactive specification inspector covering 500D Ballistic Cordura®, 20K/20K breathable membranes, and 380 GSM combed cotton.
- **Campaign Presentation**: High-contrast editorial visual with drop allocation metrics.
- **Archival Journal**: 3 readable essays with full interactive article modals.
- **Subscriber Terminal**: Client-validated email signup with honest demo disclosures.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 18, TypeScript 5, Vite 5 |
| **3D Engine** | Three.js (r160), React Three Fiber (R3F v8), Drei (v9) |
| **Styling** | Tailwind CSS v3, PostCSS, Autoprefixer |
| **Icons** | Lucide React |
| **State Management** | React Context + LocalStorage with safe fallback |

---

## 📋 Prerequisites

- **Node.js**: v18.0.0 or higher (Tested and verified on Node v24.20.0)
- **npm**: v9.0.0 or higher (Tested and verified on npm v11.19.0)

---

## 🚀 Local Development Setup

1. **Navigate to the project directory**:
   ```bash
   cd "C:\Users\ARTEMSIA\.gemini\antigravity\scratch\noir-form"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Run the production build**:
   ```bash
   npm run build
   ```

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 📦 GitHub Workflow

To push this codebase to a new GitHub repository:

```bash
# 1. Initialize Git in the project root
git init

# 2. Stage all project files (node_modules and dist are excluded by .gitignore)
git add .

# 3. Create the initial commit
git commit -m "feat: complete NOIR//FORM 3D streetwear e-commerce experience"

# 4. Set the default branch to main
git branch -M main

# 5. Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/noir-form.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 Deploying to Vercel

### Option A: Via Vercel Web Dashboard (Recommended)

1. Push your repository to **GitHub** using the instructions above.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New..."** → **"Project"**.
4. Select and import your `noir-form` repository.
5. Vercel will automatically detect the **Vite** framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your site will be live on an SSL-enabled `.vercel.app` domain within ~60 seconds.

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy directly from your terminal
vercel
```

---

## 🔍 Verification & Acceptance Audit

- [x] **Local Build**: Compiles cleanly with TypeScript and Vite (`npm run build` passed with zero errors).
- [x] **3D Hero Centerpiece**: Real 3D compound geometry with studio rim lighting and mouse parallax.
- [x] **Interactive Spotlight**: 360° OrbitControls and live PBR shader variant switching (`Obsidian`, `Bone`, `Signal`).
- [x] **Featured Collection**: All four defined products represented with accurate INR pricing.
- [x] **E-Commerce Cart Drawer**: Real-time quantity adjustments, price calculations, and `localStorage` persistence.
- [x] **Accessible UI**: Full keyboard navigation, semantic markup, and `prefers-reduced-motion` compliance.
- [x] **Zero Broken Assets**: Self-contained SVG/Canvas visual generation ensures zero 404s or broken remote links.

---

## 📄 License & Attribution

Designed and engineered for demonstration and educational purposes under the MIT License.
All product designs, brand lore, and technical descriptions are original fictional creations.
