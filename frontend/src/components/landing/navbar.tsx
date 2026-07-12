"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RocketLogo } from "./rocket-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-slate-500/15 bg-slate-400/[0.06] shadow-lg shadow-indigo-500/5 backdrop-blur-2xl"
            : "border-slate-500/10 bg-slate-400/[0.04] backdrop-blur-xl"
        )}
      >
        <a href="#" className="shrink-0">
          <RocketLogo size="sm" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-400/10 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-500/15 bg-slate-400/[0.06] p-4 backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-400 transition-colors hover:bg-slate-400/10 hover:text-slate-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-500/10 pt-3">
              <Button
                variant="ghost"
                className="w-full text-slate-300 hover:bg-slate-400/10 hover:text-slate-100"
              >
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-slate-50">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
