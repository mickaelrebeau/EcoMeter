<template>
    <div class="h-full py-6 bg-gray-50 dark:bg-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="h-screen text-center flex flex-col items-center justify-center">
                    <h1
                        class="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-emerald-600 to-emerald-200 text-transparent bg-clip-text">
                        Track Your Environmental Impact
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        Make a difference by understanding and reducing your carbon footprint.
                        Join thousands of others committed to creating a sustainable future.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <NuxtLink to="/register"
                            class="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500">
                            Get started
                        </NuxtLink>
                    </div>
                    <div class="mt-24">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="50" height="50"
                            class="animate-bounce">
                            <path fill="#059669"
                                d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" />
                        </svg>
                    </div>
                </div>
            </div>

            <h2 class="mb-12 text-3xl text-center font-bold text-gray-900 dark:text-white">About EcoMeter</h2>

            <div class="space-y-8">
                <Mission />
                <Features />
                <Team />
                <Contact />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Mission from '../components/about/Mission.vue'
import Features from '../components/about/Features.vue'
import Team from '../components/about/Team.vue'
import Contact from '../components/about/Contact.vue'
</script>