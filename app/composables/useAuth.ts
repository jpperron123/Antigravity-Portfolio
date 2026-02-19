import { ref } from 'vue'

const isAuthenticated = ref(false)

// Initialize from sessionStorage on client
if (import.meta.client) {
    isAuthenticated.value = sessionStorage.getItem('portfolio_auth') === 'true'
}

export function useAuth() {
    const config = useRuntimeConfig()

    function authenticate(password: string): boolean {
        if (password === config.public.projectsPassword) {
            isAuthenticated.value = true
            if (import.meta.client) {
                sessionStorage.setItem('portfolio_auth', 'true')
            }
            return true
        }
        return false
    }

    function logout() {
        isAuthenticated.value = false
        if (import.meta.client) {
            sessionStorage.removeItem('portfolio_auth')
        }
    }

    return {
        isAuthenticated: readonly(isAuthenticated),
        authenticate,
        logout,
    }
}
