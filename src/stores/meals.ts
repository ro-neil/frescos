// src/stores/meals.js
import { defineStore } from 'pinia'
import { mealsApi } from '@/api/meals'
import type { Meal } from "@/types/Meal"

export const useMealStore = defineStore('meals', {
  state: () => ({
    items: [] as Meal[],          // canonical meal list from backend
    total: 0,           // for pagination
    isLoading: false,
    error: null,
    filters: {
      category: null,
      query: '',
      page: 1,
      perPage: 12,
    },

  }),
  getters: {
    filtered: (state) => {
      let list = state.items
      if (state.filters.category) {
        list = list.filter(m => m.category === state.filters.category)
      }
      if (state.filters.query) {
        const q = state.filters.query.toLowerCase()
        list = list.filter(m => (m.name + ' ' + (m.description||'')).toLowerCase().includes(q))
      }
      return list
    },
    getMealsByCategory: (state) => {
      return (category: 'breakfast' | 'lunch' | 'dinner') => {
        return state.items.filter(m => m.category === category)
      }
    },
  },
  actions: {
    async fetchMeals(opts = {}) {
      this.isLoading = true
      this.error = null
      try {
        // merge optional runtime filters (e.g., for server-side pagination/search)
        // const params = {
        //   page: this.filters.page,
        //   perPage: this.filters.perPage,
        //   category: this.filters.category,
        //   q: this.filters.query,
        //   ...opts,
        // }
        const data = await mealsApi.list() as { items: Meal[]; total: number }
        // assume backend returns { items: [...], total }
        this.items = data.items
        this.total = data.total ?? data.items.length
      } catch (err: any) {
        this.error = err.message || String(err)
      } finally {
        this.isLoading = false
      }
    },
    async fetchMeal(id: number) {
      this.isLoading = true
      try {
        const meal = await mealsApi.get(id) as Meal
        const idx = this.items.findIndex((m: Meal) => m.name === meal.name)
        if (idx >= 0) this.items[idx] = meal
        else this.items.unshift(meal)
        return meal
      } finally {
        this.isLoading = false
      }
    },
    async updateMeal(id: number, payload: Partial<Meal>) {
      this.isLoading = true
      try {
        const updated = await mealsApi.update(id, payload) as Meal
        const idx = this.items.findIndex((m: Meal) => m.name === updated.name)
        if (idx >= 0) this.items[idx] = updated
        return updated
      } finally {
        this.isLoading = false
      }
    },
  },
})