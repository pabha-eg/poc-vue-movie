import { ref, onMounted } from 'vue'
import tmdb from '@/lib/tmdb'
import type { TmdbReviewCard } from '@/types/tmdb'

export function useTrendingReviews() {
  const reviews = ref<TmdbReviewCard[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchTrendingReviews = async () => {
    loading.value = true
    error.value = null

    try {
      const trendingRes = await tmdb.get('/trending/all/day')
      const trendingItems = trendingRes.data.results.slice(0, 15)

      const reviewPromises = trendingItems.map(async (item: any) => {
        const mediaType = item.media_type
        const id = item.id
        const title = item.title || item.name

        const res = await tmdb.get(`/${mediaType}/${id}/reviews`)
        const result = res.data.results?.[0]

        if (!result || !result.content) return null

        return {
          id,
          media_type: mediaType,
          title,
          poster_path: item.poster_path,
          author: result.author_details.name || result.author_details.username,
          rating: result.author_details.rating,
          content: result.content,
        }
      })

      const settled = await Promise.all(reviewPromises)
      reviews.value = settled.filter(Boolean) as TmdbReviewCard[]
    } catch (err) {
      error.value = 'Failed to fetch reviews'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchTrendingReviews)

  return {
    reviews,
    loading,
    error,
  }
}
