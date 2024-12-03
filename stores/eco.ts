import { defineStore } from 'pinia'

export const useEcoStore = defineStore('eco', {
  state: () => ({
    metrics: {
      daily: 0,
      weekly: 0,
      monthly: 0
    },
    categories: {
      transport: 0,
      energy: 0,
      food: 0,
      purchasing: 0,
      waste: 0
    },
    goals: [],
    recommendations: []
  }),
  
  actions: {
    async fetchMetrics() {
      // Implement API call to fetch metrics
    },
    async updateCategory(category: string, value: number) {
      // Update category value and recalculate totals
    },
    async generateRecommendations() {
      // Generate personalized recommendations based on user data
    }
  },
  
  getters: {
    totalImpact: (state) => {
      return Object.values(state.categories).reduce((acc, curr) => acc + curr, 0)
    }
  }
})