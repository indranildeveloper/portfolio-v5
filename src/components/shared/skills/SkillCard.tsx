import { FC } from "react";
import { SkillCardProps } from "@/interfaces/components/SkillCardProps";
import { MotionCard, CardHeader, CardTitle } from "../../ui/Card";
import { skillsVariants } from "@/animations/skillVariants";

const SkillCard: FC<SkillCardProps> = ({ skillItem }) => {
  return (
    <MotionCard
      variants={skillsVariants}
      className="flex flex-col items-center justify-center gap-4 p-8 shadow-xl"
    >
      <div>{skillItem.icon}</div>
      <CardHeader>
        <CardTitle className="text-lg">{skillItem.title}</CardTitle>
      </CardHeader>
    </MotionCard>
  );
};

export default SkillCard;
