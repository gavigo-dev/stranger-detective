import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Stranger Detective',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
                }
            ]
        }
    },
    modules: ['@vite-pwa/nuxt'],
    css: ['~/assets/css/tailwind.css', '~/assets/css/primeicons.css'],
    vite: {
        plugins: [
            tailwindcss(),
            Components({
                resolvers: [PrimeVueResolver()]
            })
        ]
    }
})
