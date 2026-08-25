<script setup lang="ts">
interface LocationHoursProps {
  heading?: string
  subheading?: string
  address?: string
  hours?: string
  serviceHours?: string
  imageSrc: string
}

withDefaults(defineProps<LocationHoursProps>(), {
  heading: 'Heading',
  subheading: 'Subheading',
  address: 'Restaurant Address',
  hours: 'Opening Hours',
  serviceHours: 'Service Hours',
})
</script>

<template>
  <section class="bg-[#f7f4eb] px-4 py-5 sm:px-6 sm:py-7">
    <div class="flex flex-col gap-5 sm:gap-8">
      <!-- Heading -->
      <header class="mb-4 sm:mb-6 lg:mb-8">
        <h2
          class="page-heading !mb-0"
        >
          {{ heading }}
        </h2>

        <p class="text-description !text-sm">
          {{ subheading }}
        </p>
      </header>

      <!-- Content -->
      <div class="flex items-between gap-5 sm:gap-8"
      >
        <!-- Image -->
        <div class="sm:w-1/2">
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