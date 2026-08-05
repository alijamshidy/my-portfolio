"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/data"

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <Link href="#home" className="font-semibold tracking-tight">AJ<span className="text-primary">.</span></Link>
      <nav className="hidden items-center gap-6 md:flex">{navLinks.map(link => <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.name}</Link>)}</nav>
      <a href="#contact" className="hidden h-6 items-center rounded-md border border-border px-2 text-xs hover:bg-input/50 md:inline-flex">Let&apos;s talk</a>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t bg-background px-5 py-4 md:hidden">{navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">{link.name}</Link>)}</nav>}
  </header>
}
