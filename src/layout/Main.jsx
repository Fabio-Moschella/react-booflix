import { useMovies } from "../contexts/BooflixContext";
import BooflixCard from "../components/BooflixCard";
function Main() {
  const { movies, series } = useMovies();

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-danger mt-3">MOVIES </h1>
        {movies.map((movie) => {
          return <BooflixCard media={movie} />;
        })}
        <h1 className="text-danger">SERIES TV</h1>
        {series.map((serie) => {
          return <BooflixCard media={serie} />;
        })}
      </div>
    </div>
  );
}

export default Main;
