<template>
    <Button :disabled="!canInstall || installed" @click="onClick"> INSTALAR APP </Button>
</template>

<script setup>
const { canInstall, install } = usePwaInstall()

const onClick = async () => {
    const result = await install()
    if (result === 'accepted') {
        console.log('PWA instalado')
    }
}

const installed = computed(() => isPwaInstalled())

function isPwaInstalled() {
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        // @ts-expect-error iOS
        window.navigator.standalone === true
    )
}

onMounted(() => {
    console.log(canInstall.value)
    console.log(installed.value)
})
</script>
