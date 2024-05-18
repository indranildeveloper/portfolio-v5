import { createClient, groq } from "next-sanity";
import { sanityClientConfig } from "../constants";
import { ProjectsInterface } from "@/interfaces/shared/ProjectsInterface";

export const getProjects = async (): Promise<ProjectsInterface[]> => {
  const client = createClient(sanityClientConfig);

  return client.fetch(
    groq`*[_type=="project"]{
        _id,
        name,
        "slug": slug.current,
        description,
        technologies,
        github_url,
        live_url
    }`,
  );
};
