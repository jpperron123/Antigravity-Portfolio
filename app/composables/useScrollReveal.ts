import { useIntersectionObserver } from '@vueuse/core'

export function useScrollReveal() {
    function reveal(el: HTMLElement | null) {
        if (!el) return

        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.classList.add('visible')
                    stop()
                }
            },
            { threshold: 0.1 }
        )
    }

    function revealAll(container: HTMLElement | null) {
        if (!container) return

        const elements = container.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children')
        elements.forEach((el) => {
            const { stop } = useIntersectionObserver(
                el as HTMLElement,
                ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        el.classList.add('visible')
                        stop()
                    }
                },
                { threshold: 0.1 }
            )
        })
    }

    return { reveal, revealAll }
}
