import { useState } from "react";
import { Link } from "react-router-dom";

const SettingsDropdown = () => {
  let [isOpen, setIsOpen] = useState(false);

  function toggle(event) {
    event.preventDefault();

    setIsOpen(!isOpen);
  }

  function handleLinkClick(event) {
    event.stopPropagation();
  }
  return (
    <>
      <li
        className={`dropdown ${isOpen ? "open" : ""}`}
        onClick={(event) => toggle(event)}
      >
        <Link className="nav-link text-white" to="#">
          Movie Settings {isOpen}
        </Link>
        <ul className="dropdown-sub">
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/movieadd"
              onClick={handleLinkClick}
            >
              Movie Add
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/update"
              onClick={handleLinkClick}
            >
              Movie Update
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/moviedelete"
              onClick={handleLinkClick}
            >
              Movie Delete
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default SettingsDropdown;
