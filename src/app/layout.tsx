import type { Metadata } from "next";
import {  Recursive } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";


const recursive = Recursive({ subsets: ["latin","cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Coder-stop-beta",
  description: "A one Stop Solution for all the coders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
