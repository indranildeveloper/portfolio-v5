import { FC } from "react";
import { Laptop2 } from "lucide-react";
import SectionHeading from "../shared/section/SectionHeading";
import { getExperiences } from "@/sanity/utils/getExperiences";
import { getSectionData } from "@/sanity/utils/getSectionData";
import SectionContainer from "../shared/section/SectionContainer";
import ExperienceContent from "../shared/experience/ExperienceContent";

const Experience: FC = async () => {
  const experienceData = await getExperiences();
  const section = await getSectionData("experience");

  return (
    <SectionContainer id="experience">
      <SectionHeading
        Icon={<Laptop2 className="h-10 w-10 text-primary" />}
        headingTitle={section.name}
      />
      <ExperienceContent experienceData={experienceData} />
    </SectionContainer>
  );
};

export default Experience;
