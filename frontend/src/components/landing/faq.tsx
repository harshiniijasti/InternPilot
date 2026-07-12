"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does InternPilot's AI analyze my resume?",
    answer:
      "InternPilot uses advanced natural language processing to understand the context behind your experience — not just keywords. It identifies your core competencies, career trajectory, and unique strengths to build a comprehensive profile that powers smarter matching.",
  },
  {
    question: "Is InternPilot free for students?",
    answer:
      "Yes! InternPilot offers a generous free tier for students that includes resume analysis, basic matching, and application tracking. Premium features like advanced insights and priority matching are available on our Pro plan.",
  },
  {
    question: "What types of internships does InternPilot cover?",
    answer:
      "We cover internships across tech, finance, consulting, healthcare, media, and more — from startups to Fortune 500 companies. Our database is continuously updated with new opportunities from leading employers worldwide.",
  },
  {
    question: "How accurate are the AI-powered matches?",
    answer:
      "Our matching algorithm considers skills, experience level, location preferences, company culture fit, and career goals to surface internships that genuinely align with your profile — not just roles that share a few keywords.",
  },
  {
    question: "Can I use InternPilot if I don't have much experience?",
    answer:
      "Absolutely. InternPilot is designed for students at every stage — whether you're a freshman exploring options or a senior with multiple internships. Our AI identifies transferable skills and suggests roles where you can grow.",
  },
  {
    question: "Is my resume data kept private and secure?",
    answer:
      "Your privacy is our priority. All resume data is encrypted at rest and in transit. We never sell your personal information, and you maintain full control over your data with the ability to delete it at any time.",
  },
];

export function LandingFaq() {
  return (
    <section id="faq" className="relative px-4 py-24 sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-500/15 to-transparent" />

      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm font-medium tracking-widest text-violet-300/80 uppercase"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
          >
            Frequently asked questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-slate-500/12 bg-slate-400/[0.03] px-4 backdrop-blur-sm sm:px-6"
        >
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-left text-base text-slate-200 hover:text-violet-200 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
