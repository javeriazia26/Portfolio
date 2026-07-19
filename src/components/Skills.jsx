import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 md:py-32">
      <div data-reveal className="reveal">
        <span className="eyebrow">Technical Skills</span>
        <h2 className="section-heading">
          Backend foundations with database and security depth.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            data-reveal-delay={String(i * 70)}
            className="reveal card p-6 hover:border-signal/40 transition-colors duration-300 group"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-signal/70 group-hover:bg-signal transition-colors" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[12px] px-2.5 py-1.5 rounded border border-ink-700 bg-ink-950/60 text-ink-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
