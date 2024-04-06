import type { Metadata } from "next";
import {Patrick_Hand} from "next/font/google"
import "@/app/globals.css";
import {Header} from "@/widgets/header";

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick-hand"
});

export const metadata: Metadata = {
  title: {
    template: "%s | NYT Bestseller Books",
    default: "Loading"
  },
  description: "Nomadcoders Next.js beginner challenge: NYT Bestseller Books by Daehun Gwak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={patrickHand.style}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
