import { Variants } from "framer-motion";

export const navVariants: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
      ease: "easeInOut",
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

export const headerVariants: Variants = {
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

export const navItemContainerVariants: Variants = {
  hidden: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

export const navItemVariants: Variants = {
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

export const navItemMobileVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hidden: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.2 },
  },
};
