import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24 md:py-32">
      <div data-reveal className="reveal">
        <span className="eyebrow">Contact</span>
        <h2 className="section-heading">
          Let&rsquo;s connect about backend, database, or cybersecurity opportunities.
        </h2>
      </div>

      <div
        data-reveal
        data-reveal-delay="120"
        className="reveal mt-12 card p-7 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400 mb-3">
            Email
          </h3>
          <a
            href={`mailto:${contact.email}`}
            className="text-ink-100 hover:text-signal transition-colors break-all"
          >
            {contact.email}
          </a>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400 mb-3">
            LinkedIn
          </h3>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-ink-100 hover:text-signal transition-colors"
          >
            {contact.linkedinLabel}
          </a>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400 mb-3">
            Location
          </h3>
          <span className="text-ink-100">{contact.location}</span>
        </div>
      </div>

      <div
        data-reveal
        data-reveal-delay="200"
        className="reveal mt-8 flex flex-wrap gap-4"
      >
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-[13px] font-medium text-ink-950 hover:bg-signal-dim transition-colors"
        >
          Email Me
        </a>
        <a
          href={contact.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-3 font-mono text-[13px] text-ink-100 hover:border-signal hover:text-signal transition-colors"
        >
          GitHub
        </a>
        <a
          href={contact.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-3 font-mono text-[13px] text-ink-100 hover:border-signal hover:text-signal transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
