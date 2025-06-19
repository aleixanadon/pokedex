import useSearchBar from "../../hooks/useSearchBar";

const SearchBar = () => {
  const { onChangeInput, query } = useSearchBar()
  return (
    <input
      type="search"
      name="search-bar"
      id="search-bar"
      placeholder="Search in this generation"
      pattern="/^[A-Z]+$/i"
      onChange={onChangeInput}
      value={query}
    />
  );
};

export default SearchBar;
