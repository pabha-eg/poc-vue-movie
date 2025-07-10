<script setup lang="ts">
import { Facebook, Twitter, Youtube, Instagram, Music, Clapperboard, CircleArrowUp } from 'lucide-vue-next'
import Separator from './ui/separator/Separator.vue';
</script>

<template>
    <footer class="bg-transparent text-white text-sm">
        <!-- First row: Main content -->
        <div class=" mx-auto px-4 py-5 flex flex-col md:flex-row justify-between gap-8">
            <!-- Left: Logo + Description -->
            <div class="md:w-1/2 space-y-4">
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

            <!-- Right: Links & Social -->
            <div class="flex flex-wrap gap-8 justify-start md:justify-end md:w-1/2">
                <!-- Features -->
                <div>
                    <h3 class="font-semibold border-l-2 border-primary pl-2 mb-2 text-muted-foreground">Features</h3>
                    <ul class="space-y-1 text-muted-foreground">
                        <li><a href="/">Home</a></li>
                        <li><a href="/movies">Movies</a></li>
                        <li><a href="/tv">TV Shows</a></li>
                        <li><a href="/signin">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                </div>

                <!-- Know More -->
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
                    <h3 class="font-semibold border-l-2 border-primary pl-2 mb-2 text-muted-foreground">Get Latest News
                    </h3>
                    <div class="flex items-center space-x-4 text-primary">
                        <Facebook class="w-5 h-5" />
                        <Twitter class="w-5 h-5" />
                        <Youtube class="w-5 h-5" />
                        <Instagram class="w-5 h-5" />
                        <Music class="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Second row: Bottom bar -->
        <div
            class="flex flex-col items-center justify-center gap-2 py-2 px-4 text-xs text-muted-foreground text-center">

            <p>© 2025 Binged! Built with ❤️ for movie lovers.</p>
            <p>
                This website uses
                <a href="https://www.themoviedb.org/" target="_blank"
                    class="underline font-semibold text-primary">TMDB</a>
                and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
            </p>
            <Separator class=" mx-auto" />

            <a href="#" class="flex justify-center">
                <CircleArrowUp />
            </a>
            <p>Back to the Top</p>
        </div>
    </footer>
</template>


<style scoped></style>
