FUTURELEARN – AI EDUCATION / COACHING WEBSITE

A modern education website for students and parents, designed to showcase learning programs, class options, creative learning activities, and enrollment support.

Project goal:
- Create a professional learning website for an education brand
- Provide a responsive user interface for desktop and mobile
- Add an enrollment form connected to a lightweight Node.js backend
- Make the project deployment-ready for Render or other hosting platforms

Website sections:
- Home
- About Us
- Classes
- Courses
- Kids Learning
- Creative Studio
- Services
- Why Us
- Testimonials
- Contact

Files in this project:
- index.html — landing page and all main website sections
- enroll.html — enrollment form page
- style.css — visual styling and responsive layout
- script.js — menu toggle and form interaction logic
- server.js — Node.js server for serving files and handling enrollment submissions
- render.yaml — Render deployment configuration
- package.json — app metadata and start script

Local setup:
1. Install Node.js if it is not already installed.
2. Open PowerShell in this project folder.
3. Run: npm install
4. Run: npm start
5. Open: http://localhost:3000

Enrollment flow:
- Home page includes a direct enrollment flow
- Enroll page is available at: http://localhost:3000/enroll.html
- Enrollment data is saved in enrollments.json
- Health endpoint: http://localhost:3000/api/health

Important note:
- Do not open the HTML files directly for enrollment testing, because the form POST must go through the local server.

Features included:
- Responsive UI for mobile and desktop
- Sticky navigation bar
- Hero section with CTA buttons
- Student showcase and course sections
- Creative learning cards
- Contact form with interaction behavior
- Enrollment form with subject selection and backend persistence

Deployment:
- This project includes a Render Blueprint configuration in render.yaml
- Render will use npm install and npm start automatically
- /api/health is configured as the health check endpoint

Note:
- The demo contact email and phone number are sample values and should be replaced before public use.
- Since the free Render plan uses temporary filesystem storage, enrollment records may be lost after restart or redeploy. For production usage, use persistent storage.

Project status:
- Completed and tested locally
- Ready for GitHub and Render deployment
