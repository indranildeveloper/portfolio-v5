import { PortableTextBlock } from "next-sanity";

export interface ExperienceInterface {
  _id: string;
  serial_number: number;
  slug: string;
  url: string;
  description: string;
  timeline: string;
  achievements: PortableTextBlock[];
  work_place: string;
  position: string;
}
