"use client";

import { FC } from "react";
import { ProjectsCardProps } from "@/interfaces/components/ProjectsCardProps";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { PortableText } from "next-sanity";
import { LuExternalLink, LuFolder } from "react-icons/lu";
import { buttonVariants } from "../ui/Button";
import { TbBrandGithub } from "react-icons/tb";
import { Badge } from "../ui/Badge";

const ProjectCard: FC<ProjectsCardProps> = ({ project }) => {
  return (
    <Card className="p-6">
      <CardHeader>
        <div className="mb-6 flex items-center justify-between">
          <LuFolder size={40} className="text-primary" />
          <div className="flex items-center gap-2">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:text-primary"
              >
                <TbBrandGithub size={24} />
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:text-primary"
              >
                <LuExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
        <CardTitle className="text-primary">{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="text-gray-400">
          <PortableText value={project.description} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="ghost">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
