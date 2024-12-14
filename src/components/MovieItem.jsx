import { CinemaApiContext } from "../context/CinemaContext";
import { useContext, useState } from "react";
import FavoriteIcon from "./FavoriteIcon";
import "../App.css";

const MovieItem = () => {
  let { movieItems } = useContext(CinemaApiContext);
  let [searched, setSearched] = useState("");
  let [filtered, setFiltered] = useState([]);
  function handleSearched(event) {
    setSearched(event.target.value);

    findSearched(event.target.value);
  }

  function findSearched(value) {
    let regex = new RegExp(value, "i");

    let filteredMovies = movieItems.filter((movie) => regex.test(movie.title));

    setFiltered(filteredMovies);
  }

  return (
    <div className="container d-flex flex-row flex-wrap align-items-center justfiy-content-between mt-4 ">
      <div className="shadow w-100 p-3 mt-5 text-white bg-primary d-flex justify-content-between">
        <h2>Movies List</h2>
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-2 fw-bold">
            <label htmlFor="inputFind">Search:</label>
          </span>
          <input
            type="text"
            id="inputFind"
            className="form-control w-75"
            placeholder="type movie..."
            value={searched}
            onChange={(event) => handleSearched(event)}
          ></input>
        </div>
      </div>

      <div className="row Gap-2 mt-4 flex-grow-1">
        {filtered.length > 0 ? (
          filtered.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <div className="card mb-4 shadow">
                <div className="card-body d-flex flex-column justify-content-center align-items-center shadow-sm">
                  <FavoriteIcon
                    movieId={movie.id}
                    movieIsFavorite={movie.isFavorite}
                    filtered={filtered}
                    setFiltered={setFiltered}
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
        ) : movieItems && movieItems.length > 0 ? (
          movieItems.map((movie) => (
            <div className="col-md-4" key={movie.id}>
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
