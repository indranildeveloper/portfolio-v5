import { PortableTextBlock } from "next-sanity";

export interface ProjectsInterface {
  _id: string;
  description: PortableTextBlock;
  technologies: string[];
  github_url: string;
  live_url: string;
  name: string;
  slug: string;
}
