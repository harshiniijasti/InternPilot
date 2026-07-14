"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    branch: "",
    graduation_year: "",
    cgpa: "",
    preferred_role: "",
    preferred_location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        graduation_year: Number(formData.graduation_year),
        cgpa: Number(formData.cgpa),
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      router.push("/dashboard/resume");
    } else {
      alert("Failed to save profile.");
    }
  } catch (error) {
    console.error(error);
    alert("Could not connect to backend.");
  }
};

  return (
    <div className="text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h1 className="text-3xl font-bold">
          👤 Profile
        </h1>

        <p className="mt-2 text-slate-400">
          Complete your profile information to personalize your internship recommendations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              College / University
            </label>

            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter your college name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Degree
            </label>

            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="B.Tech, B.E, MCA..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Branch / Specialization
            </label>

            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Computer Science"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

                    <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Graduation Year
              </label>

              <input
                type="number"
                name="graduation_year"
                value={formData.graduation_year}
                onChange={handleChange}
                placeholder="2028"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                CGPA
              </label>

              <input
                type="number"
                step="0.01"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                placeholder="8.5"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Preferred Role
            </label>

            <input
              type="text"
              name="preferred_role"
              value={formData.preferred_role}
              onChange={handleChange}
              placeholder="Software Engineer"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Preferred Location
            </label>

            <input
              type="text"
              name="preferred_location"
              value={formData.preferred_location}
              onChange={handleChange}
              placeholder="Hyderabad"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 outline-none focus:border-violet-500"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white hover:from-violet-500 hover:to-indigo-500"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}