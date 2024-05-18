import { PortableTextBlock } from "next-sanity";

export interface FeaturedProjectsInterface {
  _id: string;
  name: string;
  slug: string;
  image: string;
  image_alt: string;
  description: PortableTextBlock;
  technologies: string[];
  github_url: string;
  live_url: string;
}
