import { useContext, useEffect } from "react";
import { CinemaApiContext } from "../context/CinemaContext";
import MovieItem from "./MovieItem";

const Movies = () => {
  return (
    <div className="container">
      <MovieItem />
    </div>
  );
};

export default Movies;
