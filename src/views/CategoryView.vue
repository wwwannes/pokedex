<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCategoryQuery } from '@/use/usePokemonQuery'
import { useStore } from '@/stores/store'

const route = useRoute()

const store = useStore()
const { data, isLoading } = useCategoryQuery(route.params.category, route.params.name)
</script>
<template>
  <div class="flex flex-wrap">
    <div
      class="p-10 relative hover:text-pink-400 hover:cursor-pointer"
      v-for="pokemon in data"
      :key="pokemon.id"
      @click="store.goToPage('detail', pokemon.name)"
    >
      <b class="text-6xl capitalize">{{ pokemon.name }}</b>
      <img
        class="absolute top-6"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`"
        :alt="pokemon.name"
        :style="`left: ${Math.random() * 80}%; z-index: ${Math.round(-1 + (Math.random() % 1))}`"
      />
    </div>
  </div>
</template>
<style></style>
