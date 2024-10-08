import "./CareerDetailHero.css";
import careerDetailHero from "../../../../assets/images/career-detail-hero.jpg";
import nanoFrame from "../../../../assets/svg/nano.svg";
import blueIcon from "../../../../assets/svg/blue-icon.svg";
import ratingIcon from "../../../../assets/svg/rating.svg";
import langIcon from "../../../../assets/svg/lang.svg";

const CareerDetailHero = () => {
  return (
    <section className="career-detail-hero">
      <div className="wrapper">
        <div className="left-section">
          <h1>IT Business Analyst</h1>
          <p className="career-path-intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            soluta modi, architecto quas amet natus fugit! Atque sapiente illo
            sint voluptates voluptatibus! Explicabo corrupti, cum minus ad natus
            autem deleniti.
          </p>

          <div className="action-btns">
            <button className="enroll-now">Enroll Now</button>
            <button className="consultant">Book a Consultant</button>
          </div>

          <div className="career-students-details">
            <div className="left-section">
              <h1>20+</h1>
              <p>Students have enrolled to this programme</p>
            </div>
            <div className="right-section">
              <h1>4K+</h1>
              <p>Students have completed this programme and are certified</p>
            </div>
          </div>

          <div className="start-active">
            <div className="start-date">
              <img src={blueIcon} className="start-icon" alt="" />
              <p>Starts - Sept 29, 2024</p>
            </div>
            <div className="active">Active</div>
          </div>
        </div>
        <div className="right-section">
          <img src={careerDetailHero} className="career-hero-img" alt="" />
          <div className="dark-shade">
            <div className="course-detail-banner">
              <img className="nano-description" src={nanoFrame} alt="" />
              <div className="career-rating-lang">
                <div className="career-rating">
                  <img src={ratingIcon} alt="" />
                  <h2>4.9</h2>
                </div>
                <div className="career-lang">
                  <img src={langIcon} alt="" />
                  <h2>ENG</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CareerDetailHero;
