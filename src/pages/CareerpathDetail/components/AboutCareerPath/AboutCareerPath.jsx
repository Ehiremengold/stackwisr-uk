import "./AboutCareerPath.css";

import greyPlaneDown from "../../../../assets/svg/grey-plane-down.svg";
import greyPlaneUp from "../../../../assets/svg/grey-plane-up.svg";
import check from "../../../../assets/svg/check.svg";
import learnImg from "../../../../assets/images/learn.avif";
import handsOn from "../../../../assets/svg/hands-on.svg";
import liveClasses from "../../../../assets/svg/live-classes.svg";
import resources from "../../../../assets/svg/resources.svg";
import training from "../../../../assets/svg/training-icon.svg";
import opaqueCircles from "../../../../assets/svg/opaque-circles.svg";

const AboutCareerPath = ({ wyl = [], pj = [], sywg = [], description }) => {
  return (
    <section className="about-career-path">
      <img src={opaqueCircles} className="opaque-circles" alt="" />
      <div className="wrapper">
        <img src={greyPlaneDown} className="program-plane" alt="" />
        <img src={greyPlaneUp} className="programme-plane" alt="" />
        <div className="section-header__text">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>About the Programme</h4>
            <div className="desc-bar"></div>
          </div>
        </div>
        <div className="programme-body">
          <div className="programme-left-section">
            <div className="learn-image-container">
              <img src={learnImg} alt="Student Learning" />
            </div>
            <div className="programme-desc">
              <p>{description}</p>
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                reiciendis nulla. Debitis assumenda hic minus veritatis, quaerat
                eaque cupiditate. Harum nemo corrupti repellat voluptatem
                inventore aliquid totam, numquam iure assumenda!
              </p> */}
            </div>
            <div className="skills-n-potentials">
              <div className="skills">
                <h4>Skills you&apos;ll gain</h4>
                <div className="job-fields">
                  {sywg.map((sy, index) => {
                    return (
                      <div key={index} className="field">
                        {sy}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="potentials">
                <h4 className="field">
                  Potential Jobs available after completion
                </h4>
                <div className="job-fields">
                  {pj.map((item, index) => {
                    return (
                      <div key={index} className="field">
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="programme-right-section">
            <div className="why-choose-grid">
              <div className="why-choose-box">
                <img src={handsOn} alt="" />
                <h3>70% Hands-on Projects</h3>
                <p className="box-subtitle">
                  Our programs feature 70% hands-on projects, allowing you to
                  apply your learning directly to real-world scenarios.
                </p>
              </div>
              <div className="why-choose-box">
                <img src={training} alt="" />
                <h3>30% Training</h3>
                <p className="box-subtitle">
                  Our hands-on training focuses on practical learning, allowing
                  you to apply concepts through real-world projects.
                </p>
              </div>
              <div className="why-choose-box">
                <img src={resources} alt="" />
                <h3>Access to Resources</h3>
                <p className="box-subtitle">
                  We provide the tools and information needed for growth and
                  success, whether in education, career development, or
                  problem-solving.
                </p>
              </div>
              <div className="why-choose-box">
                <img src={liveClasses} alt="" />
                <h3>Live Classes</h3>
                <p className="box-subtitle">
                  Live Classes provide an interactive learning experience,
                  allowing real-time engagement with instructors and peers.
                </p>
              </div>
            </div>

            <div className="what-you-learn">
              <h1>What You&apos;ll Learn</h1>
              <div className="what-you-learn-col">
                {wyl.map((wy, index) => {
                  return (
                    <div key={index} className="what-you-learn-item">
                      <img src={check} alt="" />
                      <p>{wy}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutCareerPath;
