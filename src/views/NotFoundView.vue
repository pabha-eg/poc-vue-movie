<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        router.push('/')
    }, 3000) // 3 seconds
})
</script>

<template>
    <div class="text-center p-8">
        <h1 class="text-4xl font-bold mb-2">404 - Page Not Found</h1>
        <p class="text-gray-600">Redirecting to home page...</p>
    </div>
</template>
