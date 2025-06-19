import { useEffect, useState } from "react";
//import usePokeList from "./usePokeList";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { setSearchQuery } from "../features/pokedex/pokedexSlice";

const useSearchBar = () => {
  const [query, setQuery] = useState<string>("");
  //const { pokemonList, pokemonResponse } = usePokeList();
  const dispatch: AppDispatch = useDispatch();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value)
    if (value === "" || value.length === 0 ) {
      dispatch(setSearchQuery(""))
    } else {
      dispatch(setSearchQuery(query))
    }
  };

  useEffect(() => {}, [query]);

  return {
    query,
    onChangeInput,
  };
};

export default useSearchBar;
