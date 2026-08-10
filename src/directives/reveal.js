// v-reveal="delayMs" — fades/slides an element in the first time it enters
// the viewport. Also fires on initial mount for elements already in view,
// so it doubles as a page-enter reveal when a route's component mounts.
const observers = new WeakMap()

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const delay = typeof binding.value === 'number' ? binding.value : 0
    el.style.transitionDelay = delay ? `${delay}ms` : ''

    // threshold near 0 (not e.g. 0.15) so this still fires for elements much
    // taller than the viewport — IntersectionObserver's ratio is
    // (visible area / target area), which for a very tall target (a long
    // article body wrapped in one v-reveal) can never reach a higher
    // threshold no matter how far you scroll.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}
