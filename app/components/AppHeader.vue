<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'glass shadow-lg shadow-primary-950/50' : 'bg-transparent',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
            <span class="text-accent font-bold text-lg font-mono">JP</span>
          </div>
          <span class="hidden sm:block text-primary-200 font-semibold group-hover:text-white transition-colors">
            Perron
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              isActive(link.path)
                ? 'text-accent bg-accent/10'
                : 'text-primary-400 hover:text-white hover:bg-primary-800/50',
            ]"
          >
            {{ t(link.label) }}
          </NuxtLink>

          <!-- Language Toggle -->
          <button
            @click="toggleLocale"
            class="ml-2 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all duration-300 hover:-translate-y-0.5"
            :class="[
              locale === 'fr'
                ? 'bg-accent/10 border-accent/30 text-accent-light hover:bg-accent/20'
                : 'bg-primary-800/50 border-primary-700 text-primary-300 hover:border-accent/30 hover:text-accent-light',
            ]"
            :aria-label="locale === 'en' ? 'Passer au français' : 'Switch to English'"
          >
            {{ locale === 'en' ? 'FR' : 'EN' }}
          </button>
        </div>

        <!-- Mobile: Language Toggle + Hamburger -->
        <div class="flex items-center gap-2 md:hidden">
          <button
            @click="toggleLocale"
            class="px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all duration-300"
            :class="[
              locale === 'fr'
                ? 'bg-accent/10 border-accent/30 text-accent-light'
                : 'bg-primary-800/50 border-primary-700 text-primary-300',
            ]"
          >
            {{ locale === 'en' ? 'FR' : 'EN' }}
          </button>

          <button
            class="relative z-50 w-10 h-10 flex items-center justify-center"
            @click="mobileOpen = !mobileOpen"
            :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          >
            <div class="w-6 flex flex-col gap-1.5">
              <span
                :class="[
                  'block h-0.5 bg-primary-200 transition-all duration-300 origin-center',
                  mobileOpen ? 'rotate-45 translate-y-2' : '',
                ]"
              />
              <span
                :class="[
                  'block h-0.5 bg-primary-200 transition-all duration-300',
                  mobileOpen ? 'opacity-0 scale-0' : '',
                ]"
              />
              <span
                :class="[
                  'block h-0.5 bg-primary-200 transition-all duration-300 origin-center',
                  mobileOpen ? '-rotate-45 -translate-y-2' : '',
                ]"
              />
            </div>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-40 md:hidden"
      >
        <div class="absolute inset-0 bg-primary-900/95 backdrop-blur-xl" />
        <div class="relative flex flex-col items-center justify-center h-full gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'text-2xl font-semibold transition-all duration-300',
              isActive(link.path) ? 'text-accent' : 'text-primary-300 hover:text-white',
            ]"
            @click="mobileOpen = false"
          >
            {{ t(link.label) }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)
const { locale, toggleLocale, t } = useLocale()

const navLinks = [
  { label: { en: 'Home', fr: 'Accueil' }, path: '/' },
  { label: { en: 'About', fr: 'À propos' }, path: '/about' },
  { label: { en: 'Projects', fr: 'Projets' }, path: '/projects' },
  { label: { en: 'Experience', fr: 'Expérience' }, path: '/experience' },
  { label: { en: 'Contact', fr: 'Contact' }, path: '/contact' },
]

function isActive(path: string): boolean {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

// Watch for route changes to close mobile menu
watch(() => route.path, () => {
  mobileOpen.value = false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 20
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
