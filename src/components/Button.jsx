import * as Icons from 'lucide-react'

const base =
  'inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 active:scale-[0.98]'

export function PrimaryButton({ icon, iconRight = 'ArrowRight', children, href = '#', className = '' }) {
  const Icon = icon ? Icons[icon] : null
  const IconRight = iconRight ? Icons[iconRight] : null
  return (
    <a
      href={href}
      className={`${base} bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-light hover:shadow-brand/40 ${className}`}
    >
      {Icon && <Icon size={17} strokeWidth={2.25} />}
      {children}
      {IconRight && <IconRight size={17} strokeWidth={2.5} />}
    </a>
  )
}

export function SecondaryButton({ icon, children, href = '#', className = '', muted = false }) {
  const Icon = icon ? Icons[icon] : null
  return (
    <a
      href={href}
      className={`${base} border border-line-strong bg-white/[0.02] text-white hover:bg-white/[0.06] ${
        muted ? 'text-white/70' : ''
      } ${className}`}
    >
      {Icon && <Icon size={17} strokeWidth={2.25} />}
      {children}
    </a>
  )
}
