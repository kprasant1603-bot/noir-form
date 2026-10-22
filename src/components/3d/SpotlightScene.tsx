import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { SneakerModel } from './SneakerModel';
import { ProductColorVariant } from '../../types';
import { WebGLFallback } from './WebGLFallback';
import { RotateCw, ShieldCheck, Cpu } from 'lucide-react';

type SpotlightSceneProps = {
  selectedVariant: ProductColorVariant;
  onResetView?: () => void;
};

// Studio Lighting Rig for Spotlight
const SpotlightLighting = ({ variant }: { variant: ProductColorVariant }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* High Key Studio Light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={2.2}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Cool Fill Light */}
      <directionalLight
        position={[-6, 2, 4]}
        intensity={1.0}
        color="#a5a5c0"
      />
      {/* Variant-reactive Rim Light */}
      <directionalLight
        position={[0, 5, -5]}
        intensity={2.5}
        color={variant.accentColor}
      />
      {/* Bottom Under-glow */}
      <pointLight
        position={[0, -2, 0]}
        intensity={1.2}
        color={variant.accentColor}
        distance={6}
      />
    </>
  );
};

export const SpotlightScene: React.FC<SpotlightSceneProps> = ({
  selectedVariant,
}) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setHasWebGL(gl);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  if (!hasWebGL || hasError) {
    return (
      <WebGLFallback
        variant={selectedVariant}
        message="3D HARDWARE FALLBACK // MANUAL VECTOR VIEW"
        onReset={() => setHasError(false)}
      />
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] bg-noir-900 border border-noir-800 overflow-hidden group select-none">
      {/* Architectural Background Grids and Accents */}
      <div className="absolute inset-0 grid-hairline opacity-30 pointer-events-none" />

      {/* Cyber Corner brackets */}
      <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] text-acid/80 tracking-widest z-20">
        <Cpu className="w-3.5 h-3.5 text-acid" />
        <span>3D KINETIC VIEWPORT // 360° ORBIT</span>
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[10px] text-noir-400 z-20">
        <ShieldCheck className="w-3.5 h-3.5 text-noir-500" />
        <span>PBR SHADER: {selectedVariant.name.toUpperCase()}</span>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-noir-950/70 backdrop-blur-sm transition-opacity duration-500 pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-acid/20 border-t-acid rounded-full animate-spin" />
            <span className="font-mono text-xs tracking-widest text-acid uppercase">
              INITIALIZING 3D ENGINE...
            </span>
          </div>
        </div>
      )}

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [2.5, 1.2, 3.8], fov: 42 }}
        shadows
        dpr={[1, 2]}
        className="cursor-grab active:cursor-grabbing w-full h-full"
        onCreated={({ gl }) => {
          gl.setClearColor(0x0a0a0d, 1);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.15;
          setIsLoading(false);
        }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <SpotlightLighting variant={selectedVariant} />

          {/* Interactive Orbit Controls with limits */}
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            minDistance={2.5}
            maxDistance={6.0}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.15}
            minPolarAngle={Math.PI / 6}
            dampingFactor={0.08}
            enableDamping
            autoRotate={false}
          />

          {/* Shadow receiver plane */}
          <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[12, 12]} />
            <shadowMaterial opacity={0.5} />
          </mesh>

          {/* Centered Sneaker Model that dynamically updates materials */}
          <group position={[0, -0.1, 0]}>
            <SneakerModel
              variant={selectedVariant}
              isFloating={false}
              scale={1.05}
            />
          </group>
        </Suspense>
      </Canvas>

      {/* Control Overlay Buttons */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-noir-800/90 hover:bg-noir-700 text-noir-200 hover:text-acid border border-noir-700 font-mono text-[11px] uppercase tracking-wider transition-all duration-200"
            title="Reset 3D camera orientation"
          >
            <RotateCw className="w-3 h-3" />
            <span>Reset Camera</span>
          </button>
        </div>

        <div className="font-mono text-[10px] text-noir-500 tracking-wider hidden sm:block">
          DRAG TO ROTATE • PINCH/SCROLL TO ZOOM
        </div>
      </div>
    </div>
  );
};
