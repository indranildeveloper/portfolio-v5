"use client";

import { FC } from "react";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";
import AboutImage from "./AboutImage";
import { Triangle } from "lucide-react";
import { AboutContentProps } from "@/interfaces/components/AboutContentProps";
import { aboutVariants } from "@/animations/aboutVariants";

const AboutContent: FC<AboutContentProps> = ({
  section,
  aboutSectionSkills,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
      className="flex flex-col items-start justify-between gap-10 md:flex-row"
    >
      <div>
        <motion.div
          variants={aboutVariants}
          className="mb-4 flex flex-col gap-4 "
        >
          <PortableText value={section.content} />
        </motion.div>

        <motion.div variants={aboutVariants}>
          <p>Here are few technologies I have been working with recently:</p>
          <div className="mt-4 grid grid-cols-2 gap-2 p-4">
            {aboutSectionSkills.skills.map((item) => (
              <p
                key={item.id}
                className="flex items-center gap-2 font-mono text-sm"
              >
                <Triangle className="h-3 w-3 rotate-90 fill-primary text-primary" />{" "}
                {item.skill}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <AboutImage />
    </motion.div>
  );
};

export default AboutContent;
