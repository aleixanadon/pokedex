import { useEffect } from "react";
import type { SelectedGen } from "../../interfaces/SelectedGen";
import useGenSelect from "../../hooks/useGenSelect";

const generations: SelectedGen[] = [
  {value: "0", name: "Generation I", region: "Kanto"},
  {value: "1", name: "Generation II", region: "Johto"},
  {value: "2", name: "Generation III", region: "Hoenn"},
  {value: "3", name: "Generation IV", region: "Sinnoh"},
  {value: "4", name: "Generation V", region: "Unova"},
  {value: "5", name: "Generation VI", region: "Kalos"},
  {value: "6", name: "Generation VII", region: "Alola"},
  {value: "7", name: "Generation VIII", region: "Galar"},
  {value: "8", name: "Generation IX", region: "Paldea"},
]

const GenSelect = () => {

  const { selectedGen, onChangeSelect } = useGenSelect()
  
  useEffect(() => {

  }, [selectedGen])

  return (
    <select id="generation-select" name="generation" onChange={onChangeSelect}>
      {
        generations.map((value, index) => (
          <option 
            key={index} 
            value={index}
          >
            {value.name} - {value.region}
          </option>
        ))
      }
    </select>
  );
};

export default GenSelect;
