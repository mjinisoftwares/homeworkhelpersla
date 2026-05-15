import Link from "next/link";
import {
  Calculator,
  FileText,
  GraduationCap,
  PenSquare,
  Sigma,
  FlaskConical,
  BriefcaseBusiness,
  Laptop,
  ScrollText,
  BookOpen,
  ArrowRight,
  BookMarked,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Homework Help",
    description:
      "Professional homework help for college and university students across Los Angeles. Get expert support for difficult assignments, weekly coursework, and deadlines.",
    icon: <BookMarked className="size-7" />,
    href: "/homework-help",
    items: [
      "Math Homework Help",
      "Accounting Homework Help",
      "Statistics Homework Help",
      "Science Homework Help",
    ],
  },

  {
    title: "Essay Writing Services",
    description:
      "Custom essay writing services tailored to your academic level, formatting style, and assignment requirements.",
    icon: <PenSquare className="size-7" />,
    href: "/essay-writing-services",
    items: [
      "College Essay Writing",
      "Admission Essays",
      "Personal Statements",
      "Argumentative Essays",
    ],
  },

  {
    title: "Research Paper Writing",
    description:
      "Well-researched and plagiarism-free research papers written by experienced academic professionals.",
    icon: <ScrollText className="size-7" />,
    href: "/research-paper-writing",
    items: [
      "APA Research Papers",
      "Nursing Research Papers",
      "Business Research Papers",
      "Literature Reviews",
    ],
  },

  {
    title: "Online Class Help",
    description:
      "Reliable online class assistance for quizzes, discussions, assignments, exams, and full online courses.",
    icon: <Laptop className="size-7" />,
    href: "/online-class-help",
    items: [
      "Canvas & Blackboard Help",
      "Quiz & Exam Help",
      "Weekly Discussion Posts",
      "Online Course Assistance",
    ],
  },

  {
    title: "Math & Statistics Help",
    description:
      "Step-by-step assistance for algebra, calculus, probability, SPSS, and advanced statistics assignments.",
    icon: <Sigma className="size-7" />,
    href: "/statistics-homework-help",
    items: [
      "Calculus Help",
      "Algebra Assignments",
      "SPSS Analysis",
      "Probability & Statistics",
    ],
  },

  {
    title: "Business & Accounting Help",
    description:
      "Academic support for accounting, finance, economics, management, and business-related coursework.",
    icon: <BriefcaseBusiness className="size-7" />,
    href: "/accounting-homework-help",
    items: [
      "Financial Accounting",
      "Managerial Accounting",
      "Economics Assignments",
      "Business Reports",
    ],
  },

  {
    title: "Nursing Assignment Help",
    description:
      "Expert nursing homework and BSN assignment assistance with evidence-based research and APA formatting.",
    icon: <GraduationCap className="size-7" />,
    href: "/nursing-assignment-help",
    items: [
      "BSN Assignments",
      "Care Plans",
      "Nursing Research Papers",
      "Discussion Boards",
    ],
  },

  {
    title: "Science Homework Help",
    description:
      "Accurate and professional science assignment support from qualified subject experts.",
    icon: <FlaskConical className="size-7" />,
    href: "/science-homework-help",
    items: [
      "Chemistry Homework",
      "Biology Assignments",
      "Physics Help",
      "Lab Reports",
    ],
  },

  {
    title: "Academic Editing",
    description:
      "Professional proofreading and editing services to improve clarity, grammar, formatting, and citations.",
    icon: <FileText className="size-7" />,
    href: "/academic-editing-services",
    items: [
      "Proofreading",
      "APA Formatting",
      "Grammar Editing",
      "Citation Review",
    ],
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-accent/5">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            Academic Services
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight leading-[1.3] text-primary md:text-5xl">
            Professional Homework Help & Essay Writing Services in Los Angeles
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Homework Helpers LA provides reliable academic support for
            college and university students. From homework help and
            essay writing to online class assistance and research paper
            services, our experienced academic experts deliver
            plagiarism-free, human-written work tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h3 className="text-2xl font-bold tracking-tight text-primary">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                {/* Service Items */}
                <div className="mt-6 grid gap-3">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <div className="size-2 rounded-full bg-accent" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="mt-8 h-auto p-0 text-primary hover:bg-transparent hover:text-accent"
                >
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border bg-primary px-8 py-14 text-center text-white md:px-16">
          <h3 className="text-3xl font-black tracking-tight md:text-4xl">
            Need Help With Your Assignment?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Get fast, confidential, and professional academic support
            from experienced homework helpers and academic writers in
            Los Angeles.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90"
            >
              <Link href="/order-now">
                Order Now
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}