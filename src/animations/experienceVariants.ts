import { Variants } from "framer-motion";

export const experienceVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};
