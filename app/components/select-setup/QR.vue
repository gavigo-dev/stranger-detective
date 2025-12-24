<template>
    <div>
        <Button
            class="bg-transparent text-neutral-300"
            icon="pi pi-qrcode"
            @click="visible = true"
        />

        {{ cameraPermission }}

        <div v-if="visible" class="absolute z-10 top-0 left-0 w-full h-full bg-slate-900/80">
            <div class="text-right p-5">
                <Button
                    icon="pi pi-times"
                    class="bg-transparent text-neutral-300!"
                    size="large"
                    @click="visible = false"
                />
            </div>
            <div>
                <div v-if="!cameraPermission">Sem permissão</div>
                <div class="border-2 p-2 m-5">
                    <QrcodeStream @detect="onDetect" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePermission } from '@vueuse/core'
import { QrcodeStream } from 'vue-qrcode-reader'

const emit = defineEmits(['readValue'])

const camera = useCamera()
const cameraPermission = usePermission('camera')
const visible = ref(false)

onMounted(() => {
    if (cameraPermission.value !== 'granted') {
        camera.requestCameraPermission()
    }
})

const onDetect = (detectedCodes) => {
    console.log(detectedCodes)
}
</script>
