<script setup lang="ts">
import PosterCarousel from '@/components/PosterCarousel.vue'
import ParticleMotion from '@/components/animation/ParticleMotion.vue'
import Footer from '@/components/Footer.vue'
import { useTmdbTvSections } from '@/composables/useTmdbTvSections'
import type { TmdbItem } from '@/types/tmdb'

const { airingToday, onTheAir, popular, topRated } = useTmdbTvSections()

function showItem(item: TmdbItem) {
    console.log('Selected TV Show:', item)
}
</script>

<template>
    <div class="relative min-h-screen bg-background text-foreground overflow-hidden">
        <!-- Particle Background -->
        <ParticleMotion />

        <!-- Foreground Content -->
        <div class="relative z-20">
            <main class="px-2 space-y-6">
                <PosterCarousel :items="airingToday" sectionTitle="Airing Today" @item-click="showItem" />
                <PosterCarousel :items="topRated" sectionTitle="Top Rated" @item-click="showItem" />
                <PosterCarousel :items="popular" sectionTitle="Popular" @item-click="showItem" />
                <PosterCarousel :items="onTheAir" sectionTitle="On The Air" @item-click="showItem" />
            </main>
        </div>
    </div>
</template>

<style scoped></style>
