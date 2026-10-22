import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { SneakerModel } from './SneakerModel';
import { SNEAKER_VARIANTS } from '../../data/products';
import { WebGLFallback } from './WebGLFallback';

// Interactive Mouse Parallax Rig
const InteractiveParallaxRig = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Smooth lerp towards pointer position
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.5,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.35,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

// Studio Lighting Rig
const StudioLighting = () => {
  return (
    <>
      {/* Ambient Fill */}
      <ambientLight intensity={0.4} />

      {/* Primary Studio Key Light */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Cool Secondary Fill */}
      <directionalLight
        position={[-5, 3, 2]}
        intensity={0.8}
        color="#9090aa"
      />

      {/* Cyber Acid Rim Light (defining high-end silhouettes) */}
      <directionalLight
        position={[0, 4, -4]}
        intensity={2.2}
        color="#ccff00"
      />

      {/* Soft Ground Under-glow */}
      <pointLight position={[0, -1.5, 0]} intensity={0.8} color="#ccff00" distance={5} />
    </>
  );
};

// Check if WebGL is supported
const isWebGLSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

export const HeroScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setHasWebGL(isWebGLSupported());
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  if (!hasWebGL || hasError) {
    return (
      <WebGLFallback
        variant={SNEAKER_VARIANTS[0]}
        message="3D ENGINE STANDBY // VECTOR BLUEPRINT ACTIVE"
        onReset={() => setHasError(false)}
      />
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center">
      {/* Subtle glowing halo beneath the 3D model */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-acid/10 filter blur-[90px] pointer-events-none -z-0 animate-pulse-subtle" />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0.5, 0.4, 4.2], fov: 45 }}
        shadows
        dpr={[1, 2]}
        className="cursor-grab active:cursor-grabbing z-10"
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <StudioLighting />
          <InteractiveParallaxRig>
            {/* Ground shadow plane */}
            <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.4} />
            </mesh>

            {/* Subtle floating coordinate markers in 3D */}
            <group position={[0, 0, 0]} rotation={[0.2, -0.4, 0.05]}>
              <SneakerModel
                variant={SNEAKER_VARIANTS[0]}
                isFloating={!isReducedMotion}
                scale={0.9}
              />
            </group>
          </InteractiveParallaxRig>
        </Suspense>
      </Canvas>

      {/* Floating interactive 3D HUD Badge */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-noir-900/80 backdrop-blur-md border border-noir-700/60 font-mono text-[10px] text-noir-400 select-none pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-acid animate-ping" />
        <span>PARALLAX KINETIC 3D RIG</span>
      </div>
    </div>
  );
};
