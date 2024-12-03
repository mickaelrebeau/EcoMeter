<template>
    <Card>
        <h2 class="mt-8 text-2xl text-center font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
        <div class="px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="feature in features" :key="feature.id" class="flex space-x-4">
                <div class="flex-shrink-0">
                    <component :is="feature.icon" class="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        {{ feature.title }}
                    </h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import {
    ChartBarIcon,
    LightBulbIcon,
    UserGroupIcon,
    TrophyIcon
} from '@heroicons/vue/24/outline'

const features = [
    {
        id: 1,
        title: 'Real-time Tracking',
        description: 'Monitor your environmental impact with accurate, up-to-the-minute data visualization.',
        icon: ChartBarIcon
    },
    {
        id: 2,
        title: 'Smart Recommendations',
        description: 'Receive personalized suggestions to reduce your carbon footprint effectively.',
        icon: LightBulbIcon
    },
    {
        id: 3,
        title: 'Community Impact',
        description: 'Join a global community committed to environmental sustainability.',
        icon: UserGroupIcon
    },
    {
        id: 4,
        title: 'Achievement System',
        description: 'Earn rewards and track your progress towards environmental goals.',
        icon: TrophyIcon
    }
]
</script>