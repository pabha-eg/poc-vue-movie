<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Input } from '@/components/ui/input'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Clapperboard, Search } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'

const showSearch = ref(false)
const searchQuery = ref('')
const router = useRouter()

function toggleSearch() {
    showSearch.value = !showSearch.value
}
</script>

<template>
    <header class="grid grid-cols-12 items-center px-6 py-3 bg-background/90 backdrop-blur gap-4">
        <!-- Logo -->
        <div class="col-span-4 flex items-center ">
            <a href="/" class="flex gap-2 text-xl font-semibold">
                <Clapperboard class="w-6 h-6 text-primary" />
                <span>Binged!</span>
            </a>

        </div>

        <!-- Navigation -->
        <div class="col-span-4 flex items-center justify-center gap-6 h-8">
            <NavigationMenu>
                <NavigationMenuList class="flex gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            class="cursor-pointer hover:bg-accent hover:text-accent-foreground px-2 py-1 text-base"
                            @click="router.push('/')">
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            class="cursor-pointer hover:bg-accent hover:text-accent-foreground px-2 py-1 text-base"
                            @click="router.push('/movies')">
                            Movies
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            class="cursor-pointer hover:bg-accent hover:text-accent-foreground px-2 py-1 text-base"
                            @click="router.push('/tv')">
                            TV Shows
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <!-- Auth & Search -->
        <div class="col-span-4 flex items-center justify-end gap-2">

            <!-- Search -->
            <div class="flex items-center relative h-7">
                <Search class="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input v-model="searchQuery" type="text" placeholder="Search..."
                    class="pl-8 pr-2 h-7 border border-input focus:border-transparent focus:ring-0 focus:outline-none transition-colors duration-200" />
            </div>

            <ThemeToggle />
        </div>
    </header>
</template>


<style scoped></style>
