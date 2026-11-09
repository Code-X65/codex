import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function smoothScrollTo(targetId, offset = 70, duration = 1) {
  const target = typeof targetId === 'string' ? document.querySelector(targetId) : targetId
  if (!target) return

  gsap.to(window, {
    duration,
    scrollTo: { y: target, offsetY: offset },
    ease: 'power2.inOut',
  })

  if (typeof targetId === 'string' && targetId.startsWith('#')) {
    try {
      window.history.pushState(null, '', targetId)
    } catch {
      // ignore
    }
  }
}
