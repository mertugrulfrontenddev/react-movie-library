import { createContext, useState, useEffect } from "react";

const CinemaApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  let [movieItems, setMovieItems] = useState([]);
  function handleFavorite(event) {
    console.log("favori icon tıklandı");
  }
  useEffect(() => {
    const storedMovies = localStorage.getItem("items");

    // Geçerli bir veri olup olmadığını kontrol et
    if (storedMovies) {
      try {
        const parsedMovies = JSON.parse(storedMovies);

        // Eğer JSON geçerli ve dizi varsa, movieItems'ı ayarla
        if (parsedMovies && parsedMovies.length > 0) {
          setMovieItems(parsedMovies);
        } else {
          // Eğer dizi boşsa, movieItems'ı boş bir diziye ata
          setMovieItems([]);
        }
      } catch (e) {
        console.error("Error parsing stored movies", e);
        // JSON geçerli değilse, movieItems'ı boş bir diziye ata
      }
    } else {
      // Eğer localStorage'da veri yoksa, movieItems'ı boş bir diziye ata
    }
  }, []);

  return (
    <CinemaApiContext.Provider
      value={{ movieItems, setMovieItems, handleFavorite }}
    >
      {children}
    </CinemaApiContext.Provider>
  );
};

export { CinemaApiContext, ApiContextProvider };
