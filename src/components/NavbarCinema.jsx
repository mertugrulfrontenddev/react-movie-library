import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const NavbarCinema = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Yan menü durumu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Üst menü durumu

  const menuRef = useRef(null); // Üst menü referansı
  const SideMenuRef = useRef(null); //yan menu referans
  // Menü dışında tıklamayı algılayan fonksiyon

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Üst menüyü açma/kapama
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Menü kapansın
    }

    if (SideMenuRef.current && !SideMenuRef.current.contains(event.target)) {
      setIsSidebarOpen(false); // Menü kapansın
    }
  };

  // DOM'a tıklama olayını ekle
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick); // Mouse tıklamalarını dinle

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick); // Unmount sırasında temizle
    };
  }, []);

  // Yan menüyü açma/kapama

  return (
    <>
      {/* Masaüstü: Yan Menü */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : "close"}`}
        ref={SideMenuRef}
      >
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
      <div className={`top-menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
        {/* Üst menü ok işareti */}

        <div
          className="sidebar-arrow d-flex flex-column align-items-center justify-content-center"
          onClick={toggleMenu}
        >
          <button className="btn custom-hamburger-close">
            <span className="sidebar-arrow-icon ">
              {isMenuOpen ? "✖" : "☰"}
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
