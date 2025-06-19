import usePokeList from "../../hooks/usePokeList";
import { extractId } from "../../utils/strings/extractId";
import { getPokemonFrontDefault } from "../../utils/urls";
import PokemonEntry from "../PokemonEntry/PokemonEntry";
import "./PokeList.css";

const PokeList = () => {
  const { pokemonList, loading, searchQuery } = usePokeList();
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="pokemon-list">
          {pokemonList
                .filter((value) => value.name.match(searchQuery))
                .map((pokemonResult) => {
                  const pokemonId = extractId(pokemonResult.url);
                  return (
                    <PokemonEntry
                      src={getPokemonFrontDefault(pokemonId)}
                      name={pokemonResult.name}
                      pokemonId={pokemonId}
                      key={pokemonResult.name}
                    />
                  );
                })}
        </div>
      )}
    </div>
  );
};

export default PokeList;
