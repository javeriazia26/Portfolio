import * as Icons from 'lucide-react'

export function IconRow({ icon, label, className = '' }) {
  const Icon = Icons[icon]
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Icon && <Icon size={18} strokeWidth={2} className="shrink-0 text-brand-light" />}
      <span className="text-[15px] font-semibold text-white">{label}</span>
    </div>
  )
}

export function FeatureChip({ icon, label }) {
  const Icon = Icons[icon]
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-bg-card px-5 py-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand-light">
        {Icon && <Icon size={16} strokeWidth={2.25} />}
      </span>
      <span className="text-[15px] font-semibold text-white">{label}</span>
    </div>
  )
}
