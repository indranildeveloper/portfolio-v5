import { socials } from "@/data/socials";

const Socials = () => {
  return (
    <div className="fixed bottom-0 left-10 hidden flex-col items-center gap-4 md:flex">
      <div className="flex flex-col gap-4">
        {socials.map((item) => (
          <div key={item.id}>
            <a
              href={item.link}
              className="transition-all duration-300 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </div>
        ))}
      </div>
      <div className="h-40 w-[1px] bg-gray-400" />
    </div>
  );
};

export default Socials;
