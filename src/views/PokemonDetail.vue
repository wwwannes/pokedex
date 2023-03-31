<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemonDetailQuery } from '@/use/usePokemonQuery'
import { useStore } from '@/stores/store'

const route = useRoute()
const store = useStore()
const { data, isLoading } = usePokemonDetailQuery(route.params.name as string)

store.backgroundColor = ''
</script>
<template>
  <div v-if="isLoading">...loading...</div>
  <pre v-else>{{ data }}</pre>
</template>
<style scoped></style>
