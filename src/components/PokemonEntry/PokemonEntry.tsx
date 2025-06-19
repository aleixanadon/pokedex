import React from "react";
import "./PokemonEntry.css";
import { getFirstUppercased } from "../../utils/strings/getFirstUppercase";

const PokemonEntry: React.FC<{
  src: string;
  name: string;
  pokemonId: string;
}> = ({ src, name, pokemonId }) => {
  const firstUppercased = getFirstUppercased(name)
  return (
    <div className="pokemon-entry">
      <img src={src} alt="" className="image" />
      <div className="pokemon-id">#{pokemonId}</div>
      <div className="pokemon-name">{firstUppercased}</div>
    </div>
  );
};

export default PokemonEntry;
