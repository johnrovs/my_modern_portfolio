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
- **Email/phone/social URLs**: update in `src/data/socials.js` and `src/components/Contact.jsx`.

## Wiring up the contact form (send to Gmail)

The contact form in `src/components/Contact.jsx` sends messages using **[EmailJS](https://www.emailjs.com/)**, a client-side email service — no backend server required, and it delivers straight to your Gmail inbox.

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/) (free tier is fine — 200 emails/month).

2. **Add an email service** → *Email Services* → *Add New Service* → choose **Gmail** → sign in and authorize with `roverorommel12@gmail.com`. This is what actually sends the email through your Gmail account. Copy the generated **Service ID**.

3. **Create a template** → *Email Templates* → *Create New Template*. Set it up like this:
   - **To email**: `{{to_email}}`
   - **From name**: `{{from_name}}`
   - **Reply-To**: `{{from_email}}` (so hitting "reply" in Gmail replies straight to the person who contacted you)
   - **Subject**: `{{subject}}`
   - **Content**: include `{{message}}` somewhere in the body
   
   Copy the generated **Template ID**.

4. **Get your Public Key** → *Account* → *General* → copy the **Public Key**.

5. **Add the keys to your project**:
   ```bash
   cp .env.example .env.local
   ```
   Then fill in `.env.local`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
   `.env.local` is already gitignored, so these stay out of version control.

6. **Restart the dev server** (`npm run dev`) so Vite picks up the new env vars, then submit the form to test. Successful submissions land in `roverorommel12@gmail.com`; if the keys are missing or the request fails, the form shows an inline error instead of a false "success" message.

When you deploy (Vercel, Netlify, GitHub Pages, etc.), add the same three `VITE_EMAILJS_*` variables in your host's environment variable settings — `.env.local` never gets deployed.

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
