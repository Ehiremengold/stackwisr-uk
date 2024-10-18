import "./AboutHero.css";
import groupImage from "../../../../assets/images/about-us.png";
import rectImage from "../../../../assets/svg/rect.svg";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="wrapper">
        <div className="about-hero__main">
          <h1>We&apos;re changing the whole game in Career Development</h1>
          {/* <div className="action-btns">
            <button>Get Started</button>
            <button>Learn About Us</button>
          </div> */}
        </div>
        <img src={groupImage} className="group-img" alt="" />

        <div className="about-hero__desc">
          <div className="about-hero__desc-left">
            <div className="about-hero__desc-left-top">
              <h4>About Stackwisr</h4>
              <div className="desc-bar"></div>
            </div>

            <h1>About Us</h1>
          </div>
          <div className="about-hero__desc-right">
            <p>
              Our belief is “Knowledge is Power”. Knowledge and insight can
              change lives, transform careers, and drive profitable and
              sustainable businesses.
            </p>
          </div>
        </div>
      </div>
      <img className="our-vision-grid" src={rectImage} alt="" />
    </section>
  );
};
export default AboutHero;
