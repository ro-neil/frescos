<script setup lang="ts">
interface LocationHoursProps {
  title?: string
  subtitle?: string
  address?: string
  hours?: string
  serviceHours?: string
  imageSrc: string
}

withDefaults(defineProps<LocationHoursProps>(), {
  title: 'Location & Hours',
  subtitle: 'Our island oasis on Grand Cayman.',
  address: 'George Town, Grand Cayman',
  hours: 'Open Daily | 7:00 AM – 8:00 PM',
  serviceHours: '(Breakfast served 7:30 AM – 11:00 AM)',
})
</script>

<template>
  <section class="bg-[#f7f4eb] px-4 py-5 sm:px-6 sm:py-7">
    <div class="flex flex-col gap-5 sm:gap-8">
      <!-- Heading -->
      <header class="mb-4 sm:mb-6 lg:mb-8">
        <h2
          class="font-serif text-xl leading-tight text-gray-900 sm:text-2xl"
        >
          {{ title }}
        </h2>

        <p class="mt-0.5 text-[10px] leading-tight text-gray-800 sm:text-xs">
          {{ subtitle }}
        </p>
      </header>

      <!-- Content -->
      <div class="flex items-between gap-5 sm:gap-8"
      >
        <!-- Image -->
        <div class="shrink-0 sm:w-1/2">
          <div
            class="mx-auto aspect-square w-36 overflow-hidden rounded-full border-[7px] border-[#d98a4c] sm:w-48 md:w-56"
          >
            <img
              :src="imageSrc"
              alt="Location interior"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Details -->
        <div class="min-w-0 flex-1">
          <div class="border-b border-[#ded8ca] pb-2">
            <h3 class="text-sm font-medium text-gray-900 sm:text-base">
              Address
            </h3>

            <p class="text-[10px] leading-tight text-gray-800 sm:text-xs">
              {{ address }}
            </p>
          </div>

          <div class="pt-2">
            <h3 class="text-sm font-medium text-gray-900 sm:text-base">
              Hours of Operation
            </h3>

            <p class="text-[10px] leading-tight text-gray-800 sm:text-xs">
              {{ hours }}
            </p>

            <p class="text-[9px] leading-tight text-gray-800 sm:text-[11px]">
              {{ serviceHours }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>