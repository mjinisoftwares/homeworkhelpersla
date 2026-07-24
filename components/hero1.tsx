import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero1 = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 lg:py-32 border-b border-primary",
        className
      )}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-white pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
         
            {/* Heading */}
            <h1 className="max-w-4xl text-4xl  font-black text-primary leading-[1.2] lg:pt-10">
              Homework Help & <span className="text-accent px-1">Essay Writing</span> Services in LA
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground ">
              Los Angeles based Homework Doers provides professional homework help,
              essay writing, research paper assistance, and online class help
               for college and university students in Los Angeles.
            </p>

            {/* SEO Keywords */}
            <div className="mt-4 grid gap-1 grid-cols-2 lg:grid-cols-3">
              {[
                "Math Homework Help",
                "Essay Writing Services",
                "Research Paper Writing",
                "homework helpers",
                "Pay Someone To Do My Homework",
                "Essay writing help Los Angeles",
                "help me with math homework",
                "Do My Statistics Homework",
                "help with my home work",
                "Statistics Homework Help",
                "Assignment Writing Services",
                "homework doers",
                "write my paper for me",
                "College Homework Help",
                "best homework help USA",
                "write my research paper",
                "online class help",
                " Statistics Assignment Help",
                "Do my math homework",
                "Do my programming homework",
                "assignment writing services"
                
                
                

              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-foreground"
                >
                  <CheckCircle2 className="size-4 text-accent" />
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:opacity-90"
              >
                <Link href="/order-now">
                  Get Homework Help
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                <Link href="/essay-writing-services" prefetch={false}>
                  Explore Services
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative lg:pt-16">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <Image
                src="/hero-homework%20helpers.webp"
                alt="Los Angeles Homework Help and Essay Writing Services"
                width={556}
                height={481}
                priority
                className="w-full object-cover border border-4 border-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };