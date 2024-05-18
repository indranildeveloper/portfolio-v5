import { FC } from "react";
import SectionHeading from "../shared/SectionHeading";
import { Laptop2 } from "lucide-react";
import { getFeaturedProjects } from "@/sanity/utils/getFeaturedProjects";
import FeaturedProject from "../shared/FeaturedProject";

const Projects: FC = async () => {
  const featuredProjects = await getFeaturedProjects();

  return (
    <section
      id="projects"
      className="flex flex-col justify-center lg:min-h-screen lg:pt-0"
    >
      <SectionHeading
        Icon={<Laptop2 className="h-10 w-10 text-primary" />}
        headingTitle={"Featured Projects"}
      />

      <div className="mt-8 flex flex-col gap-4">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
