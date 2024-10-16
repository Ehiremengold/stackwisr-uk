import "./Futureproof.css";
import topDrop from "../../../assets/svg/top-drop.svg";
import bottomDrop from "../../../assets/svg/bottom-drop.svg";
import future from "../../../assets/svg/future.svg";
import futureDesc from "../../../assets/svg/future-desc.svg";
import line from "../../../assets/svg/Line.svg";
import straightPlane from "../../../assets/svg/straight-plane.svg";

const Futureproof = () => {
  return (
    <section className="future-proof">
      <div className="wrapper">
        <img src={topDrop} className="white-spill top" alt="" />
        <img src={bottomDrop} className="white-spill" alt="" />
        <div className="future-proof__content">
          <div className="future-proof__img">
            <img src={future} alt="" />
          </div>
          <div className="future-proof__text">
            <img src={straightPlane} className="straight-plane" alt="" />
            <img src={futureDesc} className="future-desc-img" alt="" />
            <h2>Your Journey to a Leading Tech Role Begins Here</h2>
            <p className="future-main-desc">
              Our programs equip you with the skills, knowledge, and confidence
              needed to succeed when opportunities arise, ensuring you're ready
              to seize the moment and advance your professional journey.
            </p>
            <img className="line-divider" src={line} alt="" />
            <div className="job-fields">
              <div className="field">Engineering</div>
              <div className="field">AI</div>
              <div className="field">Analysis</div>
              <div className="field">IT</div>
              <div className="field">Security</div>
              <div className="field">Analytics</div>
              <div className="field">Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Futureproof;
