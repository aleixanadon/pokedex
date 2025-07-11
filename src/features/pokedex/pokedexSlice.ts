import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { PokemonListResponse } from "../../interfaces/PokemonListResponse";

export interface PokedexState {
  value: PokemonListResponse;
  selectedGen: number;
  searchQuery: string;
  selectedPokemon: string;
}

// Define the initial state using that type
const initialState: PokedexState = {
  value: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  },
  selectedGen: 0,
  searchQuery: "",
  selectedPokemon: ""
};

export const pokemonSlice = createSlice({
  name: "pokedex",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadPokemon: (
      state: PokedexState,
      action: PayloadAction<PokemonListResponse>
    ) => {
      state.value = action.payload;
    },
    selectGen: (
      state: PokedexState,
      action: PayloadAction<number>
    ) => {
      state.selectedGen = action.payload;
    },
    setSearchQuery: (
      state: PokedexState,
      action: PayloadAction<string>
    ) => {
      state.searchQuery = action.payload;
      console.log(state.searchQuery)
    },
    setPokemonDetail: (
      state: PokedexState,
      action: PayloadAction<string>
    ) => {
      state.selectedPokemon = action.payload
    }
  },
});

export const { loadPokemon, selectGen, setSearchQuery } = pokemonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPokemon = (state: RootState) => state.pokemon.value;

export default pokemonSlice.reducer;
