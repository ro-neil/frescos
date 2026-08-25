<script setup lang="ts">
import {
  Accessibility,
  Armchair,
  CreditCard,
  Truck,
} from 'lucide-vue-next'

interface Amenity {
  label: string
  icon: typeof Accessibility
}

const amenities: Amenity[] = [
  {
    label: 'Dine-In',
    icon: Armchair,
  },
  {
    label: 'Takeaway & Delivery',
    icon: Truck,
  },
  {
    label: 'Wheelchair Accessible',
    icon: Accessibility,
  },
  {
    label: 'Credit/Debit/\nNFC Accepted',
    icon: CreditCard,
  },
]
</script>

<template>
  <section class="section-container bg-[#f7f4eb] dark:bg-slate-800 px-4 pb-5 sm:px-6 sm:pb-7">
    <div class="w-full">
      <h2
        class="mb-4! lg:mb-8 font-serif text-xl leading-tight text-dark dark:text-light sm:text-2xl"
      >
        Amenities
      </h2>

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-5 lg:gap-7"
      >
        <article
          v-for="amenity in amenities"
          :key="amenity.label"
          class="flex min-h-[100px] flex-col items-center justify-center sm:gap-2 rounded-lg border border-orange-400 px-1 py-2 text-center sm:min-h-[150px] md:min-h-[200px] sm:px-2"
        >
          <!-- Icon -->
          <component
            :is="amenity.icon"
            :size="27"
            :stroke-width="1.5"
            class="mb-2 shrink-0 text-[#ce8041] sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16"
          />

          <!-- Label -->
          <span
            class="whitespace-pre-line text-xs font-medium leading-[1.15] text-dark dark:text-light sm:text-base"
          >
            {{ amenity.label }}
          </span>
        </article>
      </div>
    </div>
  </section>
</template>