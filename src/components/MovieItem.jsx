import { CinemaApiContext } from "../context/CinemaContext";
import { useContext } from "react";
import FavoriteIcon from "./FavoriteIcon";
import "../App.css";
const MovieItem = () => {
  let { movieItems } = useContext(CinemaApiContext);

  console.log(movieItems);
  return (
    <div className="container d-flex flex-row flex-wrap align-items-center justfiy-content-between mt-4 ">
      <h2 className="shadow w-100 p-3 mt-5 text-secondary">Movies List</h2>
      <div className="row Gap-2 mt-4">
        {movieItems && movieItems.length > 0 ? (
          movieItems.map((movie) => (
            <div className="col-md-4 ">
              <div className="card mb-4 shadow" key={movie.id}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center shadow-sm">
                  <FavoriteIcon
                    movieId={movie.id}
                    movieIsFavorite={movie.isFavorite}
                  />
                  <img
                    className="img-movie w-100 mb-2 shadow"
                    src={movie.poster}
                    alt={movie.title}
                  />

                  <h3 className="shadow-sm p-2 w-100 text-center text-secondary fw-bold">
                    {movie.title}
                  </h3>

                  <span className="fw-bold badge bg-primary me-1 p-3 mt-1 w-100">
                    Director: {movie.director}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
