<template>
  <div class="metric-card bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ title }}</h3>
    <div class="mt-1 flex items-baseline">
      <div class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
        {{ value }}
        <span class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{{ unit }}</span>
      </div>
      <div
        :class="[
          trend === 'up' ? 'text-red-600' : 'text-green-600',
          'ml-2 flex items-baseline text-sm font-semibold'
        ]"
      >
        <component
          :is="trend === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'"
          class="h-4 w-4 flex-shrink-0 self-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid'

defineProps<{
  title: string
  value: number
  unit: string
  trend: 'up' | 'down'
}>()</script>