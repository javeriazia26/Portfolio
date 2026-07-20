import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Marquee from '../components/Marquee'
import { IconRow } from '../components/IconRow'
import * as Icons from 'lucide-react'
import {
  aboutIntro,
  primaryInterests,
  education,
  coursework,
  marqueeText,
} from '../data/content'

export default function About() {
  const GradIcon = Icons[education.icon]

  return (
    <section id="about" className="pt-2">
      <Marquee text={marqueeText} />

      <div className="section-container pt-6">
        <SectionHeading label={aboutIntro.label} heading={aboutIntro.heading} />

        <Card className="mb-5">
          <span className="mb-4 inline-flex text-brand-light">
            <Icons.Terminal size={22} strokeWidth={2.25} />
          </span>
          <p className="text-[15px] leading-relaxed text-muted">{aboutIntro.bio}</p>
        </Card>

        <Card className="mb-5" delay={0.05}>
          <h3 className="mb-4 text-[19px] font-bold text-white">Primary interests</h3>
          <div className="flex flex-col gap-3">
            {primaryInterests.map((item) => (
              <IconRow key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
        </Card>

        <Card className="mb-5" delay={0.1}>
          <span className="mb-4 inline-flex text-brand-light">
            {GradIcon && <GradIcon size={22} strokeWidth={2.25} />}
          </span>
          <h3 className="mb-2 text-[18px] font-bold leading-snug text-white">{education.school}</h3>
          <p className="text-[14px] text-muted">{education.detail}</p>
        </Card>

        <Card delay={0.15}>
          <h3 className="mb-3 text-[19px] font-bold text-white">{coursework.heading}</h3>
          <p className="text-[14.5px] leading-relaxed text-muted">
            {coursework.items.join(' \u00B7 ')}
          </p>
        </Card>
      </div>
    </section>
  )
}
