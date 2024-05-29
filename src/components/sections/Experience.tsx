import { FC } from "react";
import { Laptop2, Triangle } from "lucide-react";
import { TbExternalLink } from "react-icons/tb";
import { PortableText } from "next-sanity";
import SectionHeading from "../shared/section/SectionHeading";
import { getExperiences } from "@/sanity/utils/getExperiences";
import { getSectionData } from "@/sanity/utils/getSectionData";
import SectionContainer from "../shared/section/SectionContainer";

const Experience: FC = async () => {
  const experienceData = await getExperiences();
  const section = await getSectionData("experience");

  return (
    <SectionContainer id="experience">
      <SectionHeading
        Icon={<Laptop2 className="h-10 w-10 text-primary" />}
        headingTitle={section.name}
      />

      <div className="flex flex-col gap-6">
        {experienceData.map((experience) => (
          <div key={experience._id} className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold ">{experience.position}</h2>
            <a
              href={experience.url}
              className="flex items-center gap-1 text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{experience.work_place}</span>
              <TbExternalLink />
            </a>
            <p className="text-sm ">{experience.description}</p>
            <p className="font-mono text-sm ">{experience.timeline}</p>
            <div className="w-full">
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
                      <li className="flex items-start gap-2 ">
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
    </SectionContainer>
  );
};

export default Experience;
