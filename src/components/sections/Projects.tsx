import { FC } from "react";
import { Code2 } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { getProjects } from "@/sanity/utils/getProjects";
import ProjectCard from "../shared/ProjectCard";

const Projects: FC = async () => {
  const projects = await getProjects();

  return (
    <section
      id="projects"
      className="flex flex-col justify-center lg:min-h-screen lg:pt-0"
    >
      <SectionHeading
        Icon={<Code2 className="h-10 w-10 text-primary" />}
        headingTitle={"Other Noteworthy Projects"}
      />

      <div className="mt-8 grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
