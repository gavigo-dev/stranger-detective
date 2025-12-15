import { createPinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()

    // conecta com plugin customizado
    if (import.meta.client) {
        pinia.use((context) => {
            const { $piniaPersist } = nuxtApp as any
            $piniaPersist(context)
        })
    }

    nuxtApp.vueApp.use(pinia)
})
