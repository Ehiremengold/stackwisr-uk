import "./CareerDetailHero.css";
import careerDetailHero from "../../../../assets/images/career-detail-hero.jpg";
import nanoFrame from "../../../../assets/svg/nano.svg";
import blueIcon from "../../../../assets/svg/blue-icon.svg";
import ratingIcon from "../../../../assets/svg/rating.svg";
import langIcon from "../../../../assets/svg/lang.svg";
import { calendly_URL, ROOT_URL } from "../../../../utils";

const CareerDetailHero = ({
  career_name,
  description,
  rating,
  img_display,
}) => {
  return (
    <section className="career-detail-hero">
      <div className="wrapper">
        <div className="left-section">
          <h1>{career_name}</h1>
          <p className="career-path-intro">{description}</p>

          <div className="action-btns">
            <button
              onClick={() => {
                document.getElementById("products-pricing").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="enroll-now js-enroll-now"
            >
              Enroll Now
            </button>
            <a href={calendly_URL} target="_blank" rel="noopener noreferrer">
              <button className="consultant">Book a Career Consultant</button>
            </a>
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
            <div className="active">
              Starting from <span>£149</span>
            </div>
            <div className="start-date">
              <img src={blueIcon} className="start-icon" alt="" />
              <p>Starts - Sept 29, 2024</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img
            src={ROOT_URL + img_display}
            className="career-hero-img"
            alt=""
          />
          <div className="dark-shade">
            <div className="course-detail-banner">
              {/* <img className="nano-description" src={nanoFrame} alt="" /> */}
              <div className="career-rating-lang">
                <div className="career-rating">
                  <img src={ratingIcon} alt="" />
                  <h2>{rating}</h2>
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
