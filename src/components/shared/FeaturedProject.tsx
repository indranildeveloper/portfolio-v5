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
import { FeaturedProjectsProps } from "@/interfaces/components/FeaturedProjectsProps";

const FeaturedProject: FC<FeaturedProjectsProps> = ({ project }) => {
  return (
    <Card className="p-6">
      <div className="">
        <Image
          src={project.image}
          alt={project.image_alt}
          width={1280}
          height={720}
          className="h-full rounded-md"
        />
      </div>
      <div className="mt-6">
        <p className="mb-2 font-mono text-sm text-primary">Featured Project</p>
        <CardHeader className="flex flex-col gap-2">
          <CardTitle className="text-gray-300">{project.name}</CardTitle>
          <CardDescription>
            <PortableText value={project.description} />
          </CardDescription>
        </CardHeader>
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
            >
              <TbBrandGithub size={24} />
            </a>
            <a
              href={project.live_url}
              className="transition-all hover:text-primary"
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
