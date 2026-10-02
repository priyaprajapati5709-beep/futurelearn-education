# 🌟 FutureLearn Education Website

<div align="center">

![FutureLearn](https://img.shields.io/badge/FutureLearn-Education%20Platform-0A66C2?style=for-the-badge&logo=bookstack)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)
![HTML5](https://img.shields.io/badge/HTML5-Responsive-E34F26?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design-1572B6?style=for-the-badge&logo=css3)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=for-the-badge)

</div>

A modern and engaging education platform designed for students, parents, and learners. This project showcases academic subjects, skill-focused learning, creative programs, and a functional enrollment system for a coaching brand.

## ✨ Highlights
- 🎓 Professional education landing page
- 📚 Class-wise learning sections and subject roadmap
- 🧠 Creative Studio and skill-based offerings
- 💬 Contact and enrollment forms
- 📱 Responsive design for mobile and desktop
- 🚀 Deployment-ready setup for Render

## 🌐 Live Preview
- Local app: http://localhost:3000
- Enrollment page: http://localhost:3000/enroll.html
- Health check: http://localhost:3000/api/health

## 🛠️ Tech Stack
- HTML5
- CSS3
- JavaScript
- Node.js
- Render deployment configuration

## 📁 Project Structure
- `index.html` — main education website homepage
- `enroll.html` — enrollment form page
- `style.css` — full styling and responsive layout
- `script.js` — mobile menu and form behaviors
- `server.js` — Node.js backend and enrollment API
- `render.yaml` — deployment setup for Render
- `package.json` — app scripts and config

## 🚀 How to Run
1. Install Node.js.
2. Open the project folder in PowerShell.
3. Run:

```bash
npm install
npm start
```

4. Visit:

```text
http://localhost:3000
```

## 📝 Enrollment Flow
- Students can enroll from the homepage or the dedicated enrollment page.
- Enrollment details are saved in `enrollments.json`.
- Required fields are validated before submission.

> ⚠️ Use the local server for testing enrollment requests. Opening the HTML directly will not work correctly with the backend API.

## 🌍 Deployment
This project is configured for Render using the included `render.yaml` file.

## 💡 Notes
- Demo contact email and phone number are sample values and should be replaced before public launch.
- Since the free Render plan uses temporary filesystem storage, enrollment records may reset after restarts or redeployments.

## ✅ Status
- ✅ Tested locally
- ✅ Enrollment API working
- ✅ GitHub ready
- ✅ Render deployment ready

## 🔗 GitHub Repository
https://github.com/priyaprajapati5709-beep/futurelearn-education

## 🎯 Project Goal
To build a polished, trustworthy, and visually engaging education website that feels ready for real-world use and presentation.
