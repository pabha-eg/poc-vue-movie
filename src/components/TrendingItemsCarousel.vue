<script setup lang="ts">
import { useRouter } from 'vue-router'
import Autoplay from 'embla-carousel-autoplay'
import { useTrendingItems } from '@/composables/useTrendingItems'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import LoadingIndicator from './ui/LoadingIndicator.vue'
const plugin = Autoplay({ delay: 5000, stopOnMouseEnter: true })
const router = useRouter()
const { items, loading } = useTrendingItems()
</script>

<template>
    <div class="relative w-full">
        <!-- Loading State -->
        <LoadingIndicator v-if="loading" />
        <Carousel class="w-full" :plugins="[plugin]" :opts="{ loop: true }">
            <CarouselContent>
                <CarouselItem v-for="item in items" :key="item.id"
                    :style="`background-image: url(https://image.tmdb.org/t/p/w1280${item.backdrop_path})`">
                    <div class="relative w-full h-[500px] 2xl:h-[720px] overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div
                            class="relative z-10 p-6 text-white text-center space-y-2 h-full flex flex-col justify-end">
                            <h2 class="text-2xl font-bold">
                                {{ item.title || item.name }}
                            </h2>
                            <p class="text-sm text-gray-300 line-clamp-2">{{ item.overview }}</p>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext class="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
    </div>
</template>
