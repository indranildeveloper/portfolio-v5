import { FC } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import SectionHeading from "../shared/section/SectionHeading";
import { getSectionData } from "@/sanity/utils/getSectionData";
import { PortableText } from "next-sanity";
import ContactDetails from "../shared/contact/ContactDetails";
import ContactForm from "../shared/contact/ContactForm";
import SectionContainer from "../shared/section/SectionContainer";
import MapContainer from "../shared/contact/MapContainer";
import { Separator } from "../ui/Separator";

const Contact: FC = async () => {
  const section = await getSectionData("contact-section");

  return (
    <SectionContainer id="contact">
      <SectionHeading
        Icon={<MdOutlineMarkEmailRead className="h-10 w-10 text-primary" />}
        headingTitle={section.name}
      />

      <div>
        <div className="">
          <PortableText value={section.content} />
        </div>

        <div className="mt-6 flex flex-col items-center gap-8 md:flex-row">
          <MapContainer />
          <div className="flex-grow-1 flex w-full flex-col gap-4">
            <ContactDetails />
            <Separator />
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
