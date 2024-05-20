"use client";

import { FC } from "react";
import Writing from "../shared/Writing";
import CallToAction from "../shared/CallToAction";

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="flex h-full items-center gap-2 lg:min-h-screen lg:pt-0"
    >
      <div className="mt-40 flex flex-col justify-start gap-2 text-left lg:mt-0">
        <p className="font-mono text-primary">Hello there! My name is</p>
        <h1 className="text-4xl font-bold lg:text-6xl">Indranil Halder.</h1>
        <h2 className="text-2xl font-bold text-slate-400 lg:text-5xl">
          I build awesome web experiences.
        </h2>
        <Writing />
        <p className="text-slate-400 lg:text-lg">
          Full Stack Web3 developer and AI enthusiast who has a predilection for
          design and enjoy working on projects where approaching design and
          development as co-dependent processes can lead to smarter solutions
          and a better overall product experience for human beings.
        </p>
        <CallToAction />
      </div>
    </section>
  );
};

export default Hero;
