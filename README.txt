# FutureLearn Education Website

<div align="center">

![FutureLearn](https://img.shields.io/badge/FutureLearn-Education%20Platform-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-Responsive-orange?style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design-ff69b4?style=for-the-badge)

</div>

A modern education and coaching website for students, parents, and learners. The project showcases course offerings, class-based learning paths, creative programs, and a working enrollment system for academic support.

## Live Preview
- Local preview: http://localhost:3000
- Enrollment page: http://localhost:3000/enroll.html
- Health check: http://localhost:3000/api/health

## Features
- Responsive design for desktop and mobile
- Professional landing page with multiple educational sections
- Course and class discovery experience
- Creative learning and skill programs
- Contact and enrollment form experience
- Lightweight Node.js server with enrollment API
- Render-ready deployment configuration

## Tech Stack
- HTML5
- CSS3
- JavaScript
- Node.js
- Render deployment config

## Project Structure
- `index.html` — homepage and main sections
- `enroll.html` — enrollment page
- `style.css` — styling and responsive layout
- `script.js` — menu and form interactions
- `server.js` — backend server and enrollment API
- `render.yaml` — deployment config for Render
- `package.json` — project scripts and metadata

## Getting Started
1. Install Node.js if needed.
2. Open the project folder in PowerShell.
3. Run:

```bash
npm install
npm start
```

4. Open:

```text
http://localhost:3000
```

## Enrollment Flow
- The enrollment form is available from the homepage and the separate enrollment page.
- Submitted entries are stored in `enrollments.json`.
- The form validates required details before submitting.

> Important: Use the local server for testing enrollment requests. Opening HTML files directly will not work correctly for the backend API.

## Deployment
This project is configured for Render using the included `render.yaml` file.

## Notes
- Sample email and phone details are demo values and should be replaced before public launch.
- Since the free Render plan uses temporary filesystem storage, enrollment data may reset during restarts or redeployments.

## Status
- ✅ Tested locally
- ✅ API working
- ✅ GitHub ready
- ✅ Render deployment ready

## GitHub Repository
https://github.com/priyaprajapati5709-beep/futurelearn-education

## Project Goal
To create a polished education website that feels professional, trustworthy, and engaging for prospective learners and parents.
