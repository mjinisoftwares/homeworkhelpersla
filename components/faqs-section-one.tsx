import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What services does Homework Helpers LA provide?',
      answer:
        'Homework Helpers LA provides professional homework help, essay writing services, research paper writing, online class help, discussion post writing, quiz assistance, exam help, academic editing, proofreading, and tutoring support for college and university students. We help students across subjects including nursing, business, accounting, math, statistics, science, psychology, and more.',
    },

    {
      id: 'item-2',
      question: 'Do you use AI tools like ChatGPT to write assignments?',
      answer:
        'No. All assignments, essays, research papers, and homework solutions are completed by real academic writers and subject experts. We do not use AI-generated content for client work. Every project is carefully researched, professionally written, and reviewed by experienced academic professionals to ensure originality and quality.',
    },

    {
      id: 'item-3',
      question: 'Is your work plagiarism-free?',
      answer:
        'Yes. We provide plagiarism-free academic work written from scratch according to your instructions. Every essay, homework assignment, and research paper is original and properly cited using APA, MLA, Chicago, Harvard, or other required formatting styles.',
    },

    {
      id: 'item-4',
      question: 'Can you help with urgent homework assignments?',
      answer:
        'Yes. Homework Helpers LA offers urgent homework help and same-day assignment assistance for students with tight deadlines. We can assist with essays, quizzes, research papers, online classes, and discussion posts within short turnaround times depending on the project requirements.',
    },

    {
      id: 'item-5',
      question: 'What subjects do you cover?',
      answer:
        'We provide academic help across a wide range of subjects including mathematics, accounting, finance, economics, nursing, healthcare, business, marketing, statistics, psychology, biology, chemistry, physics, computer science, and humanities courses.',
    },

    {
      id: 'item-6',
      question: 'Do you offer math homework help?',
      answer:
        'Yes. We provide professional math homework help for algebra, geometry, calculus, trigonometry, statistics, probability, and advanced mathematics courses. Our experts help students solve complex math problems accurately and on time.',
    },

    {
      id: 'item-7',
      question: 'Can you help with online classes?',
      answer:
        'Yes. We offer complete online class help including weekly assignments, quizzes, tests, discussion boards, projects, and exams. We assist students using platforms such as Canvas, Blackboard, Moodle, Pearson, Connect, and other online learning systems.',
    },

    {
      id: 'item-8',
      question: 'Do you provide essay writing services in Los Angeles?',
      answer:
        'Yes. Homework Helpers LA provides essay writing services for students in Los Angeles and across the United States. We assist with argumentative essays, persuasive essays, analytical essays, admission essays, scholarship essays, and personal statements.',
    },

    {
      id: 'item-9',
      question: 'Can you write research papers?',
      answer:
        'Yes. Our experienced academic writers provide professional research paper writing services with credible sources, accurate citations, and proper academic formatting. We handle APA research papers, nursing papers, business research projects, literature reviews, and capstone papers.',
    },

    {
      id: 'item-10',
      question: 'Do you guarantee confidentiality?',
      answer:
        'Yes. Your privacy is important to us. All personal information, assignment details, and communication are kept strictly confidential. We never share client information with third parties.',
    },

    {
      id: 'item-11',
      question: 'Who writes the assignments and essays?',
      answer:
        'Our team consists of experienced academic writers, homework helpers, tutors, editors, and researchers with years of academic experience. Many of our experts specialize in nursing, business, mathematics, science, and university-level coursework.',
    },

    {
      id: 'item-12',
      question: 'Can you help with nursing assignments and BSN papers?',
      answer:
        'Yes. We provide nursing assignment help, BSN writing services, care plan assistance, evidence-based practice papers, nursing discussion posts, and nursing research papers with proper APA formatting and scholarly references.',
    },

    {
      id: 'item-13',
      question: 'Do you provide accounting homework help?',
      answer:
        'Yes. We assist students with financial accounting, managerial accounting, cost accounting, taxation, economics, and finance assignments. Our accounting homework help services are designed for college and university students.',
    },

    {
      id: 'item-14',
      question: 'Can I request revisions?',
      answer:
        'Yes. We offer revisions to ensure your assignment meets your instructions and expectations. If adjustments are needed, our academic support team will work with you to improve the final paper.',
    },

    {
      id: 'item-15',
      question: 'How do I place an order?',
      answer:
        'You can place an order by contacting Homework Helpers LA through our website contact form, email, or order page. Simply upload your assignment instructions, deadline, and requirements, and our team will review your project.',
    },

    {
      id: 'item-16',
      question: 'Do you help graduate and master’s students?',
      answer:
        'Yes. We assist undergraduate, graduate, MBA, MSN, and doctoral students with advanced academic writing, research projects, case studies, presentations, and coursework.',
    },

    {
      id: 'item-17',
      question: 'Can you help with discussion posts and responses?',
      answer:
        'Yes. We provide discussion board help for online classes including weekly discussion posts, peer responses, critical analysis posts, and academic participation assignments.',
    },

    {
      id: 'item-18',
      question: 'Do you provide APA and MLA formatting?',
      answer:
        'Yes. We provide professional formatting services including APA, MLA, Chicago, Harvard, and Turabian citation styles. We ensure references, in-text citations, headings, and formatting meet university requirements.',
    },

    {
      id: 'item-19',
      question: 'What makes Homework Helpers LA different?',
      answer:
        'Homework Helpers LA focuses on high-quality academic support delivered by experienced human writers — not AI tools. With over 20 years of experience, we provide personalized homework help, fast communication, plagiarism-free work, and reliable academic assistance for students in Los Angeles and beyond.',
    },

    {
      id: 'item-20',
      question: 'Can you help improve my grades?',
      answer:
        'Our goal is to provide professional academic support that helps students better understand coursework, submit stronger assignments, and improve academic performance. Many students use our services for guidance, tutoring support, editing, and assignment assistance.',
    },

    {
      id: 'item-21',
      question: 'Do you offer college homework help near me in Los Angeles?',
      answer:
        'Yes. Homework Helpers LA specializes in college homework help and academic writing services for students in Los Angeles, California. We support students from local colleges, universities, online programs, and community colleges.',
    },

    {
      id: 'item-22',
      question: 'Can you help with last-minute essays and assignments?',
      answer:
        'Yes. We understand that students sometimes face urgent deadlines. Our last-minute essay writing and homework help services are available for urgent projects, including same-day assignments when possible.',
    },
  ]

  return (
    <section className="bg-muted/40 py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-primary md:text-5xl">
            Questions About Homework Help & Essay Writing Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Find answers about our homework help services, essay writing,
            research paper assistance, online class support, plagiarism
            policies, AI usage, revisions, deadlines, confidentiality,
            and academic support for college students in Los Angeles.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-14 max-w-5xl">
          <Accordion
            type="single"
            collapsible
            className="rounded-3xl border bg-card p-4 shadow-sm md:p-8"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-dashed last:border-0"
              >
                <AccordionTrigger className="py-6 text-left text-base font-semibold leading-relaxed hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent>
                  <p className="pb-4 pr-2 text-base leading-8 text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-lg text-muted-foreground">
              Still have questions about our homework help or essay writing
              services?
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-flex font-semibold text-primary transition-colors hover:text-accent"
            >
              Contact Homework Helpers LA →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}