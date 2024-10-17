import "./ProductPricing.css";
import greyCheckIcon from "../../../../assets/icons/grey-check.png";
import checkIcon from "../../../../assets/svg/check.svg";
import dbIcon from "../../../../assets/svg/db.svg";
import orangePlaneUp from "../../../../assets/svg/orange-plane-up.svg";
import orangePlane from "../../../../assets/icons/orange-plane.png";
import blackDropLeft from "../../../../assets/svg/blackdrop-left.svg";
import blackDropBottom from "../../../../assets/svg/blackdrop-bottom.svg";
import serverIcon from "../../../../assets/svg/server.svg";
import getStarted from "../../../../assets/svg/get-started.svg";
import orangeMan from "../../../../assets/icons/orange-man.png";
import { useState } from "react";

const ProductPricing = () => {
  const [activeProductTab, setActiveProductTab] = useState(0);

  const projectPacked = [
    "Senior-level hands-on training",
    "Recruitment support phase",
    "On-the-job support",
    "Professional Certificate"
  ];

  const careerGrowthAccelerator = [
    "Hands-on professional training",
    "Mid-level hands-on training",
    "Recruitment support phase",
    "On-the-job support",
    "Professional Certificate",
    "Reference",
  ];

  const exceptionalCareerLauncher = [
    "Hands-on professional training",
    "Senior-level hands-on training",
    "Recruitment support phase",
    "On-the-job support",
    "Professional Certificate",
    "Reference",
  ];

  return (
    <section className="products-pricing">
      <div className="wrapper">
        <img src={dbIcon} className="db-icon" alt="" />
        <img src={serverIcon} className="server-icon" alt="" />
        <img src={blackDropLeft} className="blackdrop-left" alt="" />
        <img src={blackDropBottom} className="blackdrop-bottom" alt="" />
        <img className="orange-plane-up" src={orangePlaneUp} alt="" />
        <img className="orange-plane" src={orangePlane} alt="" />
        <div className="section-header__text">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Pricing</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>Products & Pricing</h1>
          <p className="project-pricing-more-desc">
            Get to unlimited knowledge and resources when you pay yearly and
            save on your preferred plan
          </p>
        </div>
        <div className="products-tab-switch">
          <div
            onClick={() => setActiveProductTab(0)}
            className={`product-tab ${activeProductTab === 0 ? "select" : ""} `}
          >
            <p>Monthly</p>
          </div>
          <div
            onClick={() => setActiveProductTab(1)}
            className={`product-tab ${activeProductTab === 1 ? "select" : ""} `}
          >
            <p>Annual</p>
            <div
              className={`save-some-price ${
                activeProductTab === 1 ? "select" : ""
              } `}
            >
              Save 20%
            </div>
          </div>
        </div>
        <div className="pricing-list-container">
          <div className="pricing-list">
            <div className="pricing-list-header">
              <h1>Growth</h1>

              <div className="pricing-popular">
                <p>Popular</p>
              </div>
            </div>

            <div className="price-description">
              <h1>$149</h1>
              <p>Per user/month, billed monthly</p>
            </div>

            <div className="end-results">
              <h4>For your career progression</h4>

              <div className="end-results-list">
                {careerGrowthAccelerator.map((item, index) => {
                  return (
                    <div key={index} className="end-result-list-item">
                      <img src={greyCheckIcon} alt="" />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <button>Get started on Growth</button>
          </div>

          <div className="pricing-list">
            <div className="pricing-list-header">
              <h1 className="ecl">Exceptional Career Launcher</h1>

              <div className="pricing-popular bc">
                <p>Best Choice</p>
              </div>
            </div>

            <div className="price-description">
              <h1>$269</h1>
              <p>Per contracted user/month, billed annually</p>
            </div>

            <div className="end-results">
              <h4>For your career progression</h4>

              <div className="end-results-list">
                {exceptionalCareerLauncher.map((item, index) => {
                  return (
                    <div key={index} className="end-result-list-item">
                      <img src={greyCheckIcon} alt="" />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <button>Get started on ECL</button>
          </div>

          <div className="pricing-list odd">
            <div className="pricing-list-header">
              <h1>Project Packed</h1>
              <div className="pricing-popular pp">
                <p>Project/Experience</p>
              </div>
            </div>

            <div className="product-description">
              <p>Per user/month, billed annually</p>
              <h4>Get job ready with us</h4>
              {projectPacked.map((listItem, index) => {
                return (
                  <div key={index} className="end-result-list-item">
                    <img src={checkIcon} alt="" />
                    <p>{listItem}</p>
                  </div>
                );
              })}
            </div>

            <div className="growth-project-pack">
              <div className="product-descc">
                <h3>Growth project Pack</h3>

                <h1>$299</h1>
              </div>
              <div className="growth-project-pack-white">
                <h3>Growth - Project Packed</h3>
              </div>
            </div>

            <div className="white-line"></div>

            <div className="growth-project-pack">
              <div className="product-descc">
                <h3>Exceptional Career Launcher</h3>

                <h1>$329</h1>
              </div>
              <div className="growth-project-pack-white">
                <h3>ECL - Project Packed</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={orangeMan} className="orange-man" alt="" />
      <img src={getStarted} className="get-started" alt="" />
    </section>
  );
};
export default ProductPricing;
