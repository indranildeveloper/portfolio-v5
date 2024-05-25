import { FC } from "react";
import { socials } from "@/data/socials";

const SocialLinks: FC = () => {
  return (
    <div className="my-2 flex items-center gap-2 md:hidden">
      {socials.map((item) => (
        <div key={item.id}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-primary"
          >
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
