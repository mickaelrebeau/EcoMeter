<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <NuxtLoadingIndicator />
    <TheHeader v-if="showHeader" />
    <main class="h-full">
      <NuxtPage />
    </main>
    <TheFooter v-if="showHeader" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showHeader = computed(() => !['login', 'register', 'index'].includes(route.name as string))
</script>