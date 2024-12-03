<template>
    <Card>
        <h2 class="mt-10 text-2xl text-center font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6 max-w-lg mx-auto mb-8">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                </label>
                <input id="email" v-model="form.email" type="email" required
                    class="p-2 mt-1 block w-full rounded-md text-white bg-transparent border border-gray-500 shadow-md shadow-emerald-900 focus:border-emerald-500 focus:ring-emerald-500" />
            </div>

            <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                </label>
                <input id="subject" v-model="form.subject" type="text" required
                    class="p-2 mt-1 block w-full rounded-md text-white bg-transparent border border-gray-500 shadow-md shadow-emerald-900 focus:border-emerald-500 focus:ring-emerald-500" />
            </div>

            <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                </label>
                <textarea id="message" v-model="form.message" rows="4" required
                    class="p-2 mt-1 block w-full rounded-md text-white bg-transparent border border-gray-500 shadow-md shadow-emerald-900 focus:border-emerald-500 focus:ring-emerald-500"></textarea>
            </div>

            <div class="flex justify-end">
                <Button type="submit" variant="primary" :disabled="loading"
                    class="py-2 w-full flex justify-center hover:text-white bg-emerald-500 rounded-lg hover:bg-emerald-700">
                    {{ loading ? 'Sending...' : 'Send Message' }}
                </Button>
            </div>
        </form>
    </Card>
</template>

<script setup lang="ts">
const loading = ref(false)
const form = ref({
    subject: '',
    email: '',
    message: ''
})

const handleSubmit = async () => {
    try {
        loading.value = true
        // Implementation for form submission
        console.log('Submitting form:', form.value)
    } catch (error) {
        console.error('Form submission failed:', error)
    } finally {
        loading.value = false
    }
}
</script>