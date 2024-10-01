import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../../ui/Button";
import { heroItemVariants } from "@/animations/heroVariants";
import CalendarModal from "../section/CalendarModal";

const CallToAction: FC = () => {
  return (
    <motion.div
      variants={heroItemVariants}
      className="mt-4 flex items-center justify-center gap-4 md:flex-row lg:justify-start"
    >
      <Button size="xl" variant="gradient">
        <Link
          href="/resume/resume.pdf"
          className="flex h-full w-full items-center justify-center"
          target="_blank"
        >
          Resume
        </Link>
      </Button>
      <CalendarModal containerId="hero" />
    </motion.div>
  );
};

export default CallToAction;
