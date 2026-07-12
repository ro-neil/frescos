<script setup lang="ts">

defineProps<{
    name: string
    description: string
    price: number
}>()
</script>

<template>
    <div class="flex items-start justify-between gap-5 mb-3! w-full">
        <div class="flex flex-col items-start justify-start">
            <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-0!">{{ name }}</h3>
            <p class="text-gray-600 dark:text-gray-200">{{ description }}</p>
        </div>   
        <p class="text-lg text-orange-600 dark:text-white font-bold">${{ price.toFixed(2) }}</p>
    </div>
</template>