'use client';

import {ThemeProvider, useTheme} from "next-themes";

export function Providers({children}: {children: React.ReactNode}) {
  const {theme} = useTheme();

  return <ThemeProvider attribute="class" defaultTheme={theme ?? "light"} enableSystem>
    {children}
  </ThemeProvider>;
}