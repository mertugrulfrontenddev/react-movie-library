import { CinemaApiContext } from "../context/CinemaContext";
import { useContext } from "react";
import "../App.css";

const FavoriteMovies = () => {
  let { movieItems } = useContext(CinemaApiContext);

  return (
    <div className="container d-flex flex-row flex-wrap align-items-center justfiy-content-between mt-4">
      <h2 className="shadow p-3 mt-5 text-white bg-danger w-100 d-block ">
        Your Favorite Movies List
      </h2>
      <div className="row flex-grow-1  mt-4 ">
        {movieItems.filter((movie) => movie.isFavorite).length === 0 ? (
          <div className="col-md-4 w-100 ">
            <div className="card ">
              <div className="card-body text-center d-flex flex-column  align-items-center">
                <img className="img-movie mb-3" src="/images/mind.png" alt="" />
                <p className="badge bg-warning fw-bold   mx-auto p-3">
                  You don't have favorite movie yet...
                </p>
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
                <div className="card shadow mb-4">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={movie.poster}
                      alt=""
                      className="img-movie w-100 mb-2 shadow"
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
