import { useContext, useEffect, useState } from "react";
import { CinemaApiContext } from "../context/CinemaContext";
import { Link } from "react-router-dom";

const DeleteMovie = () => {
  let { movieItems, setMovieItems } = useContext(CinemaApiContext);
  let [hoveredMovieId, setHoveredMovieId] = useState(null);

  movieItems = movieItems || [];
  // İlk render'da localStorage'dan veri alıyoruz.
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("items"));
    if (savedMovies && savedMovies.length > 0) {
      setMovieItems(savedMovies); // Veriyi state'e atıyoruz
    } else {
      setMovieItems([]); // Eğer 'items' yoksa, boş dizi atıyoruz
    }
  }, [setMovieItems]);

  // movieItems her değiştiğinde localStorage'ı güncelliyoruz.
  useEffect(() => {
    if (movieItems.length > 0) {
      localStorage.setItem("items", JSON.stringify(movieItems)); // Veriyi localStorage'a kaydediyoruz
    }
  }, [movieItems]);

  // Filmi silme fonksiyonu
  function handleDeleteMovie(event) {
    const movieId = event.target.id;
    setMovieItems((prevMovies) => {
      const updatedMovies = prevMovies.filter(
        (movie) => String(movie.id) !== movieId
      );

      // LocalStorage'ı hemen güncelleme işlemi
      localStorage.setItem("items", JSON.stringify(updatedMovies));
    });
  }

  // Hover olayları
  function handleImgHover(movieId) {
    setHoveredMovieId(movieId);
  }
  function handleImgMouseOut() {
    setHoveredMovieId(null);
  }

  return (
    <div className="card" style={{ paddingTop: "50px" }}>
      <div className="card-body">
        <div className="card-header">
          <h2 className="text-secondary">Delete Movie Page</h2>
        </div>
        <div className="d-flex justify-content-between align-items-start bg-primary text-white fw-bold flex-wrap">
          <p className="text-start ms-1 p-2" style={{ flex: "1 1 1%" }}>
            Num
          </p>
          <p className="text-start ms-1 p-2" style={{ flex: "1 1 15%" }}>
            Title
          </p>
          <p className="text-start ms-1 p-2" style={{ flex: "1 1 15%" }}>
            Genre
          </p>
          <p className="text-start ms-1 p-2" style={{ flex: "1 1 20%" }}>
            Director
          </p>
          <p className="text-start ms-1 p-2" style={{ flex: "1 1 15%" }}>
            Year
          </p>
          <p className="text-start p-2" style={{ flex: "1 1 10%" }}>
            Delete
          </p>
        </div>

        {movieItems.length > 0 ? (
          movieItems.map((movie, index) => (
            <div
              className="d-flex justify-content-between align-items-start flex-wrap"
              key={movie.id}
            >
              <p className="text-start ms-1 p-2 " style={{ flex: "1 1 1%" }}>
                {index + 1}.
              </p>
              <p className="text-start ms-3 p-2 " style={{ flex: "1 1 15%" }}>
                {movie.title}
              </p>
              <p className="text-start ms-3 p-2" style={{ flex: "1 1 15%" }}>
                {movie.genre}
              </p>
              <p className="text-start ms-3 p-2" style={{ flex: "1 1 25%" }}>
                {movie.director}
              </p>
              <p className="text-start ms-1 p-1" style={{ flex: "1 1 15%" }}>
                {movie.year}
              </p>
              <p className="text-start ms-1 p-2" style={{ flex: "1 1 10%" }}>
                <img
                  id={movie.id}
                  src={
                    hoveredMovieId === movie.id
                      ? "./images/trash-bin.png"
                      : "./images/delete.png"
                  }
                  alt=""
                  className="img-delete-movie-icon"
                  onMouseEnter={() => handleImgHover(movie.id)}
                  onMouseLeave={handleImgMouseOut}
                  onClick={handleDeleteMovie}
                />
              </p>
            </div>
          ))
        ) : (
          <div className="card w-50 mx-auto mt-3">
            <div className="card-body">
              <p>
                There are no movies available to delete. if You want to add new
                movie you can navigate Add New Movie page by
                <Link className="nav-link text-primary" to="/movieadd">
                  Click Here
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteMovie;
