import PrimeVue from 'primevue/config'
import { defineNuxtPlugin } from '#app'
import Aura from '@primeuix/themes/aura'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.dark',
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue'
                }
            }
        },
        pt: {
            Checkbox: {
                box: (options: any) => {
                    return options.context.checked ? 'border-red-500 bg-transparent' : ''
                },
                icon: 'bg-red-500 text-red-100'
            },
            Button: {
                root: (options: any) => {
                    return {
                        class: [
                            `p-2 border-0 rounded bg-red-500 text-red-100  font-medium hover:cursor-pointer ${options.context.disabled ? 'opacity-30 hover:cursor-not-allowed!' : 'hover:opacity-75 dark:hover:opacity-75'}`
                        ]
                    }
                }
            }
        }
    })
})
