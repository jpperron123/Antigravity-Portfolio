import { ref } from 'vue'
import baseProjects from '~/content/projects.json'

const STORAGE_KEY = 'portfolio_custom_projects'

// Load custom projects from localStorage
function loadCustomProjects(): typeof baseProjects {
    if (!import.meta.client) return []
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    } catch {
        return []
    }
}

// Global reactive state
const customProjects = ref<typeof baseProjects>(loadCustomProjects())

export function useProjects() {
    // All projects = base JSON + custom from localStorage
    const allProjects = computed(() => [...baseProjects, ...customProjects.value])

    function addProject(project: (typeof baseProjects)[0]) {
        customProjects.value.push(project)
        if (import.meta.client) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(customProjects.value))
        }
    }

    function removeProject(slug: string) {
        customProjects.value = customProjects.value.filter(p => p.slug !== slug)
        if (import.meta.client) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(customProjects.value))
        }
    }

    function getProject(slug: string) {
        return allProjects.value.find(p => p.slug === slug)
    }

    return {
        projects: allProjects,
        customProjects: readonly(customProjects),
        addProject,
        removeProject,
        getProject,
    }
}
