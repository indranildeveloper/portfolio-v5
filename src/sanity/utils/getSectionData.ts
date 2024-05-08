import { createClient, groq } from "next-sanity";
import { sanityClientConfig } from "../constants";

export const getAboutSectionData = async (slug: string) => {
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
