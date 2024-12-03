<template>
  <Card>
    <h2 class="text-xl font-semibold mb-4">Category Breakdown</h2>
    <div class="space-y-4">
      <div v-for="(value, category) in categories" :key="category" class="relative">
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
            {{ category }}
          </span>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ value }}kg CO2
          </span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            class="bg-emerald-600 h-2.5 rounded-full"
            :style="{ width: `${(value / totalEmissions) * 100}%` }"
          ></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useEcoStore } from '~/stores/eco'

const ecoStore = useEcoStore()
const { categories } = storeToRefs(ecoStore)
const totalEmissions = computed(() => ecoStore.totalImpact)
</script>