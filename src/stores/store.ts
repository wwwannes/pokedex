import router from '@/router'
import { defineStore } from 'pinia'

import { chartOptions } from '@/util/chart-options/chart-options'

export const useStore = defineStore('store', {
  state: () => ({
    backgroundColor: '',
    data: [],
    detailData: [],
    searchText: ''
  }),
  actions: {
    updateBackgroundColor(color: string) {
      this.backgroundColor = color
    },
    goToPage(page: string, name: string) {
      if (page === 'detail') {
        router.push({ name: 'pokemon-detail', params: { name: name } })
      } else {
        router.push({ name: 'category-page', params: { category: page, name: name } })
      }
    },
    updateMovesCategories: (data) => {
      const categories = []
      const options = chartOptions.barChartOptions

      data.forEach((el) => {
        if (el.pokemon_v2_move.power && el.pokemon_v2_move.power > 0) {
          categories.push(
            el.pokemon_v2_move.name.charAt(0).toUpperCase() +
              el.pokemon_v2_move.name.slice(1).replace('-', ' ')
          )
        }
      })

      return {
        ...options,
        xaxis: {
          ...options.xaxis,
          categories: categories
        },
        legend: {
          show: true
        }
      }
    },
    convertMovesToSeries: (data) => {
      const powerData = []
      const accuracyData = []
      const combinedData = []

      data.forEach((el) => {
        if (el.pokemon_v2_move.power && el.pokemon_v2_move.power > 0) {
          powerData.push(el.pokemon_v2_move.power)
          accuracyData.push(el.pokemon_v2_move.accuracy == null ? 100 : el.pokemon_v2_move.accuracy)
        }
      })

      combinedData.push(
        {
          name: 'Power',
          data: powerData
        },
        {
          name: 'Accuracy',
          data: accuracyData
        }
      )

      return combinedData
    }
  },
  getters: {
    getBackground: (state) => state.backgroundColor,
    getPowerfullMoves: (state) =>
      state.detailData[0].pokemon_v2_pokemonmoves
        .filter((move) => move.pokemon_v2_move.power > 80)
        .sort((a, b) => b.pokemon_v2_move.power - a.pokemon_v2_move.power),
    getFilteredData: (state) => {
      return state.data.filter(
        (i) => i.name.toLowerCase().indexOf(state.searchText.toLocaleLowerCase()) != 1
      )
    }
  }
})
