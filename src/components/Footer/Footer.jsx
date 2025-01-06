import "./Footer.css";
import logo from "../../assets/logo/logo-white.png";
import facebook from "../../assets/social/facebook.svg";
import instagram from "../../assets/social/instagram.svg";
// import x from "../../assets/social/x.svg";
// import youtube from "../../assets/social/youtube.svg";
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
            <img
              src={logo}
              className="footer-logo"
              alt="Empowering professionals with tailored career pathways, expert guidance, and actionable resources. Achieve your goals with Stackwisr's innovative programs."
            />
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
              <a href="/about-us">
                <li>About</li>
              </a>
              <a href="/testimonies">
                <li>Success</li>
              </a>
              <a href="/careerpaths">
                <li>Products</li>
              </a>
              <a href="/blog">
                <li>Blog</li>
              </a>
            </ul>
          </div>
          <div className="col col-3">
            <h3>Legal</h3>
            <ul className="footer-items">
              <a href="/cookie-policy">
                <li>Cookie Policy</li>
              </a>
              <a href="/privacy-policy">
                <li>Privacy</li>
              </a>
              <a href="/terms-of-service">
                <li>Terms of Service</li>
              </a>
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
            <p>All Right Reserved &copy; 2024</p>&nbsp;
            <a href="https://www.stackwisr.co.uk">
              <span className="footer-link">www.stackwisr.co.uk</span>
            </a>
          </div>
          <div className="right-section">
            <ul className="socials-icons">
              <li>
                <NavLink to="https://www.instagram.com/stackwisr?igsh=M2JteDBuY3k3cTh6">
                  <img src={instagram} alt="Stackwisr Instagram" />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.facebook.com/StackwisR">
                  <img src={facebook} alt="Stackwisr Facebook" />
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="#">
                  <img src={x} alt="" />
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to="#">
                  <img src={youtube} alt="" />
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
