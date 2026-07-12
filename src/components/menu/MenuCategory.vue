<script setup lang="ts">
import MenuItemCard from '@/components/menu/MenuItemCard.vue';
import type { Meal } from '@/types/Meal';
import IconFlatware from '@/components/icons/IconFlatware.vue'

// Define strict TypeScript interface for props
interface Props {
    name: string,
    orientation?: 'horizontal' | 'vertical';
    items: Meal[]
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'vertical',
    reverse: false
});


</script>

<template>
    <div class="rounded-2xl pb-10 w-full max-w-4xl">
        <div class="hidden flex justify-between items-center p-1 w-full border-b border-b border-orange-100 text-orange-500">
            <IconFlatware />
            <h2 class="text-2xl text-center font-bold tracking-wider uppercase">
                {{ name }}
            </h2>
            <IconFlatware />
        </div>

        <div class="grid grid-cols-1 gap-5 max-w-4xl mx-auto mt-5!"
            :class="{ 'md:grid-cols-2': orientation === 'vertical' }">
            <MenuItemCard v-for="(meal, index) in items" :key="index" :name="meal.name" :description="meal.description"
                :price="meal.price" :image="meal.image" :orientation="orientation"
                :reverse="orientation === 'horizontal' && (index % 2 === 1)" />
        </div>
    </div>
</template>