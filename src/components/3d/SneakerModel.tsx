import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { ProductColorVariant } from '../../types';

type SneakerModelProps = {
  variant: ProductColorVariant;
  isFloating?: boolean;
  interactive?: boolean;
  scale?: number;
};

export const SneakerModel: React.FC<SneakerModelProps> = ({
  variant,
  isFloating = true,
  scale = 1,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const floatRef = useRef<THREE.Group>(null);

  // Smooth floating oscillation
  useFrame((state) => {
    if (isFloating && floatRef.current) {
      const t = state.clock.getElapsedTime();
      floatRef.current.position.y = Math.sin(t * 1.5) * 0.12;
      floatRef.current.rotation.y = Math.sin(t * 0.8) * 0.15;
      floatRef.current.rotation.z = Math.cos(t * 1.1) * 0.04;
    }
  });

  // Dynamic PBR Materials based on variant
  const upperMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(variant.upperColor),
    roughness: variant.roughness,
    metalness: variant.metalness,
  });

  const soleMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(variant.soleColor),
    roughness: 0.85,
    metalness: 0.1,
  });

  const cageMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(variant.hex === '#e2e0d8' ? '#2a2a35' : '#181822'),
    roughness: 0.25,
    metalness: 0.6,
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(variant.accentColor),
    roughness: 0.2,
    metalness: 0.4,
    emissive: new THREE.Color(variant.accentColor),
    emissiveIntensity: 0.45,
  });

  const lacesMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(variant.lacesColor),
    roughness: 0.7,
    metalness: 0.1,
  });

  const darkRubberMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#08080a'),
    roughness: 0.9,
    metalness: 0.05,
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]} dispose={null}>
      <group ref={floatRef}>
        {/* ================= OUTSOLE & TREADS ================= */}
        {/* Main sculpted outsole base */}
        <mesh position={[0.2, -0.4, 0]} material={soleMaterial} castShadow receiveShadow>
          <boxGeometry args={[3.4, 0.28, 1.35]} />
        </mesh>

        {/* Outsole curved bevel toe kick */}
        <mesh position={[1.8, -0.28, 0]} rotation={[0, 0, 0.35]} material={soleMaterial} castShadow>
          <boxGeometry args={[0.65, 0.26, 1.25]} />
        </mesh>

        {/* Directional traction lugs along bottom */}
        {[-1.2, -0.7, -0.2, 0.3, 0.8, 1.3, 1.7].map((x, i) => (
          <group key={`lug-${i}`} position={[x, -0.58, 0]}>
            <mesh material={accentMaterial} castShadow>
              <boxGeometry args={[0.2, 0.1, 1.2]} />
            </mesh>
            <mesh position={[0, -0.04, 0]} material={darkRubberMaterial}>
              <boxGeometry args={[0.12, 0.05, 1.05]} />
            </mesh>
          </group>
        ))}

        {/* ================= MIDSOLE & DAMPING UNITS ================= */}
        {/* Ergonomic segmented cushioning slab */}
        <mesh position={[0.1, -0.15, 0]} material={soleMaterial} castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.32, 1.28]} />
        </mesh>

        {/* Heel shock-absorbing aerodynamic diffuser / fin */}
        <mesh position={[-1.55, -0.18, 0]} rotation={[0, 0, -0.32]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.6, 0.25, 1.22]} />
        </mesh>

        {/* Exposed kinetic air/energy cell pods */}
        {[-0.8, -0.4, 0.1].map((x, i) => (
          <mesh key={`pod-${i}`} position={[x, -0.16, 0.62]} material={accentMaterial}>
            <cylinderGeometry args={[0.09, 0.09, 0.22, 16]} />
          </mesh>
        ))}
        {[-0.8, -0.4, 0.1].map((x, i) => (
          <mesh key={`pod-r-${i}`} position={[x, -0.16, -0.62]} material={accentMaterial}>
            <cylinderGeometry args={[0.09, 0.09, 0.22, 16]} />
          </mesh>
        ))}

        {/* ================= UPPER SILHOUETTE ================= */}
        {/* Forefoot / Vamp volume */}
        <mesh position={[0.85, 0.15, 0]} rotation={[0, 0, -0.08]} material={upperMaterial} castShadow receiveShadow>
          <boxGeometry args={[1.7, 0.52, 1.2]} />
        </mesh>

        {/* Protective thermo-bonded toe bumper wrap */}
        <mesh position={[1.72, 0.02, 0]} rotation={[0, 0, 0.25]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.35, 0.42, 1.15]} />
        </mesh>

        {/* Midfoot structural body */}
        <mesh position={[-0.1, 0.4, 0]} rotation={[0, 0, 0.15]} material={upperMaterial} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.75, 1.15]} />
        </mesh>

        {/* High-ankle padded collar opening */}
        <mesh position={[-0.75, 0.75, 0]} material={cageMaterial} castShadow>
          <cylinderGeometry args={[0.55, 0.62, 0.75, 24]} />
        </mesh>

        {/* Sock-liner interior padding */}
        <mesh position={[-0.75, 0.9, 0]} material={darkRubberMaterial}>
          <cylinderGeometry args={[0.42, 0.45, 0.5, 24]} />
        </mesh>

        {/* Forward angled technical tongue */}
        <mesh position={[-0.15, 0.85, 0]} rotation={[0, 0, 0.5]} material={upperMaterial} castShadow>
          <boxGeometry args={[0.9, 0.15, 0.75]} />
        </mesh>

        {/* Tongue technical woven label badge */}
        <mesh position={[-0.12, 0.95, 0]} rotation={[0, 0, 0.5]} material={accentMaterial}>
          <boxGeometry args={[0.3, 0.03, 0.4]} />
        </mesh>

        {/* ================= EXTERNAL TPU CAGE & EXOSKELETON ================= */}
        {/* Heel counter cup */}
        <mesh position={[-1.25, 0.35, 0]} rotation={[0, 0, -0.15]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.55, 0.78, 1.22]} />
        </mesh>

        {/* Lateral midfoot support ribs (Left Side) */}
        <mesh position={[-0.1, 0.38, 0.6]} rotation={[0, 0, 0.4]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.18, 0.7, 0.08]} />
        </mesh>
        <mesh position={[0.25, 0.3, 0.6]} rotation={[0, 0, 0.35]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.16, 0.6, 0.08]} />
        </mesh>
        <mesh position={[0.6, 0.22, 0.6]} rotation={[0, 0, 0.3]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.14, 0.5, 0.08]} />
        </mesh>

        {/* Lateral midfoot support ribs (Right Side) */}
        <mesh position={[-0.1, 0.38, -0.6]} rotation={[0, 0, 0.4]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.18, 0.7, 0.08]} />
        </mesh>
        <mesh position={[0.25, 0.3, -0.6]} rotation={[0, 0, 0.35]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.16, 0.6, 0.08]} />
        </mesh>
        <mesh position={[0.6, 0.22, -0.6]} rotation={[0, 0, 0.3]} material={cageMaterial} castShadow>
          <boxGeometry args={[0.14, 0.5, 0.08]} />
        </mesh>

        {/* Speed-lacing Ghillie cords */}
        {[0.1, 0.4, 0.7, 1.0].map((x, i) => (
          <mesh
            key={`lace-${i}`}
            position={[x - 0.1, 0.58 - i * 0.09, 0]}
            rotation={[Math.PI / 2, 0, 0.3]}
            material={lacesMaterial}
            castShadow
          >
            <cylinderGeometry args={[0.035, 0.035, 0.82, 12]} />
          </mesh>
        ))}

        {/* Signature Kinetic Graphic Slash / Brand Icon */}
        <mesh position={[0.2, 0.35, 0.61]} rotation={[0, 0, -0.25]} material={accentMaterial}>
          <boxGeometry args={[0.95, 0.08, 0.02]} />
        </mesh>
        <mesh position={[0.2, 0.35, -0.61]} rotation={[0, 0, -0.25]} material={accentMaterial}>
          <boxGeometry args={[0.95, 0.08, 0.02]} />
        </mesh>

        {/* Heel Webbing Pull Loop */}
        <mesh position={[-1.48, 0.9, 0]} rotation={[0, 0, 0.4]} material={accentMaterial}>
          <torusGeometry args={[0.18, 0.04, 8, 16]} />
        </mesh>
      </group>
    </group>
  );
};
