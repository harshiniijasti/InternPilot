"use client";

import { useState } from "react";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload-resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

console.log(data);

localStorage.setItem(
  "analysis",
  JSON.stringify(data)
);

console.log(localStorage.getItem("analysis"));

window.location.href = "/dashboard/analysis";

    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    }
  };

  return (
    <div className="text-white">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

        <h1 className="text-3xl font-bold">
          📄 Upload Resume
        </h1>

        <p className="mt-2 text-slate-400">
          Upload your latest resume in PDF format.
        </p>

        <div className="mt-8">
  <label
    htmlFor="resume"
    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-500 bg-slate-800/50 p-10 transition hover:bg-slate-800"
  >
    <span className="text-5xl">📄</span>

    <h3 className="mt-4 text-xl font-semibold">
      Click to upload your resume
    </h3>

    <p className="mt-2 text-slate-400">
      PDF files only
    </p>

    {file && (
      <div className="mt-5 rounded-lg bg-violet-600 px-4 py-2 text-white">
        ✅ {file.name}
      </div>
    )}
  </label>

  <input
    id="resume"
    type="file"
    accept=".pdf"
    onChange={(e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    }}
    className="hidden"
  />
</div>

        <button
          onClick={handleUpload}
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold"
        >
          Upload Resume
        </button>

      </div>
    </div>
  );
}