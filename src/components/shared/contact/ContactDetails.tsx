import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import SocialLinks from "./SocialLinks";
import CalendarModal from "../section/CalendarModal";

const ContactDetails: FC = () => {
  return (
    <div>
      <h2 className="text-2xl">Connect With Me</h2>
      <div className="mt-4 flex flex-col gap-4">
        <a
          href="tel:+916294716288"
          className="flex items-center gap-2 transition-all duration-300 hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} /> <span>+91 6294716288</span>
        </a>
        <a
          href="mailto:indranilhalder.dev@gmail.com"
          className="flex items-center gap-2 transition-all duration-300 hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineMarkEmailRead size={24} />{" "}
          <span>indranilhalder.dev@gmail.com</span>
        </a>
        <SocialLinks />
        <div>
          <CalendarModal containerId="contact" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
