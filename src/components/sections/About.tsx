import { FC } from "react";
import Image from "next/image";
import { GraduationCap, Triangle } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { getAboutSectionData } from "@/sanity/utils/getSectionData";
import { PortableText } from "next-sanity";

const About: FC = async () => {
  const aboutSectionContent = await getAboutSectionData("about-section");

  return (
    <section
      id="about"
      className="mt-40 flex h-screen flex-col justify-center gap-8 lg:min-h-screen lg:pt-0"
    >
      <SectionHeading
        Icon={<GraduationCap className="h-10 w-10 text-primary" />}
        headingTitle="About Me"
      />

      <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
        <div className="">
          <div className="mb-4 flex flex-col gap-4 text-gray-400">
            <PortableText value={aboutSectionContent.content} />
          </div>

          <div className="text-gray-400">
            <p>Here are few technologies I have been working with recently:</p>
            <div className="grid grid-cols-2 gap-2 p-4">
              <span className="flex items-center gap-2">
                <Triangle className="h-4 w-4 rotate-90 fill-primary text-primary" />{" "}
                React
              </span>
              <span className="flex items-center gap-2">
                <Triangle className="h-4 w-4 rotate-90 fill-primary text-primary" />{" "}
                React
              </span>
              <span className="flex items-center gap-2">
                <Triangle className="h-4 w-4 rotate-90 fill-primary text-primary" />{" "}
                React
              </span>
              <span className="flex items-center gap-2">
                <Triangle className="h-4 w-4 rotate-90 fill-primary text-primary" />{" "}
                React
              </span>
              <span className="flex items-center gap-2">
                <Triangle className="h-4 w-4 rotate-90 fill-primary text-primary" />{" "}
                React
              </span>
              <span className="flex items-center gap-2">
                <Triangle className="h-4 w-4 rotate-90 fill-primary text-primary" />{" "}
                React
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-end">
          <Image
            src="/about.jpg"
            alt="Indranil Halder"
            className="rounded-md shadow-lg shadow-primary"
            height={600}
            width={800}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
