"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { Button, buttonVariants, MotionButton } from "../ui/Button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/Sheet";
import { cn } from "@/lib/utils";
import { NavItemInterface } from "@/interfaces/data/NavItemsInterface";
import { navItems } from "@/data/navItem";
import { Menu } from "lucide-react";

// TODO: Make the navbar interactive and make it blur

const Navbar: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <nav className="h-20 px-10 shadow-lg">
        <header className="flex h-full items-center justify-between">
          <h4 className="text-xl font-bold">
            <Link
              href="/"
              className="transition duration-300 hover:text-primary"
            >
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

                <MotionButton
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    bounce: 0.7,
                    duration: 0.6,
                  }}
                  variant="gradient"
                  size="xl"
                >
                  Resume
                </MotionButton>
              </SheetContent>
            </Sheet>
          </div>
        </header>
      </nav>
    )
  );
};

export default Navbar;
