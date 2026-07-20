import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function Pill({ icon, dot = false, children, className = '' }) {
  const Icon = icon ? Icons[icon] : null

  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-light ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />}
      {Icon && <Icon size={13} strokeWidth={2.25} />}
      {children}
    </motion.span>
  )
}
