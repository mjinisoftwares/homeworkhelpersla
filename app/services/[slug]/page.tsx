import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Star,
  GraduationCap,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import servicesData from "@/lib/db/services.json";

interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  ogImage: string;
  excerpt: string;
  description: string;
  keywords: string[];
  features: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const services = servicesData as Service[];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const baseUrl = "https://homeworkhelpersla.com";
  const url = `${baseUrl}/services/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: url,
      siteName: "Homework Helpers LA",
      images: [
        {
          url: `${baseUrl}${service.ogImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${baseUrl}${service.ogImage}`],
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
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Homework Helpers LA",
      "url": "https://homeworkhelpersla.com",
    },
    "serviceType": service.shortTitle,
    "areaServed": "Los Angeles, CA",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Homework Helpers LA",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://homeworkhelpersla.com/services/${slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-primary/5 pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Decorations */}
        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/50 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md shadow-sm">
                <Sparkles className="size-4 text-accent" />
                Homework Helpers in Los Angeles
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.3]">
                {service.title}
              </h1>

              <p className="max-w-xl text-sm text-muted-foreground ">
                {service.excerpt}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-2xl bg-primary px-8 text-lg font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-primary/20 active:scale-95"
                >
                  <Link href="/order-now">
                    Get Started Now
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent h-14 rounded-2xl border-2 px-8 text-lg font-bold shadow-sm transition-all hover:bg-accent/5 active:scale-95"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Shield className="size-5" />
                  </div>
                  <span className="text-sm font-bold text-primary">100% Original</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Zap className="size-5" />
                  </div>
                  <span className="text-sm font-bold text-primary">Urgent Help</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                    <GraduationCap className="size-5" />
                  </div>
                  <span className="text-sm font-bold text-primary">Expert Writers</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              {/* Image Frame with Glow */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 to-accent/20 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative overflow-hidden rounded-[2rem] border bg-card shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  priority
                />
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="flex-1 rounded-2xl bg-background/80 p-4 backdrop-blur-xl shadow-lg">
                    <div className="text-2xl font-black text-primary">20k+</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Successful Tasks</div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-background/80 p-4 backdrop-blur-xl shadow-lg">
                    <div className="text-2xl font-black text-primary">4.9/5</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Student Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Features */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Left Content Area */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-normal">
                <h2 className="text-3xl font-bold text-primary md:text-4xl">
                  Reliable {service.shortTitle} Solutions
                </h2>
               <p className=" leading-8 mt-4 text-muted-foreground">
  {service.description.split(". ").map((sentence, index) => (
    <span key={index} className="mb-4 block">
      {sentence.trim()}
      {!sentence.endsWith(".") ? "." : ""}
    </span>
  ))}
</p>
                <p className="text-lg text-primary font-medium">
                  Our mission at Homework Helpers LA is to empower students by providing high-quality, authentic academic support. We recognize that modern academic life is demanding, often requiring students to balance multiple roles. Our services are designed to alleviate that pressure while ensuring academic integrity and excellence.
                </p>
                <h3 className="pt-8 text-2xl font-bold mb-6">Why Choose Our {service.shortTitle}?</h3>
                <p>
                  With over two decades of experience in the assignment help and homework help industry, we have refined our processes to deliver the best possible results for students. We don&rsquo;t just provide answers; we provide clarity and confidence.
                </p>
              </div>

              {/* Detailed Features Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <Card key={idx} className="flex items-center gap-4 rounded-2xl border-none bg-accent/5 p-6 transition-colors hover:bg-accent/10">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <CheckCircle2 className="size-6" />
                    </div>
                    <span className="font-bold text-primary">{feature}</span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar / CTA */}
            <aside className="space-y-8">
              <Card className="sticky top-32 overflow-hidden rounded-[2rem] border-2 border-primary/10 bg-white p-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-primary">Need Urgent Help?</h3>
                  <p className="text-muted-foreground">
                    Our team of experts is standing by 24/7 to assist you with any academic challenge.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock3 className="size-5 text-accent" />
                      <span className="font-semibold">Avg. Response Time: 5 mins</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <ShieldCheck className="size-5 text-accent" />
                      <span className="font-semibold">Privacy Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Star className="size-5 text-accent" />
                      <span className="font-semibold">Expert Subject Writers</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full h-14 rounded-xl bg-primary text-lg font-bold shadow-lg shadow-primary/20"
                  >
                    <Link href="/order-now">Order Your Paper</Link>
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground">
                    Secure payment options available.
                  </p>
                </div>
              </Card>

            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary/5 py-24 lg:py-32">
        <div className="container max-w-4xl">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary md:text-5xl">
              Common Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about our {service.shortTitle.toLowerCase()} services.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {service.faqs.map((faq, idx) => (
              <Card key={idx} className="rounded-[1.5rem] border border-primary/10 bg-background p-8 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-2xl font-bold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-20 text-center text-white shadow-2xl lg:py-32">
          {/* Animated Background Element */}
          <div className="absolute -right-20 -top-20 size-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 size-96 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl space-y-10">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Ready to Boost Your Academic Success?
            </h2>
            <p className="text-xl text-white/80">
              Join thousands of students in Los Angeles who trust Homework Helpers LA for their academic needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-16 rounded-2xl bg-accent px-10 text-xl font-black text-accent-foreground shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Link href="/order-now">Place Your Order</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-16 rounded-2xl px-10 text-xl font-black transition-all hover:scale-105 active:scale-95"
              >
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
