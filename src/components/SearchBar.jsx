import { useState } from "react";
import { useMovies } from "../contexts/BooflixContext";

function SearchBar() {
  const { setQuery } = useMovies();
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <form onSubmit={handleOnSubmit} className="d-flex m-3">
      <input
        type="text"
        value={searchTerm}
        className="form-control grow-1 "
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary mx-2">SEARCH</button>
    </form>
  );
}
export default SearchBar;
