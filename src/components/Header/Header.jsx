import "./Header.css";
import logo from "../../assets/logo/logo.png";
import logoWhite from "../../assets/logo/logo-white.png";
import Menu from "../Menu/Menu.jsx";
import CloseMenu from "../CloseMenu/CloseMenu.jsx";
import orangePlane from "../../assets/icons/orange-plane.png";
import orangeMan from "../../assets/icons/orange-man.png";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../features/countries/countriesSlice.js";
import { getCareerpaths } from "../../features/careerpaths/careerpathSlice.js";

const Header = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareerpaths());

    dispatch(getCountries());
  }, [dispatch]);

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    // Set body overflow based on the menu state
    if (menu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Clean up the effect when the component unmounts or menu changes
    return () => {
      document.body.style.overflow = "auto"; // Reset to default when unmounting
    };
  }, [menu]);

  return (
    <header>
      <div className="wrapper">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="menu-btn" onClick={toggleMenu}>
          <Menu />
        </div>
        <nav className={menu ? "show" : ""}>
          {menu && <img src={logoWhite} className="nav-show-icon" alt="" />}
          <div onClick={toggleMenu}>
            <CloseMenu />
          </div>
          <ul className="center-nav-items">
            <NavLink to="/careerpaths">
              <li>Career Paths</li>
            </NavLink>
            <NavLink to="/testimonies">
              <li>Our Success</li>
            </NavLink>
            <a href="/blog">
              <li>Blog</li>
            </a>
            <NavLink to="/resources">
              <li>Resources</li>
            </NavLink>
          </ul>

          {menu && <img src={orangePlane} className="asset" alt="" />}
          {menu && <img src={orangeMan} className="man-asset" alt="" />}
          <ul className="right-nav-items">
            <NavLink to="/about-us">
              <li>About Us</li>
            </NavLink>
            <NavLink to="/events">
              <li>Events</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
