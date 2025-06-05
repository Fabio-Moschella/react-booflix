import { useMovies } from "../contexts/BooflixContext";

function Main() {
  const { movies } = useMovies;
  return (
    <div className="container">
      {movies.map((movie) => {
        return (
          <>
            <div className="col-4 my-3">
              <div className="card  g-2 ">
                <img className="card-img" src={movie.image} alt="" />

                <div className="card-body  ">
                  <div className="card-title mb-3">
                    <h1>{movie.title}</h1>
                  </div>
                  <div className="card-subtitle mb-3 ">
                    {movie.original_title}
                  </div>
                  <div className="card-text mb-3  ">
                    {movie.original_languages}
                  </div>

                  <div className="card-text mb-3 ">{movie.vote_average}</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Main;
