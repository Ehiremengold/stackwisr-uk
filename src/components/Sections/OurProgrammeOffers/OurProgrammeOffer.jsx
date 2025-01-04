import "./OurProgrammeOffer.css";
import { programmeOffering } from "./bullet";

const OurProgrammeOffer = () => {
  return (
    <div className="our-programme-offer-container">
      <div className="wrapper">
        <h1>Our Programme Offers</h1>
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
