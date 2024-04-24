import { FC } from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader: FC = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
