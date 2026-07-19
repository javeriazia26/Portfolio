import { useEffect, useState } from 'react'
import { nav, contact } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-md border-b border-ink-800' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-[72px]">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-lg border border-ink-700 bg-ink-900 grid place-items-center font-mono text-signal text-sm group-hover:border-signal/60 transition-colors">
            JZ
          </span>
          <span className="font-display text-[15px] tracking-tight text-ink-100">Javeria Zia</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] text-ink-300 hover:text-signal transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-4 py-2 font-mono text-[13px] text-signal hover:bg-signal/20 hover:border-signal transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-ink-700 text-ink-200"
        >
          <div className="w-4 flex flex-col gap-[5px]">
            <span
              className={`h-px bg-current transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span className={`h-px bg-current transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span
              className={`h-px bg-current transition-transform duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-b border-ink-800 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-ink-950/95 backdrop-blur-md`}
      >
        <div className="section-shell py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-ink-200 hover:text-signal transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-4 py-2 font-mono text-[13px] text-signal"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
