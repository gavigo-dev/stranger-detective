<template>
    <ClientOnly>
        <div class="p-5">
            <div class="">
                <Button
                    class="bg-transparent text-neutral-300!"
                    icon="pi pi-arrow-left"
                    label="Voltar"
                    @click="navigateTo('/')"
                />
            </div>
            <div class="my-5 justify-between">
                <div class="flex justify-between items-end">
                    <h1 class="text-xl font-medium">Selecione os jogadores</h1>
                    <p>{{ selectedText }}</p>
                </div>

                <div class="mt-4 flex flex-wrap gap-2">
                    <div v-for="player in utils.playersArray" :key="player.key">
                        <div
                            class="rounded-full p-0.5 w-20 hover:cursor-pointer"
                            :style="getBorder(player)"
                            @click="selectPlayer(player)"
                        >
                            <Image :src="player.thumb" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20 justify-between">
                <div class="flex justify-between items-end">
                    <h1 class="text-xl font-medium">Selecione as cartas do crime</h1>
                </div>

                <CardsSelector v-model="solution" />
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
import { useGameStore } from '~/store/game'
import CardsSelector from '~/components/select-setup/CardsSelector.vue'

const utils = useUtils()
const players = reactive([])
const solution = ref(null)

const selectedText = computed(() => {
    if (!players.length) return ''
    if (players.length === 1) return '1 jogador'
    return `${players.length} jogadores`
})

const selectPlayer = (player) => {
    if (players.includes(player.key)) {
        players.splice(players.indexOf(player.key), 1)
    } else {
        players.push(player.key)
    }
}

const getBorder = (player) => {
    return players.includes(player.key) ? `border: 3px solid ${player.color};` : ''
}

const gameStore = useGameStore()
</script>
