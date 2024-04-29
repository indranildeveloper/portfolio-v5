import { FC } from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader: FC = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center className="flex flex-col items-center justify-center">
      <span className="canvas-loader" />
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
