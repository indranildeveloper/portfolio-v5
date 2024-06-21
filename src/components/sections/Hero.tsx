"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Writing from "../shared/hero/Writing";
import CallToAction from "../shared/hero/CallToAction";
import SectionContainer from "../shared/section/SectionContainer";
import {
  heroContainerVariants,
  heroItemVariants,
} from "@/animations/heroVariants";

const Hero: FC = () => {
  return (
    <SectionContainer id="hero">
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-start gap-2 text-left"
      >
        <motion.p
          variants={heroItemVariants}
          className="font-mono text-primary"
        >
          Hello there! My name is
        </motion.p>
        <motion.h1
          variants={heroItemVariants}
          className="text-4xl font-bold text-slate-800 dark:text-slate-100 lg:text-6xl"
        >
          Indranil Halder.
        </motion.h1>
        <motion.h2
          variants={heroItemVariants}
          className="text-2xl font-bold lg:text-5xl"
        >
          I build awesome web experiences.
        </motion.h2>
        <Writing />
        <motion.p variants={heroItemVariants} className="lg:text-lg">
          Full Stack Web3 developer and AI enthusiast who has a predilection for
          design and enjoy working on projects where approaching design and
          development as co-dependent processes can lead to smarter solutions
          and a better overall product experience for human beings.
        </motion.p>
        <CallToAction />
      </motion.div>
    </SectionContainer>
  );
};

export default Hero;
