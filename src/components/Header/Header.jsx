import "./Header.css";
import logo from "../../assets/logo/logo.png";
import logoWhite from "../../assets/logo/logo-white.png";
import Menu from "../Menu/Menu.jsx";
import CloseMenu from "../CloseMenu/CloseMenu.jsx";
import orangePlane from "../../assets/icons/orange-plane.png";
import orangeMan from "../../assets/icons/orange-man.png";

import { useState } from "react";
const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
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
            <li>Career Paths</li>
            <li>Our Success</li>
            <li>Blog</li>
          </ul>

          {menu && <img src={orangePlane} className="asset" alt="" />}
          {menu && <img src={orangeMan} className="man-asset" alt="" />}
          <ul className="right-nav-items">
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>Events</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
