export interface TmdbItem {
  id: number
  media_type: 'movie' | 'tv'
  title?: string
  name?: string
  overview: string
  release_date?: string
  first_air_date?: string
  vote_average: number
  backdrop_path: string
  poster_path: string
  adult: boolean
  genre_ids: number[]
  original_language: string
  original_title?: string
  original_name?: string
  popularity: number
  video?: boolean
  vote_count: number
}

export interface TrendingArtist {
  id: number
  name: string
  profile_path: string | null
  known_for_department: string
  popularity: number
}

export type TmdbProvider = {
  provider_id: number
  provider_name: string
  logo_path: string
}

export interface TmdbReview {
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: string | null
    rating: number | null
  }
  content: string
  created_at: string
  url: string
  id: string
  poster_path?: string | null
}

export interface TmdbReviewCard {
  id: number
  media_type: 'movie' | 'tv'
  title: string
  poster_path: string
  author: string
  rating: number | null
  content: string
}
