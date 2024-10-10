import "./Header.css";
import logo from "../../assets/logo/logo.png";
import logoWhite from "../../assets/logo/logo-white.png";
import Menu from "../Menu/Menu.jsx";
import CloseMenu from "../CloseMenu/CloseMenu.jsx";
import orangePlane from "../../assets/icons/orange-plane.png";
import orangeMan from "../../assets/icons/orange-man.png";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {

  const location = useLocation()

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setMenu(false)
  }, [location])
  
  return (
    <header>
      <div className="wrapper">
        <a href="/">
          <img src={logo} alt="" />
        </a>
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
            <NavLink to="/blog">
              <li>Blog</li>
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
            <NavLink to="/resources">
              <li>Resources</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
