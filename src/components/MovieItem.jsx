import { CinemaApiContext } from "../context/CinemaContext";
import { useContext, useState } from "react";
import FavoriteIcon from "./FavoriteIcon";
import "../App.css";
import DetailMovie from "./DetailMovie";
import { Link } from "react-router-dom";

const MovieItem = () => {
  let { movieItems } = useContext(CinemaApiContext);
  let [searched, setSearched] = useState("");
  let [filtered, setFiltered] = useState([]);

  function handleSearched(event) {
    setSearched(event.target.value);

    findSearched(event.target.value);
  }

  function findSearched(value) {
    let filteredMovies = movieItems.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filteredMovies);
  }
  const moviesToDisplay = searched ? filtered : movieItems;
  return (
    <div className="container d-flex flex-row flex-wrap align-items-center justfiy-content-between mt-4 ">
      <div className="stiky shadow w-100 p-3 mt-5 text-white bg-primary d-flex justify-content-between">
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
            value={searched || ""}
            onChange={(event) => handleSearched(event)}
          ></input>
        </div>
      </div>

      <div className="row Gap-2 mt-4 flex-grow-1">
        {moviesToDisplay && moviesToDisplay.length > 0 ? (
          moviesToDisplay.map((movie) => (
            <div className="col-md-4 " key={movie.id}>
              <div className="card mb-4 shadow">
                <div className="card-body d-flex flex-column justify-content-center align-items-center shadow-sm">
                  <FavoriteIcon
                    movieId={movie.id}
                    movieIsFavorite={movie.isFavorite}
                    filtered={filtered}
                    setFiltered={setFiltered}
                  />
                  <img
                    className="img-movie w-100 mb-2 shadow-lg "
                    src={movie.poster}
                    alt={movie.title}
                    style={{ borderRadius: "5px" }}
                  />

                  <h3 className="shadow-sm p-2 w-100 text-center text-secondary fw-bold">
                    {movie.title}
                  </h3>
                  <DetailMovie
                    movieId={movie.id}
                    filtered={filtered}
                    searched={searched}
                  />
                  <span className="fw-bold badge bg-primary me-1 p-3 mt-1 w-100">
                    Director: {movie.director}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="card w-50 mx-auto">
            <div className="card-body">
              <p>
                No movies available. if You want You can go
                <span>
                  <Link className="nav-link text-primary" to="/movieadd">
                    Add Movie Page Directly
                  </Link>
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 w-100 bg-primary mt-2"> </div>
    </div>
  );
};

export default MovieItem;
