import { createContext, useState, useEffect } from "react";

const CinemaApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  let [movieItems, setMovieItems] = useState([]);
  function handleFavorite(event) {
    console.log("favori icon tıklandı");
  }
  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => setMovieItems(data))
      .catch((error) => console.error("Error", error));
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
