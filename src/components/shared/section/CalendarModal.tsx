"use client";

import { FC, useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { CalendarModalProps } from "@/interfaces/components/CalendarModalProps";
import { Button } from "@/components/ui/Button";

const CalendarModal: FC<CalendarModalProps> = ({ containerId }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
      <>
        <Button size="xl" onClick={handleOpenModal}>
          Schedule Call
        </Button>
        <PopupModal
          url="https://calendly.com/indranilhalder-dev"
          rootElement={document.getElementById(containerId) as HTMLElement}
          onModalClose={handleCloseModal}
          open={isModalOpen}
        />
      </>
    )
  );
};

export default CalendarModal;
