export const personalInfo = {
  name: "Ali Jamshidy",
  title: "Full-Stack Developer",
  description: "I build fast, polished web products with React, Next.js, TypeScript, and modern backend tools.",
  email: "alijamshidy@gmail.com",
  github: "https://github.com/alijamshidy",
  linkedin: "https://linkedin.com/in/alijamshidy",
}

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export const projects = [
  { id: 1, name: "Multi-Vendor E-commerce", description: "A marketplace platform with seller workflows, authentication, and an operational dashboard.", tech: ["Next.js", "TypeScript", "NextAuth", "Tailwind CSS"], github: "https://github.com/alijamshidy/multi-vendor-ecommerce", accent: "from-violet-500 to-fuchsia-500" },
  { id: 2, name: "Next.js Storefront", description: "A production-minded storefront with a reliable checkout flow and order management.", tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe"], github: "https://github.com/alijamshidy/nextjs-storefront", accent: "from-cyan-500 to-blue-600" },
  { id: 3, name: "Node.js E-commerce API", description: "A REST API for commerce workflows with JWT authentication, payments, and media storage.", tech: ["Node.js", "Express", "MongoDB", "Docker"], github: "https://github.com/alijamshidy/nodejs-ecommerce-api", accent: "from-amber-400 to-orange-600" },
  { id: 4, name: "Amazon Clone", description: "A responsive e-commerce interface focused on familiar browsing and cart experiences.", tech: ["JavaScript", "HTML", "CSS", "Responsive UI"], github: "https://github.com/alijamshidy/amazon-clone", accent: "from-emerald-400 to-teal-600" },
]

export const skills = {
  frontend: [{ name: "React", level: 90 }, { name: "Next.js", level: 85 }, { name: "TypeScript", level: 80 }, { name: "Tailwind CSS", level: 95 }],
  backend: [{ name: "Node.js", level: 75 }, { name: "Express", level: 70 }, { name: "MongoDB", level: 70 }, { name: "PostgreSQL", level: 65 }],
  workflow: [{ name: "Git & GitHub", level: 85 }, { name: "REST APIs", level: 80 }, { name: "Docker", level: 60 }, { name: "Figma", level: 65 }],
}
