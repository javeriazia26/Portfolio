import { useEffect, useState } from 'react'
import { roles, heroStats, contact } from '../data/content'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-signal/10 blur-[120px] -z-10" />

      <div className="section-shell">
        <div data-reveal className="reveal">
          <span className="eyebrow">Backend · Databases · Security</span>
        </div>

        <h1
          data-reveal
          data-reveal-delay="80"
          className="reveal font-display font-semibold text-[13vw] leading-[0.98] tracking-tight text-ink-100 mt-6 sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Javeria Zia
        </h1>

        <div
          data-reveal
          data-reveal-delay="160"
          className="reveal mt-6 h-8 flex items-center"
        >
          <span className="font-mono text-sm sm:text-base text-signal">
            {roles[index]}
            <span className="inline-block w-[2px] h-[1em] bg-signal ml-1 align-middle animate-blink" />
          </span>
        </div>

        <p
          data-reveal
          data-reveal-delay="240"
          className="reveal mt-6 max-w-xl text-ink-300 text-base sm:text-lg leading-relaxed"
        >
          I am a Computer Science student passionate about backend development, database
          systems, and cybersecurity. I enjoy building secure web applications, designing
          relational databases, and continuously learning modern backend technologies.
          Currently, I am expanding my skills by implementing REST APIs and strengthening my
          understanding of secure software development.
        </p>

        <div
          data-reveal
          data-reveal-delay="320"
          className="reveal mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-[13px] font-medium text-ink-950 hover:bg-signal-dim transition-colors"
          >
            View Projects
          </a>
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-3 font-mono text-[13px] text-ink-100 hover:border-signal hover:text-signal transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div
          data-reveal
          data-reveal-delay="400"
          className="reveal mt-14 flex flex-wrap gap-3"
        >
          {heroStats.map((stat) => (
            <span key={stat} className="chip">
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
