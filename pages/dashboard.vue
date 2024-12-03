<template>
  <div class="py-6">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
      
      <div class="mt-6 grid grid-cols-1 gap-6">
        <CarbonMetrics />
        <CategoryBreakdown />
        <RecommendationsList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>