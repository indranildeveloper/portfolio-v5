"use client";

import { FC, useState } from "react";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";
import { Triangle } from "lucide-react";
import { FiAtSign } from "react-icons/fi";
import { ExperienceContentProps } from "@/interfaces/components/ExperienceContentProps";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { experienceVariants } from "@/animations/experienceVariants";

const ExperienceContent: FC<ExperienceContentProps> = ({ experienceData }) => {
  const [selectedWorkPlace, setSelectedWorkPlace] = useState<string>(
    experienceData.sort((a, b) => b.serial_number - a.serial_number)[0]
      .work_place,
  );

  const handleSelectWorkPlace = (workPlaceName: string) => {
    setSelectedWorkPlace(workPlaceName);
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
    >
      <motion.div variants={experienceVariants} className="flex gap-6">
        <div className="flex flex-col items-start gap-2">
          {experienceData
            .sort((a, b) => b.serial_number - a.serial_number)
            .map((experience) => (
              <Button
                key={experience._id}
                variant="ghost"
                onClick={() => handleSelectWorkPlace(experience.work_place)}
                className={cn(
                  selectedWorkPlace === experience.work_place
                    ? "bg-slate-900/40 text-primary hover:bg-slate-900/40 hover:text-primary"
                    : "text-opacity-50",
                )}
              >
                {experience.work_place}
              </Button>
            ))}
        </div>

        <div className="min-h-[720px]">
          {experienceData
            .filter(
              (experienceElement) =>
                experienceElement.work_place === selectedWorkPlace,
            )
            .map((experience) => (
              <div
                key={experience._id}
                className="flex animate-experience flex-col gap-2"
              >
                <h2 className="flex gap-2 text-2xl font-bold">
                  <span>{experience.position}</span>
                  <a
                    href={experience.url}
                    className="flex items-center gap-1 transition-all hover:text-primary"
                  >
                    <FiAtSign />
                    <span>{experience.work_place}</span>
                  </a>
                </h2>
                <p className="text-sm">{experience.description}</p>
                <p className="font-mono text-sm">{experience.timeline}</p>
                <div className="w-full">
                  <PortableText
                    value={experience.achievements}
                    components={{
                      list: {
                        bullet: ({ children }) => (
                          <ul className="mb-2 flex flex-col gap-2">
                            {children}
                          </ul>
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
                </div>
              </div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceContent;
