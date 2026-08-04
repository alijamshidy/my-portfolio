export const personalInfo = {
  name: "علی جمشیدی",
  title: "توسعه‌دهنده فرانت‌اند و فول‌استک",
  description:
    "عاشق ساختن محصولات دیجیتال زیبا و کاربردی. تمرکزم روی React، Next.js و تکنولوژی‌های مدرن وب هست.",
  email: "alijamshidy@gmail.com",
  github: "https://github.com/alijamshidy",
  linkedin: "https://linkedin.com/in/alijamshidy",
};

export const projects = [
  {
    id: 1,
    name: "Amazon Clone",
    description:
      "یک کلون کامل از آمازون با سبد خرید، صفحه چک‌اوت و طراحی ریسپانسیو",
    tech: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    github: "https://github.com/alijamshidy/amazon-clone",
    demo: null,
    stars: 1,
    isLive: false,
  },
  {
    id: 2,
    name: "Multi-Vendor E-commerce",
    description:
      "مارکت‌پلیس چند فروشنده‌ای با داشبورد مدیریت، احراز هویت و پشتیبانی چند زبانه",
    tech: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "NextAuth",
    ],
    github: "https://github.com/alijamshidy/multi-vendor-ecommerce",
    demo: null,
    stars: 0,
    isLive: false,
  },
  {
    id: 3,
    name: "NextJS Storefront",
    description:
      "فروشگاه آنلاین کامل با پرداخت Stripe، احراز هویت Clerk و مدیریت سفارشات",
    tech: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/alijamshidy/nextjs-storefront",
    demo: null,
    stars: 0,
    isLive: false,
  },
  {
    id: 4,
    name: "Node.js E-commerce API",
    description:
      "API بکاند برای فروشگاه آنلاین با احراز هویت JWT، پردازش پرداخت و ذخیره تصاویر",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Docker",
      "Cloudinary",
    ],
    github: "https://github.com/alijamshidy/nodejs-ecommerce-api",
    demo: null,
    stars: 0,
    isLive: false,
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML/CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "Prisma", level: 70 },
  ],
  tools: [
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 60 },
    { name: "REST API", level: 80 },
    { name: "Figma", level: 65 },
    { name: "VS Code", level: 90 },
  ],
};

export const navLinks = [
  { name: "خانه", href: "#home" },
  { name: "درباره من", href: "#about" },
  { name: "پروژه‌ها", href: "#projects" },
  { name: "مهارت‌ها", href: "#skills" },
  { name: "تماس", href: "#contact" },
];
