import { useContext, useState } from "react";
import { CinemaApiContext } from "../context/CinemaContext";

import "../App.css";

const FavoriteIcon = ({ movieId, movieIsFavorite, filtered, setFiltered }) => {
  let { movieItems, setMovieItems } = useContext(CinemaApiContext);

  let [isAnimate, setIsAnimate] = useState(false);

  function toggleMovies(id) {
    const updatedMovies = movieItems.map((movie) =>
      movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    );

    setMovieItems(updatedMovies);

    const updatedFilteredMovies = filtered.map((movie) =>
      movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    );
    setFiltered(updatedFilteredMovies);

    setIsAnimate(true);
    setTimeout(() => setIsAnimate(false), 300);
  }

  return (
    <div className="mb-3 w-100 d-flex justify-content-end ">
      <img
        className={`favorite-icon ${isAnimate ? "animate" : ""}`}
        src={movieIsFavorite ? "/images/star.png" : "/images/empty_star.png"}
        alt=""
        onClick={() => toggleMovies(movieId)}
      />
    </div>
  );
};

export default FavoriteIcon;
