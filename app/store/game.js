import { defineStore } from 'pinia'
import { PLACES, WEAPONS, PLAYERS as SUSPECTS } from '~/data/constants'

export const useGameStore = defineStore('game', {
    state: () => ({
        players: [],
        hintsByCategory: {
            suspect: [],
            weapon: [],
            place: []
        },
        globalHintsCount: {
            suspect: 0,
            weapon: 0,
            place: 0
        },
        lastSentHintId: 0,
        solution: {
            suspect: '',
            weapon: '',
            place: ''
        }
    }),
    actions: {
        selectPlayers(playersKeys) {
            this.players = playersKeys.map((player) => ({
                id: SUSPECTS[player].id,
                totalHints: 0,
                hintsByCategory: {
                    suspect: 0,
                    weapon: 0,
                    place: 0
                }
            }))
        },
        generateHintsExcludingSolution(solution) {
            const mapping = [
                { category: 'suspect', object: SUSPECTS },
                { category: 'weapon', object: WEAPONS },
                { category: 'place', object: PLACES }
            ]

            mapping.forEach(({ category, object }) => {
                const hints = []
                for (const key in object) {
                    if (key === solution[category]) continue
                    const element = object[key]
                    hints.push({
                        id: element.id,
                        category,
                        text: element.hint,
                        target: key,
                        timesSent: 0
                    })
                }
                this.hintsByCategory[category] = hints.sort(() => Math.random() - 0.5)
            })
        },
        choosePlayer() {
            const candidates = this.players.filter((player) => {
                const nums = this.players.map((p) => p.totalHints)
                const minHints = Math.min(...nums)
                return player.totalHints === minHints
            })
            return candidates[Math.floor(Math.random() * candidates.length)]
        },
        chooseCategory(player) {
            const allCategories = ['suspect', 'weapon', 'place']

            const shouldIgnorePlace =
                player.hintsByCategory.suspect - player.hintsByCategory.place < 1 ||
                player.hintsByCategory.weapon - player.hintsByCategory.place < 1

            const playerCategoryCandidates = allCategories.filter((category) => {
                if (category === 'place' && shouldIgnorePlace) return
                const num = player.hintsByCategory[category]
                const arr = shouldIgnorePlace
                    ? [player.hintsByCategory.suspect, player.hintsByCategory.weapon]
                    : Object.values(player.hintsByCategory)
                const minHints = Math.min(...arr)
                return num === minHints
            })

            const globalCandidates = allCategories.filter((category) => {
                if (category === 'place' && shouldIgnorePlace) return
                const num = this.globalHintsCount[category]

                const arr = shouldIgnorePlace
                    ? [this.globalHintsCount.suspect, this.globalHintsCount.weapon]
                    : Object.values(this.globalHintsCount)
                const minHints = Math.min(...arr)
                return num === minHints
            })

            const validCategories = [...globalCandidates, ...playerCategoryCandidates]

            return validCategories[Math.floor(Math.random() * validCategories.length)]
        },
        chooseHint(category) {
            const availableHints = this.hintsByCategory[category]
            const preferred = availableHints
                ?.filter((hint) => hint.id !== this.lastSentHintId && hint.timesSent === 0)
                .pop()

            if (preferred) return preferred

            const fallback = availableHints?.filter((hint) => hint.id !== this.lastSentHintId).pop()

            if (fallback) return fallback

            return availableHints?.length > 0 ? [...availableHints].pop() : undefined
        },
        updateCounters(player, category, hint) {
            const idxPlayer = this.players.findIndex((p) => p.id === player.id)
            const idxHint = this.hintsByCategory[category].findIndex((h) => h.id === hint.id)

            if (this.players[idxPlayer]) {
                this.players[idxPlayer].totalHints++
                this.players[idxPlayer].hintsByCategory[category]++
            }
            if (this.hintsByCategory?.[category]?.[idxHint]) {
                this.hintsByCategory[category][idxHint].timesSent++
            }
            this.globalHintsCount[category]++
            this.lastSentHintId = hint.id
        },
        getNextHint() {
            const player = this.choosePlayer()
            const category = this.chooseCategory(player)
            const hint = this.chooseHint(category)

            this.updateCounters(player, category, hint)
            return { hint, player }
        }
    },
    $persistOptions: true
})
