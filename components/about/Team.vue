<template>
    <Card>
        <h2 class="mt-10 text-2xl text-center font-bold text-gray-900 dark:text-white mb-6">Our Team</h2>
        <div class="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="member in team" :key="member.id"
                class="py-8 px-4 text-center border border-emerald-600 rounded-xl shadow-2xl shadow-emerald-600/50">
                <img :src="member.avatar" :alt="member.name" class="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ member.name }}
                </h3>
                <p class="text-sm text-emerald-600 mb-2">{{ member.role }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    {{ member.description }}
                </p>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
const team = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO & Founder',
        description: 'Environmental scientist with 15 years of experience in sustainability.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'CTO',
        description: 'Tech innovator focused on creating sustainable solutions.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
        role: 'Head of Research',
        description: 'Leading research initiatives in environmental impact assessment.',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
]
</script>