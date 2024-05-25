"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { PopupModal } from "react-calendly";
import { Button } from "../../ui/Button";

const CallToAction: FC = () => {
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

  // TODO: Make more components

  return (
    isDocumentMounted && (
      <div className="mt-4 flex items-center justify-center gap-4 md:flex-row lg:justify-start">
        <Button size="xl">
          <Link
            href="/resume/resume.pdf"
            className="flex h-full w-full items-center justify-center"
            target="_blank"
          >
            Resume
          </Link>
        </Button>
        <Button size="xl" onClick={handleOpenModal}>
          Schedule Call
        </Button>
        <PopupModal
          url="https://calendly.com/indranilhalder-dev"
          rootElement={document.getElementById("hero") as HTMLElement}
          onModalClose={handleCloseModal}
          open={isModalOpen}
        />
      </div>
    )
  );
};

export default CallToAction;
