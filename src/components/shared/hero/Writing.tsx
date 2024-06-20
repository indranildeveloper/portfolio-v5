import { FC } from "react";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { heroItemVariants } from "@/animations/heroVariants";

const Writing: FC = () => {
  return (
    <motion.div
      variants={heroItemVariants}
      className="my-4 font-mono text-primary lg:text-xl"
    >
      <TypewriterComponent
        options={{
          strings: [
            "I build Single Page Applications.",
            "I build Mobile Applications.",
            "I build Full Stack Applications.",
            "I build Web3 Applications.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </motion.div>
  );
};

export default Writing;
