<template>
  <header class="bg-white dark:bg-gray-800 shadow border-b border-gray-600">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <div class="flex">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-xl font-bold text-emerald-600">EcoMeter</span>
          </NuxtLink>
        </div>
        
        <div v-if="isAuthenticated" class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
          <NuxtLink to="/dashboard" class="text-gray-700 dark:text-gray-200 hover:text-emerald-600">
            Dashboard
          </NuxtLink>
          <NuxtLink to="/metrics" class="text-gray-700 dark:text-gray-200 hover:text-emerald-600">
            Metrics
          </NuxtLink>
          <NuxtLink to="/recommendations" class="text-gray-700 dark:text-gray-200 hover:text-emerald-600">
            Recommendations
          </NuxtLink>
          <UserMenu />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useState } from '#app';
import UserMenu from './UserMenu.vue';

const supabase = useSupabaseClient();

const isAuthenticated = useState('isAuthenticated', () => false);

supabase.auth.getSession().then(({ data: { session } }) => {
  isAuthenticated.value = !!session;
});
</script>