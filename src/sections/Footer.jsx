import { footer, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="section-container flex flex-col items-center gap-3 py-10 text-center">
      <p className="text-[14px] text-dim">{footer.text}</p>
      <div className="flex flex-col items-center gap-2">
        <a href={profile.linkedinUrl} className="text-[14px] font-semibold text-muted hover:text-white transition-colors">
          LinkedIn
        </a>
        <a href={profile.githubUrl} className="text-[14px] font-semibold text-muted hover:text-white transition-colors">
          GitHub
        </a>
      </div>
    </footer>
  )
}
