<template>
    <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Recommendations</h1>

            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="category in categories" :key="category.id" class="space-y-4">
                    <Card>
                        <h2 class="text-xl font-semibold mb-4 flex items-center">
                            <component :is="category.icon" class="w-6 h-6 mr-2 text-emerald-600" />
                            {{ category.title }}
                        </h2>
                        <div class="space-y-4">
                            <div v-for="tip in category.tips" :key="tip.id"
                                class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h3 class="font-medium text-gray-900 dark:text-white">{{ tip.title }}</h3>
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ tip.description }}</p>
                                <div class="mt-3 flex items-center text-sm text-emerald-600">
                                    <span>Potential impact: {{ tip.impact }}</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LightBulbIcon, CarIcon, HomeIcon } from '@heroicons/vue/24/outline'

definePageMeta({
    middleware: 'auth'
})

const categories = ref([
    {
        id: 1,
        title: 'Energy',
        icon: LightBulbIcon,
        tips: [
            {
                id: 1,
                title: 'Smart Thermostat',
                description: 'Install a smart thermostat to optimize heating and cooling.',
                impact: '-15% energy usage'
            },
            {
                id: 2,
                title: 'LED Lighting',
                description: 'Replace all traditional bulbs with LED alternatives.',
                impact: '-75% lighting energy'
            }
        ]
    },
    {
        id: 2,
        title: 'Transportation',
        icon: CarIcon,
        tips: [
            {
                id: 1,
                title: 'Public Transit',
                description: 'Use public transportation for your daily commute.',
                impact: '-30% emissions'
            },
            {
                id: 2,
                title: 'Bike Commuting',
                description: 'Consider biking for short-distance trips.',
                impact: '-100% emissions'
            }
        ]
    },
    {
        id: 3,
        title: 'Home',
        icon: HomeIcon,
        tips: [
            {
                id: 1,
                title: 'Water Conservation',
                description: 'Install low-flow fixtures in your bathroom.',
                impact: '-20% water usage'
            },
            {
                id: 2,
                title: 'Insulation',
                description: 'Improve home insulation to reduce energy loss.',
                impact: '-25% heating/cooling'
            }
        ]
    }
])
</script>