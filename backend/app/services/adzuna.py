import os
import requests
from dotenv import load_dotenv

load_dotenv()

APP_ID = os.getenv("ADZUNA_APP_ID")
APP_KEY = os.getenv("ADZUNA_APP_KEY")


def get_internships(search="Software Engineer Intern", location="India"):

    url = (
        f"https://api.adzuna.com/v1/api/jobs/in/search/1"
        f"?app_id={APP_ID}"
        f"&app_key={APP_KEY}"
        f"&results_per_page=10"
        f"&what={search}"
        f"&where={location}"
        f"&content-type=application/json"
    )

    response = requests.get(url)

    if response.status_code != 200:
        return []

    data = response.json()

    jobs = data.get("results", [])

    internships = []

    for job in jobs:
        internships.append({
            "company": job.get("company", {}).get("display_name", "Unknown"),
            "role": job.get("title", "Intern"),
            "description": job.get("description", ""),
            "location": job.get("location", {}).get("display_name", ""),
            "apply_url": job.get("redirect_url", ""),
            "text": (
                job.get("title", "") + " " +
                job.get("description", "")
            ).lower()
        })

    return internships