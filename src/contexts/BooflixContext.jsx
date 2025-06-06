import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const moviesContext = createContext();
function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState([]);

  const FetchMovies = (searchTerm) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5036c850fa089dc72281fd32b66e7726&query=${searchTerm}`
      )
      .then((res) => {
        const response = res.data.results;
        const movies = response.map((movie) => ({
          title: movie.title,
          image: movie.image,
          originaltitle: movie.original_title,
          lang: movie.original_languages,
          rate: movie.vote_average,
        }));
        console.log(response);
        setMovies(movies);
      });
  };

  const FetchSeries = (searchTerm) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=5036c850fa089dc72281fd32b66e7726&query=${searchTerm}`
      )
      .then((res) => {
        const response = res.data.results;
        const tvseries = response.map((movie) => ({
          title: movie.name,
          image: movie.poster_path,
          originaltitle: movie.original_name,
          lang: movie.original_language,
          rate: movie.vote_average,
        }));
        console.log(response);
        setSeries(tvseries);
      });
  };

  return (
    <moviesContext.Provider
      value={{
        movies,
        query,
        series,
        FetchSeries,

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
