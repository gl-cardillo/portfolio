# Luca Cardillo — Portfolio

My personal portfolio site, built with Next.js, TypeScript and Tailwind CSS.

**Live site:** [luca-cardillo.com](https://luca-cardillo.com)

I'm a UK-based front-end developer with 3+ years of professional experience building with React, TypeScript and Next.js. This site covers my experience, projects and skills, and has a contact form that emails me directly.

## Features

- **Light and dark mode** that follows the system setting, with a persisted toggle (`next-themes`)
- **Project showcase** with screenshot galleries, optimised with `next/image` (responsive sizes, WebP, blur placeholders)
- **Validated contact form** built with React Hook Form and Yup, sending email through EmailJS, with a honeypot field against spam bots
- **Share previews and SEO** with Open Graph and Twitter card tags, a sitemap and `robots.txt`
- **Self-hosted fonts** through `next/font`, with no render-blocking requests to Google Fonts
- **Scroll animations** with Framer Motion that respect the user's reduced-motion setting site-wide
- **Interactive particle background** in the hero section, lazy-loaded, lighter on mobile and turned off for reduced motion
- **Accessible navigation** with a mobile menu, active-section highlighting, a skip link and visible focus styles
- **Responsive layout** from small phones up to wide desktop screens

## Tech stack

| Area       | Tools                                              |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 16 (Pages Router), React 19                |
| Language   | TypeScript (strict mode)                           |
| Styling    | Tailwind CSS 4                                     |
| Animation  | Framer Motion, tsParticles                         |
| Forms      | React Hook Form, Yup, EmailJS                      |
| Tooling    | ESLint (flat config with `eslint-config-next`)     |

## Getting started

Requires Node.js 24.

```bash
git clone https://github.com/gl-cardillo/portfolio.git
cd portfolio
npm install
cp .env.example .env.local   # then add your EmailJS keys
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).


## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the development server       |
| `npm run build`     | Create a production build          |
| `npm start`         | Serve the production build         |
| `npm run lint`      | Lint the project with ESLint       |
| `npm run typecheck` | Type-check with the TypeScript compiler |

## Project structure

```
components/     Page sections: Home (hero), About, Experience, Projects,
                Skills, Contacts, plus the shared Nav and Layout
data/           Site content: projects, experience,
                skills and contact links
pages/          Next.js pages, _app (theme provider) and _document (fonts)
public/images/  Project screenshots and icons
styles/         Global styles and Tailwind directives
utils/          tsParticles configuration and shared React hooks
```

Content such as projects, skills and experience lives in typed arrays in `data/`, so adding a project means adding one entry to the `projects` array in `data/projects.ts`.

## Contact

- Email: [giovanniluca.cardillo@gmail.com](mailto:giovanniluca.cardillo@gmail.com)
- LinkedIn: [luca-cardillo](https://www.linkedin.com/in/luca-cardillo-528229162)
- GitHub: [gl-cardillo](https://github.com/gl-cardillo)
