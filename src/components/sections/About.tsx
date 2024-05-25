import { FC } from "react";
import Image from "next/image";
import { GraduationCap, Triangle } from "lucide-react";
import { PortableText } from "next-sanity";
import SectionHeading from "../shared/section/SectionHeading";
import { getSectionData } from "@/sanity/utils/getSectionData";
import { getFeaturedSkills } from "@/sanity/utils/getFeaturedSkills";
import { FeaturedSkillInterface } from "@/interfaces/shared/FeaturedSkillInterface";
import SectionContainer from "../shared/section/SectionContainer";

const About: FC = async () => {
  const section = await getSectionData("about-section");
  const aboutSectionSkills = await getFeaturedSkills();

  return (
    <SectionContainer id="about">
      <SectionHeading
        Icon={<GraduationCap className="h-10 w-10 text-primary" />}
        headingTitle={section.name}
      />

      <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
        <div className="">
          <div className="mb-4 flex flex-col gap-4 text-gray-400">
            <PortableText value={section.content} />
          </div>

          <div className="text-gray-400">
            <p>Here are few technologies I have been working with recently:</p>
            <div className="mt-4 grid grid-cols-2 gap-2 p-4">
              {aboutSectionSkills.skills.map((item: FeaturedSkillInterface) => (
                <p
                  key={item.id}
                  className="flex items-center gap-2 font-mono text-sm"
                >
                  <Triangle className="h-3 w-3 rotate-90 fill-primary text-primary" />{" "}
                  {item.skill}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Image
            src="/about.jpg"
            alt="Indranil Halder"
            className="rounded-md shadow-lg shadow-primary"
            height={900}
            width={800}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
