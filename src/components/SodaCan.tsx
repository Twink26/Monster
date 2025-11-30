"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/labels/white.png",
  grape: "/labels/red.png",
  blackCherry: "/labels/black.png",
  strawberryLemonade: "/labels/blue.png",
  watermelon: "/labels/yellow.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "blackCherry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/Soda-can.gltf");

  const labels = useTexture(flavorTextures);

  // Fixes upside down labels
  labels.strawberryLemonade.flipY = false;
  labels.blackCherry.flipY = false;
  labels.watermelon.flipY = false;
  labels.grape.flipY = false;
  labels.lemonLime.flipY = false;

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={[scale * 0.8, scale * 1.2, scale * 0.8]} rotation={[0.1, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}