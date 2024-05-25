"use client";

import { FC, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Button } from "../../ui/Button";
import { PopupModal } from "react-calendly";
import SocialLinks from "./SocialLinks";

const ContactDetails: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDocumentMounted, setIsDocumentMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsDocumentMounted(true);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    isDocumentMounted && (
      <div>
        <h2 className="text-2xl">Connect With Me</h2>
        <div className="mt-4 flex flex-col gap-4">
          <p className="flex items-center gap-2">
            <FaWhatsapp size={24} /> <span>+91 6294716288</span>
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineMarkEmailRead size={24} />{" "}
            <span>
              <a href="#">indranilhalder.dev@gmail.com</a>
            </span>
          </p>
          <SocialLinks />
          <div>
            <Button size="xl" onClick={handleOpenModal}>
              Schedule Call
            </Button>
            <PopupModal
              url="https://calendly.com/indranilhalder-dev"
              rootElement={document.getElementById("contact") as HTMLElement}
              onModalClose={handleCloseModal}
              open={isModalOpen}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ContactDetails;
