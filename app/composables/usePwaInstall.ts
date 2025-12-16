import type { BeforeInstallPromptEvent } from '@vite-pwa/nuxt/dist/runtime/plugins/types.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function usePwaInstall() {
    const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)
    const canInstall = ref(false)

    const onBeforeInstallPrompt = (e: Event) => {
        e.preventDefault()
        deferredPrompt.value = e as BeforeInstallPromptEvent
        canInstall.value = true
    }

    const install = async () => {
        if (!deferredPrompt.value) return

        deferredPrompt.value.prompt()
        const { outcome } = await deferredPrompt.value.userChoice

        deferredPrompt.value = null
        canInstall.value = false

        return outcome // 'accepted' | 'dismissed'
    }

    const onAppInstalled = () => {
        canInstall.value = false
        deferredPrompt.value = null
    }

    onMounted(() => {
        window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
        window.addEventListener('appinstalled', onAppInstalled)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
        window.removeEventListener('appinstalled', onAppInstalled)
    })

    return {
        canInstall,
        install
    }
}
