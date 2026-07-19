import { contact } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="section-shell py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[12px] text-ink-400">
          Designed and Developed by Javeria Zia
        </p>
        <div className="flex items-center gap-6">
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] text-ink-400 hover:text-signal transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] text-ink-400 hover:text-signal transition-colors"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="font-mono text-[12px] text-ink-400 hover:text-signal transition-colors"
          >
            ./#top
          </a>
        </div>
      </div>
    </footer>
  )
}
