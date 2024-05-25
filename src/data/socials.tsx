import { v4 as uuidv4 } from "uuid";
import {
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { SocialsInterface } from "@/interfaces/data/SocialsInterface";

export const socials: SocialsInterface[] = [
  {
    id: uuidv4(),
    link: "https://github.com/indranildeveloper",
    icon: <FaGithub size={24} />,
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com/in/indranildeveloper",
    icon: <FaLinkedin size={24} />,
  },
  {
    id: uuidv4(),
    link: "https://twitter.com/indranilcoder",
    icon: <FaSquareXTwitter size={24} />,
  },
  {
    id: uuidv4(),
    link: "https://www.instagram.com/indranil__halder/",
    icon: <FaSquareInstagram size={24} />,
  },
];
