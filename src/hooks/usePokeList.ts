import { useEffect, useState } from "react"
import type { PokemonListResponse } from "../interfaces/PokemonListResponse"
import type { Root } from "../interfaces/Pokemon"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../store"
import { loadPokemon } from "../features/pokedex/pokedexSlice"
import { generations } from "../utils/pokemon/generations"

const usePokeList = () => {
  
  const [loading, setLoading] = useState(false)

  const pokemonList = useSelector((state: RootState) => state.pokemon.value.results)
  const dispatch: AppDispatch = useDispatch()
  const { selectedGen, searchQuery } = useSelector((state: RootState) => state.pokemon)
  const pokemonResponse = useSelector((state: RootState) => state.pokemon.value)

  const fetchPokemon = async (start: number, end: number) => {
    setLoading(true)
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${end}&offset=${start}`
    try {
      const response = await fetch(url)
      const data: PokemonListResponse = await response.json()
      dispatch(loadPokemon(data))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const fetchSprite = async (pokemonName: string) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    try {
      const response = await fetch(url)
      const pokemon: Root = await response.json()
      return pokemon.sprites.front_default
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const { startId, endId } = generations[selectedGen]
    fetchPokemon(startId, endId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, selectedGen, searchQuery])

  return {
    pokemonList,
    loading,
    fetchSprite,
    pokemonResponse,
    fetchPokemon,
    searchQuery
  }
}

export default usePokeList