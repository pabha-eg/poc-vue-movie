<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner'

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner class="toaster group" v-bind="props" :style="{
    '--normal-bg': 'var(--background)',
    '--normal-text': 'var(--foreground)',
    '--normal-border': 'var(--border)',
  }" />
</template>
