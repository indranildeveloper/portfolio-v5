"use client";

import { FC } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import Footer from "@/components/shared/layout/Footer";
import Navbar from "@/components/shared/layout/Navbar";
import { buttonVariants } from "@/components/ui/Button";
import Socials from "@/components/shared/layout/Socials";
import Email from "@/components/shared/layout/Email";
import { cn } from "@/lib/utils";

const NotFoundPage: FC = () => {
  return (
    <div>
      <Navbar />
      <Socials />
      <Email />
      <main className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="font-mono text-9xl text-primary">404</h1>
        <h2 className="text-4xl">Page Not Found!</h2>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              size: "xl",
              variant: "gradient",
            }),
            "mt-8 flex items-center justify-center gap-2",
          )}
        >
          <LuArrowLeft size={20} /> Go Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
