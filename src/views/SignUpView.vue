<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
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


const name = ref('')
const username = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const router = useRouter()

function validate() {
    if (!name.value || !username.value || !password.value) {
        error.value = 'All fields are required.'
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

async function handleSignUp() {
    error.value = ''
    success.value = ''

    if (!validate()) return

    toast('Almost there!', {
        description: 'We’re still setting things up. Stay tuned ✨',
    })
}
</script>

<template>
    <ParticleMotion />
    <div class="flex justify-center items-center min-h-screen px-4">
        <Card class="w-full max-w-md shadow-lg rounded-none bg-transparent">
            <CardHeader>
                <CardTitle class="text-2xl">Create Account</CardTitle>
                <CardDescription>Join Binged! and start tracking your movies.</CardDescription>
            </CardHeader>

            <CardContent>
                <form @submit.prevent="handleSignUp" class="space-y-4">
                    <div>
                        <Input v-model.trim="name" type="text" placeholder="Full Name" />
                    </div>
                    <div>
                        <Input v-model.trim="username" type="text" placeholder="Username" />
                    </div>
                    <div>
                        <Input v-model.trim="password" type="password" placeholder="Password" />
                    </div>

                    <div v-if="error" class="text-sm text-red-500">{{ error }}</div>
                    <div v-if="success" class="text-sm text-green-600">{{ success }}</div>

                    <CardFooter class="p-0 pt-2">
                        <Button type="submit" variant="secondary" class="w-full">Sign Up</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    </div>
</template>
