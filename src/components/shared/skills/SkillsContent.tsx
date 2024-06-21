"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
import { skillsVariants } from "@/animations/skillVariants";

const SkillsContent: FC = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
      className="flex flex-col gap-4"
    >
      {skills.map((skillGroup) => (
        <div key={skillGroup.id} className="flex flex-col gap-2">
          <motion.h6 variants={skillsVariants} className="text-2xl">
            {skillGroup.groupName} :
          </motion.h6>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skillGroup.skills.map((skillItem) => (
              <SkillCard key={skillItem.id} skillItem={skillItem} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SkillsContent;
