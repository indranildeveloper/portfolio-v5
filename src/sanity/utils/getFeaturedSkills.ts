import { createClient, groq } from "next-sanity";
import { sanityClientConfig } from "../constants";
import { FeaturedSkillsInterface } from "@/interfaces/sanity/FeaturedSkillsInterface";

export const getFeaturedSkills = async (): Promise<FeaturedSkillsInterface> => {
  const client = createClient(sanityClientConfig);

  return client.fetch(
    groq`*[_type=="featured_skills"][0]{
        id,
        skills
    }`,
  );
};
