def analyze_resume(text: str):

    skills_database = [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "FastAPI",
        "Django",
        "Flask",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "HTML",
        "CSS",
        "Machine Learning",
        "TensorFlow",
        "PyTorch",
        "Pandas",
        "NumPy"
    ]

    found_skills = []

    lower_text = text.lower()

    for skill in skills_database:
        if skill.lower() in lower_text:
            found_skills.append(skill)

    score = min(len(found_skills) * 10, 100)

    categories = []

    if "Python" in found_skills:
        categories.append("Backend Development")

    if "React" in found_skills:
        categories.append("Frontend Development")

    if "Machine Learning" in found_skills:
        categories.append("AI / Machine Learning")

    if "SQL" in found_skills or "PostgreSQL" in found_skills:
        categories.append("Database")

    return {
        "resume_score": score,
        "skills": found_skills,
        "eligible_categories": categories,
        "strengths": [
            "Problem Solving",
            "Backend Development",
            "API Development",
            "Team Collaboration"
        ]
    }