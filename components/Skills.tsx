import { skills } from "@/lib/data"
import { cn } from "@/lib/utils"

interface SkillBarProps {
  name: string
  level: number
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

interface SkillSectionProps {
  title: string
  items: { name: string; level: number }[]
}

function SkillSection({ title, items }: SkillSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="space-y-4">
        {items.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">مهارت‌ها</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تکنولوژی‌ها و ابزارهایی که در پروژه‌هام ازشون استفاده می‌کنم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillSection title="فرانت‌اند" items={skills.frontend} />
          <SkillSection title="بک‌اند" items={skills.backend} />
          <SkillSection title="ابزارها" items={skills.tools} />
        </div>
      </div>
    </section>
  )
}
