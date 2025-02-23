import { cn } from "@/lib/utils";
import "./globals.css";
import { Kode_Mono, Space_Mono } from "next/font/google";
import { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const titleFont = Kode_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--title-font",
  display: "swap",
  adjustFontFallback: false,
});
const bodyFont = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--body-font",
});

export const Body = ({ children }: { children: ReactNode }) => {
  return (
    <body className={cn("font-body", titleFont.variable, bodyFont.variable)}>
      <ThemeProvider
        attribute="class"
        themes={["light"]}
        defaultTheme="light"
        enableSystem={false}
      >
        <Navigation />
        <main>{children}</main>
      </ThemeProvider>
    </body>
  );
};
