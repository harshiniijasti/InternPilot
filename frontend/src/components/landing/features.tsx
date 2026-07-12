"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileSearch,
  LineChart,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: FileSearch,
    title: "AI Resume Analysis",
    description:
      "Our AI deeply parses your resume to extract skills, experience, and potential — going far beyond keyword matching.",
    gradient: "from-violet-500/15 to-indigo-600/5",
    iconColor: "text-violet-300",
    border: "hover:border-violet-400/25",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    icon: Target,
    title: "Smart Matching",
    description:
      "Get matched with internships that align with your career goals, skill level, and growth trajectory.",
    gradient: "from-indigo-500/15 to-blue-600/5",
    iconColor: "text-indigo-300",
    border: "hover:border-indigo-400/25",
    glow: "group-hover:shadow-indigo-500/10",
  },
  {
    icon: Brain,
    title: "Personalized Insights",
    description:
      "Receive tailored recommendations on how to strengthen your profile and stand out to top employers.",
    gradient: "from-blue-500/15 to-violet-600/5",
    iconColor: "text-blue-300",
    border: "hover:border-blue-400/25",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: LineChart,
    title: "Application Tracking",
    description:
      "Track every application in one place with AI-powered status insights and follow-up suggestions.",
    gradient: "from-violet-500/15 to-indigo-600/5",
    iconColor: "text-violet-300",
    border: "hover:border-violet-400/25",
    glow: "group-hover:shadow-violet-500/10",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function LandingFeatures() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 lg:py-28">
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
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
          >
            Everything you need to land your dream role
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Powered by cutting-edge AI that understands your unique profile and
            connects you with opportunities that matter.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-slate-500/12 bg-slate-400/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-slate-400/[0.06] hover:shadow-lg sm:p-6",
                feature.border,
                feature.glow
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  feature.gradient
                )}
              />
              <div className="relative">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-slate-500/15 bg-slate-400/[0.06] shadow-sm shadow-indigo-500/5">
                  <feature.icon className={cn("size-5", feature.iconColor)} />
                </div>
                <h3 className="mb-2 text-lg font-medium text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
