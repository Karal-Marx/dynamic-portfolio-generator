# 🌐 Dynamic Portfolio Generator

A web application that lets users generate a **personal portfolio website** by filling out a simple form and selecting from multiple templates. Built with **React** and **Vite**.

----------------------------------------------------------------------------------------

## 🚀 Features

- 🔧 Dynamic form to input:
  -> Hero section details (name, title, image)
  -> About, Skills, Services
  -> Portfolio projects
  -> Testimonials and Blog
  -> Contact info
- 🎨 Two professional, responsive templates
- 📄 Preview card before final generation
- 🌍 Fully generated portfolio page rendered based on selected template and input
- 🖼️ Base64 image support for profile photos
- ⚙️ Built using modular, reusable React components

--------------------------------------------------------------------------------------

## 🛠 Tech Stack

- **Frontend**: React, Vite
- **Styling**: Vanilla CSS 
- **Routing**: React Router
- **Deployment**: GitHub Pages / Netlify (optional)

--------------------------------------------------------------------------------

## 📁 Project Structure

src/
├── components/
│ ├── ChooseTemplate.jsx
│ ├── Form.jsx
│ ├── Preview.jsx
│ ├── Portfolio.jsx
│ └── Header.jsx
├── templateComponents/
│ ├── HeroSection.jsx
│ ├── AboutMe.jsx
│ ├── Skills.jsx
│ ├── Services.jsx
│ ├── Portfolio.jsx
│ ├── Testimonials.jsx
│ ├── Blog.jsx
│ ├── Contact.jsx
│ └── Footer.jsx
├── templates/
│ ├── TemplateOne.jsx
│ └── TemplateTwo.jsx
├── assets/
│ └── (sample images/icons)
├── App.jsx
├── main.jsx
└── index.css


-------------------------------------------------------------------------------------------

## 🧑‍💻 Running Locally

# 1. Clone the repository
git clone https://github.com/your-username/dynamic-portfolio-generator.git
cd dynamic-portfolio-generator

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

-------------------------------------------------------------------------------------

🔒 .gitignore Suggestions

node_modules
.env
dist
.vite
.vscode
*.log
vite.config.js   # optional

----------------------------------------------------------------------------------------

📌 To-Do
 Add template download / PDF export

 Add more templates

 Improve form UX and validation

 Add animations or transitions



✨ Acknowledgements
Inspired by modern developer portfolios and built to make professional portfolio creation easy for anyone.
