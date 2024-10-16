import "./Footer.css";
import logo from "../../assets/logo/logo-white.png";
import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
import x from "../../assets/social/x.svg";
import youtube from "../../assets/social/youtube.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  // Access career paths from the Redux store
  const careerPathsStore = useSelector((store) => store.careerpath);

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
              {careerPathsStore.careerpaths.map((careerpath) => {
                const { id, career_name } = careerpath;
                return <li key={id}>{career_name}</li>;
              })}
              {/* <li>IT Business Analyst</li>
              <li>Data Engineer</li>
              <li>Data Analytics Engineer</li>
              <li>Data Science AI</li> */}
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
            <NavLink
              target="_blank"
              to="https://calendly.com/stackwisr/request-a-call-with-us"
            >
              <button>Book Call</button>
            </NavLink>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-section">
            <p>All Right Reserved &copy; 2024</p>
            <NavLink to="https://www.stackwisr.co.uk">
              <span className="footer-link"> www.stackwisr.co.uk</span>
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
