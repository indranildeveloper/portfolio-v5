import { FC } from "react";

const Email: FC = () => {
  return (
    <div className="fixed bottom-0 right-10 flex flex-col items-center gap-4">
      <div className="flex flex-col gap-4">
        <a
          href="mailto:indranilhalder.dev@gmail.com"
          className="email font-mono text-sm transition-all duration-300 hover:text-primary "
          target="_blank"
          rel="noopener noreferrer"
        >
          indranilhalder.dev@gmail.com
        </a>
      </div>
      <div className="h-40 w-[1px] bg-gray-400" />
    </div>
  );
};

export default Email;