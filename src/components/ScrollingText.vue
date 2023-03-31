<script setup lang="ts">
import type { IAbility, IType } from '@/interfaces/ICommon'
import type { IPokemonSpecies } from '@/interfaces/IPokemon'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  data: IAbility[] | IPokemonSpecies[] | IType[]
}>()
</script>
<template>
  <div>
    <RouterLink v-for="(item, index) in props.data" :key="index" :to="{ name: 'home' }">{{
      item.name
    }}</RouterLink>
  </div>
</template>
<style lang=""></style>
