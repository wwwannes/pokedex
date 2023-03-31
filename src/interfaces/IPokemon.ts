import type { IAbility } from './ICommon'

export interface IPokemonColor {
  id: number
  name: string
}

export interface IPokemonSpecies {
  id: number
  name: string
  order: number
  is_baby: boolean
  is_legendary: boolean
  is_mythicalc: boolean
  color: IPokemonColor
}

export interface IPokemonAbility {
  is_hidden: boolean
  slot: number
  ability: IAbility
}

export interface IPokemon {
  id: number
  name: string
  height: number
  weight: number
  is_default: boolean
  abilities: IPokemonAbility[]
}
