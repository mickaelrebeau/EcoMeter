<template>
    <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="space-y-6">
                <Card>
                    <div class="flex items-center space-x-4">
                        <img class="h-16 w-16 rounded-full" :src="user.avatar" alt="Profile picture" />
                        <div>
                            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
                                {{ user.name }}
                            </h1>
                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                Member since {{ formatDate(user.joinedAt) }}
                            </p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h2 class="text-xl font-semibold mb-4">Profile Settings</h2>
                    <form @submit.prevent="updateProfile" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input id="name" v-model="form.name" type="text"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input id="email" v-model="form.email" type="email"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                        </div>

                        <div>
                            <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Location
                            </label>
                            <input id="location" v-model="form.location" type="text"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
                        </div>

                        <div class="flex justify-end">
                            <Button type="submit" variant="primary">
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </Card>

                <Card>
                    <h2 class="text-xl font-semibold mb-4">Preferences</h2>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-700 dark:text-gray-300">Email Notifications</span>
                            <Switch v-model="preferences.emailNotifications" />
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-700 dark:text-gray-300">Weekly Reports</span>
                            <Switch v-model="preferences.weeklyReports" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import dayjs from 'dayjs'

definePageMeta({
    middleware: 'auth'
})

const user = ref({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'San Francisco, CA',
    joinedAt: '2024-01-15'
})

const form = ref({
    name: user.value.name,
    email: user.value.email,
    location: user.value.location
})

const preferences = ref({
    emailNotifications: true,
    weeklyReports: true
})

const formatDate = (date: string) => {
    return dayjs(date).format('MMMM D, YYYY')
}

const updateProfile = async () => {
    // Implementation for profile update
    console.log('Updating profile:', form.value)
}
</script>