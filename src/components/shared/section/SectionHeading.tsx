"use client";

import { FC, ReactNode } from "react";

interface SectionHeadingProps {
  Icon: ReactNode;
  headingTitle: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ Icon, headingTitle }) => {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div className="flex flex-1 items-center gap-2 md:flex-shrink-0 md:flex-grow-0">
        <span>{Icon}</span>
        <h2 className="text-wrap text-xl font-bold text-slate-700 dark:text-slate-300 md:text-nowrap md:text-3xl">
          {headingTitle}
        </h2>
      </div>
      <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-primary to-indigo-600" />
    </div>
  );
};

export default SectionHeading;
