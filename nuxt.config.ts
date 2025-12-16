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
    },
    pwa: {
        registerType: 'autoUpdate',
        strategies: 'generateSW',
        srcDir: 'public',
        manifest: {
            name: 'Stranger Detective',
            short_name: 'Stranger Detective',
            theme_color: '#111214',
            background_color: '#131419',
            start_url: '/',
            lang: 'pt-br',
            description: 'descrição do seu APP',
            screenshots: [
                {
                    src: 'public/manifest/apple-touch-icon.png',
                    sizes: '320x320',
                    type: 'image/png',
                    form_factor: 'wide',
                    label: 'Stranger Detective'
                }
            ],
            icons: [
                {
                    src: 'public/manifest/web-app-manifest-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'public/manifest/web-app-manifest-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        },
        workbox: {
            cleanupOutdatedCaches: true,
            clientsClaim: true,
            skipWaiting: true,

            navigateFallback: '/',

            runtimeCaching: [
                {
                    urlPattern: ({ request }) => request.destination === 'document',
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'pages'
                    }
                },
                {
                    urlPattern: ({ request }) =>
                        ['style', 'script', 'worker'].includes(request.destination),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'assets'
                    }
                },
                {
                    urlPattern: ({ request }) => request.destination === 'image',
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                        expiration: {
                            maxEntries: 100,
                            maxAgeSeconds: 60 * 60 * 24 * 30 // 30 dias
                        }
                    }
                }
            ]
        },
        devOptions: {
            enabled: true,
            type: 'module'
        }
    }
})
