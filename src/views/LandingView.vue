<script setup lang="ts">
import { useScroll, motion, useTransform } from 'motion-v'
import Header from '@/components/Header.vue'
import PopularMovieCarousel from '@/components/PopularMovieCarousel.vue'

const MotionDiv = motion.create('div')
const { scrollYProgress } = useScroll()
const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#d0fae5', '#00573e'])
</script>

<template>
    <div class="min-h-screen bg-background text-foreground relative">
        <Header />
        <main class="px-4 py-8">
            <PopularMovieCarousel />
        </main>
        <MotionDiv class="fixed top-0 left-0 h-1 w-full" :style="{ scaleX: scrollYProgress, backgroundColor }"
            style="transform-origin: left;" />
    </div>
</template>

<style scoped></style>