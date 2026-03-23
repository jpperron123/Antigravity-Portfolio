<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Window -->
    <Transition name="chat-window">
      <div
        v-if="isOpen"
        class="absolute bottom-16 right-0 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl shadow-primary-950/80 border border-primary-700/50 flex flex-col"
        style="height: 480px"
      >
        <!-- Header -->
        <div class="bg-primary-800 border-b border-primary-700/50 px-4 py-3 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span class="text-accent font-bold text-sm font-mono">JP</span>
            </div>
            <div>
              <p class="text-white text-sm font-semibold">{{ t({ en: 'JP Assistant', fr: 'Assistant JP' }) }}</p>
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span class="text-primary-400 text-xs">{{ t({ en: 'Online', fr: 'En ligne' }) }}</span>
              </div>
            </div>
          </div>
          <button
            @click="isOpen = false"
            class="w-8 h-8 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center text-primary-400 hover:text-white"
            :aria-label="t({ en: 'Close chat', fr: 'Fermer le chat' })"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-3 bg-primary-900/95 backdrop-blur-xl">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            :class="[
              'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
              msg.role === 'user'
                ? 'ml-auto bg-accent text-white rounded-br-md'
                : 'bg-primary-800 text-primary-100 border border-primary-700/50 rounded-bl-md',
            ]"
          >
            {{ msg.content }}
          </div>

          <!-- Typing indicator -->
          <div v-if="isLoading" class="max-w-[85%] rounded-2xl px-4 py-3 bg-primary-800 border border-primary-700/50 rounded-bl-md">
            <div class="flex gap-1.5">
              <span class="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style="animation-delay: 0ms" />
              <span class="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style="animation-delay: 150ms" />
              <span class="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style="animation-delay: 300ms" />
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="bg-primary-800 border-t border-primary-700/50 p-3 shrink-0">
          <form @submit.prevent="sendMessage" class="flex gap-2">
            <input
              v-model="userInput"
              type="text"
              :placeholder="t({ en: 'Type your message...', fr: 'Écrivez votre message...' })"
              class="flex-1 px-4 py-2.5 bg-primary-900/80 border border-primary-700 rounded-xl text-sm text-primary-100 placeholder-primary-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
              :disabled="isLoading"
            />
            <button
              type="submit"
              :disabled="!userInput.trim() || isLoading"
              class="w-10 h-10 rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all duration-200 shrink-0"
              :aria-label="t({ en: 'Send', fr: 'Envoyer' })"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Floating Button -->
    <button
      @click="toggleChat"
      class="w-14 h-14 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
      :aria-label="t({ en: 'Open chat', fr: 'Ouvrir le chat' })"
    >
      <Transition name="icon-swap" mode="out-in">
        <svg v-if="!isOpen" key="chat" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg v-else key="close" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Transition>
    </button>

    <!-- Notification dot (first visit) -->
    <span
      v-if="showNotif && !isOpen"
      class="absolute top-0 right-0 w-4 h-4 rounded-full bg-success border-2 border-primary-900 animate-pulse"
    />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useLocale()

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const isOpen = ref(false)
const isLoading = ref(false)
const userInput = ref('')
const showNotif = ref(true)
const messagesContainer = ref<HTMLElement | null>(null)

const messages = ref<Message[]>([])

const welcomeMessage = computed(() =>
  locale.value === 'fr'
    ? 'Bonjour ! Je suis l\'assistant virtuel de Jean-Philippe. Comment puis-je vous aider ?'
    : 'Hi! I\'m Jean-Philippe\'s virtual assistant. How can I help you?'
)

function toggleChat() {
  isOpen.value = !isOpen.value
  showNotif.value = false

  if (isOpen.value && messages.value.length === 0) {
    messages.value.push({ role: 'assistant', content: welcomeMessage.value })
  }
}

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

async function sendMessage() {
  const text = userInput.value.trim()
  if (!text || isLoading.value) return

  messages.value.push({ role: 'user', content: text })
  userInput.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    // Send only user/assistant messages (exclude the initial welcome if it's the only assistant message)
    const apiMessages = messages.value
      .filter((_, i) => i > 0 || messages.value[0].role === 'user')
      .map(m => ({ role: m.role, content: m.content }))

    // If the first message is the welcome message, don't send it to the API
    const toSend = messages.value[0]?.content === welcomeMessage.value
      ? apiMessages.slice(1)
      : apiMessages

    // Ensure we always have messages to send
    const finalMessages = toSend.length > 0 ? toSend : [{ role: 'user' as const, content: text }]

    const data = await $fetch<{ reply: string }>('/api/chat', {
      method: 'POST',
      body: { messages: finalMessages },
    })

    messages.value.push({ role: 'assistant', content: data.reply })
  } catch {
    messages.value.push({
      role: 'assistant',
      content: locale.value === 'fr'
        ? 'Désolé, une erreur est survenue. Vous pouvez me joindre à jpperron123@gmail.com.'
        : 'Sorry, something went wrong. You can reach me at jpperron123@gmail.com.',
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
.chat-window-enter-active,
.chat-window-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.95);
}

.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: all 0.15s ease;
}

.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
