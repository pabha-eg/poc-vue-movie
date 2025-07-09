import { ref, onMounted } from 'vue'
import tmdb from '@/lib/tmdb'
import type { TmdbItem } from '@/types/tmdb'

export function useTmdbTvSections() {
  const airingToday = ref<TmdbItem[]>([])
  const onTheAir = ref<TmdbItem[]>([])
  const popular = ref<TmdbItem[]>([])
  const topRated = ref<TmdbItem[]>([])
  const error = ref<string | null>(null)
  const loading = ref(false)

  const fetchTvSections = async () => {
    loading.value = true
    error.value = null

    try {
      const [airingTodayRes, onTheAirRes, popularRes, topRatedRes] = await Promise.all([
        tmdb.get('/tv/airing_today'),
        tmdb.get('/tv/on_the_air'),
        tmdb.get('/tv/popular'),
        tmdb.get('/tv/top_rated'),
      ])

      airingToday.value = airingTodayRes.data.results.map((item: TmdbItem) => ({
        ...item,
        media_type: 'tv',
      }))
      onTheAir.value = onTheAirRes.data.results.map((item: TmdbItem) => ({
        ...item,
        media_type: 'tv',
      }))
      popular.value = popularRes.data.results.map((item: TmdbItem) => ({
        ...item,
        media_type: 'tv',
      }))
      topRated.value = topRatedRes.data.results.map((item: TmdbItem) => ({
        ...item,
        media_type: 'tv',
      }))
    } catch (err) {
      error.value = 'Failed to fetch TV data'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchTvSections)

  return {
    airingToday,
    onTheAir,
    popular,
    topRated,
    error,
    loading,
  }
}
