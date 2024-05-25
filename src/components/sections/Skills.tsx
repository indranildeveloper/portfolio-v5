import { FC } from "react";
import { FaListCheck } from "react-icons/fa6";
import SectionHeading from "../shared/section/SectionHeading";
import { skills } from "@/data/skills";
import SkillCard from "../shared/skills/SkillCard";
import SectionContainer from "../shared/section/SectionContainer";

const Skills: FC = () => {
  return (
    <SectionContainer id="skills">
      <SectionHeading
        Icon={<FaListCheck className="h-10 w-10 text-primary" />}
        headingTitle={"My Skills"}
      />

      <div className="mt-8 flex flex-col gap-4">
        {skills.map((skillGroup) => (
          <div key={skillGroup.id} className="flex flex-col gap-2">
            <h6 className="text-2xl text-gray-200">{skillGroup.groupName} :</h6>
            <div className="grid grid-cols-4 gap-6">
              {skillGroup.skills.map((skillItem) => (
                <SkillCard key={skillItem.id} skillItem={skillItem} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;
