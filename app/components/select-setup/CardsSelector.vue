<template>
    <div>
        <div>
            <QR @read-value="readValue" />
        </div>
    </div>
</template>

<script setup>
import QR from './QR.vue'

const props = defineProps({
    modelValue: {
        type: [Object, null],
        default: null
    }
})
const emit = defineEmits(['update:modelValue'])

const suspect = ref('')
const weapon = ref('')
const place = ref('')

const finalValue = computed(() => {
    return {
        suspect: suspect.value,
        weapon: weapon.value,
        place: place.value
    }
})

watchEffect(() => {
    emit('update:modelValue', finalValue.value)
})

const readValue = (value) => {}
</script>
