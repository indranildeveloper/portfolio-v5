import { FC } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import SectionHeading from "../shared/section/SectionHeading";
import { getSectionData } from "@/sanity/utils/getSectionData";
import { PortableText } from "next-sanity";
import ContactDetails from "../shared/contact/ContactDetails";
import ContactForm from "../shared/contact/ContactForm";
import SectionContainer from "../shared/section/SectionContainer";

const Contact: FC = async () => {
  const section = await getSectionData("contact-section");

  return (
    <SectionContainer id="contact">
      <SectionHeading
        Icon={<MdOutlineMarkEmailRead className="h-10 w-10 text-primary" />}
        headingTitle={section.name}
      />

      <div className="mt-8">
        <div className="text-gray-400">
          <PortableText value={section.content} />
        </div>

        <div className="mt-6 flex flex-col items-start gap-8 md:flex-row">
          <ContactDetails />
          <div className="flex-grow-1 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
