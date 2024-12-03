"use client";

import { FC } from "react";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
