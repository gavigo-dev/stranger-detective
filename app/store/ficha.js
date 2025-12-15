import { defineStore } from 'pinia'
import { getAllKeys } from '~/data/constants'

export const useStrangerDetectiveFichaStore = defineStore('strangerDetectiveFichaStore', {
    state: () => ({
        tableState: getAllKeys(),
        notes: ''
    }),
    $persistOptions: true
})
