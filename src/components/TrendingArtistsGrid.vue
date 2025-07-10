<script setup lang="ts">
import { useTrendingArtists } from '@/composables/useTrendingArtists'
import type { TrendingArtist } from '@/types/tmdb'

const { artists, loading, error } = useTrendingArtists()
</script>

<template>
    <div class="w-full px-4">
        <div v-if="loading" class="text-muted">Loading...</div>
        <div v-else-if="error" class="text-red-500">{{ error }}</div>

        <div v-else class="grid grid-cols-3 sm:grid-cols-5 gap-4">
            <div v-for="artist in artists" :key="artist.id" class="flex flex-col items-center">
                <div class="w-full aspect-5/6 bg-muted overflow-hidden shadow">
                    <img v-if="artist.profile_path" :src="`https://image.tmdb.org/t/p/w342${artist.profile_path}`"
                        :alt="artist.name" class="w-full h-full object-cover" />
                    <div v-else
                        class="w-full h-full flex items-center justify-center text-xs text-muted-foreground bg-secondary">
                        No Image
                    </div>
                </div>
                <div class="mt-2 text-center text-sm font-medium text-foreground line-clamp-1">
                    {{ artist.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
