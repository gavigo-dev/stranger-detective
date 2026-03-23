<template>
    <div class="fixed bg-slate-900 w-full h-screen">
        <div
            class="absolute top-0 w-full h-svh bg-slate-400 bg-[url('/img/stranger-detective/background.webp')] bg-blend-multiply blur-sm"
        />
        <div class="absolute top-0 w-full h-full z-10 flex justify-center items-center">
            <div
                class="w-full h-full md:max-w-100 min-w-80 bg-slate-300 bg-[url('/img/stranger-detective/background.webp')] bg-blend-multiply bg-center bg-cover"
            >
                <div class="text-neutral-300 h-svh overflow-y-auto flex flex-col">
                    <div class="grow">
                        <NuxtPage />
                    </div>
                    <div class="flex-0 py-5 flex justify-center">
                        <a href="https://gavigo-dev.netlify.app/" target="_blank">
                            <Image src="/img/logo-wide-light.png" width="150" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Transition name="fade">
            <div
                v-if="loading"
                class="fixed top-0 left-0 z-20 bg-slate-900 text-red-500 w-screen h-screen flex items-center justify-center"
            >
                <i class="pi pi-spinner animate-spin" style="font-size: 40px"></i>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
    const img = new Image()
    img.src = '/img/stranger-detective/background.webp'
    img.onload = () => {
        loading.value = false
    }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
