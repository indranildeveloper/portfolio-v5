import { Variants } from "framer-motion";

export const heroContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 1.0,
      ease: "easeInOut",
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

export const heroItemVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};
