<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineOptions({ inheritAttrs: false })
defineProps({
    to: {
        type: String,
        required: true
    }
})
</script>

<template>
    <RouterLink v-bind="$attrs" :to="to"
        class="rounded-link px-4 py-2 rounded-full transition-colors duration-200 ease-in-out font-medium hover:!no-underline hover:bg-transparent">
        <slot />
    </RouterLink>
</template>