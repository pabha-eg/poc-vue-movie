<script setup lang="ts">
import { Facebook, Twitter, Youtube, Instagram, Music, Clapperboard, CircleArrowUp } from 'lucide-vue-next'
import Separator from './ui/separator/Separator.vue';
</script>

<template>
    <footer class="bg-transparent text-white text-sm">
        <div class="max-w-7xl mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            <!-- Logo + Description -->
            <div class="col-span-1 md:col-span-2 space-y-4">
                <div class="inline-flex gap-2">
                    <a href="#" class="flex items-center gap-2">
                        <Clapperboard class="h-8 text-primary" />
                        <span class="text-lg font-semibold text-primary">Binged!</span>
                    </a>
                </div>

                <p class="text-muted-foreground leading-relaxed">
                    This is a platform for sharing your taste in film. Use it to record your opinion about films
                    as you watch them, or just to keep it yourself. Create your own list and track how much of a
                    cinephile you are.
                </p>
            </div>


            <!-- Links -->
            <div>
                <h3 class="font-semibold border-l-2 border-primary pl-2 mb-2 text-muted-foreground">
                    Features</h3>
                <ul class="space-y-1 text-muted-foreground">
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/tv">TV Shows</a></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold border-l-2 border-primary pl-2 mb-2 text-muted-foreground">Know More</h3>
                <ul class="space-y-1 text-muted-foreground">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="https://www.themoviedb.org/">API</a></li>
                </ul>
            </div>

            <!-- Social Icons -->
            <div>
                <h3 class="font-semibold border-l-2 border-primary pl-2 mb-2 text-muted-foreground">Get Latest News</h3>
                <div class="flex items-center space-x-4 text-primary">
                    <Facebook class="w-5 h-5" />
                    <Twitter class="w-5 h-5" />
                    <Youtube class="w-5 h-5" />
                    <Instagram class="w-5 h-5" />
                    <Music class="w-5 h-5" />
                </div>
            </div>
        </div>

        <!-- Bottom bar -->
        <div class="bg-transparent py-4 px-4 text-center text-xs text-muted-foreground">
            <a href="#" class="flex justify-center">
                <CircleArrowUp />
            </a>
            <p class="py-1">Back to the Top</p>
            <Separator />
            <p class="py-1">© 2025 Binged! Built with ❤️ for movie lovers.
            </p>
            <p class="mt-1">
                This website uses
                <a href="https://www.themoviedb.org/" target="_blank"
                    class="underline font-semibold text-primary">TMDB</a>
                and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
            </p>
        </div>
    </footer>
</template>

<style scoped></style>
