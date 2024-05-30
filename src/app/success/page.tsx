"use client";

import Email from "@/components/shared/layout/Email";
import Footer from "@/components/shared/layout/Footer";
import Navbar from "@/components/shared/layout/Navbar";
import Socials from "@/components/shared/layout/Socials";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

const SuccessMessagePage = () => {
  return (
    <div>
      <Navbar />
      <Email />
      <Socials />
      <main className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-6xl text-primary">Thank You!</h1>
        <h2 className="text-4xl">Your message has been sent.</h2>
        <h4 className="text-2xl">I will contact you soon!</h4>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              size: "xl",
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

export default SuccessMessagePage;
