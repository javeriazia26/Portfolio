import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { PrimaryButton, SecondaryButton } from '../components/Button'
import { Mail, Linkedin, MapPin } from 'lucide-react'
import { contactIntro, profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section-container pt-16 pb-6">
      <SectionHeading label={contactIntro.label} heading={contactIntro.heading} />

      <Card>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-black/20 px-5 py-4">
            <Mail size={18} strokeWidth={2} className="shrink-0 text-brand-light" />
            <span className="text-[15px] font-semibold text-white">{profile.email}</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-black/20 px-5 py-4">
            <Linkedin size={18} strokeWidth={2} className="shrink-0 text-brand-light" />
            <span className="text-[15px] font-semibold text-white/80">{profile.linkedinHandle}</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-black/20 px-5 py-4">
            <MapPin size={18} strokeWidth={2} className="shrink-0 text-brand-light" />
            <span className="text-[15px] font-semibold text-white">{profile.location}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <PrimaryButton href={`mailto:${profile.email}`} icon="Mail" iconRight={null}>
            Email Me
          </PrimaryButton>
          <SecondaryButton href={profile.githubUrl} icon="Github">
            GitHub
          </SecondaryButton>
          <SecondaryButton href={profile.linkedinUrl} icon="Linkedin">
            LinkedIn
          </SecondaryButton>
        </div>
      </Card>
    </section>
  )
}
