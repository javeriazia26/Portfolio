import { featuredProjects, otherProjects } from '../data/content'

function TagPill({ children }) {
  return (
    <span className="font-mono text-[11px] px-2.5 py-1 rounded border border-ink-700 bg-ink-950/50 text-ink-300">
      {children}
    </span>
  )
}

function ProjectCard({ project, delay }) {
  return (
    <div
      data-reveal
      data-reveal-delay={String(delay)}
      className="reveal card p-6 sm:p-8 hover:border-signal/40 transition-colors duration-300"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        {project.tag ? (
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 rounded ${
              project.tag === 'Featured Project'
                ? 'bg-signal/10 text-signal border border-signal/30'
                : 'bg-amber/10 text-amber border border-amber/30'
            }`}
          >
            {project.tag}
          </span>
        ) : (
          <span />
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[12px] text-ink-300 hover:text-signal transition-colors inline-flex items-center gap-1"
        >
          GitHub <span aria-hidden>↗</span>
        </a>
      </div>

      <h3 className="font-display text-xl sm:text-2xl text-ink-100">{project.title}</h3>
      <p className="mt-3 text-ink-300 text-[15px] leading-relaxed max-w-2xl">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>

      <p className="mt-5 font-mono text-[12px] text-ink-400">
        <span className="text-ink-500">Tech Stack — </span>
        {project.stack}
      </p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24 md:py-32">
      <div data-reveal className="reveal">
        <span className="eyebrow">Featured Projects</span>
        <h2 className="section-heading">
          Project work that demonstrates backend, database, and security thinking.
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 80} />
        ))}
      </div>

      <div data-reveal className="reveal mt-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 mb-6">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {otherProjects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              data-reveal
              data-reveal-delay={String(i * 60)}
              className="reveal card p-6 hover:border-signal/40 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-base text-ink-100 group-hover:text-signal transition-colors">
                  {project.title}
                </h4>
                <span className="font-mono text-ink-500 group-hover:text-signal transition-colors">
                  ↗
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
