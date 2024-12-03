<template>
  <Card>
    <h2 class="text-xl font-semibold mb-4">Personalized Recommendations</h2>
    <div class="space-y-4">
      <div
        v-for="recommendation in recommendations"
        :key="recommendation.id"
        class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
      >
        <div class="flex items-start">
          <div
            class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center"
          >
            <component
              :is="recommendation.icon"
              class="w-4 h-4 text-emerald-600 dark:text-emerald-400"
            />
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-900 dark:text-white">
              {{ recommendation.title }}
            </h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ recommendation.description }}
            </p>
            <div class="mt-3">
              <Button variant="primary" class="text-xs">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { LightBulbIcon, CarIcon, LeafIcon } from '@heroicons/vue/24/outline'

const recommendations = ref([
  {
    id: 1,
    title: 'Switch to LED Lighting',
    description: 'Replace traditional bulbs with LED alternatives to reduce energy consumption.',
    icon: LightBulbIcon,
  },
  {
    id: 2,
    title: 'Optimize Transportation',
    description: 'Consider carpooling or using public transport to reduce emissions.',
    icon: CarIcon,
  },
  {
    id: 3,
    title: 'Start Composting',
    description: 'Reduce waste and create nutrient-rich soil for your garden.',
    icon: LeafIcon,
  },
])
</script>