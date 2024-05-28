import { FC } from "react";
import { SectionContainerProps } from "@/interfaces/components/SectionContainerProps";

const SectionContainer: FC<SectionContainerProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="mb-20 flex max-h-fit min-h-screen flex-col justify-center"
    >
      {children}
    </section>
  );
};

export default SectionContainer;
