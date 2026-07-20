import { motion } from 'framer-motion'

export default function SectionHeading({ label, heading, className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-[26px] font-bold leading-[1.25] text-white sm:text-[30px]"
      >
        {heading}
      </motion.h2>
    </div>
  )
}
