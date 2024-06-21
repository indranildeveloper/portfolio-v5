"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectsContentProps } from "@/interfaces/components/ProjectsContentProps";

const ProjectsContent: FC<ProjectsContentProps> = ({ projects }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectsContent;
