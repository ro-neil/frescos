<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineOptions({ inheritAttrs: false })
defineProps({
    to: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    iconEnd: {
        type: Boolean,
        default: false
    },
})
</script>

<template>
    <RouterLink v-bind="$attrs" :to="to" class="rounded-link flex items-center gap-1 border-2 px-4 py-2 rounded-full transition-colors 
        duration-100 ease-in-out font-medium text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 text-base sm:text-lg!">
        <i><slot name="icon" v-if="!iconEnd"></slot></i>
        <span v-if="text">{{ text }}</span>
        <slot v-else></slot>
        <i><slot name="icon" v-if="iconEnd"></slot></i>
    </RouterLink>
</template>