<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'
import type { TmdbItem } from '@/types/tmdb'
import Button from './ui/button/Button.vue'
import { Badge } from './ui/badge'
import { Star, X, Eye, Flame, Languages, Video } from 'lucide-vue-next'

const props = defineProps<{
    item: TmdbItem | null
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const MotionDiv = motion.create('div')
</script>

<template>
    <AnimatePresence :initial="false">
        <MotionDiv v-if="item" key="item-modal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-xs p-4"
            :initial="{ opacity: 0, scale: 0.95 }" :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.95 }">
            <div
                class="relative max-w-5xl w-full bg-background text-foreground border shadow-lg overflow-hidden rounded-lg">
                <!-- Close Button -->
                <Button class="absolute top-4 right-4 text-xl z-10" @click="emit('close')" variant="ghost">
                    <X />
                </Button>

                <div class="flex flex-col md:flex-row gap-6 p-6">
                    <!-- Poster -->
                    <div class="flex-shrink-0 w-full md:w-1/3">
                        <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" :alt="item.title || item.name"
                            class="w-full h-auto rounded-md" />
                    </div>

                    <!-- Info -->
                    <div class="flex-1 space-y-4">
                        <div class="flex flex-wrap gap-2 items-center">
                            <h2 class="text-2xl font-bold">{{ item.title || item.name }}</h2>
                            <Badge class="dark:text-black">{{ item.media_type.charAt(0).toUpperCase() +
                                item.media_type.slice(1) }}</Badge>
                            <Badge v-if="item.adult" class="dark:text-black">18+</Badge>
                            <Badge v-if="item.video"><Video class="size-4 mr-1 dark:text-black" /> Trailer</Badge>
                            <Badge class="dark:text-black">
                                <Languages class="size-4 mr-1" /> {{ item.original_language.toUpperCase() }}
                            </Badge>
                        </div>

                        <p class="text-sm text-muted-foreground inline-flex items-center gap-1">
                            {{ item.release_date }} •
                            <Star class="text-yellow-400 size-5" fill="currentColor" stroke="none" />
                            {{ item.vote_average.toFixed(1) }} ({{ item.vote_count }} votes)
                        </p>

                        <p class="leading-relaxed text-foreground">{{ item.overview }}</p>

                        <div class="text-sm flex flex-wrap gap-4 items-center pt-2">
                            <div class="flex items-center gap-1">
                                <Eye class="size-4 text-muted-foreground" />
                                <span>Popularity:</span> <strong>{{ item.popularity.toFixed(0) }}</strong>
                            </div>
                            <div class="flex items-center gap-1">
                                <Flame class="size-4 text-muted-foreground" />
                                <span>Votes:</span> <strong>{{ item.vote_count }}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MotionDiv>
    </AnimatePresence>
</template>
