<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

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
}
</script>

<template>
    <div class="p-4 max-w-md mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create a new account to continue.</CardDescription>
            </CardHeader>

            <CardContent>
                <Label v-if="error" class="text-red-500 mb-2">{{ error }}</Label>
                <Label v-if="success" class="text-green-600 mb-2">{{ success }}</Label>

                <form @submit.prevent="handleSignUp" class="space-y-4">
                    <Input v-model.trim="name" type="text" placeholder="Full Name" />
                    <Input v-model.trim="username" type="text" placeholder="Username" />
                    <Input v-model.trim="password" type="password" placeholder="Password" />
                    <CardFooter class="p-0">
                        <Button type="submit" variant="default" class="w-full">Sign Up</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    </div>
</template>
