import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homework Helpers LA | Professional Academic Support in Los Angeles",
  description: "Los Angeles' most trusted homework helpers. We provide expert assistance with math, statistics, programming, essay writing, and online classes. 100% human-written, original work.",
  keywords: ["homework help Los Angeles", "academic writing services", "math homework help", "statistics help", "essay writing help", "online class help"],
  openGraph: {
    title: "Homework Helpers LA | Professional Academic Support",
    description: "Expert academic assistance in Los Angeles. Original, human-written solutions for college and university students.",
    url: "https://homeworkhelpersla.com",
    siteName: "Homework Helpers LA",
    images: [
      {
        url: "https://homeworkhelpersla.com/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Homework Helpers LA Academic Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homework Helpers LA | Professional Academic Support",
    description: "Expert academic assistance in Los Angeles. Original, human-written solutions for college and university students.",
    images: ["https://homeworkhelpersla.com/images/og-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://homeworkhelpersla.com",
  },
};

import { About3 } from "@/components/about3";
import ContactSectionOne from "@/components/contact-section-one";
import FaqsSectionOne from "@/components/faqs-section-one";
import FeaturesTwo from "@/components/features-two";
import { Hero1 } from "@/components/hero1";

export default function Home() {
  return (
   <div className="">
    <Hero1 />
        <About3 />
    <FeaturesTwo />
    <ContactSectionOne />
    <FaqsSectionOne />
  

   </div>
  );
}
