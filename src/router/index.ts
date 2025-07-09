import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import MovieListView from '@/views/MovieListView.vue'
import TvShowView from '@/views/TvShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/movies',
      name: 'movie',
      component: MovieListView,
    },
    {
      path: '/tv',
      name: 'tv',
      component: TvShowView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: { hideHeader: true, hideFooter: true },
    },
  ],
})

export default router
