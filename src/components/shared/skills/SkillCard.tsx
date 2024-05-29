import { FC } from "react";
import { SkillCardProps } from "@/interfaces/components/SkillCardProps";
import { Card, CardHeader, CardTitle } from "../../ui/Card";

const SkillCard: FC<SkillCardProps> = ({ skillItem }) => {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 p-8 shadow-xl">
      <div className="">{skillItem.icon}</div>
      <CardHeader>
        <CardTitle className="">{skillItem.title}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default SkillCard;
