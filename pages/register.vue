<template>
    <div class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sign in to your account
                </h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <label for="email" class="sr-only">Email address</label>
                        <input id="email" v-model="form.email" name="email" type="email" required
                            class="p-2 mt-1 block w-full rounded-md text-white bg-transparent border border-gray-500 shadow-md shadow-emerald-900 focus:ring-emerald-500rounded-md relative placeholder-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                            placeholder="Email address" />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" v-model="form.password" name="password" type="password" required
                            class="p-2 mt-1 block w-full rounded-md text-white bg-transparent border border-gray-500 shadow-md shadow-emerald-900 focus:ring-emerald-500rounded-md relative placeholder-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                            placeholder="Password" />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" v-model="form.remember" name="remember-me" type="checkbox"
                            class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-emerald-600 hover:text-emerald-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <Button type="submit" variant="primary" :disabled="loading"
                        class="py-2 w-full flex justify-center hover:text-white bg-emerald-500 rounded-md hover:bg-emerald-700">
                        {{ loading ? 'Signing in...' : 'Sign in' }}
                    </Button>
                </div>
            </form>
            <div class="border-t border-gray-500 pt-4"></div>
            <div class="text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    Don't have an account?
                    <NuxtLink to="/register" class="font-medium text-emerald-600 hover:text-emerald-500">
                        Start your 14-day free trial
                    </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const form = ref({
    email: '',
    password: '',
    remember: false
})

const handleLogin = async () => {
    try {
        loading.value = true
        // Implementation for login with supabase
        console.log('Logging in:', form.value)
        // Redirect to dashboard after successful login
        await navigateTo('/dashboard')
    } catch (error) {
        console.error('Login failed:', error)
    } finally {
        loading.value = false
    }
}
</script>