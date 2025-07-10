<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import type { TmdbItem } from '@/types/tmdb'
import TitleBanner from './TitleBanner.vue'

defineProps<{
    items: TmdbItem[]
    sectionTitle: string
}>()

defineEmits<{
    (e: 'item-click', item: TmdbItem): void
}>()

</script>

<template>
    <TitleBanner>{{ sectionTitle }}</TitleBanner>
    <div class="w-full space-y-2 flex justify-center item-center">
        <Carousel class="w-full max-w-5xl" :opts="{
            align: 'start',
            loop: true
        }">
            <CarouselContent class="-ml-1">
                <CarouselItem v-for="item in items" :key="item.id" class="pl-1 basis-1/3 sm:basis-1/4 md:basis-1/5">
                    <div class="p-1">
                        <Card class="cursor-pointer border-none bg-transparent" @click="$emit('item-click', item)">
                            <CardContent class="flex aspect-[3/4] items-center justify-center p-0">
                                <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                                    :alt="item.title || item.name" class="w-full h-full object-cover">
                            </CardContent>
                            <CardHeader>
                                <CardTitle class="text-md text-center">{{ item.title || item.name }}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
</template>

<style scoped></style>