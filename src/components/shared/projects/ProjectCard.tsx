"use client";

import { FC } from "react";
import { ProjectsCardProps } from "@/interfaces/components/ProjectsCardProps";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card";
import { PortableText } from "next-sanity";
import { LuExternalLink, LuFolder } from "react-icons/lu";
import { TbBrandGithub } from "react-icons/tb";
import { Badge } from "../../ui/Badge";

const ProjectCard: FC<ProjectsCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col justify-between p-6 shadow-xl">
      <CardHeader>
        <div>
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
          <CardTitle className="mb-2 text-primary">{project.name}</CardTitle>
        </div>
        <div className="text-sm">
          <PortableText value={project.description} />
        </div>
      </CardHeader>
      <CardContent className="mt-4 flex flex-col gap-4">
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
