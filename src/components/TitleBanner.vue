<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'
interface TitleBannerProps {
    class?: string
}

const props = defineProps<TitleBannerProps>()

const MotionH1 = motion.create('h1')
const visible = ref(false)

onMounted(() => {
    visible.value = true
})

</script>

<template>
    <div class="relative w-full overflow-visible">
        <!-- Animated Title -->
        <MotionH1 v-if="visible" :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 1, type: 'spring', bounce: 0.25 }"
            class="relative z-10 text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-[1.2] animate-soft-pulse"
            :class="props.class">
            <slot />
        </MotionH1>
    </div>
</template>

<style scoped>
@keyframes soft-pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.85;
    }
}

.animate-soft-pulse {
    animation: soft-pulse 2s ease-in-out infinite;
}
</style>
