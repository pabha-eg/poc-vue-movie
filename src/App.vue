<script setup lang="ts">
import { useScroll, motion, useTransform } from 'motion-v'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { Toaster } from './components/ui/sonner'
import 'vue-sonner/style.css'
import { useRoute } from 'vue-router'

const MotionDiv = motion.create('div')
const { scrollYProgress } = useScroll()
const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#d0fae5', '#00573e'])
const route = useRoute()
</script>

<template>
  <Toaster />
  <div class="relative min-h-screen overflow-hidden bg-background text-foreground">
    <!-- Scroll progress bar -->
    <MotionDiv class="fixed top-0 left-0 h-[5px] w-full z-50" :style="{ scaleX: scrollYProgress, backgroundColor }"
      style="transform-origin: left;" />
    <Header v-if="!route.meta.hideHeader" />
    <!-- App Content -->
    <!-- Padded & Constrained Page Container -->
    <div class="px-4 sm:px-6 lg:px-8 2xl:mx-auto 2xl:max-w-[1343px]">
      <RouterView />
    </div>
    <Footer v-if="!route.meta.hideFooter" />
  </div>
</template>

<style scoped></style>
