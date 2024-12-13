import { CinemaApiContext } from "../context/CinemaContext";
import { useContext } from "react";
import "../App.css";

const FavoriteMovies = () => {
  let { movieItems } = useContext(CinemaApiContext);

  return (
    <div className="container-fluid">
      <h2 className="shadow w-100 p-3 mt-5 text-secondary">
        Your Favorite Movies List
      </h2>
      <div className="row">
        {movieItems.filter((movie) => movie.isFavorite).length === 0 ? (
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p>You don't have favorite movie yet...</p>
              </div>
            </div>
          </div>
        ) : (
          movieItems
            .filter((movie) => movie.isFavorite)
            .map((movie) => (
              <div
                className={
                  movieItems.filter((movie) => movie.isFavorite).length < 3
                    ? "col-md-6"
                    : "col-md-4"
                }
              >
                <div className="card">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={movie.poster}
                      alt=""
                      className="img-movie w-100 mb-2"
                    />
                    <h3 className="text-secondary">{movie.title}</h3>
                    <span className="fw-bold badge bg-danger me-1 p-3 mt-1 w-100">
                      Director: {movie.director}
                    </span>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default FavoriteMovies;
