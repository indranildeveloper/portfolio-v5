import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-20 flex h-40 flex-col items-center justify-center gap-2 text-gray-400">
      <a
        href="https://github.com/indranildeveloper"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono transition-all duration-300 hover:text-primary"
      >
        Designed and Developed by Indranil Halder
      </a>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
