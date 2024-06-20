"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { layoutElementVariants } from "@/animations/layoutElementVariants";

const Email: FC = () => {
  return (
    <motion.div
      variants={layoutElementVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-0 right-10 hidden flex-col items-center gap-4 md:flex"
    >
      <div className="flex flex-col gap-4">
        <a
          href="mailto:indranilhalder.dev@gmail.com"
          className="email font-mono text-sm transition-all duration-300 hover:text-primary "
          target="_blank"
          rel="noopener noreferrer"
        >
          indranilhalder.dev@gmail.com
        </a>
      </div>
      <div className="h-40 w-[1px] bg-gray-400" />
    </motion.div>
  );
};

export default Email;
