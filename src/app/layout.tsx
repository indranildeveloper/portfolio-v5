import { FC } from "react";
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import { RootLayoutProps } from "@/interfaces/layout/RootLayoutProps";
import ThemeProvider from "@/providers/ThemeProvider";
import { constructMetaData } from "@/lib/metadata";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = constructMetaData();

// TODO: Find a solution so that do not need suppressHydrationWarning={true}
const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${firaCode.variable}`}
      suppressHydrationWarning={true}
    >
      <body>
        <main>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
