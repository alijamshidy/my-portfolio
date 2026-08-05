import { ArrowDownRight, GitFork, Mail, Network, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export default function Hero() {
  return <section id="home" className="relative isolate overflow-hidden pt-16"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,oklch(0.7_0.18_280_/_0.18),transparent_32%),radial-gradient(circle_at_15%_55%,oklch(0.75_0.15_170_/_0.12),transparent_28%)]" />
    <div className="mx-auto grid min-h-[650px] max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.2fr_0.8fr]">
      <div><Badge variant="outline" className="mb-6 gap-1.5 rounded-full px-3 py-1"><span className="size-2 rounded-full bg-emerald-500" />Available for freelance work</Badge>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Hello, I&apos;m</p><h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{personalInfo.name}.</h1><h2 className="mt-3 text-xl text-primary sm:text-2xl">{personalInfo.title}</h2><p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{personalInfo.description}</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="inline-flex h-8 items-center gap-1 rounded-md bg-primary px-2.5 text-xs font-medium text-primary-foreground hover:bg-primary/80">Explore my work <ArrowDownRight className="size-4" /></a><a href={`mailto:${personalInfo.email}`} className="inline-flex h-8 items-center gap-1 rounded-md border px-2.5 text-xs font-medium hover:bg-input/50">Start a project <Mail className="size-4" /></a></div>
        <div className="mt-10 flex gap-4"><a aria-label="GitHub" href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><GitFork /></a><a aria-label="LinkedIn" href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><Network /></a></div>
      </div>
      <div className="relative mx-auto w-full max-w-sm"><div className="aspect-square rounded-[2rem] border bg-card p-5 shadow-2xl shadow-primary/10"><div className="flex h-full flex-col justify-between rounded-[1.4rem] bg-gradient-to-br from-primary/15 via-background to-violet-500/15 p-7"><Sparkles className="size-7 text-primary" /><div><p className="text-sm text-muted-foreground">Building on the web</p><p className="mt-2 font-mono text-sm leading-7">React<br />Next.js<br />TypeScript<br />Node.js</p></div><div className="text-7xl font-semibold tracking-tighter">AJ<span className="text-primary">.</span></div></div></div></div>
    </div>
  </section>
}
