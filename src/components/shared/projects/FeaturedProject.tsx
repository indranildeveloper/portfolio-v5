"use client";

import { FC } from "react";
import { ExternalLink } from "lucide-react";
import { TbBrandGithub } from "react-icons/tb";
import Image from "next/image";
import { PortableText } from "next-sanity";
import {
  MotionCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { FeaturedProjectsProps } from "@/interfaces/components/FeaturedProjectsProps";
import { projectVariants } from "@/animations/projectVariants";

const FeaturedProject: FC<FeaturedProjectsProps> = ({ project }) => {
  return (
    <MotionCard
      variants={projectVariants}
      className="flex flex-col p-6 shadow-xl"
    >
      <div>
        <Image
          src={project.image}
          alt={project.image_alt}
          width={1280}
          height={720}
          className="h-full rounded-md"
        />
      </div>

      <div className="flex flex-grow flex-col justify-between">
        <div className="mt-6">
          <p className="mb-2 font-mono text-sm text-primary">
            Featured Project
          </p>
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>
              <PortableText value={project.description} />
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.map((item: string) => (
              <Badge key={item} variant="ghost">
                {item}
              </Badge>
            ))}
          </div>
          <CardFooter className="mt-4 flex items-center gap-3 p-0">
            <a
              href={project.github_url}
              className="transition-all hover:text-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              <TbBrandGithub size={24} />
            </a>
            <a
              href={project.live_url}
              className="transition-all hover:text-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ExternalLink />
            </a>
          </CardFooter>
        </CardContent>
      </div>
    </MotionCard>
  );
};

export default FeaturedProject;
