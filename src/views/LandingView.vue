<script setup lang="ts">
import ParticleMotion from '@/components/animation/ParticleMotion.vue'
import TrendingItemsCarousel from '@/components/TrendingItemsCarousel.vue'
import ProviderBanner from '@/components/ProviderBanner.vue'
import TrendingArtistsGrid from '@/components/TrendingArtistsGrid.vue'
import ReviewCards from '@/components/ReviewCards.vue'
import TitleBanner from '@/components/TitleBanner.vue'
import WelcomeSection from '@/components/WelcomeSection.vue'
</script>

<template>
    <div class="relative min-h-screen bg-background text-foreground overflow-hidden">
        <!-- Particle Background -->
        <ParticleMotion />

        <!-- Foreground Content -->
        <div class="relative z-20">
            <main class="px-2 space-y-6">
                <TrendingItemsCarousel />
                <TitleBanner>Trending This Week</TitleBanner>
                <WelcomeSection />
                <TitleBanner>Popular Artists</TitleBanner>
                <TrendingArtistsGrid />
                <TitleBanner>Reviews</TitleBanner>
                <ReviewCards />
                <TitleBanner>Providers</TitleBanner>
                <ProviderBanner />
            </main>
        </div>
    </div>
</template>

<style scoped></style>
