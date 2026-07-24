import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homework Helpers LA | tutoring near me | academic writing services",
  description: "Los Angeles' most trusted homework helpers. We provide expert assistance with math, statistics, programming, essay writing, and online classes. 100% human-written, original work.",
  keywords: ["homework help Los Angeles", "academic writing services", "math homework help", "statistics help", "essay writing help", "online class help"],
  openGraph: {
    title: "Homework Helpers LA | help with my homework | Essay Writing Services | Los Angeles, USA",
    description: "Are you in Los Angeles, USA and in need of homework helpers? We are here to help We deliver 100% original, human-written papers and answers for college and university students.",
    url: "https://www.homeworkdoers.help",
    siteName: "Homework Doers",
    images: [
      {
        url: "https://www.homeworkdoers.help/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Homework Helpers LA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homework Helpers LA | Essay Writing Services | Tutoring Near Me | Los Angeles, USA",
    description: "Do you need to pay someone to do your homework? We help with homework in math, statistics, programming, essay writing, and online classes. 100% original, human-written papers and Homework Help for college and university students.",
    images: ["https://www.homeworkdoers.help/images/og-main.jpg"],
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
    canonical: "https://www.homeworkdoers.help",
  },
};

import { About3 } from "@/components/about3";
import dynamic from "next/dynamic";

const ContactSectionOne = dynamic(() => import("@/components/contact-section-one"), { ssr: true });
const FaqsSectionOne = dynamic(() => import("@/components/faqs-section-one"), { ssr: true });
const FeaturesTwo = dynamic(() => import("@/components/features-two"), { ssr: true });
import { Hero1 } from "@/components/hero1";

export default function Home() {
  return (
   <div className="">
    <Hero1 />
        <About3 />
    <div className="optimize-rendering">
      <FeaturesTwo />
    </div>
    <div className="optimize-rendering">
      <ContactSectionOne />
    </div>
    <div className="optimize-rendering">
      <FaqsSectionOne />
    </div>
  

   </div>
  );
}
