<script setup lang="ts">
import { useRouter } from 'vue-router'
import Autoplay from 'embla-carousel-autoplay'
import { usePopularMovies } from '@/composables/usePopularMovies'
import { Button } from '@/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

const plugin = Autoplay({ delay: 5000, stopOnMouseEnter: true })
const router = useRouter()
const { movies, loading } = usePopularMovies()

</script>

<template>
    <div class="relative w-full">
        <Carousel class="w-full" :plugins="[plugin]" :opts="{ loop: true }">
            <CarouselContent>
                <CarouselItem v-for="movie in movies" :key="movie.id"
                    :style="`background-image: url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`">
                    <div class="relative w-full h-[500px] overflow-hidden">

                        <!-- Dark Gradient Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        <!-- Foreground Content -->
                        <div
                            class="relative z-10 p-6 text-white text-center space-y-2 h-full flex flex-col justify-end">
                            <h2 class="text-2xl font-bold">{{ movie.title }}</h2>
                            <p class="text-sm text-gray-300 line-clamp-2">{{ movie.overview }}</p>
                        </div>

                    </div>
                </CarouselItem>

            </CarouselContent>
            <CarouselPrevious class="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext class="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
    </div>
</template>
