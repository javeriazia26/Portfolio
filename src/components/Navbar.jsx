import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { profile } from '../data/content'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          <a
            href="#top"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105"
          >
            {profile.initials}
          </a>

          <a
            href="#contact"
            aria-label="Contact"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105"
          >
            <User size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-20 bg-bg/80 backdrop-blur-md" />
    </motion.header>
  )
}
