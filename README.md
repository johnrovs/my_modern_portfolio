# John Rommel Rovero — Developer Portfolio

A premium, animated software developer portfolio built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Customize your content

All editable content lives in `src/data/`:

- `skills.js` — technical skills by category
- `projects.js` — featured project cards (title, description, tags, links, images)
- `experience.js` — work experience timeline
- `certifications.js` — certification cards
- `socials.js` — social links (GitHub, LinkedIn, Email, Facebook)

## Replace placeholders

- **Resume**: swap `public/resume.pdf` with your real resume (keep the same filename, or update the path in `src/components/ResumeButton.jsx`).
- **Profile photo**: replace the Unsplash URL in `src/components/Hero.jsx` and `src/components/About.jsx` with your own photo (add it to `public/` and reference it as `/your-photo.jpg`).
- **Project screenshots**: replace the `image` URLs in `src/data/projects.js` with real screenshots of your projects.
- **Contact form**: the form in `src/components/Contact.jsx` currently simulates a submission. Wire it up to a real service such as [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or your own backend endpoint inside the `handleSubmit` function.
- **Email/phone/social URLs**: update in `src/data/socials.js` and `src/components/Contact.jsx`.

## Tech stack

- React 18 + Vite
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- Framer Motion (page + scroll animations)
- Lucide React + React Icons (icons)

## Structure

```
src/
  components/   Reusable UI components (Navbar, Hero, ProjectCard, etc.)
  data/         Editable content (skills, projects, experience, certifications, socials)
  hooks/        Custom hooks (typewriter effect, scroll-spy)
  App.jsx       Composes all sections
  index.css     Design tokens & global styles
```
