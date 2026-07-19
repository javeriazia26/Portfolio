import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to any [data-reveal] descendant once it
 * scrolls into the viewport. Works with the `.reveal` utility in index.css.
 */
export default function useReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const targets = root.hasAttribute('data-reveal')
      ? [root, ...root.querySelectorAll('[data-reveal]')]
      : [...root.querySelectorAll('[data-reveal]')]

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-reveal-delay')
            if (delay) entry.target.style.animationDelay = `${delay}ms`
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return containerRef
}
