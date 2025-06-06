import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const moviesContext = createContext();
function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const FetchMovies = (searchTerm) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5036c850fa089dc72281fd32b66e7726&query=${searchTerm}`
      )
      .then((res) => {
        const response = res.data.results;
        console.log(response);
        setMovies(response);
      });
  };

  return (
    <moviesContext.Provider
      value={{
        movies,
        query,

        FetchMovies,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
}
function useMovies() {
  const context = useContext(moviesContext);
  return context;
}
export { MoviesProvider, useMovies };
// useEffect(() => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/search/movie?api_key=5036c850fa089dc72281fd32b66e7726&query=${query}`
//     )
//     .then((res) => {
//       const response = res.data.results;
//       console.log(response);
//       setMovies(response);
//     });
// }, [query]);
