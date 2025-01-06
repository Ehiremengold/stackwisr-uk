import "./Header.css";
import logo from "../../assets/logo/logo.png";
import logoWhite from "../../assets/logo/logo-white.png";
import Menu from "../Menu/Menu.jsx";
import CloseMenu from "../CloseMenu/CloseMenu.jsx";
import orangePlane from "../../assets/icons/orange-plane.png";
import orangeMan from "../../assets/icons/orange-man.png";
import telephone from "../../assets/icons/telephone.png";
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
          <img src={logo} alt="Stackwisr logo" />
        </NavLink>
        <div className="menu-btn" onClick={toggleMenu}>
          <Menu />
        </div>
        <nav className={menu ? "show" : ""}>
          {menu && <img src={logoWhite} className="nav-show-icon" alt="Stackwisr logo" />}
          <div onClick={toggleMenu}>
            <CloseMenu />
          </div>
          <ul className="center-nav-items">
            <NavLink to="/about-us">
              <li>
                <h4>About Us</h4>
              </li>
            </NavLink>
            <NavLink to="/courses">
              <li>
                <h4>Courses</h4>
              </li>
            </NavLink>
            <NavLink to="/advisory">
              <li>
                <h4>Advisory & Consulting Services</h4>
              </li>
            </NavLink>
            <NavLink to="/events">
              <li>
                <h4>Events</h4>
              </li>
            </NavLink>
            <NavLink to="/contact-us">
              <li>
                <h4>Contact Us</h4>
              </li>
            </NavLink>
          </ul>

          {menu && <img src={orangePlane} className="asset" alt="plane-icon" />}
          {menu && <img src={orangeMan} className="man-asset" alt="plane-icon" />}
          <ul className="right-nav-items">
            <div className="nav-tel-container">
              <img src={telephone} alt="telephone-icon" />
              <a href="tel:0333 772 0285">
                <li>
                  <h4>0333 772 0285</h4>
                </li>
              </a>
            </div>
            <button className="nav-sign-in">Sign in</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
