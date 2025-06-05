import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const moviesContext = createContext();
function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=5036c850fa089dc72281fd32b66e7726&query=Avengers"
      )
      .then((res) => {
        const response = res.data.results;

        setMovies(response);
      });
  }, []);
  return (
    <moviesContext.Provider
      value={{
        movies,
        setMovies,
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
