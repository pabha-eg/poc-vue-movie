export interface TmdbMovie {
  id: number
  title: string
  overview: string
  release_date: string
  vote_average: number
  backdrop_path: string
  poster_path: string
  adult: boolean
  genre_ids: number[]
  original_language: string
  original_title: string
  popularity: number
  video: boolean
  vote_count: number
}
