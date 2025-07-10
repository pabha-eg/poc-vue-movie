<script setup lang="ts">
import PosterCarousel from '@/components/PosterCarousel.vue'
import ParticleMotion from '@/components/animation/ParticleMotion.vue'
import { useTmdbTvSections } from '@/composables/useTmdbTvSections'
import type { TmdbItem } from '@/types/tmdb'
import ItemShowcase from '@/components/ItemShowcase.vue'
import { ref } from 'vue'

const { airingToday, onTheAir, popular, topRated } = useTmdbTvSections()
const selectedItem = ref<TmdbItem | null>(null)

function showItem(item: TmdbItem) {
    selectedItem.value = item
}

function closeShowcase() {
    selectedItem.value = null
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
        <!-- Modal -->
        <ItemShowcase :item="selectedItem" @close="closeShowcase" />
    </div>
</template>

<style scoped></style>
