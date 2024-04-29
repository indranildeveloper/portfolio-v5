"use client";

import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Loader from "../shared/Loader";
import CubeModel from "../models/CubeModel";

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
