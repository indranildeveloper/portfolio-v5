"use client";

import { FC, Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import Loader from "../shared/Loader";

const CubeModel: FC = () => {
  const [name, setName] = useState("Animation");
  const meshRef = useRef(null);

  const cube = useGLTF("/models/cube/scene.gltf");

  console.log(cube);

  const modelAnimations = useAnimations(cube.animations, meshRef);

  useEffect(() => {
    modelAnimations.actions[modelAnimations.names[0]]
      ?.reset()
      .fadeIn(0.5)
      .play();

    return () => {
      modelAnimations.actions[modelAnimations.names[0]]?.fadeOut(0.5);
    };
  }, [modelAnimations.actions, modelAnimations.names]);

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={1} position={[20, 20, 20]} />
      <spotLight intensity={40} penumbra={0} />
      <pointLight intensity={2500} position={[-10, 10, 10]} />
      <ambientLight intensity={100} position={[10, 10, 10]} />
      <primitive object={cube.scene} scale={1.6} />
    </mesh>
  );
};

const CubeCanvas: FC = () => {
  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <CubeModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;
