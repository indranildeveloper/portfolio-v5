import { FC } from "react";
import SectionHeading from "../shared/section/SectionHeading";
import { Laptop2 } from "lucide-react";
import { getFeaturedProjects } from "@/sanity/utils/getFeaturedProjects";
import FeaturedProject from "../shared/projects/FeaturedProject";
import SectionContainer from "../shared/section/SectionContainer";

const FeaturedProjects: FC = async () => {
  const featuredProjects = await getFeaturedProjects();

  return (
    <SectionContainer id="projects">
      <SectionHeading
        Icon={<Laptop2 className="h-10 w-10 text-primary" />}
        headingTitle={"Featured Projects"}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project._id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedProjects;
