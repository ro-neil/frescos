import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/MenuView.vue'),
  },
  {
    path: '/catering',
    name: 'Catering',
    component: () => import('@/views/CateringView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/MenuView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})

function getRouteMap(routes: RouteRecordRaw[]): Record<string, string> {
  return routes.reduce((acc, route) => {
    const name = route.name as string
    const path = route.path as string
    if (name && path) {
      acc[name.toLowerCase()] = path
    }
    return acc
  }, {} as Record<string, string>)
}

export const routeMap: Record<string, string> = getRouteMap(routes)

export default router
