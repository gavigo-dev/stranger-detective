<template>
    <Button class="bg-transparent w-9 h-9" @click="selectNew">
        {{ getEmoji(selected) }}
    </Button>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])

const selected = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})

const counter = ref(0)
const options = [
    { label: '', value: '' },
    { label: '❌', value: 'excluded' },
    { label: '✅', value: 'guessed' },
    { label: '❔', value: 'doubted' }
]
const getEmoji = (key) => options.find((item) => item.value === key).label

function selectNew() {
    counter.value++
    if (counter.value >= options.length) counter.value = 0

    selected.value = options[counter.value].value
}
</script>
