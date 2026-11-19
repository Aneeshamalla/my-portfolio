import { useEffect } from 'react'

// Fades in every `.reveal` element the first time it scrolls into view.
// Stagger comes from a `--i` custom property set on the element.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.remove('reveal'))
      return
    }

    // Once revealed, drop the reveal styles so hover transitions aren't delayed by the stagger
    const settle = (el) => {
      const handler = (e) => {
        if (e.target !== el || e.propertyName !== 'opacity') return
        el.removeEventListener('transitionend', handler)
        el.classList.remove('reveal', 'is-visible')
        el.style.removeProperty('--i')
      }
      el.addEventListener('transitionend', handler)
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          settle(entry.target)
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
