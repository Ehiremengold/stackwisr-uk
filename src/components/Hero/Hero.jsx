import "./Hero.css";
import heroUser from "../../assets/images/heroo.png";
import descImg from "../../assets/svg/top.svg";
import arrowImg from "../../assets/icons/arrow.png";
import planeImg from "../../assets/icons/plane.svg";
import { NavLink } from "react-router-dom";

const Hero = ({ heroRef, heroIsInView }) => {
  return (
    <section className="hero" ref={heroRef}>
      <span
        style={{
          transform: heroIsInView ? "none" : "translateX(-200px)",
          opacity: heroIsInView ? 1 : 0,
          transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="wrapper">
          <img className="hero-plane-img" src={planeImg} alt="" />
          <div className="hero-text-container">
            <div className="desc-container">
              <img src={descImg} className="desc-img " alt="" />
              <img src={arrowImg} className="desc-img arrow" alt="" />
            </div>

            <div className="hero-text__container">
              <h1>
                Launch your career with a Professional Certificate from
                StackwisR
              </h1>
              <p>
                We offer on-demand career programs designed to prepare you for
                pivotal career moments
              </p>
            </div>

            <div className="action-btns">
              <a href="/careerpaths">
                <button>Get Started</button>
              </a>
              <a href="/about-us">
                <button className="learn-more-btn">Learn more</button>
              </a>
            </div>
          </div>
          <div className="hero-img-container">
            <img src={heroUser} alt="" />
            <div className="blue-container-blur"></div>
          </div>
        </div>
      </span>
    </section>
  );
};
export default Hero;
