"use client";

import { FC } from "react";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/Separator";
import MapContainer from "./MapContainer";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { ContactContentProps } from "@/interfaces/components/ContactContentProps";
import { contactVariants } from "@/animations/contactVariants";

const ContactContent: FC<ContactContentProps> = ({ section }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.05 }}
    >
      <motion.div variants={contactVariants}>
        <PortableText value={section.content} />
      </motion.div>

      <div className="mt-6 flex flex-col items-center gap-8 md:flex-row">
        <MapContainer />
        <motion.div
          variants={contactVariants}
          className="flex-grow-1 flex w-full flex-col gap-4"
        >
          <ContactDetails />
          <Separator />
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactContent;
