import { v4 as uuidv4 } from "uuid";
import { NavItemInterface } from "@/interfaces/data/NavItemsInterface";

export const navItems: Array<NavItemInterface> = [
  {
    id: uuidv4(),
    title: "About",
  },
  {
    id: uuidv4(),
    title: "Experience",
  },
  {
    id: uuidv4(),
    title: "Work",
  },
  {
    id: uuidv4(),
    title: "Contact",
  },
];
