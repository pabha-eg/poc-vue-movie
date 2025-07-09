<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import { onMounted } from 'vue'

const MotionDiv = motion.create('div')
const isOn = ref(false)


onMounted(() => {
    const saved = localStorage.getItem('theme')
    const html = document.documentElement
    if (saved === 'dark') {
        isOn.value = true
        html.classList.add('dark')
    } else {
        isOn.value = false
        html.classList.remove('dark')
    }
})

const toggleSwitch = () => {
    isOn.value = !isOn.value
    const html = document.documentElement
    if (isOn.value) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}


</script>

<template>
    <Button :class="['toggle-container', isOn ? 'start' : 'end']"
        :style="{ backgroundColor: isOn ? 'var(--secondary)' : 'var(--primary)' }" @click="toggleSwitch">
        <MotionDiv :data-state="isOn" class="toggle-handle"
            :style="{ backgroundColor: isOn ? 'var(--primary)' : 'var(--secondary)' }" layout
            :transition="{ type: 'spring', duration: 0.2, bounce: 0.2 }">
            <Moon v-if="isOn" class="w-5 h-5 text-black" />
            <Sun v-if="!isOn" class="w-5 h-5 text-black" />
        </MotionDiv>
    </Button>
</template>

<style scoped>
.toggle-container {
    width: 56px;
    height: 28px;
    cursor: pointer;
    display: flex;
    padding: 0px;
    border: 1px;
}

.toggle-container.start {
    justify-content: flex-start;
}

.toggle-container.end {
    justify-content: flex-end;
}

.toggle-handle {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px;
}
</style>