import { ref } from 'vue'

export type Locale = 'en' | 'fr'

const currentLocale = ref<Locale>('en')

// Initialize from localStorage on client
if (import.meta.client) {
    const saved = localStorage.getItem('portfolio_locale') as Locale | null
    if (saved === 'en' || saved === 'fr') {
        currentLocale.value = saved
    }
}

export function useLocale() {
    function setLocale(locale: Locale) {
        currentLocale.value = locale
        if (import.meta.client) {
            localStorage.setItem('portfolio_locale', locale)
        }
    }

    function toggleLocale() {
        setLocale(currentLocale.value === 'en' ? 'fr' : 'en')
    }

    /**
     * Helper to pick the right text from a bilingual object.
     * Usage: t({ en: 'Hello', fr: 'Bonjour' })
     */
    function t(obj: { en: string; fr: string } | undefined): string {
        if (!obj) return ''
        return obj[currentLocale.value] || obj.en
    }

    /**
     * Helper to pick the right array from a bilingual object.
     * Usage: tArray({ en: [...], fr: [...] })
     */
    function tArray(obj: { en: string[]; fr: string[] } | undefined): string[] {
        if (!obj) return []
        return obj[currentLocale.value] || obj.en
    }

    return {
        locale: readonly(currentLocale),
        setLocale,
        toggleLocale,
        t,
        tArray,
    }
}
