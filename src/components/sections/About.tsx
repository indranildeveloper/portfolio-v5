import { FC } from "react";
import Image from "next/image";
import { GraduationCap, Triangle } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const About: FC = () => {
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
          <p className="mb-4 text-gray-400">
            Hello My name is Indranil Halder and I enjoy building full stack web
            applications. I am writing code for 4+ years. I started my
            programming journey when I was in the First Year of my Graduation. I
            have completed my Graduation in Physics and Currently studying
            Masters Degree in Physics.
          </p>
          <p className="mb-4 text-gray-400">
            Programming is my hobby and passion. I am a self-taught developer
            and most of the things I have learnt is from Books or Internet,
            whether it is a Youtube Video or Some Udemy Courses or any other
            resources.
          </p>
          <p className="mb-4 text-gray-400">
            Fast forward to today I have worked on several technologies and I
            have built several projects. Currently I am working as the Frontend
            Developer at Private AI.
          </p>
          <p className="mb-4 text-gray-400">
            Recently I am getting very interested in Machine Learning and
            Artificial Intelligence and I am currently learning about it.
          </p>

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
