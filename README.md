# My Portfolio — Ali Jamshidy

A **single-page personal portfolio** for Ali Jamshidy, Full-Stack Developer, built with **Next.js 16, React 19, TypeScript, and Tailwind CSS v4** — featuring a hero section, services, projects, tabbed skills, and a contact form in a clean dark-accented design.

> ℹ️ The package name is `cv` (this project started as a CV site) — the repository is `my-portfolio`.

---

## ✨ Sections

| Section | Anchor | Description |
|---------|--------|-------------|
| **Header** | — | Fixed blurred navbar with "AJ." logo, anchor links, and a mobile menu |
| **Hero** | `#home` | Radial-gradient backdrop, "Available for freelance" badge, CTA buttons, GitHub/LinkedIn links |
| **About** | `#about` | Four service cards — frontend, backend, data, delivery |
| **Projects** | `#projects` | One featured project with a pure-CSS dashboard mockup + 3 project cards, linked to real GitHub repos |
| **Skills** | `#skills` | Tabbed skill lists (Frontend / Backend / Workflow) with level bars |
| **Contact** | `#contact` | Contact card + form (submits via `mailto:` — no backend needed) |
| **Footer** | — | Dynamic year + social links |

All content (name, title, email, social links, project list) is centralized in [`lib/data.ts`](lib/data.ts), which also feeds the SEO metadata.

---

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) + [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) — animations are pure CSS (no animation library)
- [shadcn/ui](https://ui.shadcn.com/)-style primitives (`components/ui/`) built on [Radix UI](https://www.radix-ui.com/) and [@base-ui/react](https://base-ui.com/)
- [lucide-react](https://lucide.dev/) + [@hugeicons/react](https://hugeicons.com/) — icons
- Fonts: Inter, Geist, Geist Mono via `next/font`
- **Package manager: [pnpm](https://pnpm.io/)**

---

## 💻 Installation

### Prerequisites
- **Node.js 20.9+** (required by Next.js 16)
- **pnpm 10+**

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alijamshidy/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   pnpm build
   pnpm start
   ```

No environment variables are required — everything is configured in code.

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |

---

## 📁 Project Structure

```
my-portfolio/
├── app/                    # App Router: layout, page, favicon, globals.css
├── components/
│   ├── ui/                 # shadcn/ui-style primitives
│   ├── Header.tsx          # Fixed blurred navbar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # Service cards
│   ├── Projects.tsx        # Projects section
│   ├── Skills.tsx          # Tabbed skills
│   ├── Contact.tsx         # Contact card + form
│   └── Footer.tsx          # Footer
├── lib/
│   ├── data.ts             # All site content (name, links, projects, skills)
│   └── utils.ts            # cn() helper
└── public/                 # Static assets
```

---

## 📜 License

This project is **private** and all rights are reserved.

---

## 🏷 Topics

`portfolio`, `nextjs`, `react`, `typescript`, `tailwindcss`, `shadcn-ui`, `personal-website`, `developer-portfolio`
