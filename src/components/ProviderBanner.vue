<script setup lang="ts">
import { motion } from 'motion-v'
import { useWatchProviders } from '@/composables/useWatchProviders'
import LoadingIndicator from './ui/LoadingIndicator.vue'

const MotionDiv = motion.create('div')
const { leftProviders, rightProviders, loading } = useWatchProviders()
</script>

<template>
    <div class="space-y-4 w-full overflow-hidden py-4">
        <!-- Loading State -->
        <LoadingIndicator v-if="loading" />
        <!-- Marquee Left -->
        <div class="flex whitespace-nowrap animate-marquee-left space-x-6">
            <MotionDiv v-for="provider in leftProviders" :key="provider.provider_id"
                class="h-[60px] w-[100px] flex-shrink-0" :initial="{ opacity: 0, scale: 0.9 }"
                :animate="{ opacity: 1, scale: 1 }" :transition="{ duration: 0.5 }">
                <img :src="`https://image.tmdb.org/t/p/w154${provider.logo_path}`" :alt="provider.provider_name"
                    class="w-full h-full object-contain" />
            </MotionDiv>
        </div>

        <!-- Marquee Right -->
        <div class="flex whitespace-nowrap animate-marquee-right space-x-6">
            <MotionDiv v-for="provider in rightProviders" :key="provider.provider_id"
                class="h-[60px] w-[100px] flex-shrink-0" :initial="{ opacity: 0, scale: 0.9 }"
                :animate="{ opacity: 1, scale: 1 }" :transition="{ duration: 0.5 }">
                <img :src="`https://image.tmdb.org/t/p/w154${provider.logo_path}`" :alt="provider.provider_name"
                    class="w-full h-full object-contain" />
            </MotionDiv>
        </div>
    </div>
</template>

<style scoped>
@keyframes marquee-left {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes marquee-right {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
}

.animate-marquee-left {
    animation: marquee-left 20s linear infinite;
}

.animate-marquee-right {
    animation: marquee-right 20s linear infinite;
}
</style>
