<script setup lang="ts">
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import { useTrendingReviews } from '@/composables/useTrendingReviews'

// Use the composable to fetch reviews
const { reviews, loading, error } = useTrendingReviews()
</script>

<template>
    <div class="w-full px-4">
        <div v-if="loading" class="text-muted-foreground">Loading...</div>
        <div v-else-if="error" class="text-destructive">{{ error }}</div>
        <div v-else class="grid grid-cols-2 gap-6">
            <Card v-for="review in reviews" :key="review.id" class="flex overflow-hidden bg-transparent rounded-none">
                <!-- 3-column layout within card -->
                <div class="grid grid-cols-3 w-full">
                    <!-- Column 1: Poster -->
                    <div class="col-span-1 p-2">
                        <img v-if="review.poster_path" :src="`https://image.tmdb.org/t/p/w154${review.poster_path}`"
                            :alt="review.title" class="w-full h-40 object-contain" />
                    </div>
                    <!-- Columns 2-3: Review Details -->
                    <div class="col-span-2 p-2">
                        <CardHeader class="pb-1">
                            <h3 class="text-md font-semibold text-foreground line-clamp-1">{{ review.title }}</h3>
                        </CardHeader>
                        <CardContent class="pb-1">
                            <p class="text-sm text-muted-foreground line-clamp-2 italic">
                                “{{ review.content }}”
                            </p>
                        </CardContent>
                        <CardFooter class="text-xs text-muted-foreground flex justify-end items-end">
                            <span>
                                --{{ review.author }}
                                <span v-if="review.rating !== null" class="ml-1">
                                    ({{ review.rating }}/10)
                                </span>
                            </span>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>