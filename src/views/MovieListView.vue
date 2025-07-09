<script setup lang="ts">
import PosterCarousel from '@/components/PosterCarousel.vue'
import ParticleMotion from '@/components/animation/ParticleMotion.vue'
import { useTmdbMovieSections } from '@/composables/useTmdbMovieSections'
import type { TmdbItem } from '@/types/tmdb'

const { nowPlaying, popular, topRated, upcoming } = useTmdbMovieSections()

function showItem(item: TmdbItem) {
    console.log('Selected:', item)
}
</script>

<template>
    <div class="relative min-h-screen bg-background text-foreground overflow-hidden">
        <!-- Particle Background -->
        <ParticleMotion />

        <!-- Foreground Content -->
        <div class="relative z-20">
            <main class="px-2 space-y-6">
                <PosterCarousel :items="nowPlaying" sectionTitle="Now Playing" @item-click="showItem" />
                <PosterCarousel :items="topRated" sectionTitle="Top Rated" @item-click="showItem" />
                <PosterCarousel :items="upcoming" sectionTitle="Upcoming" @item-click="showItem" />
                <PosterCarousel :items="popular" sectionTitle="Popular" @item-click="showItem" />
            </main>
        </div>
    </div>
</template>

<style scoped></style>