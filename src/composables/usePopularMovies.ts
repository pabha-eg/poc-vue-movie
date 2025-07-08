import { ref, onMounted } from 'vue'
import tmdb from '@/lib/tmdb'
import type { TmdbMovie } from '@/types/tmdb'

export function usePopularMovies() {
  const movies = ref<TmdbMovie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchPopularMovies = async () => {
    loading.value = true
    error.value = null

    try {
      const { data } = await tmdb.get('/movie/popular')
      movies.value = data.results.slice(0, 15)
    } catch (err) {
      error.value = 'Failed to fetch popular movies'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchPopularMovies)

  return {
    movies,
    loading,
    error,
  }
}
