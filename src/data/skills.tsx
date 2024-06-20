import { v4 as uuidv4 } from "uuid";
import {
  SiAmazonaws,
  SiApollographql,
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGatsby,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSanity,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { FaSass } from "react-icons/fa6";

export const skills = [
  {
    id: uuidv4(),
    groupName: "Frontend",
    skills: [
      {
        id: uuidv4(),
        title: "JavaScript",
        icon: <SiJavascript size={40} />,
      },
      {
        id: uuidv4(),
        title: "TypeScript",
        icon: <SiTypescript size={40} />,
      },
      {
        id: uuidv4(),
        title: "React",
        icon: <SiReact size={40} />,
      },
      {
        id: uuidv4(),
        title: "Redux",
        icon: <SiRedux size={40} />,
      },
      {
        id: uuidv4(),
        title: "NextJS",
        icon: <SiNextdotjs size={40} />,
      },
      {
        id: uuidv4(),
        title: "GatsbyJS",
        icon: <SiGatsby size={40} />,
      },
      {
        id: uuidv4(),
        title: "React Query",
        icon: <SiReactquery size={40} />,
      },
      {
        id: uuidv4(),
        title: "Apollo Client",
        icon: <SiApollographql size={40} />,
      },
      {
        id: uuidv4(),
        title: "TailwindCSS",
        icon: <SiTailwindcss size={40} />,
      },
      {
        id: uuidv4(),
        title: "Material UI",
        icon: <SiMui size={40} />,
      },
      {
        id: uuidv4(),
        title: "Bootstrap",
        icon: <SiBootstrap size={40} />,
      },
      {
        id: uuidv4(),
        title: "SASS",
        icon: <FaSass size={40} />,
      },
      {
        id: uuidv4(),
        title: "HTML",
        icon: <SiHtml5 size={40} />,
      },
      {
        id: uuidv4(),
        title: "CSS 3",
        icon: <SiCss3 size={40} />,
      },
    ],
  },
  {
    id: uuidv4(),
    groupName: "Backend",
    skills: [
      {
        id: uuidv4(),
        title: "NodeJS",
        icon: <SiNodedotjs size={40} />,
      },
      {
        id: uuidv4(),
        title: "Express",
        icon: <SiExpress size={40} />,
      },
      {
        id: uuidv4(),
        title: "GraphQL",
        icon: <SiGraphql size={40} />,
      },
      {
        id: uuidv4(),
        title: "Python",
        icon: <SiPython size={40} />,
      },
      {
        id: uuidv4(),
        title: "Django",
        icon: <SiDjango size={40} />,
      },
      {
        id: uuidv4(),
        title: "Fastapi",
        icon: <SiFastapi size={40} />,
      },
      {
        id: uuidv4(),
        title: "Strapi",
        icon: <SiStrapi size={40} />,
      },
      {
        id: uuidv4(),
        title: "Wordpress",
        icon: <SiWordpress size={40} />,
      },
      {
        id: uuidv4(),
        title: "Sanity CMS",
        icon: <SiSanity size={40} />,
      },
    ],
  },
  {
    id: uuidv4(),
    groupName: "Databases",
    skills: [
      {
        id: uuidv4(),
        title: "MongoDB",
        icon: <SiMongodb size={40} />,
      },
      {
        id: uuidv4(),
        title: "MySQL",
        icon: <SiMysql size={40} />,
      },
      {
        id: uuidv4(),
        title: "PostgreSQL",
        icon: <SiPostgresql size={40} />,
      },
    ],
  },
  {
    id: uuidv4(),
    groupName: "Infrastructure",
    skills: [
      {
        id: uuidv4(),
        title: "Docker",
        icon: <SiDocker size={40} />,
      },
      {
        id: uuidv4(),
        title: "Kubernetes",
        icon: <SiKubernetes size={40} />,
      },
      {
        id: uuidv4(),
        title: "Azure",
        icon: <SiMicrosoftazure size={40} />,
      },
      {
        id: uuidv4(),
        title: "AWS",
        icon: <SiAmazonaws size={40} />,
      },
    ],
  },
];
