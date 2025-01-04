import companyIcons from "../../../assets/company-icons/bullet.js";
import "./AssociatedCompanies.css";

const AssociatedCompanies = () => {
  return (
    <div className="associated-companies">
      <div className="wrapper">
        <div className="section-header__text">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Associated companies</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>Our Graduates</h1>
          <h3>
            Our programs are designed not only to equip you with new skills but
            to launch our graduates into fulfilling and well-paid careers.
          </h3>
        </div>
      </div>
      <div className="slider">
        <div className="slide-track">
          {companyIcons.map((icon, index) => (
            <div key={index} className="slide">
              <img src={icon} className="company-icon" alt="" />
            </div>
          ))}
          {companyIcons.map((icon, index) => (
            <div key={index} className="slide">
              <img src={icon} className="company-icon" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AssociatedCompanies;
