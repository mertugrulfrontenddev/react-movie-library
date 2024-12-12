import { useState } from "react";
import { Link } from "react-router-dom";
const NavbarCinema = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Yan menü durumu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Üst menü durumu

  // Yan menüyü açma/kapama
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Üst menüyü açma/kapama
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Masaüstü: Yan Menü */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
        <div
          className={`sidebar-arrow ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <button className="btn custom-hamburger-close">
            <span className="sidebar-arrow-icon">
              {isSidebarOpen ? "←" : "→"}
            </span>
          </button>
        </div>
        <div className="menu-content-desktop">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/favorite">
                Favorite Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Üst Menü */}
      <div className={`top-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Üst menü ok işareti */}

        <div
          className="sidebar-arrow d-flex flex-column align-items-center justify-content-center"
          onClick={toggleMenu}
        >
          <button className="btn custom-hamburger-close">
            <span className="sidebar-arrow-icon ">
              {isMenuOpen ? "↑" : "↓"}
            </span>
          </button>
        </div>

        {/* Üst menü açıldığında gösterilecek içerik */}

        <div className={`menu-content ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/favorite">
                Favorite Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarCinema;
