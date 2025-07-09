<script setup lang="ts">
import { motion } from 'motion-v'

const MotionDiv = motion.create('div')

// Generate floating particles with random horizontal and vertical placement
const particles = Array.from({ length: 20 }).map(() => ({
    id: crypto.randomUUID(),
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
}))
</script>

<template>
    <div class="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <MotionDiv v-for="p in particles" :key="p.id"
            class="absolute w-3 h-3 rounded-full opacity-90 blur-xs bg-primary" :style="{ left: p.left, top: p.top }"
            :initial="{ y: 0, opacity: 0 }" :animate="{ y: 20, opacity: [0, 1, 0] }"
            :transition="{ duration: p.duration, repeat: Infinity, delay: p.delay }" />
    </div>
</template>
