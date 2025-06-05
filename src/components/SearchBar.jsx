import { useMovies } from "../contexts/BooflixContext";

function SearchBar() {
  const { setQuery } = useMovies;
  return (
    <form className="d-flex m-3">
      <input value={""} type="text" className="form-control grow-1 " />
      <button className="btn btn-primary mx-2">SEARCH</button>
    </form>
  );
}
export default SearchBar;
