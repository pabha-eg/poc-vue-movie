// src/composables/useTmdbMovieSections.ts
import { ref, onMounted } from 'vue'
import tmdb from '@/lib/tmdb'
import type { TmdbItem } from '@/types/tmdb'

export function useTmdbMovieSections() {
  const nowPlaying = ref<TmdbItem[]>([])
  const popular = ref<TmdbItem[]>([])
  const topRated = ref<TmdbItem[]>([])
  const upcoming = ref<TmdbItem[]>([])
  const error = ref<string | null>(null)
  const loading = ref(false)

  const fetchSection = async (path: string, target: typeof nowPlaying) => {
    try {
      const res = await tmdb.get(path)
      target.value = res.data.results.slice(0, 20).map((item: TmdbItem) => ({
        ...item,
        media_type: 'movie',
      }))
    } catch (err) {
      error.value = `Failed to fetch ${path}`
    }
  }

  const fetchAll = async () => {
    loading.value = true
    await Promise.all([
      fetchSection('/movie/now_playing', nowPlaying),
      fetchSection('/movie/popular', popular),
      fetchSection('/movie/top_rated', topRated),
      fetchSection('/movie/upcoming', upcoming),
    ])
    loading.value = false
  }

  onMounted(fetchAll)

  return {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    loading,
    error,
  }
}
