export default function Marquee({ text }) {
  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="px-4 text-[15px] font-semibold uppercase tracking-wide text-white/[0.08]">
          {text.repeat(4)}
        </span>
        <span className="px-4 text-[15px] font-semibold uppercase tracking-wide text-white/[0.08]" aria-hidden="true">
          {text.repeat(4)}
        </span>
      </div>
    </div>
  )
}
