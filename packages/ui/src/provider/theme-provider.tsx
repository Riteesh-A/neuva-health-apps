"use client";

import {
  ThemeProvider as AppThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <AppThemeProvider {...props}>{children}</AppThemeProvider>;
};
