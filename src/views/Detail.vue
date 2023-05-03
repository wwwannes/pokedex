<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref } from '@vue/reactivity'
import VueApexCharts from 'vue3-apexcharts'
import { defaultShouldDehydrateMutation } from '@tanstack/query-core'
import { usePokemonDetailQuery } from '@/use/usePokemonQuery'
import { useStore } from '@/stores/store'
import { chartOptions } from '@/util/chart-options/chart-options'

const route = useRoute()
const store = useStore()
const { data, isLoading } = usePokemonDetailQuery(route.params.name as string)
</script>
<template>
  <!-- https://abduzeedo.com/subras-unique-brand-identity-and-ui-design-nft-market -->
  <div class="container mx-auto bg-dark-900 px-8 py-4">
    <div v-if="isLoading">...loading...</div>
    <div v-else class="flex row-auto">
      <div class="flex flex-col grow basis-auto w-1/4 pr-8">
        <div class="relative bg-gray-200 px-2 py-4">
          <img
            class="align-middle relative mx-auto"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`"
            alt=""
          />
        </div>
        <h2 class="text-dark-100my-4 text-xl capitalize">{{ data.name }}</h2>
        <p class="text-gray-300">
          {{ data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text }}
        </p>
        <div class="grid grid-cols-2 gap-6 mt-6">
          <div class="basis-1/2 border-solid border-b-dark-500 border-b-2 pb-2">
            <span class="text-dark-500 uppercase font-bold text-xs block">Type</span>
            <span class="text-dark-100 text-lg capitalize">{{
              data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
            }}</span>
          </div>
          <div class="basis-1/2 border-solid border-b-dark-500 border-b-2 pb-2">
            <span class="text-dark-500 uppercase font-bold text-xs block">Shape</span>
            <span class="text-dark-100 text-lg">{{
              data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonshape.pokemon_v2_pokemonshapenames[0]
                .name
            }}</span>
          </div>
          <div class="basis-1/2 border-solid border-b-dark-500 border-b-2 pb-2">
            <span class="text-dark-500 uppercase font-bold text-xs block">Height</span>
            <span class="text-dark-100 text-lg">{{ data.height / 10 }}m</span>
          </div>
          <div class="basis-1/2 border-solid border-b-dark-500 border-b-2 pb-2">
            <span class="text-dark-500 uppercase font-bold text-xs block">Color</span>
            <span class="text-dark-100 text-lg">{{
              data.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.pokemon_v2_pokemoncolornames[0]
                .name
            }}</span>
          </div>
          <div class="basis-1/2 border-solid border-b-dark-500 border-b-2 pb-2">
            <span class="text-dark-500 uppercase font-bold text-xs block">Habitat</span>
            <span class="text-dark-100 text-lg capitalize">{{
              data.pokemon_v2_pokemonspecy.pokemon_v2_pokemonhabitat
                .pokemon_v2_pokemonhabitatnames[0].name
            }}</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 w-3/4">
        <div
          class="border-solid border-dark-500 border-2 p-2 justify-around h-max[240px] bg-dark-700"
          v-for="(stat, index) in data.pokemon_v2_pokemonstats"
          :key="index"
        >
          <div class="p-2">
            <h4 class="text-dark-400">{{ stat.pokemon_v2_stat.pokemon_v2_statnames[0].name }}</h4>
            <VueApexCharts
              type="radialBar"
              height="200px"
              :options="chartOptions.donutChartOptions"
              :series="[(stat.base_stat / 255 / 100) * 10000]"
            />
          </div>
        </div>
        <div
          class="col-span-2 justify-between border-solid border-dark-500 border-2 p-2 bg-dark-700"
        >
          <div class="p-2">
            <h4 class="text-dark-400">Miscellaneous</h4>
            <VueApexCharts
              type="bar"
              height="200px"
              :options="chartOptions.barChartOptions"
              :series="[
                {
                  name: 'Base Happiness',
                  data: [data.pokemon_v2_pokemonspecy.base_happiness]
                },
                {
                  name: 'Capture Rate',
                  data: [data.pokemon_v2_pokemonspecy.capture_rate]
                },
                {
                  name: 'Hatch Counter',
                  data: [data.pokemon_v2_pokemonspecy.hatch_counter]
                }
              ]"
            />
          </div>
        </div>
        <div class="col-span-3 border-solid border-dark-500 border-2 bg-dark-700 p-2">
          <div class="p-2">
            <h4 class="text-dark-400">Moves</h4>
            <VueApexCharts
              type="bar"
              height="200px"
              :options="store.updateMovesCategories(data.pokemon_v2_pokemonmoves)"
              :series="store.convertMovesToSeries(data.pokemon_v2_pokemonmoves)"
            />
          </div>
        </div>
        <div
          class="border-solid border-dark-500 border-2 p-2 justify-around h-max[240px] bg-dark-700"
        >
          <div class="p-2">
            <h4 class="text-dark-400">Abilities</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
