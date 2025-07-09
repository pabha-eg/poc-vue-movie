import { ref, onMounted } from 'vue'
import tmdb from '@/lib/tmdb'
import type { TmdbProvider } from '@/types/tmdb'

export function useWatchProviders() {
  const leftProviders = ref<TmdbProvider[]>([])
  const rightProviders = ref<TmdbProvider[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchProviders = async () => {
    loading.value = true
    try {
      const { data } = await tmdb.get('/watch/providers/movie')
      const filtered = data.results.filter((p: TmdbProvider) => p.logo_path).slice(0, 30)

      leftProviders.value = filtered.slice(0, 15)
      rightProviders.value = filtered.slice(15, 30)
    } catch (err) {
      error.value = 'Failed to fetch providers'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchProviders)

  return {
    leftProviders,
    rightProviders,
    loading,
    error,
  }
}
