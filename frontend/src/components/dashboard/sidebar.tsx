"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import {
  Home,
  User,
  FileText,
  Brain,
  Heart,
  Rocket,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Resume", href: "/dashboard/resume", icon: FileText },
  { name: "AI Analysis", href: "/dashboard/analysis", icon: Brain },
  { name: "Saved Internships", href: "/dashboard/saved", icon: Heart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-[#0b1120]">
      {/* Logo */}
      <Link
        href="/dashboard"
        className="flex items-center gap-3 border-b border-slate-800 p-6 transition hover:bg-slate-900"
      >
        <div className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-2">
          <Rocket className="h-6 w-6 text-white" />
        </div>

        <div>
          <h1 className="text-lg font-bold text-white">
            InternPilot
          </h1>

          <p className="text-xs text-slate-400">
            AI Resume Intelligence
          </p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="mt-6 flex flex-1 flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-violet-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Sign Out */}
      <div className="border-t border-slate-800 p-4">
        <SignOutButton redirectUrl="/">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-red-600 hover:text-white">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </aside>
  );
}