"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: "easeOut" as const,
    },
  }),
};

export function LandingHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-32 pb-24 sm:px-6">
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/[0.08] px-4 py-1.5 text-sm text-indigo-200/90 backdrop-blur-sm"
        >
          <Sparkles className="size-3.5 text-violet-300" />
          AI-Powered Internship Intelligence
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Find Your Perfect{" "}
          <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-blue-300 bg-clip-text font-bold text-transparent">
            Internship
          </span>{" "}
          with AI
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-7 max-w-2xl text-base leading-[1.7] text-slate-400 sm:text-lg sm:leading-[1.75]"
        >
          From Resume to Opportunity - AI Powered Career Intelligence,
          Personalized Internship Matching, and Future-Ready Career Growth
        </motion.p>

 <motion.div
  custom={3}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mt-11 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4"
>
  <SignInButton
  mode="modal"
  forceRedirectUrl="/dashboard"
>
  <Button
    size="lg"
    className="h-12 gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-base text-slate-50"
  >
    Continue with Google
    <ArrowRight className="size-4" />
  </Button>
</SignInButton>
</motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20"
        >
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-blue-500/10 blur-lg" />

            <div className="relative rounded-2xl border border-slate-500/15 bg-slate-400/[0.04] px-6 py-4 backdrop-blur-md sm:px-8 sm:py-5">
              <p className="text-sm leading-relaxed text-slate-400 sm:text-[0.95rem]">
                From resume to opportunity —{" "}
                <span className="font-medium text-slate-200">
                  smarter, faster, AI-powered.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}