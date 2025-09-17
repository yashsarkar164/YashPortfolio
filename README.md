# Ubuntu OS Simulation - Portfolio

Welcome to my interactive **portfolio website** built to simulate the **Ubuntu 20.04 Desktop**. This is a **Next.js + TailwindCSS** project where you can explore apps, wallpapers, and menus just like a real Ubuntu OS, but right inside your browser.

**Live Demo**: [CLICK HERE](https://yashsarkar-portfolio.vercel.app/)

---

## Features

-   **Ubuntu-style desktop environment** including a lock screen, navbar, side bar, and applications menu.
-   **Interactive apps**: terminal, calculator, text editor, Chrome, Spotify, VS Code, Todoist, Trash, and more.
-   **Custom themes & wallpapers** are available in `/public/themes` and `/public/wallpapers`.
-   **Integrated resume viewer** (`public/files/Yash-resume.pdf`).
-   Contact form powered by **EmailJS**.
-   Built with **Next.js** and styled using **Tailwind CSS**.

---

## 🚀 Getting Started

To run this project locally, follow these steps.

### Clone the repository:

```bash
git clone https://github.com/yashsarkar164/YashPortfolio.git
cd YashPortfolio
````

### Install dependencies:

```bash
npm install
```

### Run the development server:

```bash
npm run dev
```

The site will now be running at `http://localhost:3000`.

-----

## 🛠️ Build & Deployment

### Build production files:

```bash
npm run build
npm run export
```

All static files will be generated in the `out/` folder.

This project is automatically deployed to GitHub Pages using GitHub Actions. 
The workflow file is `.github/workflows/gh-deploy.yml`, and the deployment branch is `gh-pages`.

-----

## Contact Form Setup

This project uses EmailJS for handling contact forms.

1.  **Create an account** on [EmailJS](https://www.emailjs.com/).
2.  **Add a new service** (Gmail or Outlook is recommended).
3.  **Copy** your Service ID, Template ID, and User ID.
4.  **Add them to a `.env.local` file** at the root of your project:

<!-- end list -->

```bash
NEXT_PUBLIC_USER_ID= 'your_user_id'
NEXT_PUBLIC_TEMPLATE_ID= 'template_fqqqb9g'
NEXT_PUBLIC_SERVICE_ID= 'your_service_id'
```

-----

## Overview

### Desktop Screenshot

<img src="public/themes/Yaru/Screenshots/desktop.png" alt="Desktop Screenshot" />

-----

## Contributing

Contributions are always welcome\! If you'd like to add new features or improve the design, please follow these steps:

1.  **Fork** the repository.
2.  **Create your branch**: `git checkout -b feature/AmazingFeature`
3.  **Commit your changes**: `git commit -m "Add AmazingFeature"`
4.  **Push** to the branch: `git push origin feature/AmazingFeature`
5.  **Open a Pull Request**.

-----

## ☕ Support

If you like this project, you can support me here:

<a href="https://buymeacoffee.com/yashsarkar" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 140px !important;" ></a>

[Buy Me a Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://buymeacoffee.com/yashsarkar)


```
```