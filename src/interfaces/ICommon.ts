import type { IPokemon } from './IPokemon'

export interface IAbility {
  id: number
  name: string
  is_main_series: boolean
}

export interface IMove {
  id: number
  name: string
}

export interface ITypePokemon {
  slot: number
  pokemon: IPokemon
}

export interface IType {
  id: number
  name: string
  pokemon: ITypePokemon
}
