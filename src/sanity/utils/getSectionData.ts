import { createClient, groq } from "next-sanity";
import { sanityClientConfig } from "../constants";
import { SectionDataInterface } from "@/interfaces/sanity/SectionDataInterface";

export const getSectionData = async (
  slug: string,
): Promise<SectionDataInterface> => {
  const client = createClient(sanityClientConfig);

  return client.fetch(
    groq`*[_type=="section" && slug.current==$slug][0]{
        _id,
        name,
        content
    }`,
    { slug },
  );
};
