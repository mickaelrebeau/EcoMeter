<template>
    <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Metrics Overview</h1>

            <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <h2 class="text-xl font-semibold mb-4">Historical Data</h2>
                    <div class="h-96">
                        <LineChart :data="chartData" :options="chartOptions" />
                    </div>
                </Card>

                <Card>
                    <h2 class="text-xl font-semibold mb-4">Impact Analysis</h2>
                    <div class="space-y-4">
                        <div v-for="metric in impactMetrics" :key="metric.id" class="flex justify-between items-center">
                            <span class="text-sm text-gray-600 dark:text-gray-300">{{ metric.label }}</span>
                            <span class="font-semibold">{{ metric.value }}</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Line as LineChart } from 'vue-chartjs'
import { useEcoStore } from '~/stores/eco'

definePageMeta({
    middleware: 'auth'
})

const ecoStore = useEcoStore()

const impactMetrics = ref([
    { id: 1, label: 'Total CO2 Saved', value: '2,450 kg' },
    { id: 2, label: 'Trees Equivalent', value: '40 trees' },
    { id: 3, label: 'Energy Saved', value: '1,200 kWh' },
    { id: 4, label: 'Water Conserved', value: '5,000 L' }
])

// Chart configuration would go here
const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Carbon Footprint (kg CO2)',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#059669',
            tension: 0.1
        }
    ]
})

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
})
</script>