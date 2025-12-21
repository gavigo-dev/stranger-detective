<template>
    <ClientOnly>
        <div class="p-5">
            <div class="">
                <Button
                    class="bg-transparent"
                    icon="pi pi-arrow-left"
                    label="Voltar"
                    @click="navigateTo('/')"
                />
            </div>
            <div class="flex my-5 justify-between">
                <h1 class="text-2xl font-medium">Ficha de jogo</h1>
                <Button
                    class="bg-red-400"
                    label="Limpar tudo"
                    icon="pi pi-trash"
                    @click="store.$reset()"
                />
            </div>
            <div v-for="item in table" :key="item.title">
                <div class="">
                    <p class="text-lg mt-4 font-bold">{{ item.title }}</p>
                    <div class="flex-1 border-t-4 mb-4" />
                </div>
                <div class="grid grid-cols-2 gap-x-2">
                    <div
                        v-for="player in item.items"
                        :key="player.key"
                        class="border border-collapse rounded flex items-stretch justify-between"
                    >
                        <div class="border-r flex-1 flex items-center justify-between pl-1">
                            <p>{{ player.name }}</p>
                        </div>
                        <Marker v-model="store.tableState[player.key]" />
                    </div>
                </div>
            </div>

            <div class="mb-10">
                <h1 class="text-2xl my-6 font-medium flex items-end justify-between">
                    Anotações
                    <button
                        v-if="!!store.notes"
                        class="px-2 self-stretch text-xs hover:cursor-pointer"
                        @click="store.notes = ''"
                    >
                        <i class="pi pi-trash" />
                    </button>
                </h1>
                <Textarea
                    v-model="store.notes"
                    rows="5"
                    unstyled
                    class="border rounded w-full p-2"
                />
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
import Marker from '~/components/custom/Marker.vue'
import { useFichaStore } from '~/store/ficha'

const { playersArray, placesArray, weaponsArray } = useUtils()
const store = useFichaStore()

const table = [
    { title: 'Assassino', items: playersArray },
    { title: 'Armas', items: weaponsArray },
    { title: 'Local', items: placesArray }
]

onMounted(() => {
    console.log(store)
})
</script>
