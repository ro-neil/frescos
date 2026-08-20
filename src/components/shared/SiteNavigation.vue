<script setup lang="ts">
import { ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { routes } from '@/router/index'
import Brand from '@/components/utils/Brand.vue'
import IconNorthEastArrow from '@/components/icons/IconNorthEastArrow.vue'

const filteredRoutes = computed(() => routes.filter(r => r.path !== '/'))
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}

// Prevent body scrolling when mobile menu is open
watchEffect(() => {
    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
})

let mediaQuery: MediaQueryList | null = null
const handleBreakpointChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
        closeMobileMenu()
    }
}

onMounted(() => {
    mediaQuery = window.matchMedia('(min-width: 640px)')
    mediaQuery.addEventListener('change', handleBreakpointChange)

    if (mediaQuery.matches) {
        closeMobileMenu()
    }
})

onBeforeUnmount(() => {
    document.body.style.overflow = ''
    mediaQuery?.removeEventListener('change', handleBreakpointChange)
})
</script>

<template>
    <nav class="relative border-b border-gray-200 dark:border-gray-800">
        <div class="flex justify-between items-center sm:px-6 px-4 py-3">
            <!-- Brand / left side -->
            <Brand
                class="text-fresco dark:hover:decoration-emerald-600! hover:decoration-emerald-800 text-shadow-xs text-shadow-gray-700/75" />

            <!-- Mobile toggle -->
            <button type="button"
                class="text-fresco sm:hidden inline-flex items-center justify-center rounded-md text-white"
                @click="toggleMobileMenu" :aria-expanded="mobileMenuOpen" aria-label="Toggle navigation menu">
                <!-- Burger icon -->
                <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <!-- Close icon -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Desktop nav -->
            <ul class="hidden gap-4 sm:flex">
                <li v-for="route in filteredRoutes" :key="route.name">
                    <RouterLink :to="route.path" class="">
                        {{ route.name }}
                    </RouterLink>
                </li>
            </ul>
        </div>

        <!-- Mobile overlay -->
        <Transition name="nav-overlay">
            <div v-if="mobileMenuOpen"
                class="fixed left-0 top-13 bottom-0 z-50 w-full border-t border-gray-200 dark:border-gray-800 bg-primary dark:bg-gray-900 shadow-lg sm:hidden overflow-y-auto">
                <TransitionGroup name="nav-item" tag="ul" class="flex flex-col gap-0 p-4">
                    <li v-for="(route, index) in filteredRoutes" :key="route.name" class=""
                        :style="{ '--index': index, '--total': filteredRoutes.length }"
                        >
                        <RouterLink :to="route.path"
                            class="flex items-center gap-2 py-3 text-fresco hover:text-gray-900"
                            @click="closeMobileMenu">
                            <IconNorthEastArrow class="size-4" />
                            <span>{{ route.name }}</span>
                        </RouterLink>
                    </li>
                </TransitionGroup>
            </div>
        </Transition>
    </nav>
</template>

<style scoped>
nav {
    font-size: 1rem;
}

nav li {
    margin: 0;
}

/* =========================================
   OVERLAY CONTAINER ANIMATION
   ========================================= */
.nav-overlay-enter-active {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-overlay-leave-active {
    transition: all 0.05s cubic-bezier(0.4, 0, 1, 1);
}

.nav-overlay-enter-from,
.nav-overlay-leave-to {
    opacity: 0;
    transform: translateY(-1rem);
    /* Slides down slightly on open, up on close */
}

/* =========================================
   LIST ITEMS STAGGERED ANIMATION
   ========================================= */
.nav-item-enter-active {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    /* Stagger the entrance: each item delays by 50ms */
    transition-delay: calc(var(--index) * 50ms);
}

.nav-item-leave-active {
    transition: all 0.05s ease-in;
    /* Reverse stagger on exit so the last item leaves first */
    transition-delay: calc((var(--total) - var(--index) - 1) * 15ms);
}

.nav-item-enter-from,
.nav-item-leave-to {
    opacity: 0;
    transform: translateY(10px);
    /* Slides up slightly on open, down on close */
}

/* Smooth movement if items are added/removed dynamically */
.nav-item-move {
    transition: transform 0.3s ease;
}
</style>