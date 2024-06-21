import { FC } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import SectionHeading from "../shared/section/SectionHeading";
import { getSectionData } from "@/sanity/utils/getSectionData";
import SectionContainer from "../shared/section/SectionContainer";
import ContactContent from "../shared/contact/ContactContent";

const Contact: FC = async () => {
  const section = await getSectionData("contact-section");

  return (
    <SectionContainer id="contact">
      <SectionHeading
        Icon={<MdOutlineMarkEmailRead className="h-10 w-10 text-primary" />}
        headingTitle={section.name}
      />
      <ContactContent section={section} />
    </SectionContainer>
  );
};

export default Contact;
