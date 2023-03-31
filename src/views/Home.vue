<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useGeneration1PokemonQuery } from '@/use/usePokemonQuery'
import ScrollingText from '@/components/ScrollingText.vue'
import type { IPokemonGifs } from '@/interfaces/IPokemon'

import { useStore } from '@/stores/store'

const store = useStore()
const { data, isLoading } = useGeneration1PokemonQuery()

// https://www.sololearn.com/compiler-playground/Wd1nuGDLR8Nr/?ref=app
let pokemonPics: IPokemonGifs[] = []
const headerHeight = 160
const image = {
  height: 100,
  width: 100
}
const maxX = innerWidth - image.width
const maxY = innerHeight - image.height - headerHeight

const isOverlap = (x: number, y: number) => {
  const img = { x: image.width, y: image.height }

  for (const imgPos of pokemonPics) {
    if (
      x > imgPos.xPos - img.x &&
      x < imgPos.xPos + img.x &&
      y > imgPos.yPos - img.y &&
      y < imgPos.yPos + img.y
    )
      return true
  }
  return false
}

for (let i = 1; i < 33; i++) {
  const { random: r } = Math

  let xPos = r() * maxX
  let yPos = r() * maxY

  let id = Math.ceil(Math.random() * 151)

  if (pokemonPics.find((item) => item.id === id)) {
    id++
    if (id > 151) {
      id = 1
    }
  }
  const zIndex = Math.round(Math.random() * 20)

  /* while (isOverlap(xPos, yPos).overlapped !== true) {
    console.log(`TRY ${id}`)
    if (isOverlap(xPos, yPos).issue == 'xPos') {
      xPos = r() * maxX
    }
    if (isOverlap(xPos, yPos).issue == 'yPos') {
      yPos += r() * maxY
    }
  } */

  if (!isOverlap(xPos, yPos)) {
    pokemonPics.push({
      id,
      xPos,
      yPos,
      zIndex
    })
  }
}
</script>
<template lang="">
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
    <img
      v-for="(item, index) in pokemonPics"
      :key="index"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item.id}.gif`"
      class="absolute"
      :class="`w-[${image.width}px]`"
      :style="`left:${item.xPos}px; top:${headerHeight + item.yPos}px; z-index:${item.zIndex};`"
    />
  </div>

  <span v-if="isLoading">...loading...</span>
  <ScrollingText
    v-if="!isLoading"
    :data="data.pokemon_species"
    scrollDirection="normal"
    linkName="pokemon-detail"
  />
  <ScrollingText
    v-if="!isLoading"
    :data="data.types"
    scrollDirection="reverse"
    linkName="type-page"
    @hover="store.updateBackgroundColor"
  />
  <ScrollingText
    v-if="!isLoading"
    :data="data.moves"
    scrollDirection="normal"
    linkName="move-page"
  />
</template>
<style scoped></style>
