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
  <section class="bg-[#f7f4eb] px-4 pb-5 sm:px-6 sm:pb-7">
    <div class="w-full">
      <h2
        class="mb-4 sm:mb-6 lg:mb-8 font-serif text-xl leading-tight text-gray-900 sm:text-2xl"
      >
        Amenities
      </h2>

      <div
        class="grid grid-cols-4 gap-1.5 sm:grid-cols-4 sm:gap-3"
      >
        <article
          v-for="amenity in amenities"
          :key="amenity.label"
          class="flex min-h-[74px] flex-col items-center justify-center rounded-lg border border-[#d8a878] px-1 py-2 text-center sm:min-h-[100px] sm:px-2"
        >
          <!-- Icon -->
          <component
            :is="amenity.icon"
            :size="27"
            :stroke-width="1.5"
            class="mb-2 shrink-0 text-[#ce8041] sm:h-8 sm:w-8"
          />

          <!-- Label -->
          <span
            class="whitespace-pre-line text-[8px] font-medium leading-[1.15] text-gray-800 sm:text-[10px]"
          >
            {{ amenity.label }}
          </span>
        </article>
      </div>
    </div>
  </section>
</template>