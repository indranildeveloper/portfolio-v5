import { FC } from "react";
import SectionHeading from "../shared/section/SectionHeading";
import { Laptop2 } from "lucide-react";
import { getFeaturedProjects } from "@/sanity/utils/getFeaturedProjects";
import FeaturedProject from "../shared/projects/FeaturedProject";

const FeaturedProjects: FC = async () => {
  const featuredProjects = await getFeaturedProjects();

  return (
    <section id="featured-projects" className="flex flex-col justify-center">
      <SectionHeading
        Icon={<Laptop2 className="h-10 w-10 text-primary" />}
        headingTitle={"Featured Projects"}
      />

      <div className="mt-8 grid grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
