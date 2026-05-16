import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero1 = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 border-b border-primary",
        className
      )}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
         
            {/* Heading */}
            <h1 className="max-w-4xl text-3xl lg:text-5xl font-black text-primary leading-[1.2] lg:pt-10">
              Homework Help & <span className="text-accent px-1">Essay Writing</span> Services in LA
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground ">
              LA Homework Helpers provides professional homework help,
              essay writing, research paper assistance, and online class help
               for college and university students in Los Angeles.
            </p>

            {/* SEO Keywords */}
            <div className="mt-8 grid gap-2 grid-cols-2 lg:grid-cols-3">
              {[
                "Math Homework Help",
                "Essay Writing Services",
                "Research Paper Writing",
                "Online Class Help",
                "Accounting Homework Help",
                "College Assignment Help",
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
          <div className="relative lg:pt-10">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <img
                src="/hero-homework%20helpers.webp"
                alt="Los Angeles Homework Help and Essay Writing Services"
                width={556}
                height={481}
                fetchPriority="high"
                decoding="async"
                className=" w-full object-cover border border-4 border-accent "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };