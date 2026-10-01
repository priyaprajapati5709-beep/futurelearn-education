FUTURELEARN – AI EDUCATION/COACHING WEBSITE
Task: Task 3 – AI Website Generation
Domain: Education / Coaching

FILES:
- index.html: Complete website
- style.css: Responsive styling
- script.js: Mobile menu and contact form interaction

HOW TO OPEN:
1. Keep all files in the same folder.
2. Install Node.js if it is not installed.
3. Open PowerShell in this folder and run: npm start
4. Open http://localhost:3000 in your browser.

BACKEND:
- The enrollment page is available at http://localhost:3000/enroll.html.
- Submitted enrollment requests are saved to enrollments.json.
- Health check: http://localhost:3000/api/health
- Do not open index.html directly when testing enrollment; the API needs the local server.

TASK 3 OUTPUTS:
- Website with Home, About, Courses, Why Us, Testimonials and Contact sections.
- Responsive design for desktop and mobile.
- Contact form interaction.
- Ready to publish using any static hosting service.

Note: The email/phone shown on the demo site are sample details and should be replaced before public use.

DEPLOY:
- Create a Render Blueprint from this GitHub repository; Render will use render.yaml to configure the Node.js web service.
- The /api/health endpoint is used for the service health check.
- The free service uses temporary filesystem storage, so enrollment records in enrollments.json may be lost when the service restarts or redeploys. Use persistent storage before relying on this for real enrollments.
