# Personal Portfolio Website

A modern and responsive personal portfolio website built with **Flask**, **HTML**, and **CSS** to showcase my skills, projects, certifications, and professional profile.

## Features

- Responsive and clean user interface
- About Me section
- Technical Skills
- Featured Projects with GitHub links
- Cybersecurity & Programming Certificates
- Contact Information
- Flask Blueprint-based routing
- Static file management for CSS and images

## Technologies Used

- Python
- Flask
- HTML5
- CSS3
- Jinja2 Templates

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

### 3. Activate the virtual environment

**Windows**

```bash
.venv\Scripts\activate
```

**Linux/macOS**

```bash
source .venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the application

```bash
python run.py
```

Open your browser and visit:

```
http://127.0.0.1:5000/
```

## Project Structure

```
Portfolio/
│
├── app/
│   ├── routes/          # Flask routes and blueprints
│   ├── templates/       # HTML templates
│   ├── static/          # CSS, images, icons, and other assets
│   └── __init__.py
│
├── run.py               # Application entry point
├── requirements.txt
└── README.md
```

## Portfolio Sections

- Home
- About Me
- Skills
- Projects
- Certificates
- GitHub
- Contact

## Future Improvements

- Dark/Light mode
- Project filtering
- Contact form with email integration
- Downloadable resume
- Blog section

## Author

**Javeria Zia**

- GitHub: https://github.com/javeriazia26
- LinkedIn: https://www.linkedin.com/in/javeriazia26