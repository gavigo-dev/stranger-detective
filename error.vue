<template>
    <div class="dark:bg-neutral-800 h-dvh">
        <div v-if="notFound" class="text-center">
            <h1 class="text-indigo-500 text-9xl font-black">
                <span class="inline-block mx-1 text-shadow-lg text-shadow-neutral-600/50 rotate-15">
                    4
                </span>
                <span class="inline-block mx-1 text-shadow-lg text-shadow-neutral-600/50 -rotate-5">
                    0
                </span>
                <span
                    class="inline-block mx-1 text-shadow-lg text-shadow-neutral-600/50 -rotate-15"
                >
                    4
                </span>
            </h1>
            <p class="my-10 text-2xl dark:text-indigo-100">Oops... Página não encontrada</p>
            <Button
                class="border dark:border-indigo-100 dark:text-indigo-100 px-10 rounded-full"
                label="Voltar para o início"
                @click="navigateTo('/')"
            />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    error: {
        type: Object
    }
})

const notFound = computed(() => props.error?.statusCode === 404)
</script>
