import { createClient, groq } from "next-sanity";
import { sanityClientConfig } from "../constants";
import { ExperienceInterface } from "@/interfaces/shared/ExperienceInterface";

export const getExperiences = async (): Promise<ExperienceInterface[]> => {
  const client = createClient(sanityClientConfig);

  return client.fetch(
    groq`*[_type=="experience"]{
        _id,
        work_place,
        position,
        "slug": slug.current,
        url,
        description,
        timeline,
        achievements
    }`,
  );
};
