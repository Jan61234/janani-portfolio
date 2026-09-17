# Janani Priya B – Personal Portfolio Website

A modern, high-performance personal portfolio website designed for **Janani Priya B** (B.Tech Computer Science and Engineering). Tailored specifically for internship applications and campus placement drives.

---

## 🌟 Features & Highlights

- **Aesthetic**: Deep obsidian black background with glowing neon pink & electric purple AI/cyberpunk accents.
- **Interactive AI Neural Canvas**: Background node & constellation animation that responds smoothly to mouse interactions.
- **Dynamic Typing Effect**: Cycles through technical roles in the Hero section.
- **All 8 Complete Sections**:
  1. **Hero**: Status indicator (`Open for Internships`), title, bio, quick CTAs (View Projects, Download Resume, GitHub, LinkedIn).
  2. **About Me**: Narrative bio, engineering focus, spoken language fluency badges (English, Tamil, French).
  3. **Skills**: Categorized cards for Programming, AI & Data Science, DBMS/Databases, IoT & Embedded, Tools.
  4. **Projects**: Showcase of 5 featured projects with category filter tabs and interactive detail modals.
  5. **Internship & Experience**: Academic project work, workshops, and technical training timeline.
  6. **Education**: B.Tech CSE coursework and academic milestones.
  7. **Certifications**: Verified credentials in Python, AI/ML, IoT, and SQL/DBMS.
  8. **Contact**: Interactive messaging form, email copy button with toast notification, and social links.

---

## 🚀 Running Locally

Because the project is built with vanilla HTML5, CSS3, and JavaScript, it requires **zero build steps or installations**.

### Start Local Web Server:
Open terminal in this directory and run:
```bash
python -m http.server 8000
```
Then visit **`http://localhost:8000`** in your browser.

---

## 🎨 How to Customize

### 1. Adding Your Photo
1. Save your photo as `janani-photo.jpg` inside the `assets/` folder.
2. In `index.html` (around line 96), update the `src` attribute:
   ```html
   <!-- Change from assets/avatar-placeholder.svg to: -->
   <img src="assets/janani-photo.jpg" alt="Janani Priya B" class="avatar-img" />
   ```

### 2. Updating Your Resume
Replace `assets/resume-mock.pdf` with your actual resume PDF named `Janani_Priya_B_Resume.pdf` or update the download link in `index.html`.

### 3. Adding Your Actual Social URLs & Email
In `index.html` and `js/main.js`, update:
- Your GitHub profile URL: `https://github.com/your-username`
- Your LinkedIn profile URL: `https://linkedin.com/in/your-username`
- Your email address: `jananipriyab@example.com`

---

## 🌐 Free Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Push this folder to a GitHub repository named `janani-portfolio` (or `<your-username>.github.io`).
2. Go to **Repository Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live in 1-2 minutes at: `https://<your-username>.github.io/janani-portfolio/`!

### Option 2: Vercel / Netlify
Drag and drop this folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant SSL-secured deployment.
