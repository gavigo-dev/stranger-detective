<template>
    <Dialog v-model:visible="showDialog" position="bottomright" :pt="{ header: 'hidden' }">
        <div class="w-full max-w-sm rounded-xl">
            <div class="flex items-center justify-between">
                <h1 class="font-medium py-3">Instalar App</h1>
                <Button
                    icon="pi pi-times"
                    variant="text"
                    size="small"
                    class="-mr-2 bg-transparent text-slate-900"
                    @click="close"
                />
            </div>

            <p class="mt-2 text-sm text-gray-600">
                Instale este app para acessar mesmo sem internet.
            </p>

            <!-- iOS fallback -->
            <p v-if="isIOS" class="mt-4 text-sm text-gray-700">
                No iPhone/iPad:
                <br />
                Toque em <strong>Compartilhar</strong> →
                <strong>Adicionar à Tela de Início</strong>
            </p>

            <div class="flex items-center justify-end gap-2 text-sm mt-6 mb-4 hover:cursor-pointer">
                <Checkbox v-model="saveOption" inputId="saveOption" binary />
                <label class="hover:cursor-pointer" for="saveOption"> Não mostrar novamente </label>
            </div>
            <div class="flex gap-3 justify-end">
                <Button
                    class="rounded-lg px-4 py-2 bg-transparent text-sm text-slate-800"
                    @click="close"
                >
                    Agora não
                </Button>

                <Button
                    v-if="!isIOS"
                    class="rounded-lg px-4 py-2 text-sm text-white hover:opacity-90"
                    @click="onClick"
                >
                    Instalar
                </Button>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { usePwaStore } from '~/store/pwa'

const { canInstall, install } = usePwaInstall()
const store = usePwaStore()

const showDialog = ref(false)
const isIOS = ref(false)
const saveOption = ref(false)

const onClick = async () => {
    const result = await install()
    if (result === 'accepted') {
        console.log('PWA instalado')
        alert('PWA instalado')
    }
}

const installed = computed(() => isPwaInstalled())

function close() {
    if (saveOption.value) store.hideInstallBanner = true
    showDialog.value = false
}

function isPwaInstalled() {
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        // @ts-expect-error iOS
        window.navigator.standalone === true
    )
}

onMounted(() => {
    if (!canInstall.value || isPwaInstalled()) return
    isIOS.value = /iPad|iPhone|iPod/.test(navigator?.userAgent)
    setTimeout(() => {
        if (store.hideInstallBanner) return
        showDialog.value = true
    }, 1000)
})
</script>
