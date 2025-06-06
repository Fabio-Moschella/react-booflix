import { useMovies } from "../contexts/BooflixContext";
import BooflixCard from "../components/BooflixCard";
function Main() {
  const { movies, series } = useMovies();

  return (
    <div className="container">
      {movies.map((movie) => {
        return <BooflixCard media={movie} />;
      })}
      <hr />
      {series.map((serie) => {
        return <BooflixCard media={serie} />;
      })}
    </div>
  );
}

export default Main;
