import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    backgroundColor: ''
  }),
  actions: {
    updateBackgroundColor(color: string) {
      this.backgroundColor = color
    }
  },
  getters: {
    getBackground: (state) => state.backgroundColor
  }
})
