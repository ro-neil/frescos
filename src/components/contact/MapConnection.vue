<script setup lang="ts">
import {
  Clock,
  MapPinnedIcon,
  PhoneIcon
} from 'lucide-vue-next';
import Link from '@/components/utils/Link.vue';
import { routeMap } from '@/router/index.ts'


interface MapConnectionProps {
  mapImageSrc: string
}

defineProps<MapConnectionProps>()

</script>

<template>
  <section class="section-container bg-gray-50/75 dark:bg-slate-400">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-5">
      <!-- Text -->
      <div class="flex flex-col gap-5 w-full lg:items-start">
        <h2 class="page-heading text-dark dark:text-light text-nowrap">
          {{ 'Find us here' }}
        </h2>

        <div
          class="flex flex-col gap-5 md:gap-10 lg:gap-5 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start lg:justify-start">
          <div class="flex items-center gap-3">
            <MapPinnedIcon :size="24" class="text-red-600 lg:text-dark" />
            <div class="flex flex-col gap-1">
              <address class="flex items-center gap-2 sm:gap-4">
                <span class="font-serif leading-tight">{{ 'George Town, Grand Cayman' }}</span>
              </address>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <Clock :size="24" class="text-red-600 lg:text-dark" />
            <div class="flex flex-col gap-1">
              <p class="flex items-center gap-2">
                <span class="font-serif leading-tight italic">{{ 'Open Daily | 7:00 AM - 8:00 PM' }}</span>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <PhoneIcon :size="24" class="text-red-600 lg:text-dark" />
            <div class="flex flex-col gap-1">
              <p class="flex items-center gap-2">
                <span class="font-serif leading-tight italic">Call us at <a href="tel:+1234567890">+1 (345) 567-890</a></span>
              </p>
            </div>
          </div>
        </div>

        <div class="hidden lg:block py-3">
          <Link :to="routeMap.booking || ''" :text="'View Offerings'" class="border-orange-500 bg-orange-500 text-primary hover:bg-transparent hover:text-orange-500! hover:no-underline! 
            dark:hover:text-white! dark:hover:bg-transparent" />
        </div>
      </div>

      <!-- Map -->
      <div class="lg:min-w-[55%] overflow-hidden rounded-sm border border-gray-300 bg-white p-1 shadow-sm">
        <img :src="mapImageSrc" alt="Map showing location in George Town, Grand Cayman" class="object-cover" />
      </div>
    </div>
  </section>
</template>
