import { createClient, groq } from "next-sanity";
import { sanityClientConfig } from "../constants";
import { FeaturedProjectsInterface } from "@/interfaces/shared/FeaturedProjectsInterface";

export const getFeaturedProjects = async (): Promise<
  FeaturedProjectsInterface[]
> => {
  const client = createClient(sanityClientConfig);

  return client.fetch(
    groq`*[_type=="featured_project"]{
        _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        "image_alt": image.alt,
        description,
        technologies,
        github_url,
        live_url
    }`,
  );
};
