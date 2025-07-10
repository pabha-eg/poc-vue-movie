<script setup lang="ts">
import { motion } from 'motion-v'

const MotionLi = motion.create('li')
const blocks = Array.from({ length: 4 })
</script>

<template>
    <ul class="loading-example">
        <MotionLi v-for="(_, i) in blocks" :key="i" class="loading-circle" :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }" :transition="{ delay: i * 0.1, duration: 0.5 }" />
    </ul>
</template>

<style scoped>
.loading-example {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: 2rem 0;
    padding: 0;
}

.loading-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-primary);
    opacity: 0;
    animation: pulseColor 1s ease-in-out infinite;
}

/* Offset delays for looping wave effect */
.loading-circle:nth-child(1) {
    animation-delay: 0s;
}

.loading-circle:nth-child(2) {
    animation-delay: 0.2s;
}

.loading-circle:nth-child(3) {
    animation-delay: 0.4s;
}

.loading-circle:nth-child(4) {
    animation-delay: 0.6s;
}

/* Pulse + color shift animation */
@keyframes pulseColor {
    0% {
        background-color: var(--color-primary);
        transform: scale(1);
        opacity: 1;
    }

    50% {
        background-color: var(--color-secondary);
        transform: scale(1.3);
        opacity: 0.8;
    }

    100% {
        background-color: var(--color-primary);
        transform: scale(1);
        opacity: 1;
    }
}
</style>
