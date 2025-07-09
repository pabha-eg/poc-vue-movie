import { ref, onMounted } from 'vue'
import tmdb from '@/lib/tmdb'
import type { TmdbItem } from '@/types/tmdb'

export function useTrendingItems() {
  const items = ref<TmdbItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchTrending = async () => {
    loading.value = true
    error.value = null

    try {
      const [movieRes, tvRes] = await Promise.all([
        tmdb.get('/trending/movie/week'),
        tmdb.get('/trending/tv/week'),
      ])

      const movieItems = movieRes.data.results
        .slice(0, 10)
        .map((item: TmdbItem) => ({ ...item, media_type: 'movie' }))
      const tvItems = tvRes.data.results
        .slice(0, 10)
        .map((item: TmdbItem) => ({ ...item, media_type: 'tv' }))

      const combined = [...movieItems, ...tvItems]
      items.value = combined.sort(() => Math.random() - 0.5)
    } catch (err) {
      error.value = 'Failed to fetch trending items'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchTrending)

  return {
    items,
    loading,
    error,
  }
}
