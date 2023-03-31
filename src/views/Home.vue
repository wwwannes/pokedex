<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useGeneration1PokemonQuery } from '@/use/usePokemonQuery'
import ScrollingText from '@/components/ScrollingText.vue'

const { data, isLoading } = useGeneration1PokemonQuery()
</script>
<template lang="">
  <span v-if="isLoading">...loading...</span>
  <ScrollingText v-if="!isLoading" :data="data.moves" />
  <ScrollingText v-if="!isLoading" :data="data.pokemon_species" />
  <ScrollingText v-if="!isLoading" :data="data.types" />
</template>
<style lang=""></style>
