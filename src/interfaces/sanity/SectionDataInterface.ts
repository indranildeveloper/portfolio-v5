import { PortableTextBlock } from "next-sanity";

export interface SectionDataInterface {
  _id: string;
  name: string;
  content: PortableTextBlock[];
}
