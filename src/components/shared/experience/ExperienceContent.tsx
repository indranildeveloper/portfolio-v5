"use client";

import { FC } from "react";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";
import { TbExternalLink } from "react-icons/tb";
import { Triangle } from "lucide-react";
import { ExperienceContentProps } from "@/interfaces/components/ExperienceContentProps";
import { experienceVariants } from "@/animations/experienceVariants";

const ExperienceContent: FC<ExperienceContentProps> = ({ experienceData }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
      className="flex flex-col gap-6"
    >
      {experienceData.map((experience) => (
        <div key={experience._id} className="flex flex-col gap-2">
          <motion.h2
            variants={experienceVariants}
            className="text-2xl font-bold"
          >
            {experience.position}
          </motion.h2>
          <motion.a
            variants={experienceVariants}
            href={experience.url}
            className="flex items-center gap-1 text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{experience.work_place}</span>
            <TbExternalLink />
          </motion.a>
          <motion.p variants={experienceVariants} className="text-sm">
            {experience.description}
          </motion.p>
          <motion.p variants={experienceVariants} className="font-mono text-sm">
            {experience.timeline}
          </motion.p>
          <motion.div variants={experienceVariants} className="w-full">
            <PortableText
              value={experience.achievements}
              components={{
                list: {
                  bullet: ({ children }) => (
                    <ul className="flex flex-col gap-2">{children}</ul>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="flex items-start gap-2">
                      <Triangle className="mt-[8px] h-2 w-2 flex-shrink-0 flex-grow-0 rotate-90 fill-primary text-primary" />
                      <span>{children}</span>
                    </li>
                  ),
                },
              }}
            />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default ExperienceContent;
