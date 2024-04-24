"use client";

import { FC, useEffect, useState } from "react";
import { MotionButton } from "../ui/Button";
import Link from "next/link";
import { PopupModal } from "react-calendly";

const CallToAction: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    isMounted && (
      <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-start">
        <MotionButton
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            bounce: 0.7,
            duration: 0.6,
          }}
          variant="gradient"
          size="xl"
        >
          <Link
            href="/resume/resume.pdf"
            className="flex h-full w-full items-center justify-center"
            target="_blank"
          >
            Resume
          </Link>
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            bounce: 0.7,
            duration: 0.6,
          }}
          variant="gradient"
          size="xl"
          className="to-violet-600"
          onClick={handleOpenModal}
        >
          Schedule Call
        </MotionButton>
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
