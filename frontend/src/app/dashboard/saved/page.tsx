"use client";

import { useEffect, useState } from "react";

export default function SavedPage() {
  const [internships, setInternships] = useState<any[]>([]);

  const loadInternships = () => {
    fetch("http://127.0.0.1:8000/saved-internships")
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadInternships();
  }, []);

  const removeInternship = async (id: number) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/saved-internship/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      alert(data.message);

      setInternships((prev) =>
        prev.filter((internship) => internship.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to remove internship.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] p-8 text-white">

      <h1 className="text-4xl font-bold">
        ❤️ Saved Internships
      </h1>

      {internships.length === 0 ? (
        <p className="mt-6 text-slate-400">
          No saved internships yet.
        </p>
      ) : (
        <div className="mt-8 space-y-6">

          {internships.map((item: any) => (

            <div
              key={item.id}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
            >

              <h2 className="text-2xl font-bold">
                {item.company}
              </h2>

              <p className="mt-2 text-slate-400">
                {item.role}
              </p>

              <p className="mt-2 text-slate-400">
                📍 {item.location}
              </p>

              <div className="mt-4 inline-block rounded-full bg-green-600 px-4 py-2 font-semibold">
                {item.match_percentage}% Match
              </div>

              <div className="mt-6 flex gap-3">

                <a
                  href={item.apply_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-600 px-5 py-2 font-semibold text-white hover:bg-slate-800"
                >
                  🔗 Apply Now
                </a>

                <button
                  onClick={() => removeInternship(item.id)}
                  className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
                >
                  🗑 Remove
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}