import { FC } from "react";
import { Code2 } from "lucide-react";
import { getProjects } from "@/sanity/utils/getProjects";
import SectionHeading from "../shared/section/SectionHeading";
import SectionContainer from "../shared/section/SectionContainer";
import ProjectsContent from "../shared/projects/ProjectsContent";

const Projects: FC = async () => {
  const projects = await getProjects();

  return (
    <SectionContainer id="extra-projects">
      <SectionHeading
        Icon={<Code2 className="h-10 w-10 text-primary" />}
        headingTitle={"Other Noteworthy Projects"}
      />

      <ProjectsContent projects={projects} />
    </SectionContainer>
  );
};

export default Projects;
