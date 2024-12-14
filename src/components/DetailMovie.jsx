import { useContext, useState } from "react";
import { CinemaApiContext } from "../context/CinemaContext";

const DetailMovie = ({ movieId, filtered, searched }) => {
  let [isShown, setIsShown] = useState(false);

  let { movieItems } = useContext(CinemaApiContext);

  function handleMovieDetailMouseEnter(event) {
    setIsShown(true);
  }

  function handleMovieDetailMouseOut(event) {
    setIsShown(false);
  }

  const moviesToDisplay = searched ? filtered : movieItems;

  return (
    <div
      className="container-sm position-relative "
      onMouseEnter={(event) => handleMovieDetailMouseEnter(event)}
      onMouseLeave={(event) => handleMovieDetailMouseOut(event)}
    >
      <img
        className="img-fluid"
        src="./images/info.png"
        alt="info-detail-movie-img"
        style={{ maxHeight: 25, maxWidth: 25, objectFit: "cover" }}
        onMouseEnter={(event) => handleMovieDetailMouseEnter(event)}
        onMouseLeave={(event) => handleMovieDetailMouseOut(event)}
      />

      <div
        className={`detail-movie ${isShown ? "shown" : ""} bg-primary `}
        onMouseEnter={() => {
          setIsShown(true);
        }}
      >
        {moviesToDisplay && moviesToDisplay.length > 0 ? (
          moviesToDisplay
            .filter((movie) => movie.id === movieId)
            .map((movie) => (
              <div className="card">
                <div className="card-body d-flex flex-column  justify-content-center  p-3 mt-5  ">
                  <p>
                    <span className="fw-bold">Title: </span>
                    {movie.title}
                  </p>
                  <p>
                    <span className="fw-bold">Year: </span>
                    {movie.year}
                  </p>
                  <p style={{ whiteSpace: "nowrap" }}>
                    <span className="fw-bold">Director: </span>
                    {movie.director}
                  </p>
                  <p>
                    <span className="fw-bold">Genre: </span>
                    {movie.genre}
                  </p>

                  <img
                    src="./images/video-player.png"
                    style={{
                      maxHeight: 30,
                      maxWidth: 30,
                      marginLeft: "auto",
                    }}
                    alt=""
                  />
                </div>
              </div>
            ))
        ) : (
          <p>henüz bir iilem yok</p>
        )}
      </div>
    </div>
  );
};

export default DetailMovie;
