import "./CareerpathHero.css";
import careerPathsHero from "../../../../assets/images/careerpathshero.png";

const CareerpathHero = () => {
  // all-paths-with-bg
  const handleScroll = () => {
    document.getElementById("all-paths-with-bg").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="careerpaths">
      <div className="wrapper">
        <div className="career-paths-title">
          <h1>
            CAREER <br />
            &nbsp;&nbsp;&nbsp;PATHS
          </h1>
        </div>
        <p>
          Our flexible programs are designed to fit your work schedule and
          provide you with the skills needed to excel in today&apos;s job
          market.
        </p>
        <div className="action-btns">
          <button className="get-started" onClick={handleScroll}>
            Get Started
          </button>
        </div>
        <img src={careerPathsHero} alt="" />
      </div>
    </section>
  );
};
export default CareerpathHero;
