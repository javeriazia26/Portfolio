import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Pill from '../components/Pill'
import { PrimaryButton, SecondaryButton } from '../components/Button'
import * as Icons from 'lucide-react'
import {
  projectsIntro,
  featuredProject,
  secondaryProjects,
  otherProjectsHeading,
  otherProjects,
  githubStatsIntro,
  githubStatsCards,
} from '../data/content'

function TagList({ tags }) {
  return (
    <p className="mt-4 text-[14.5px] font-semibold leading-relaxed text-white/85">
      {tags.join(' \u00B7 ')}
    </p>
  )
}

function TechStack({ techStack }) {
  return <p className="mt-4 text-[13.5px] text-dim">Tech Stack: {techStack}</p>
}

export default function Projects() {
  return (
    <section id="projects" className="section-container pt-16">
      <SectionHeading label={projectsIntro.label} heading={projectsIntro.heading} />

      {/* Featured project */}
      <Card highlighted className="mb-5">
        <Pill icon="BadgeCheck" className="mb-5">
          FEATURED PROJECT
        </Pill>
        <h3 className="font-display text-[24px] font-bold leading-tight text-white">
          {featuredProject.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{featuredProject.description}</p>
        <TagList tags={featuredProject.tags} />
        <TechStack techStack={featuredProject.techStack} />

        <div className="mt-6 flex flex-col gap-3">
          <PrimaryButton href={featuredProject.githubUrl} icon="Github" iconRight={null}>
            GitHub
          </PrimaryButton>
          <SecondaryButton href="#" muted>
            {featuredProject.status}
          </SecondaryButton>
        </div>
      </Card>

      {/* Secondary projects */}
      <div className="flex flex-col gap-5">
        {secondaryProjects.map((project, i) => (
          <Card key={project.title} delay={0.05 + i * 0.05}>
            <h3 className="text-[20px] font-bold leading-tight text-white">{project.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>
            <TagList tags={project.tags} />
            <TechStack techStack={project.techStack} />
            <div className="mt-6">
              <SecondaryButton href={project.githubUrl} icon="Github">
                GitHub
              </SecondaryButton>
            </div>
          </Card>
        ))}
      </div>

      {/* Other projects */}
      <h3 className="font-display mb-5 mt-12 text-[22px] font-bold text-white">
        {otherProjectsHeading}
      </h3>
      <div className="flex flex-col gap-4">
        {otherProjects.map((project, i) => (
          <Card key={project.title} delay={i * 0.04} className="p-5">
            <h4 className="text-[16px] font-bold text-white">{project.title}</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{project.description}</p>
            <div className="mt-4">
              <SecondaryButton href={project.githubUrl} icon="Github" className="py-3 text-[14px]">
                GitHub
              </SecondaryButton>
            </div>
          </Card>
        ))}
      </div>

      {/* GitHub stats */}
      <h3 className="font-display mb-2 mt-14 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-light">
        {githubStatsIntro.label}
      </h3>
      <h2 className="font-display mb-5 text-[26px] font-bold leading-[1.25] text-white sm:text-[30px]">
        {githubStatsIntro.heading}
      </h2>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        {githubStatsCards.map((card, i) => {
          const Icon = Icons[card.icon]
          return (
            <Card key={card.title} delay={i * 0.05}>
              <span className="mb-4 inline-flex text-brand-light">
                {Icon && <Icon size={22} strokeWidth={2.25} />}
              </span>
              <h4 className="mb-2 text-[18px] font-bold text-white">{card.title}</h4>
              <p className="text-[14.5px] leading-relaxed text-muted">{card.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
