<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import type { IAbility, IType } from '@/interfaces/ICommon'
import type { IPokemonSpecies } from '@/interfaces/IPokemon'

import { colors } from '@/util/pokemon-type-colors'

const router = useRouter()
const props = withDefaults(
  defineProps<{
    data: IAbility[] | IPokemonSpecies[] | IType[]
    linkName: string
    scrollDirection: string
  }>(),
  { scrollDirection: 'normal' }
)
const emit = defineEmits<{
  (event: 'hover', color: string): void
}>()

const duration = props.data.length * 3
</script>
<template>
  <div class="py-4 border-b-4 border-b-gray-950">
    <MarqueeAnimation
      :clone="true"
      :direction="props.scrollDirection"
      :pauseOnClick="true"
      :pauseOnHover="true"
      :duration="duration"
      class="z-10 items-center"
    >
      <div
        v-for="(item, index) in props.data"
        :key="index"
        class="flex items-center text-gray-950 uppercase font-black whitespace-nowrap overflow-hidden text-8xl"
      >
        <span
          role="link"
          class="hover:text-pink-400 hover:cursor-pointer"
          @mouseenter="emit('hover', props.linkName == 'type-page' ? colors[item.name] : '')"
          @mouseleave="emit('hover', '#FFFFFF')"
          @click="router.push({ name: props.linkName, params: { name: item.name } })"
        >
          {{ item.name.replace('-', ' ') }}
        </span>
        <span class="rounded-full bg-gray-950 w-7 h-7 mx-14"></span>
      </div>
    </MarqueeAnimation>
  </div>
</template>
<style scoped></style>
