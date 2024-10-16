import "./Footer.css";
import logo from "../../assets/logo/logo-white.png";
import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
import x from "../../assets/social/x.svg";
import youtube from "../../assets/social/youtube.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { calendly_URL } from "../../utils";

const Footer = () => {
  const { careerpaths } = useSelector((store) => store.careerpath);

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-top">
          <div className="col col-1 col-width">
            <img src={logo} className="footer-logo" alt="" />
            <p>
              Future-proof your career with our AI-driven training and career
              development
            </p>
          </div>
          <div className="col">
            <h3>Career Paths</h3>
            <ul className="footer-items">
              {careerpaths.map((careerpath) => {
                const { id, career_name, slug } = careerpath;
                return (
                  <a href={`/careerpaths/${slug}`} key={id}>
                    <li>{career_name}</li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className="col col-2">
            <h3>Company</h3>
            <ul className="footer-items">
              <NavLink to="/about-us">
                <li>About</li>
              </NavLink>
              <NavLink to="/testimonies">
                <li>Success</li>
              </NavLink>
              <NavLink to="/careerpaths">
                <li>Products</li>
              </NavLink>
              <NavLink to="/blog">
                <li>Blog</li>
              </NavLink>
            </ul>
          </div>
          <div className="col col-3">
            <h3>Legal</h3>
            <ul className="footer-items">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="col col-4">
            <h3>Request a Call Back</h3>
            <p className="request-call-desc">
              Book a consultation today to speak with one of our career experts
              and get started
            </p>
            <NavLink target="_blank" to={calendly_URL}>
              <button>Book Call</button>
            </NavLink>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-section">
            <p>All Right Reserved &copy; 2024</p>
            <NavLink to="https://www.stackwisr.co.uk">
              <span className="footer-link">www.stackwisr.co.uk</span>
            </NavLink>
          </div>
          <div className="right-section">
            <ul className="socials-icons">
              <li>
                <NavLink to="#">
                  <img src={instagram} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <img src={facebook} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <img src={x} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <img src={youtube} alt="" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
