// lib/tmdb.ts
import axios from 'axios'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: apiKey },
})

export default tmdb
