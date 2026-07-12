def calculate_match(resume_skills, job_skills):

    matched = []

    resume_lower = [skill.lower() for skill in resume_skills]
    job_lower = [skill.lower() for skill in job_skills]

    for skill in resume_skills:
        if skill.lower() in job_lower:
            matched.append(skill)

    if len(resume_skills) == 0 or len(job_skills) == 0:
        score = 0
    else:
        resume_match = len(matched) / len(resume_skills)
        job_match = len(matched) / len(job_skills)

        score = int(((resume_match + job_match) / 2) * 100)

        # Keep scores realistic
        if score > 95:
            score = 95
        elif score < 35 and len(matched) > 0:
            score = 35

    return {
        "match_percentage": score,
        "matched_skills": matched
    }