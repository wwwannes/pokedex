import type { IAbility, IMove, IType } from './ICommon'
import type { IPokemonSpecies } from './IPokemon'

export interface IGenerations {
  id: number
  name: string
  abilities: IAbility
  moves: IMove
  pokemon_species: IPokemonSpecies
  types: IType
}
