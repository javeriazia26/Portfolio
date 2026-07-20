import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  highlighted = false,
  delay = 0,
  as: Tag = motion.div,
  ...rest
}) {
  return (
    <Tag
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border ${
        highlighted
          ? 'border-brand/40 bg-gradient-to-b from-brand/[0.08] to-bg-card shadow-[0_0_0_1px_rgba(37,99,235,0.15)]'
          : 'border-line bg-bg-card'
      } p-5 sm:p-6 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
