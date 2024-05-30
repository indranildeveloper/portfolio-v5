"use client";

import Link from "next/link";
import Footer from "@/components/shared/layout/Footer";
import Navbar from "@/components/shared/layout/Navbar";
import { LuArrowLeft } from "react-icons/lu";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <main className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="font-mono text-9xl text-primary">404</h1>
        <h2 className="text-4xl">Page Not Found!</h2>
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

export default NotFoundPage;
