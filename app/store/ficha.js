import { defineStore } from 'pinia'
import { getAllKeys } from '~/data/constants'

export const useFichaStore = defineStore('fichaStore', {
    state: () => ({
        tableState: getAllKeys(),
        notes: ''
    }),
    $persistOptions: true
})
