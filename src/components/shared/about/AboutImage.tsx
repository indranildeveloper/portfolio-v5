import Image from "next/image";
import { motion } from "framer-motion";
import { aboutVariants } from "@/animations/aboutVariants";

const AboutImage = () => {
  return (
    <motion.div variants={aboutVariants} className="flex justify-end">
      <Image
        src="/about.jpg"
        alt="Indranil Halder"
        className="rounded-md shadow-lg shadow-primary"
        height={900}
        width={800}
      />
    </motion.div>
  );
};

export default AboutImage;
