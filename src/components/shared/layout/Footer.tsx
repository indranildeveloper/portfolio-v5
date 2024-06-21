"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { footerVariants } from "@/animations/footerVariants";

const Footer: FC = () => {
  return (
    <motion.footer
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
      className="mt-20 h-40"
    >
      <motion.div
        variants={footerVariants}
        className="flex h-full flex-col items-center justify-center gap-2 text-sm"
      >
        <a
          href="https://github.com/indranildeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono transition-all duration-300 hover:text-primary"
        >
          Designed and Developed by Indranil Halder
        </a>
        <p className="font-mono">Copyright &copy; {new Date().getFullYear()}</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
