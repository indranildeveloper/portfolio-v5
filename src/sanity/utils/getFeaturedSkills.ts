import { createClient, groq } from "next-sanity";
import { sanityClientConfig } from "../constants";

export const getFeaturedSkills = async () => {
  const client = createClient(sanityClientConfig);

  return client.fetch(
    groq`*[_type=="featured_skills"][0]{
        id,
        skills
    }`,
  );
};
