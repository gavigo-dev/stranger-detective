<template>
    <div>
        <Transition name="fade">
            <div
                v-if="loading"
                class="bg-indigo-50 w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center"
            >
                <Image src="/favicon_io/android-chrome-192x192.png" class="animate-pulse" />
            </div>
        </Transition>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Gavigo Utils'
})

const loading = ref(true)

onMounted(() => {
    loading.value = false
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
