import { FC } from "react";
import CubeCanvas from "../canvas/CubeCanvas";

const Hero: FC = () => {
  return (
    <section id="hero">
      <p>Hello there! My name is</p>
      <h1>Indranil Halder</h1>
      <h2>I build awesome web experiences.</h2>
      <p>
        Full Stack Web3 developer and AI enthusiast who has a predilection for
        design and enjoy working on projects where approaching design and
        development as co-dependent processes can lead to smarter solutions and
        a better overall product experience for human beings.
      </p>
      <div>
        <CubeCanvas />
      </div>
    </section>
  );
};

export default Hero;
