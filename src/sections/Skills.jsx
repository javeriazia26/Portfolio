import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { skillsIntro, skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section-container pt-14">
      <SectionHeading label={skillsIntro.label} heading={skillsIntro.heading} />

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Card key={group.title} delay={i * 0.05}>
            <h3 className="mb-3 text-[18px] font-bold text-white">{group.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-muted">
              {group.items.join(' \u00B7 ')}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
