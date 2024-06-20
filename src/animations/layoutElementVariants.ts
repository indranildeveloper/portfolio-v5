import { Variants } from "framer-motion";

export const layoutElementVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.0,
      ease: "easeIn",
    },
  },
};
