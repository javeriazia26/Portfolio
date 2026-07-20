import { motion } from 'framer-motion'
import Pill from '../components/Pill'
import { PrimaryButton, SecondaryButton } from '../components/Button'
import { FeatureChip } from '../components/IconRow'
import { profile, heroChips } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="section-container pt-6 pb-4 sm:pt-10">
      <Pill dot>{profile.badge}</Pill>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-display mt-5 text-[42px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[54px]"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-[17px] font-semibold leading-snug text-white/90 sm:text-[19px]"
      >
        {profile.role}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 max-w-content text-[15.5px] leading-relaxed text-muted"
      >
        {profile.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-7 flex flex-col gap-3 sm:flex-row"
      >
        <PrimaryButton href="#projects" iconRight="ChevronRight">
          View Projects
        </PrimaryButton>
        <SecondaryButton href={profile.resumeUrl} icon="Download">
          Download Resume
        </SecondaryButton>
      </motion.div>

      <div className="mt-8 flex flex-col gap-3">
        {heroChips.map((chip, i) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
          >
            <FeatureChip icon={chip.icon} label={chip.label} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
