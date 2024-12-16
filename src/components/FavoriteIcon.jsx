import { useContext, useState } from "react";
import { CinemaApiContext } from "../context/CinemaContext";
import "../App.css";
import MovieItem from "./MovieItem";

const FavoriteIcon = ({ movieId, movieIsFavorite, filtered, setFiltered }) => {
  let { movieItems, setMovieItems } = useContext(CinemaApiContext);
  let [isAnimate, setIsAnimate] = useState(false);

  function toggleMovies(id) {
    // movieItems içindeki tıklanan filmi bulup, favori durumunu değiştiriyoruz
    const updatedMovies = movieItems.map((movie) =>
      movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    );

    // movieItems güncelleniyor
    setMovieItems(updatedMovies);

    // localStorage'a güncellenmiş veriyi kaydediyoruz
    localStorage.setItem("items", JSON.stringify(updatedMovies));

    // Eğer filtered varsa, onları da güncellemeliiz
    if (filtered && filtered.length) {
      const updatedFilteredMovies = filtered.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
      );
      setFiltered(updatedFilteredMovies);
    }

    // Animasyonu başlatıyoruz
    setIsAnimate(true);
    setTimeout(() => setIsAnimate(false), 300);
  }

  return (
    <div className="mb-3 w-100 d-flex justify-content-end ">
      <img
        className={`favorite-icon ${isAnimate ? "animate" : ""}`}
        src={movieIsFavorite ? "/images/star.png" : "/images/empty_star.png"}
        alt=""
        onClick={() => toggleMovies(movieId)} // Tıklama fonksiyonu
      />
    </div>
  );
};

export default FavoriteIcon;
