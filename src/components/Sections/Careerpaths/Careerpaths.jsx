import "./Careerpaths.css";
import greyPlane from "../../../assets/svg/grey-plane.svg";
import greyPlaneDown from "../../../assets/svg/grey-plane-down.svg";
import careerpathBg from "../../../assets/images/careerpathBg.png";

const Careerpaths = () => {
  return (
    <section className="career-paths">
      <div className="wrapper">
        <img src={greyPlane} className="section-plane-2" alt="" />
        <img src={greyPlaneDown} className="section-plane" alt="" />
        <div className="section-header__text">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Career Paths</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>Explore Our Career Paths</h1>
          <h3>
            Unlock new career opportunities in the most in-demand fields with
            our expert-led programs
          </h3>
        </div>
        <div className="career-paths__cards">
          <div className="career-paths__card">
            <img src={careerpathBg} alt="" />
            <h3>Data Analytics</h3>
            <p>
              The Data Analytics Engineer career path prepares you to design,
              build, and manage data...
            </p>
            <button className="more-btn">Learn more</button>
          </div>
          <div className="career-paths__card">
            <img src={careerpathBg} alt="" />
            <h3>Cybersecurity</h3>
            <p>Cybersecurity Engineer career path prepares you to design,
            build, and manage data...</p>
            <button className="more-btn">Learn more</button>
          </div>
          <div className="career-paths__card">
            <img src={careerpathBg} alt="" />
            <h3>AI Engineer</h3>
            <p>AI Engineer career path prepares you to design,
            build, and manage data...</p>
            <button className="more-btn">Learn more</button>
          </div>
          <div className="career-paths__card">
            <img src={careerpathBg} alt="" />
            <h3>IT Business Analyst</h3>
            <p>
              The IT Business Analyst career path prepares you to bridge the gap
              between business needs...
            </p>

            <button className="more-btn">Learn more</button>
          </div>
          {/* <div className="career-paths__card">
            <img src={careerpathBg} alt="" />
            <h3>Fullstack Developer</h3>
            <p>Fullstack Developer career path prepares you to design,
            build, and manage data...</p>
            <button className="more-btn">Learn more</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Careerpaths;
