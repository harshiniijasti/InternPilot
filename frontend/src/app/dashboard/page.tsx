import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Welcome Card */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h1 className="text-4xl font-bold text-white">
          Welcome 👋
        </h1>

        <p className="mt-3 max-w-3xl text-slate-400">
          Welcome to InternPilot. Complete your profile, upload your resume,
          analyze it with AI, and discover internships that match your skills.
        </p>

        <Link href="/dashboard/profile">
          <Button className="mt-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500">
            Complete Profile
          </Button>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Link href="/dashboard/profile">
          <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-violet-500">
            <h2 className="text-xl font-semibold text-white">
              👤 Profile
            </h2>

            <p className="mt-2 text-slate-400">
              Complete your personal information.
            </p>
          </div>
        </Link>

        <Link href="/dashboard/resume">
          <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-violet-500">
            <h2 className="text-xl font-semibold text-white">
              📄 Resume
            </h2>

            <p className="mt-2 text-slate-400">
              Upload your latest resume.
            </p>
          </div>
        </Link>

        <Link href="/dashboard/analysis">
          <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-violet-500">
            <h2 className="text-xl font-semibold text-white">
              🤖 AI Analysis
            </h2>

            <p className="mt-2 text-slate-400">
              View AI recommendations.
            </p>
          </div>
        </Link>

        <Link href="/dashboard/saved">
          <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-violet-500">
            <h2 className="text-xl font-semibold text-white">
              ❤️ Saved
            </h2>

            <p className="mt-2 text-slate-400">
              View saved internships.
            </p>
          </div>
        </Link>

      </div>

           {/* Internship Journey */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h2 className="text-2xl font-bold text-white">
          Your Internship Journey
        </h2>

        <p className="mt-2 text-slate-400">
          Complete each step to unlock personalized internship recommendations.
        </p>

        <div className="mt-8 space-y-5">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
              1
            </div>

            <div className="rounded-xl bg-slate-800 px-5 py-3 text-white">
              Complete Your Profile
            </div>
          </div>

          <div className="ml-5 h-8 border-l border-slate-600"></div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
              2
            </div>

            <div className="rounded-xl bg-slate-800 px-5 py-3 text-white">
              Upload Your Resume
            </div>
          </div>

          <div className="ml-5 h-8 border-l border-slate-600"></div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
              3
            </div>

            <div className="rounded-xl bg-slate-800 px-5 py-3 text-white">
              Run AI Analysis
            </div>
          </div>

          <div className="ml-5 h-8 border-l border-slate-600"></div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
              4
            </div>

            <div className="rounded-xl bg-slate-800 px-5 py-3 text-white">
              Discover Matching Internships
            </div>
          </div>

          <div className="ml-5 h-8 border-l border-slate-600"></div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
              5
            </div>

            <div className="rounded-xl bg-slate-800 px-5 py-3 text-white">
              Save Your Favorite Internships
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}