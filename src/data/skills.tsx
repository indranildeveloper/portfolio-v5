import { v4 as uuidv4 } from "uuid";
import {
  SiAmazonaws,
  SiApollographql,
  SiAwsamplify,
  SiAzurepipelines,
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
        icon: <SiJavascript size={50} />,
      },
      {
        id: uuidv4(),
        title: "TypeScript",
        icon: <SiTypescript size={50} />,
      },
      {
        id: uuidv4(),
        title: "React",
        icon: <SiReact size={50} />,
      },
      {
        id: uuidv4(),
        title: "Redux",
        icon: <SiRedux size={50} />,
      },
      {
        id: uuidv4(),
        title: "NextJS",
        icon: <SiNextdotjs size={50} />,
      },
      {
        id: uuidv4(),
        title: "GatsbyJS",
        icon: <SiGatsby size={50} />,
      },
      {
        id: uuidv4(),
        title: "React Query",
        icon: <SiReactquery size={50} />,
      },
      {
        id: uuidv4(),
        title: "Apollo Client",
        icon: <SiApollographql size={50} />,
      },
      {
        id: uuidv4(),
        title: "TailwindCSS",
        icon: <SiTailwindcss size={50} />,
      },
      {
        id: uuidv4(),
        title: "Material UI",
        icon: <SiMui size={50} />,
      },
      {
        id: uuidv4(),
        title: "Bootstrap",
        icon: <SiBootstrap size={50} />,
      },
      {
        id: uuidv4(),
        title: "SASS",
        icon: <FaSass size={50} />,
      },
      {
        id: uuidv4(),
        title: "HTML",
        icon: <SiHtml5 size={50} />,
      },
      {
        id: uuidv4(),
        title: "CSS 3",
        icon: <SiCss3 size={50} />,
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
        icon: <SiNodedotjs size={50} />,
      },
      {
        id: uuidv4(),
        title: "Express",
        icon: <SiExpress size={50} />,
      },
      {
        id: uuidv4(),
        title: "GraphQL",
        icon: <SiGraphql size={50} />,
      },
      {
        id: uuidv4(),
        title: "Python",
        icon: <SiPython size={50} />,
      },
      {
        id: uuidv4(),
        title: "Django",
        icon: <SiDjango size={50} />,
      },
      {
        id: uuidv4(),
        title: "Fastapi",
        icon: <SiFastapi size={50} />,
      },
      {
        id: uuidv4(),
        title: "Strapi",
        icon: <SiStrapi size={50} />,
      },
      {
        id: uuidv4(),
        title: "Wordpress",
        icon: <SiWordpress size={50} />,
      },
      {
        id: uuidv4(),
        title: "Sanity CMS",
        icon: <SiSanity size={50} />,
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
        icon: <SiMongodb size={50} />,
      },
      {
        id: uuidv4(),
        title: "MySQL",
        icon: <SiMysql size={50} />,
      },
      {
        id: uuidv4(),
        title: "PostgreSQL",
        icon: <SiPostgresql size={50} />,
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
        icon: <SiDocker size={50} />,
      },
      {
        id: uuidv4(),
        title: "Kubernetes",
        icon: <SiKubernetes size={50} />,
      },
      {
        id: uuidv4(),
        title: "Azure",
        icon: <SiMicrosoftazure size={50} />,
      },
      {
        id: uuidv4(),
        title: "AWS",
        icon: <SiAmazonaws size={50} />,
      },
    ],
  },
];
