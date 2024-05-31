"use client";

import { FC } from "react";
import Writing from "../shared/hero/Writing";
import CallToAction from "../shared/hero/CallToAction";
import SectionContainer from "../shared/section/SectionContainer";

const Hero: FC = () => {
  return (
    <SectionContainer id="hero">
      <div className="flex flex-col justify-start gap-2 text-left">
        <p className="font-mono text-primary">Hello there! My name is</p>
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 lg:text-6xl">
          Indranil Halder.
        </h1>
        <h2 className="text-2xl font-bold lg:text-5xl">
          I build awesome web experiences.
        </h2>
        <Writing />
        <p className=" lg:text-lg">
          Full Stack Web3 developer and AI enthusiast who has a predilection for
          design and enjoy working on projects where approaching design and
          development as co-dependent processes can lead to smarter solutions
          and a better overall product experience for human beings.
        </p>
        <CallToAction />
      </div>
    </SectionContainer>
  );
};

export default Hero;
