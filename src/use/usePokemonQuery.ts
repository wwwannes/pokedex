import type { IPokemon } from '@/interfaces/IPokemon'
import { useQuery } from '@tanstack/vue-query'

const ENV = import.meta.env

export const useGeneration1PokemonQuery = () => {
  return useQuery(
    ['pokemons'],
    async () => {
      const response = await fetch(`https://beta.pokeapi.co/graphql/v1beta`, {
        method: 'POST',
        body: JSON.stringify({
          query: `
          query AllGen1PokemonQuery {
            pokemon_v2_pokemon(limit: 151) {
              name
            }
            pokemon_v2_move(where: {pokemon_v2_generation: {pokemon_v2_generationnames: {generation_id: {_eq: 1}}}}) {
              name
            }
            pokemon_v2_type(where: {generation_id: {_eq: 1}}) {
              name
            }
            pokemon_v2_pokemonhabitat(where: {pokemon_v2_pokemonspecies: {pokemon_v2_pokemons: {id: {_lte: 151}}}}) {
              name
            }
          }
          
          `
        })
      })

      if (response.status !== 200) {
        throw new Error('Something went wrong')
      }

      const result = await response.json()

      return result.data
    },
    { staleTime: 60 * 1000 * 60 }
  )
}

export const useCategoryQuery = (category: string | string[], name: string | string[]) => {
  return useQuery(
    ['category'],
    async () => {
      let query: string

      switch (category) {
        case 'move':
          query = `query AllGen1PokemonForCategory($name: String = "${name}") {
            pokemon_v2_pokemon(where: {pokemon_v2_pokemonmoves: {pokemon_v2_move: {name: {_eq: $name}}}, id: {_lte: 151}}, order_by: {name: asc}) {
              name
              id
            }
          }
          `
          break
        case 'type':
          query = `query AllGen1PokemonForCategory($name: String = "${name}") {
            pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: $name}}}, id: {_lte: 151}}, order_by: {name: asc}) {
              name
              id
            }
          }
          `
          break

        default:
          query = `query AllGen1PokemonForCategory($name: String = "${name}") {
            pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: $name}}}, id: {_lte: 151}}, order_by: {name: asc}) {
              name
              id
            }
          }
          `
          break
      }

      const result = await fetchCustomPokemonData(query)

      return result
    },
    { staleTime: 60 * 1000 * 60 }
  )
}

export const usePokemonDetailQuery = (pokemonName: string) => {
  return useQuery(
    ['pokemonDetail'],
    async () => {
      const query = getCustomPokemonData('where: {name: {_eq: $name}}', pokemonName)

      const result = await fetchCustomPokemonData(query)
      console.log(result[0])
      return result[0]
    },
    { staleTime: 60 * 1000 * 60 }
  )
}

export const usePokemonCaughtQuery = (ids: [number]) => {
  return useQuery(
    ['pokemonCaught'],
    async () => {
      const query = getCustomPokemonData(`where: {id: {_in: ${ids}}}`)

      const result = await fetchCustomPokemonData(query)
      console.log(result[0])
      return result[0]
    },
    { staleTime: 60 * 1000 * 60 }
  )
}

const getCustomPokemonData = (filterConditions: string, pokemonName: string = '') => {
  return `query Gen1PokemonDetail($name: String = "${pokemonName}") {
    pokemon_v2_pokemon(${filterConditions}) {
      name
      id
      height
      pokemon_v2_pokemonabilities(where: {pokemon_v2_ability: {}}) {
        pokemon_v2_ability {
          name
          pokemon_v2_abilityeffecttexts(where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
            short_effect
          }
        }
      }
      pokemon_v2_pokemonforms {
        name
      }
      pokemon_v2_pokemonmoves(where: {pokemon_v2_move: {generation_id: {_eq: 1}, priority: {}}}, distinct_on: move_id) {
        pokemon_v2_move {
          name
          pokemon_v2_moveeffect {
            pokemon_v2_moveeffecteffecttexts {
              short_effect
            }
          }
          power
          priority
          accuracy
        }
      }
      pokemon_v2_pokemonspecy {
        capture_rate
        pokemon_v2_pokemoncolor {
          pokemon_v2_pokemoncolornames(where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
            name
          }
        }
        pokemon_v2_pokemonhabitat {
          pokemon_v2_pokemonhabitatnames(where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
            name
          }
        }
        pokemon_v2_pokemonshape {
          pokemon_v2_pokemonshapenames(where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
            name
          }
        }
        base_happiness
        hatch_counter
        is_baby
        is_legendary
        is_mythical
        pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {id: {_eq: 1}}}) {
          flavor_text
        }
        pokemon_v2_growthrate {
          name
          formula
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          pokemon_v2_statnames(where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
            name
          }
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id,
          name
        }
      }
    }
  }
  `
}

const fetchCustomPokemonData = async (query: string) => {
  const response = await fetch(`https://beta.pokeapi.co/graphql/v1beta`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Method-Used': 'graphiql'
    },
    body: JSON.stringify({
      query: query
    })
  })
  if (response.status !== 200) {
    throw new Error('Something went wrong')
  }

  const result = await response.json()

  return result.data.pokemon_v2_pokemon
}
