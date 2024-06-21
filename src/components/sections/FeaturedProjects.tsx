import { FC } from "react";
import SectionHeading from "../shared/section/SectionHeading";
import { Laptop2 } from "lucide-react";
import { getFeaturedProjects } from "@/sanity/utils/getFeaturedProjects";
import SectionContainer from "../shared/section/SectionContainer";
import FeaturedProjectContent from "../shared/projects/FeaturedProjectsContent";

const FeaturedProjects: FC = async () => {
  const featuredProjects = await getFeaturedProjects();

  return (
    <SectionContainer id="projects">
      <SectionHeading
        Icon={<Laptop2 className="h-10 w-10 text-primary" />}
        headingTitle={"Featured Projects"}
      />

      <FeaturedProjectContent featuredProjects={featuredProjects} />
    </SectionContainer>
  );
};

export default FeaturedProjects;
