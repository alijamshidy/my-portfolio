import { ArrowUpRight, Github, Layers3 } from "@/components/ProjectIcons"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"

function ProjectLink({ href }: { href: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">View project <ArrowUpRight className="size-4" /></a>
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="bg-[#101014] py-24 text-zinc-50 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-sm font-medium text-violet-300">SELECTED WORK</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Built for the real world.</h2></div>
          <a href="https://github.com/alijamshidy" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"><Github className="size-4" />GitHub profile</a>
        </div>

        <article className="mt-12 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-7 sm:p-10"><div className="flex items-center gap-2 text-xs text-zinc-400"><span className="size-2 rounded-full bg-emerald-400" />FEATURED PROJECT</div><h3 className="mt-7 text-3xl font-medium tracking-tight sm:text-4xl">{featured.name}</h3><p className="mt-5 max-w-md leading-7 text-zinc-400">{featured.description}</p><div className="mt-7 flex flex-wrap gap-2">{featured.tech.map(tech => <Badge key={tech} className="border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-800">{tech}</Badge>)}</div><div className="mt-10"><ProjectLink href={featured.github} /></div></div>
            <div className="min-h-[330px] bg-gradient-to-br from-violet-500 via-indigo-600 to-sky-500 p-5 sm:p-8"><div className="h-full rounded-2xl border border-white/20 bg-[#11121b]/90 p-4 shadow-2xl shadow-indigo-950/50"><div className="flex items-center gap-2 border-b border-white/10 pb-4"><span className="size-2.5 rounded-full bg-rose-400" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="size-2.5 rounded-full bg-emerald-400" /><span className="ml-auto text-[10px] text-zinc-500">dashboard.app</span></div><div className="grid h-[calc(100%-41px)] grid-cols-[58px_1fr] gap-4 pt-4"><div className="space-y-3"><div className="h-7 rounded-md bg-violet-400/80" /><div className="h-3 rounded bg-white/10" /><div className="h-3 rounded bg-white/10" /><div className="h-3 rounded bg-white/10" /></div><div><div className="flex items-center justify-between"><div><p className="text-[10px] text-zinc-500">Overview</p><p className="mt-1 text-sm font-medium">Store analytics</p></div><div className="h-6 w-16 rounded bg-violet-400/20" /></div><div className="mt-5 grid grid-cols-3 gap-2"><div className="rounded-lg bg-white/5 p-2"><div className="h-2 w-8 rounded bg-white/15" /><div className="mt-3 h-4 w-10 rounded bg-white/70" /></div><div className="rounded-lg bg-white/5 p-2"><div className="h-2 w-8 rounded bg-white/15" /><div className="mt-3 h-4 w-8 rounded bg-white/70" /></div><div className="rounded-lg bg-white/5 p-2"><div className="h-2 w-8 rounded bg-white/15" /><div className="mt-3 h-4 w-12 rounded bg-white/70" /></div></div><div className="mt-4 flex h-20 items-end gap-2 rounded-lg bg-white/5 p-3">{[35, 55, 42, 70, 58, 88, 64].map((height, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet-500 to-violet-300" style={{ height: `${height}%` }} />)}</div></div></div></div></div>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-3">{rest.map((project, index) => <article key={project.id} className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-zinc-600"><div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} /><span className="text-xs text-zinc-500">0{index + 2}</span><Layers3 className="mt-8 size-6 text-zinc-500 transition-colors group-hover:text-violet-300" /><h3 className="mt-5 text-xl font-medium">{project.name}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-zinc-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-1.5">{project.tech.slice(0, 3).map(tech => <span key={tech} className="text-xs text-zinc-500">{tech}</span>)}</div><div className="mt-7"><ProjectLink href={project.github} /></div></article>)}</div>
      </div>
    </section>
  )
}
