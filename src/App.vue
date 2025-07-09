<script setup lang="ts">
import { useScroll, motion, useTransform } from 'motion-v'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router'

const MotionDiv = motion.create('div')
const { scrollYProgress } = useScroll()
const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#d0fae5', '#00573e'])
const route = useRoute()
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-background text-foreground">
    <!-- Scroll progress bar -->
    <MotionDiv class="fixed top-0 left-0 h-1 w-full z-50" :style="{ scaleX: scrollYProgress, backgroundColor }"
      style="transform-origin: left;" />
    <Header v-if="!route.meta.hideHeader" />
    <!-- App Content -->
    <RouterView />
    <Footer v-if="!route.meta.hideFooter" />
  </div>
</template>

<style scoped></style>
