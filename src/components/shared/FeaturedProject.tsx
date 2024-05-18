"use client";

import { FC } from "react";
import { ExternalLink } from "lucide-react";
import { TbBrandGithub } from "react-icons/tb";
import Image from "next/image";
import { PortableText } from "next-sanity";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Badge } from "../ui/Badge";
import { buttonVariants } from "../ui/Button";
import { FeaturedProjectsProps } from "@/interfaces/components/FeaturedProjectsProps";

const FeaturedProject: FC<FeaturedProjectsProps> = ({ project }) => {
  return (
    <Card className="flex p-6">
      <div className="relative w-[1000px]">
        <Image
          src={project.image}
          alt={project.image_alt}
          fill
          className="absolute bottom-0 left-0 right-0 top-0 h-full rounded-md"
        />
      </div>
      <div>
        <p className="px-6 font-mono text-sm text-primary">Featured Project</p>
        <CardHeader>
          <CardTitle className="text-gray-300">{project.name}</CardTitle>
          <CardDescription>
            <PortableText value={project.description} />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {project.technologies.map((item: string) => (
              <Badge key={item} variant="default">
                {item}
              </Badge>
            ))}
          </div>
          <CardFooter className="mt-4 flex gap-2 p-0">
            <a
              href={project.github_url}
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
            >
              <TbBrandGithub size={24} />
            </a>
            <a
              href={project.live_url}
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
            >
              <ExternalLink />
            </a>
          </CardFooter>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeaturedProject;
