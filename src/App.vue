<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useStore } from '@/stores/store'

import TheHeader from '@/components/TheHeader.vue'

const store = useStore()
const { backgroundColor } = storeToRefs(store)
</script>

<template>
  <div class="min-h-screen" :style="{ background: backgroundColor }">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style scoped></style>
