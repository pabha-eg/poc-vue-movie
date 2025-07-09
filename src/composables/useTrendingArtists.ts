import { ref, onMounted } from 'vue'
import tmdb from '@/lib/tmdb'
import type { TrendingArtist } from '@/types/tmdb'

export function useTrendingArtists() {
  const artists = ref<TrendingArtist[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchArtists = async () => {
    loading.value = true
    try {
      const { data } = await tmdb.get('/person/popular')
      artists.value = data.results
        .filter((person: TrendingArtist) => person.known_for_department === 'Acting')
        .slice(0, 15)
    } catch (err) {
      error.value = 'Failed to fetch trending artists'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchArtists)

  return {
    artists,
    loading,
    error,
  }
}
