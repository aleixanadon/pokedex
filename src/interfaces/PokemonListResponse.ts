import type { NamedAPIResource } from "./NamedAPIResource";

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}