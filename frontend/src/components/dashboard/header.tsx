"use client";

import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-[#0b1120] px-8 py-6">
      <h1 className="text-3xl font-bold text-white">
        Welcome👋😎
      </h1>

      <p className="mt-2 text-slate-400">
        Discover internships that match your skills and career goals using AI.
      </p>
    </header>
  );
}