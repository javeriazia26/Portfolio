import { languages, contact } from '../data/content'

export default function GithubStats() {
  return (
    <section id="github" className="section-shell py-24 md:py-32">
      <div data-reveal className="reveal">
        <span className="eyebrow">GitHub Statistics</span>
        <h2 className="section-heading">Live development activity from GitHub.</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <a
          href={contact.githubUrl}
          target="_blank"
          rel="noreferrer"
          data-reveal
          data-reveal-delay="80"
          className="reveal lg:col-span-3 card p-7 sm:p-9 hover:border-signal/40 transition-colors duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulseGlow" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">
                GitHub Stats
              </h3>
            </div>
            <p className="text-ink-300 leading-relaxed max-w-md">
              Linked to the live GitHub profile for repositories, contributions, and activity.
            </p>
          </div>
          <span className="mt-8 font-mono text-sm text-signal inline-flex items-center gap-2">
            github.com/javeriazia26 <span aria-hidden>↗</span>
          </span>
        </a>

        <div
          data-reveal
          data-reveal-delay="160"
          className="reveal lg:col-span-2 card p-7 sm:p-9"
        >
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300 mb-5">
            Languages
          </h3>
          <p className="text-ink-300 leading-relaxed text-sm mb-6">
            Python, SQL, C, HTML, and CSS across backend, database, and desktop projects.
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="font-mono text-[12px] px-2.5 py-1.5 rounded border border-ink-700 bg-ink-950/60 text-ink-200"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
