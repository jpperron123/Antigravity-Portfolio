<template>
  <div v-if="!isAuthenticated" class="min-h-screen flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <div class="glass-card text-center">
        <!-- Lock Icon -->
        <div class="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h2 class="text-2xl font-bold text-white mb-2">{{ t({ en: 'Protected Content', fr: 'Contenu protégé' }) }}</h2>
        <p class="text-primary-400 mb-8">{{ t({ en: 'Enter the password to view this section.', fr: 'Entrez le mot de passe pour voir cette section.' }) }}</p>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="t({ en: 'Enter password', fr: 'Entrez le mot de passe' })"
              class="input-field pr-12"
              :class="{ 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20': error }"
              autofocus
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-primary-500 hover:text-primary-300 transition-colors"
            >
              <svg v-if="!showPassword" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </button>
          </div>

          <Transition name="error">
            <p v-if="error" class="text-red-400 text-sm flex items-center gap-2">
              <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ t({ en: 'Incorrect password. Please try again.', fr: 'Mot de passe incorrect. Veuillez réessayer.' }) }}
            </p>
          </Transition>

          <button type="submit" class="btn-primary w-full justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            {{ t({ en: 'Unlock', fr: 'Déverrouiller' }) }}
          </button>
        </form>
      </div>
    </div>
  </div>

  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated, authenticate } = useAuth()
const { t } = useLocale()
const password = ref('')
const error = ref(false)
const showPassword = ref(false)

function handleSubmit() {
  error.value = false
  const success = authenticate(password.value)
  if (!success) {
    error.value = true
    password.value = ''
  }
}
</script>

<style scoped>
.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
