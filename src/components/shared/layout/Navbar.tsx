"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import ToggleTheme from "../theme/ToggleTheme";
import { Button, buttonVariants, MotionButton } from "../../ui/Button";
import { Sheet, SheetTrigger, SheetContent } from "../../ui/Sheet";
import { cn } from "@/lib/utils";
import { NavItemInterface } from "@/interfaces/data/NavItemsInterface";
import { navItems } from "@/data/navItem";
import {
  headerVariants,
  navItemContainerVariants,
  navItemMobileVariants,
  navItemVariants,
  navVariants,
} from "@/animations/navVariants";

const Navbar: FC = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 400) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      className="fixed z-50 h-20 w-full bg-white/50 px-10 shadow-lg backdrop-blur-md dark:bg-slate-800/50"
    >
      <header className="flex h-full items-center justify-between">
        <motion.h4 variants={headerVariants} className="text-xl font-bold">
          <Link href="/" className="transition duration-300 hover:text-primary">
            Indranil Halder
          </Link>
        </motion.h4>

        <motion.div
          variants={navItemContainerVariants}
          className="hidden gap-4 md:flex"
        >
          {navItems.map((navItem: NavItemInterface) => (
            <motion.span variants={navItemVariants} key={navItem.id}>
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
            </motion.span>
          ))}

          <ToggleTheme />
        </motion.div>
        <div className="flex gap-3 md:hidden">
          <ToggleTheme />

          <Sheet>
            <SheetTrigger asChild>
              <motion.div variants={navItemVariants}>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent>
              <motion.div
                variants={navItemContainerVariants}
                className="flex h-full flex-col items-center justify-center gap-8"
              >
                {navItems.map((navItem: NavItemInterface) => (
                  <motion.span
                    variants={navItemMobileVariants}
                    key={navItem.id}
                  >
                    <a
                      href={`#${navItem.title.toLowerCase()}`}
                      className="text-xl transition duration-300 hover:text-primary"
                    >
                      {navItem.title}
                    </a>
                  </motion.span>
                ))}

                <MotionButton
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    bounce: 0.7,
                    duration: 0.6,
                  }}
                  variants={navItemMobileVariants}
                  size="xl"
                >
                  <Link
                    href="/resume/resume.pdf"
                    className="flex h-full w-full items-center justify-center"
                    target="_blank"
                  >
                    Resume
                  </Link>
                </MotionButton>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </motion.nav>
  );
};

export default Navbar;
