<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import ParticleMotion from '@/components/animation/ParticleMotion.vue'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function validate() {
    if (!username.value || !password.value) {
        error.value = 'Username and password are required.'
        return false
    }
    if (username.value.length < 3) {
        error.value = 'Username must be at least 3 characters.'
        return false
    }
    if (password.value.length < 6) {
        error.value = 'Password must be at least 6 characters.'
        return false
    }
    return true
}

async function handleSignIn() {
    error.value = ''

    if (!validate()) return

    toast('Hang tight!', {
        description: 'Authentication system is still under construction 🚧',
    })
}
</script>

<template>
    <ParticleMotion />
    <div class="flex justify-center items-center min-h-screen px-4">
        <Card class="w-full max-w-md shadow-lg rounded-none bg-transparent">
            <CardHeader>
                <CardTitle class="text-2xl">Sign In</CardTitle>
                <CardDescription>Welcome back! Enter your credentials to continue.</CardDescription>
            </CardHeader>

            <CardContent>
                <form @submit.prevent="handleSignIn" class="space-y-4">
                    <Input v-model.trim="username" type="text" placeholder="Username" />
                    <Input v-model.trim="password" type="password" placeholder="Password" />
                    <div v-if="error" class="text-sm text-red-500">{{ error }}</div>

                    <CardFooter class="p-0 pt-2">
                        <Button type="submit" variant="secondary" class="w-full">Login</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    </div>
</template>
