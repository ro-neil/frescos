<script setup lang="ts">
interface MapConnectionProps {
  title?: string
  subtitle?: string
  mapImageSrc: string
  mapAlt?: string
}

withDefaults(defineProps<MapConnectionProps>(), {
  title: 'Map & Connection',
  subtitle: 'Find your way to flavor.',
  mapAlt: 'Map showing location in George Town, Grand Cayman',
})
</script>

<template>
  <section class="border-t border-[#e3ded3] bg-[#eeece5] px-4 py-4 sm:px-6 sm:py-6">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4"
    >
      <!-- Text -->
      <div class="min-w-0">
        <h2
          class="font-serif text-xl leading-tight text-gray-900 sm:text-2xl"
        >
          {{ title }}
        </h2>

        <p class="mt-0.5 text-[10px] leading-tight text-gray-800 sm:text-xs">
          {{ subtitle }}
        </p>
      </div>

      <!-- Map -->
      <div
        class="shrink-0 overflow-hidden rounded-sm border border-gray-500 bg-white p-1 shadow-sm"
      >
        <img
          :src="mapImageSrc"
          :alt="mapAlt"
          class="h-[84px] w-[140px] object-cover sm:h-[120px] sm:w-[200px]"
        />
      </div>
    </div>
  </section>
</template>
