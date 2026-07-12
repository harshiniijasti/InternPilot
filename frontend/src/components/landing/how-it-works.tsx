"use client";

import { motion } from "framer-motion";
import { FileUp, Search, Trophy } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileUp,
    title: "Upload Your Resume",
    description:
      "Drop in your resume and let our AI instantly understand your skills, experience, and career aspirations.",
  },
  {
    step: "02",
    icon: Search,
    title: "AI Analyzes & Matches",
    description:
      "Our intelligence engine scans thousands of internships and surfaces the ones where you'll make the biggest impact.",
  },
  {
    step: "03",
    icon: Trophy,
    title: "Land Your Internship",
    description:
      "Apply with confidence using AI-crafted insights, tailored cover letter tips, and real-time application tracking.",
  },
];

export function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-500/15 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm font-medium tracking-widest text-violet-300/80 uppercase"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
          >
            Three steps to your next opportunity
          </motion.h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="absolute top-[4.5rem] right-[16.67%] left-[16.67%] hidden h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center rounded-2xl border border-slate-500/10 bg-slate-400/[0.02] px-6 py-8 text-center backdrop-blur-sm md:border-transparent md:bg-transparent md:px-4 md:py-0"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/15 blur-xl" />
                <div className="relative flex size-16 items-center justify-center rounded-2xl border border-slate-500/15 bg-slate-400/[0.05] shadow-sm shadow-indigo-500/10 backdrop-blur-sm">
                  <step.icon className="size-7 text-violet-300" />
                </div>
                <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-xs font-semibold text-slate-50 shadow-md shadow-indigo-500/25">
                  {i + 1}
                </span>
              </div>
              <span className="mb-2 font-mono text-xs tracking-widest text-indigo-300/50">
                STEP {step.step}
              </span>
              <h3 className="mb-3 text-lg font-medium text-slate-100">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
