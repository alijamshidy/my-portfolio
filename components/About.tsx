import { personalInfo } from "@/lib/data"
import { Code2, Globe, Server, Database } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "فرانت‌اند",
    description: "ساخت رابط‌های کاربری زیبا و واکنش‌گرا با React و Next.js",
  },
  {
    icon: Server,
    title: "بک‌اند",
    description: "توسعه API‌های قدرتمند با Node.js و Express",
  },
  {
    icon: Database,
    title: "دیتابیس",
    description: "مدیریت داده‌ها با MongoDB و PostgreSQL",
  },
  {
    icon: Code2,
    title: "کد تمیز",
    description: "نوشتن کد قابل نگهداری و مقیاس‌پذیر",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">درباره من</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            من علی جمشیدی هستم، توسعه‌دهنده فرانت‌اند و فول‌استک با علاقه به ساخت محصولات
            دیجیتال خلاقانه و کاربردی.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
