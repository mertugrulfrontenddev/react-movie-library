import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import NavbarCinema from "./components/NavbarCinema";
import FavoriteMovies from "./components/FavoriteMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Movies from "./components/Movies";
import AddNewMovie from "./components/AddNewMovie";
import DeleteMovie from "./components/DeleteMovie";
function App() {
  return (
    <BrowserRouter>
      <NavbarCinema />
      <div className="container content-area   p-1 w-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorite" element={<FavoriteMovies />} />

          <Route path="/movieadd" element={<AddNewMovie />} />
          <Route path="/moviedelete" element={<DeleteMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
