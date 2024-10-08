import "./Hero.css";
import heroUser from "../../assets/images/hero.png";
import descImg from "../../assets/images/top.svg";
import arrowImg from "../../assets/icons/arrow.png";
import planeImg from "../../assets/icons/plane.svg";
import nanoFrame from "../../assets/svg/nano.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero-content">
          <div className="hero-content__text">
            <img src={descImg} className="desc-img" alt="" />
            <img src={arrowImg} className="desc-img arrow" alt="" />
            <h1>Redefine Possibilities with StackwisR</h1>
            <p>
              Future-proof your career with our AI-driven training and career
              development
            </p>
            <div className="action-btns">
              <button>Get Started</button>
              <button>Learn more</button>
            </div>
          </div>
          <img src={nanoFrame} className="nano-description" alt="" />

          <div className="hero-content__img">
            <img src={heroUser} alt="" />
            <img className="img-desc" src={planeImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
