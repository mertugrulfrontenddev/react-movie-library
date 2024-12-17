import { createContext, useState, useEffect } from "react";

const CinemaApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  let [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem("items");

    try {
      // LocalStorage'dan gelen veriyi parse et ve kontrol et
      const parsedMovies = storedMovies ? JSON.parse(storedMovies) : [];
      setMovieItems(Array.isArray(parsedMovies) ? parsedMovies : []);
    } catch (e) {
      console.error("Error parsing stored movies", e);
      setMovieItems([]); // JSON hatası durumunda boş dizi ata
    }
  }, []);

  return (
    <CinemaApiContext.Provider value={{ movieItems, setMovieItems }}>
      {children}
    </CinemaApiContext.Provider>
  );
};

export { CinemaApiContext, ApiContextProvider };
