import { FC } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootLayoutProps } from "@/interfaces/layout/RootLayoutProps";
import ThemeProvider from "@/providers/ThemeProvider";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indranil Halder | Portfolio",
  description: "Indranil Halder Portfolio Website.",
};

// TODO: Find a solution so that do not need suppressHydrationWarning={true}
const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
