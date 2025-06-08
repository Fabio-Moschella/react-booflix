import { useState } from "react";
import { useMovies } from "../contexts/BooflixContext";

function SearchBar() {
  const { FetchMovies, FetchSeries } = useMovies();
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    FetchMovies(searchTerm);
    FetchSeries(searchTerm);
  };

  return (
    <header
      className="bg-black d-flex justify-content-between align-items-center
    "
    >
      <h1 className="text-danger">BOOFLIX</h1>
      <form onSubmit={handleOnSubmit} className="d-flex m-3">
        <input
          type="text"
          value={searchTerm}
          className="form-control grow-1 "
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary mx-2">SEARCH</button>
      </form>
    </header>
  );
}
export default SearchBar;
