import "./Hero.css";
import heroUser from "../../assets/images/heroo.png";
import descImg from "../../assets/svg/top.svg";
import arrowImg from "../../assets/icons/arrow.png";
import planeImg from "../../assets/icons/plane.svg";
import bookmarkPng from "../../assets/icons/bookmark.png";
import starPng from "../../assets/icons/star.png";
import userPng from "../../assets/icons/user.png";

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
          <img className="hero-plane-img" src={planeImg} alt="hero-plane-icon" />
          <div className="hero-text-container">
            <div className="desc-container">
              <img src={descImg} className="desc-img " alt="desc-icon" />
              <img src={arrowImg} className="desc-img arrow" alt="arrow-icon" />
            </div>

            <div className="hero-text__container">
              <h1>Welcome to StackwisR</h1>
              <p>
                Secure your future with job-specific skills tailored for fields
                in the digital economy. We offer on-demand career programs
                designed to prepare you for pivotal career moments
              </p>
            </div>

            <div className="we-offer-button-like">
              <div className="button-like">
                <img src={userPng} alt="user-icon" />
                <p>2000+ Learners</p>
              </div>
              <div className="button-like">
                <img src={bookmarkPng} alt="bookmark-icon" />
                <p>80% Completion</p>
              </div>
              <div className="button-like">
                <img src={starPng} alt="star-icon" />
                <p>4.7+ Rating</p>
              </div>
            </div>

            <div className="action-btns">
              {/* <a href="/careerpaths">
                <button>Get Started</button>
              </a> */}
              <a href="/about-us">
                <button className="learn-more-btn">Learn more</button>
              </a>
            </div>
          </div>
          <div className="hero-img-container">
            <img src={heroUser} alt="hero-user-icon" />
            <div className="blue-container-blur"></div>
          </div>
        </div>
      </span>
    </section>
  );
};
export default Hero;
