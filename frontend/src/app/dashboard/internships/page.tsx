"use client";

export default function InternshipPage() {
  return (
    <div className="text-white">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

        <h1 className="text-4xl font-bold">
          🏢 Internship Details
        </h1>

        <div className="mt-8 space-y-6">

          <div>
            <p className="text-slate-400">Company</p>
            <h2 className="text-2xl font-bold">Google</h2>
          </div>

          <div>
            <p className="text-slate-400">Role</p>
            <h2 className="text-xl">
              Software Engineer Intern
            </h2>
          </div>

          <div>
            <p className="text-slate-400">Match Percentage</p>

            <div className="mt-2 inline-block rounded-full bg-green-600 px-4 py-2 font-semibold">
              80% Match
            </div>
          </div>

          <div>
            <p className="text-slate-400">Matched Skills</p>

            <div className="mt-3 flex flex-wrap gap-2">

              <span className="rounded-full bg-violet-600 px-3 py-1">
                Python
              </span>

              <span className="rounded-full bg-violet-600 px-3 py-1">
                FastAPI
              </span>

              <span className="rounded-full bg-violet-600 px-3 py-1">
                SQL
              </span>

              <span className="rounded-full bg-violet-600 px-3 py-1">
                Git
              </span>

            </div>
          </div>

          <div>
            <p className="text-slate-400">Description</p>

            <p className="mt-3 text-slate-300">
              Work with experienced engineers to build scalable web
              applications, develop APIs, and contribute to production-ready
              software using modern technologies.
            </p>
          </div>

          <div className="flex gap-4">

            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold">
              ❤️ Save Internship
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold">
              Apply Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}