import "./ProjectPack.css";
import twoStroke from "../../../assets/svg/two-stroke.svg";
import orangeAngleTop from "../../../assets/svg/orange-angle-top.svg";
import orangeAngleBottom from "../../../assets/svg/orange-angle-bottom.svg";
import buttonCircle from "../../../assets/svg/button-circle.svg";

const ProjectPack = () => {
  return (
    <section className="project-pack">
      <div className="wrapper">
        <img src={twoStroke} alt="" className="two-stroke" />
        <h2 className="title">Project-Pack Plan</h2>

        <div className="project-pack-explained">
          {/* left */}
          <div className="project-pack-ready">
            <div className="project-pack-text-desc">
              <img className="angle-top" src={orangeAngleTop} alt="" />
              <h1>Are you interested in hands-on experience and projects?</h1>
              <img className="angle-bottom" src={orangeAngleBottom} alt="" />
            </div>
            <div className="action-item-desc">
              <div className="action-item">
                <h4>Project-based Learning</h4>
              </div>
              <div className="action-item">
                <h4>Job-ready experience</h4>
              </div>
            </div>
          </div>
          {/* left */}

          {/* right */}
          <div className="project-pack-maximize">
            <h2>Maximize the value of your knowledge</h2>
            <p>Increase your relevance to employers with valued experience</p>
            {/* <button className="action-item-btn">
              <img src={buttonCircle} alt="" />
              CLICK TO BEGIN
            </button> */}
          </div>
          {/* right */}
        </div>
      </div>
    </section>
  );
};
export default ProjectPack;
