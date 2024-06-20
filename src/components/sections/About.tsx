import { FC } from "react";
import { GraduationCap, Triangle } from "lucide-react";
import SectionHeading from "../shared/section/SectionHeading";
import { getSectionData } from "@/sanity/utils/getSectionData";
import { getFeaturedSkills } from "@/sanity/utils/getFeaturedSkills";
import SectionContainer from "../shared/section/SectionContainer";
import AboutContent from "../shared/about/AboutContent";

const About: FC = async () => {
  const section = await getSectionData("about-section");
  const aboutSectionSkills = await getFeaturedSkills();

  return (
    <SectionContainer id="about">
      <SectionHeading
        Icon={<GraduationCap className="h-10 w-10 text-primary" />}
        headingTitle={section.name}
      />

      <AboutContent section={section} aboutSectionSkills={aboutSectionSkills} />
    </SectionContainer>
  );
};

export default About;
