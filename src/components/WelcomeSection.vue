<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'
import { useRouter } from 'vue-router'
import { LogIn, UserPlus } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const MotionH1 = motion.create('h1')
const MotionP = motion.create('p')
const MotionDiv = motion.create('div')

const visible = ref(false)
const router = useRouter()

onMounted(() => {
    visible.value = true
})
</script>

<template>
    <section class="min-h-screen flex flex-col justify-center items-center text-center">
        <!-- Heading -->
        <MotionH1 v-if="visible" :initial="{ opacity: 0, y: -30 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 1, type: 'spring', bounce: 0.3 }"
            class="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-soft-pulse h-20">
            Welcome to Binged!
        </MotionH1>

        <!-- Subtitle -->
        <MotionP v-if="visible" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.4, duration: 0.8 }"
            class="mt-4 max-w-xl text-muted-foreground text-base sm:text-lg">
            Your one-stop hub for trending movies, TV shows, artists, reviews, and more.
        </MotionP>

        <!-- Buttons -->
        <MotionDiv v-if="visible" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.8, duration: 0.6 }" class="mt-6 flex gap-4 flex-wrap justify-center">
            <Button variant="ghost" size="sm" @click="router.push('/signin')">
                <LogIn class="w-4 h-4 mr-1" /> Login
            </Button>
            <Button variant="default" size="sm" @click="router.push('/signup')" class="dark:text-black">
                <UserPlus class="w-4 h-4 mr-1" /> Sign Up
            </Button>
        </MotionDiv>
    </section>
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
