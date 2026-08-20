<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineProps({
    text: {
        type: String,
        required: false
    }
});
</script>


<template>
	<p v-if="text" v-bind="$attrs" class="text-description">{{ text }}</p>
    <p v-else class="text-description">
        <slot  ></slot>
    </p> 
</template>
