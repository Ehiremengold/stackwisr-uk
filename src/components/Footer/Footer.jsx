import "./Footer.css";
import logo from "../../assets/logo/logo-white.png";
import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
import x from "../../assets/social/x.svg";
import youtube from "../../assets/social/youtube.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
              <li>Data Analyst</li>
              <li>IT Business Analyst</li>
              <li>Data Engineer</li>
              <li>Data Analytics Engineer</li>
              <li>Data Science AI</li>
            </ul>
          </div>
          <div className="col col-2">
            <h3>Company</h3>
            <ul className="footer-items">
              <NavLink to="/about">
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
            <button>Book Call</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-section">
            <p>All Right Reserved &copy; 2024</p>
            <a href="https://www.stackwisr.co.uk">
              <span className="footer-link"> www.stackwisr.co.uk</span>
            </a>
          </div>
          <d3v className="right-section">
            <ul className="socials-icons">
              <li>
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={x} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} alt="" />
                </a>
              </li>
            </ul>
          </d3v>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
