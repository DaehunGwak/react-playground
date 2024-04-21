import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {WoofHeader} from "@/src/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mutation: Nomad Challenge",
  description: "Nomad Challenge: 60. Mutation (next14, swr, tailwindcss)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <WoofHeader/>
        {children}
      </body>
    </html>
  );
}
