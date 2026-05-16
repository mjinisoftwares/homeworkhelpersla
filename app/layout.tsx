import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar1 } from "@/components/navbar1";
import FooterOne from "@/components/footer-one";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});



export const metadata: Metadata = {
  title: {
    template: "%s | Homework Helpers LA",
    default: "Homework Helpers LA | Professional Academic Support",
  },
  description: "Expert academic assistance in Los Angeles. Original, human-written solutions for college and university students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero-homework%20helpers.webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar1 />
        <main className="flex-grow">
          {children}
        </main>
        <FooterOne />
      </body>
    </html>
  );
}
