# 🐧 UbuntuOS Web Simulation – Portfolio

Welcome to my interactive **portfolio website** built in the style of **Ubuntu 20.04 Desktop**.  
It’s a **Next.js + TailwindCSS** project where you can explore apps, wallpapers, and menus just like an actual Ubuntu OS — but inside your browser.

👉 **Live Demo**: [Click here](https://yashsarkar164.github.io/YashPortfolio)  

---

## ✨ Features

- 🖥️ Ubuntu-style **desktop environment** (lock screen, navbar, side bar, applications menu)  
- 📂 **Interactive apps**: terminal, calculator, text editor, chrome, Spotify, VS Code, Todoist, Trash, etc.  
- 🎨 **Custom themes & wallpapers** available in `/public/themes` and `/public/wallpapers`  
- 📄 Integrated **resume viewer** (`public/files/Yash-resume.pdf`)  
- 📬 Contact form powered by **EmailJS**  
- ⚡ Built with **Next.js** and styled using **Tailwind CSS**

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/yashsarkar164/YashPortfolio.git
cd YashPortfolio
npm install
npm run dev

The site will run at http://localhost:3000

🛠️ Build & Deployment

Build production files:

npm run build
npm run export

All static files will be generated in the out/ folder.

This project is automatically deployed to GitHub Pages using GitHub Actions:

Workflow file: .github/workflows/gh-deploy.yml

Deployment branch: gh-pages

📬 Contact Form Setup

This project uses EmailJS for handling contact forms.

Create an account in EmailJS.

Add a new service (Gmail / Outlook recommended).

Copy the Service ID, Template ID, and User ID.

Add them to a .env.local file at the project root: