import { ReactNode } from "react";

export interface SkillCardProps {
  skillItem: {
    id: string;
    title: string;
    icon: ReactNode;
  };
}
