import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/jom-logo.svg";
import Logo1 from "../../assets/images/jom-logo1.svg";
import light from "../../assets/images/light.svg";
import dark from "../../assets/images/dark.svg";
import { ThemeFunction } from "../../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeFunction);

  const [show, setShow] = useState(false);

  const handleCloseNav = () => {
    setShow(false);
  };

  const handleNavClick = () => {
    setShow(!show);
  };

  return (
    <nav>
      <Link className="logo123" to="/" onClick={handleCloseNav}>
        {theme === "dark" ? (
          <img src={Logo} alt={Logo} className="logo" />
        ) : (
          <img src={Logo1} alt={Logo1} className="logo" />
        )}
      </Link>
      <ul className={show ? "ul-container active" : "ul-container"}>
        <li className="line line-color">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Link-color active" : "Link-color"
            }
            to="About"
            onClick={handleCloseNav}
          >
            About
          </NavLink>
        </li>
        <li className="line line-color">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Link-color active" : "Link-color"
            }
            to="Projects"
            onClick={handleCloseNav}
          >
            Projects
          </NavLink>
        </li>
        <li className="line line-color">
          <NavLink
            className={({ isActive }) =>
              isActive ? "Link-color active" : "Link-color"
            }
            to="Contacts"
            onClick={handleCloseNav}
          >
            Contacts
          </NavLink>
        </li>
        <div className="toggle-mode">
          {theme === "dark" ? (
            <img src={light} alt="moon" onClick={toggleTheme} className="sun" />
          ) : (
            <img
              src={dark}
              alt="sun"
              onClick={toggleTheme}
              className="second-img"
            />
          )}
        </div>
      </ul>
      <div className="toggle-mode mode-off">
        {theme === "dark" ? (
          <img src={light} alt="moon" onClick={toggleTheme} className="sun" />
        ) : (
          <img
            src={dark}
            alt="sun"
            onClick={toggleTheme}
            className="second-img"
          />
        )}
      </div>
      <div
        className={show ? "toggle active" : "toggle"}
        onClick={handleNavClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
