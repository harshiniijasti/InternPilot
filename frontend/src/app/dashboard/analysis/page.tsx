"use client";

import { useEffect, useState } from "react";

export default function AnalysisPage() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("analysis");

    if (data) {
      setAnalysis(JSON.parse(data));
    }
  }, []);

  const saveInternship = async (item: any) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/save-internship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: item.company,
          role: item.role,
          location: item.location,
          apply_url: item.apply_url,
          match_percentage: item.match_percentage,
        }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to save internship.");
    }
  };

  if (!analysis) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1120] text-white">
        No analysis available.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] p-8 text-white">

      <h1 className="text-4xl font-bold">
        🤖 Resume Analysis
      </h1>

      <div className="mt-6">
        <input
          type="text"
          placeholder="📍 Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Skills */}
      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h2 className="text-2xl font-semibold">
          Skills Detected
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {analysis.analysis.skills.map((skill: string) => (
            <span
              key={skill}
              className="rounded-full bg-violet-600 px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Strengths */}
      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h2 className="text-2xl font-semibold">
          Strengths
        </h2>

        <div className="mt-5 space-y-3">
          {analysis.analysis.strengths.map((strength: string) => (
            <div
              key={strength}
              className="rounded-xl bg-slate-800 p-4"
            >
              ✅ {strength}
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Internships */}
      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

        <h2 className="text-2xl font-semibold">
          Recommended Internships
        </h2>

        <div className="mt-6 space-y-6">

          {analysis.recommended_internships
            .filter(
              (item: any) =>
                locationFilter === "" ||
                item.location
                  .toLowerCase()
                  .includes(locationFilter.toLowerCase())
            )
            .map((item: any, index: number) => (

              <div
                key={`${item.company}-${item.role}-${index}`}
                className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-violet-500"
              >

                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.company}
                    </h3>

                    <p className="mt-1 text-slate-400">
                      {item.role}
                    </p>

                    <p className="mt-2 text-sm text-violet-300">
                      📍 {item.location}
                    </p>

                  </div>

                  <div className="rounded-full bg-green-600 px-4 py-2 font-semibold text-white">
                    {item.match_percentage}% Match
                  </div>

                </div>

                <div className="mt-6">

                  <h4 className="mb-3 font-semibold text-slate-300">
                    Matched Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {item.matched_skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="rounded-full bg-violet-600 px-3 py-1 text-sm text-white"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="mt-6 flex gap-3">

                  <button
                    onClick={() => saveInternship(item)}
                    className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 font-semibold text-white"
                  >
                    ❤️ Save Internship
                  </button>

                  <a
                    href={item.apply_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-600 px-5 py-2 font-semibold text-white hover:bg-slate-800"
                  >
                    🔗 Apply Now
                  </a>

                </div>

              </div>

            ))}

        </div>

      </div>

    </div>
  );
}