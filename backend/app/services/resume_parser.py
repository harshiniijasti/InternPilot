from PyPDF2 import PdfReader


def extract_resume_text(file_path: str):
    reader = PdfReader(file_path)

    text = ""

    for page in reader.pages:
        extracted = page.extract_text()

        if extracted:
            text += extracted + "\n"

    return text