import { FC } from "react";
import ToggleTheme from "./ToggleTheme";
import { navItems } from "@/data/navItem";
import { NavItemInterface } from "@/interfaces/data/NavItemsInterface";
import { buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="border px-10 py-6">
      <header className="flex items-center justify-between">
        <h4 className="text-xl font-bold">
          <Link href="/" className="transition duration-300 hover:text-primary">
            Indranil Halder
          </Link>
        </h4>

        <div className="flex gap-4">
          {navItems.map((navItem: NavItemInterface) => (
            <span key={navItem.id}>
              <a
                href={`#${navItem.title.toLowerCase()}`}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
              >
                {navItem.title}
              </a>
            </span>
          ))}
          <ToggleTheme />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
