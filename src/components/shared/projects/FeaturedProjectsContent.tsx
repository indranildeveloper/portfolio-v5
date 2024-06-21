"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FeaturedProject from "./FeaturedProject";
import { FeaturedProjectsContentProps } from "@/interfaces/components/FeaturedProjectsContentProps";

const FeaturedProjectContent: FC<FeaturedProjectsContentProps> = ({
  featuredProjects,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      {featuredProjects.map((project) => (
        <FeaturedProject key={project._id} project={project} />
      ))}
    </motion.div>
  );
};

export default FeaturedProjectContent;
