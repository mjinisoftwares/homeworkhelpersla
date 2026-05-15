"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  FileText,
  GraduationCap,
  Upload,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OrderFormSection() {
  return (
    <section className="bg-muted/40 h-[700px] overflow-y-scroll py-20 sm:py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            Homework Help Order Form
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary ">
            Get Professional Homework Help & Essay Writing Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Submit your assignment instructions for accurate pricing and
            fast academic assistance. Our experienced homework helpers,
            essay writers, and research experts are ready to help.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Why Students Choose Homework Helpers LA
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                We provide professional homework help, essay writing,
                research paper assistance, online class help, nursing
                assignments, accounting homework help, and math tutoring
                for college students across Los Angeles and beyond.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 rounded-2xl border bg-card p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <ShieldCheck className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    100% Human-Written Work
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    No AI-generated content. Every assignment is completed
                    by experienced academic experts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border bg-card p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <Clock3 className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Fast Turnaround Times
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Get urgent homework help, essays, and online class
                    support delivered before your deadline.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border bg-card p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <GraduationCap className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    20+ Years of Experience
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Trusted academic support for college, university,
                    nursing, MBA, and graduate-level coursework.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold">
                Need Immediate Homework Help?
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Contact our academic support team for urgent assignments,
                online exams, research papers, and last-minute essays.
              </p>

              <Button
                asChild
                className="mt-6 bg-accent text-accent-foreground hover:opacity-90"
              >
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>

          {/* Form */}
          <form className="lg:col-span-3">
            <Card className="rounded-3xl border p-6 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <BookOpen className="size-5" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    Assignment Details
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Fill out the form below for accurate pricing.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-7">
                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name
                    </Label>

                    <Input
                      id="name"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address
                    </Label>

                    <Input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Phone + Country */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number
                    </Label>

                    <Input
                      id="phone"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Country / Region
                    </Label>

                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="us">
                          United States
                        </SelectItem>

                        <SelectItem value="uk">
                          United Kingdom
                        </SelectItem>

                        <SelectItem value="canada">
                          Canada
                        </SelectItem>

                        <SelectItem value="australia">
                          Australia
                        </SelectItem>

                        <SelectItem value="other">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Assignment Type */}
                <div className="space-y-2">
                  <Label>
                    Type of Assignment
                  </Label>

                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select assignment type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="essay">
                        Essay Writing
                      </SelectItem>

                      <SelectItem value="research-paper">
                        Research Paper
                      </SelectItem>

                      <SelectItem value="homework-help">
                        Homework Help
                      </SelectItem>

                      <SelectItem value="online-class">
                        Online Class Help
                      </SelectItem>

                      <SelectItem value="discussion-post">
                        Discussion Post
                      </SelectItem>

                      <SelectItem value="case-study">
                        Case Study
                      </SelectItem>

                      <SelectItem value="lab-report">
                        Lab Report
                      </SelectItem>

                      <SelectItem value="nursing-paper">
                        Nursing Assignment
                      </SelectItem>

                      <SelectItem value="editing">
                        Editing & Proofreading
                      </SelectItem>

                      <SelectItem value="other">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject + Topic */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>
                      Subject
                    </Label>

                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="math">
                          Mathematics
                        </SelectItem>

                        <SelectItem value="accounting">
                          Accounting
                        </SelectItem>

                        <SelectItem value="business">
                          Business
                        </SelectItem>

                        <SelectItem value="nursing">
                          Nursing
                        </SelectItem>

                        <SelectItem value="science">
                          Science
                        </SelectItem>

                        <SelectItem value="statistics">
                          Statistics
                        </SelectItem>

                        <SelectItem value="psychology">
                          Psychology
                        </SelectItem>

                        <SelectItem value="economics">
                          Economics
                        </SelectItem>

                        <SelectItem value="other">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">
                      Assignment Topic
                    </Label>

                    <Input
                      id="topic"
                      placeholder="Enter assignment topic"
                    />
                  </div>
                </div>

                {/* Academic Level */}
                <div className="space-y-2">
                  <Label>
                    Academic Level
                  </Label>

                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select academic level" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="high-school">
                        High School
                      </SelectItem>

                      <SelectItem value="college">
                        College
                      </SelectItem>

                      <SelectItem value="undergraduate">
                        Undergraduate
                      </SelectItem>

                      <SelectItem value="masters">
                        Masters
                      </SelectItem>

                      <SelectItem value="mba">
                        MBA
                      </SelectItem>

                      <SelectItem value="phd">
                        PhD / Doctorate
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Citation + Sources */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>
                      Citation Style
                    </Label>

                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select citation style" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="apa">
                          APA
                        </SelectItem>

                        <SelectItem value="mla">
                          MLA
                        </SelectItem>

                        <SelectItem value="harvard">
                          Harvard
                        </SelectItem>

                        <SelectItem value="chicago">
                          Chicago
                        </SelectItem>

                        <SelectItem value="turabian">
                          Turabian
                        </SelectItem>

                        <SelectItem value="other">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sources">
                      Number of Sources
                    </Label>

                    <Input
                      id="sources"
                      type="number"
                      placeholder="e.g. 10"
                    />
                  </div>
                </div>

                {/* Pages + Words */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pages">
                      Number of Pages
                    </Label>

                    <Input
                      id="pages"
                      type="number"
                      placeholder="e.g. 5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="words">
                      Number of Words
                    </Label>

                    <Input
                      id="words"
                      type="number"
                      placeholder="e.g. 1500"
                    />
                  </div>
                </div>

                {/* Due Date + Time */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">
                      Due Date
                    </Label>

                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        type="date"
                        id="date"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">
                      Due Time
                    </Label>

                    <div className="relative">
                      <Clock3 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        type="time"
                        id="time"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="space-y-2">
                  <Label htmlFor="instructions">
                    Assignment Instructions
                  </Label>

                  <Textarea
                    id="instructions"
                    rows={7}
                    placeholder="Provide detailed instructions, grading rubric, login requirements, formatting details, or additional information..."
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-3">
                  <Label>
                    Upload Files
                  </Label>

                  <div className="rounded-2xl border border-dashed bg-muted/40 p-8 text-center">
                    <Upload className="mx-auto size-10 text-muted-foreground" />

                    <p className="mt-4 font-medium">
                      Drag & drop files here
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Upload assignment instructions, rubrics,
                      screenshots, or supporting documents.
                    </p>

                    <Input
                      type="file"
                      multiple
                      className="mt-6"
                    />
                  </div>
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className="h-12 w-full bg-accent text-accent-foreground hover:opacity-90"
                >
                  Submit Order Request
                </Button>

                <p className="text-center text-sm leading-7 text-muted-foreground">
                  By submitting this form, you agree to our terms,
                  privacy policy, and academic support guidelines.
                </p>
              </div>
            </Card>
          </form>
        </div>
      </div>
    </section>
  );
}