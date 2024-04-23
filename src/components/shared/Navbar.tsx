import { FC } from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { Button, buttonVariants } from "../ui/Button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/Sheet";
import { cn } from "@/lib/utils";
import { NavItemInterface } from "@/interfaces/data/NavItemsInterface";
import { navItems } from "@/data/navItem";
import { Menu } from "lucide-react";

// TODO: Make the navbar interactive and make it blur

const Navbar: FC = () => {
  return (
    <nav className="border px-10 py-6">
      <header className="flex items-center justify-between">
        <h4 className="text-xl font-bold">
          <Link href="/" className="transition duration-300 hover:text-primary">
            Indranil Halder
          </Link>
        </h4>

        <div className="hidden gap-4 md:flex">
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
          <Button>Resume</Button>
          <ToggleTheme />
        </div>
        <div className="flex gap-3 md:hidden">
          <ToggleTheme />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-center gap-8">
              {navItems.map((navItem: NavItemInterface) => (
                <span key={navItem.id}>
                  <a
                    href={`#${navItem.title.toLowerCase()}`}
                    className="text-xl transition duration-300 hover:text-primary"
                  >
                    {navItem.title}
                  </a>
                </span>
              ))}

              <Button size="lg">Resume</Button>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
