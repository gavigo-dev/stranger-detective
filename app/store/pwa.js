import { defineStore } from 'pinia'

export const usePwaStore = defineStore('pwaStore', {
    state: () => ({
        hideInstallBanner: false
    }),
    $persistOptions: true
})
