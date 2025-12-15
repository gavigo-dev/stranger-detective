<template>
    <Select
        class="bg-transparent"
        :options="options"
        option-label="label"
        option-value="value"
        :pt="{
            root: 'w-8 h-8 rounded-none border-none',
            label: 'p-0 flex items-center justify-center',
            dropdown: 'hidden'
        }"
    />
</template>

<script setup>
const options = [
    { label: '✅', value: 'guessed' },
    { label: '❌', value: 'excluded' },
    { label: '❓', value: 'doubted' }
]
</script>
