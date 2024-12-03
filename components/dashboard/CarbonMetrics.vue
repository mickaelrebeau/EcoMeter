<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold mb-4">Carbon Footprint Metrics</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        v-for="metric in metrics"
        :key="metric.id"
        :title="metric.title"
        :value="metric.value"
        :unit="metric.unit"
        :trend="metric.trend"
      />
    </div>
    <div class="mt-6">
      <LineChart :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Line as LineChart } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const metrics = ref([
  { id: 1, title: 'Daily Impact', value: 12.5, unit: 'kg CO2', trend: 'down' },
  { id: 2, title: 'Weekly Total', value: 87.3, unit: 'kg CO2', trend: 'up' },
  { id: 3, title: 'Monthly Average', value: 375.2, unit: 'kg CO2', trend: 'down' }
])

onMounted(() => {
  gsap.from('.metric-card', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>