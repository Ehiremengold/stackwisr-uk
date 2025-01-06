import "./OurProgrammeOffer.css";
import { programmeOffering } from "./bullet";

const OurProgrammeOffer = () => {
  return (
    <div className="our-programme-offer-container">
      <div className="wrapper">
        <div className="section-header__text">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Our Program</h4>
            <div className="desc-bar"></div>
          </div>
        </div>
        <h1>Program Offering</h1>
        <p>
          Our programs provide tailored learning paths to help you achieve your
          career goals, offering expert guidance and practical skills to
          succeed.
        </p>
        <div className="our-programme-offer-content">
          {programmeOffering.map((item, index) => {
            return (
              <div className="programme-offering" key={index}>
                <div className="offering-img-container">
                  <img src={item.img} alt="" />
                </div>
                <hr />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OurProgrammeOffer;
