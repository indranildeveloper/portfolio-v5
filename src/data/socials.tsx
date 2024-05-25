import { v4 as uuidv4 } from "uuid";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
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
    icon: <FaXTwitter size={24} />,
  },
  {
    id: uuidv4(),
    link: "https://www.instagram.com/indranil__halder/",
    icon: <FaInstagram size={24} />,
  },
];
