import type { IPokemon } from '@/interfaces/IPokemon'
import { useQuery } from '@tanstack/vue-query'

const ENV = import.meta.env

export const useGeneration1PokemonQuery = () => {
  return useQuery(
    ['pokemons'],
    async () => {
      const response = await fetch(`${ENV.VITE_BASE_URL}/generation/1`)

      if (response.status !== 200) {
        throw new Error('Something went wrong')
      }

      const result = await response.json()
      return result
    },
    { staleTime: 60 * 1000 * 60 }
  )
}

export const usePokemonDetailQuery = (name: string) => {
  return useQuery(
    ['detail'],
    async () => {
      const response = await fetch(`${ENV.VITE_BASE_URL}/pokemon/${name}`)
      if (response.status !== 200) {
        throw new Error('Something went wrong')
      }

      const result = (await response.json()) as IPokemon
      return result
    },
    { staleTime: 60 * 1000 * 60 }
  )
}
