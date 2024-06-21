import { FC } from "react";
import { FaListCheck } from "react-icons/fa6";
import SectionHeading from "../shared/section/SectionHeading";
import SectionContainer from "../shared/section/SectionContainer";
import SkillsContent from "../shared/skills/SkillsContent";

const Skills: FC = () => {
  return (
    <SectionContainer id="skills">
      <SectionHeading
        Icon={<FaListCheck className="h-10 w-10 text-primary" />}
        headingTitle={"My Skills"}
      />

      <SkillsContent />
    </SectionContainer>
  );
};

export default Skills;
