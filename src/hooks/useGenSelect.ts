import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../store"
import { selectGen } from "../features/pokedex/pokedexSlice"

const useGenSelect = () => {
  
  const selectedGen = useSelector((state: RootState) => state.pokemon.value.results)
  const dispatch: AppDispatch = useDispatch()

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(selectGen(parseInt(value)))
  }

  return {
    selectedGen,
    onChangeSelect
  }
}

export default useGenSelect