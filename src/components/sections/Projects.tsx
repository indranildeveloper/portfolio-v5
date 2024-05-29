import { FC } from "react";
import { Code2 } from "lucide-react";
import SectionHeading from "../shared/section/SectionHeading";
import { getProjects } from "@/sanity/utils/getProjects";
import ProjectCard from "../shared/projects/ProjectCard";
import SectionContainer from "../shared/section/SectionContainer";

const Projects: FC = async () => {
  const projects = await getProjects();

  return (
    <SectionContainer id="extra-projects">
      <SectionHeading
        Icon={<Code2 className="h-10 w-10 text-primary" />}
        headingTitle={"Other Noteworthy Projects"}
      />

      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
