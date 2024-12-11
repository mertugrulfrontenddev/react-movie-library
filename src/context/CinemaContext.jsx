import { createContext, useState } from "react";

const CinemaApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  let [movieItems, setMovieItems] = useState([
    { id: "1", name: "a" },
    { id: "2", name: "b" },
  ]);

  return (
    <CinemaApiContext.Provider value={{ movieItems, setMovieItems }}>
      {children}
    </CinemaApiContext.Provider>
  );
};

export { CinemaApiContext, ApiContextProvider };
