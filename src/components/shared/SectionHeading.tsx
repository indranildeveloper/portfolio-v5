"use client";

import { FC, ReactNode } from "react";

interface SectionHeadingProps {
  Icon: ReactNode;
  headingTitle: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ Icon, headingTitle }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        {Icon}
        <h2 className="text-3xl font-bold">{headingTitle}</h2>
      </div>
      <div className="mt-2 h-2 w-96 min-w-full rounded-full bg-gradient-to-r from-primary to-indigo-600" />
    </div>
  );
};
export default SectionHeading;
