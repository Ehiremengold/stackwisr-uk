import "./GirlGetStarted.css";
import getStarted from "../../../../assets/svg/get-started.svg";
import girlGetStarted from "../../../../assets/images/girl-get-started.png";

const GirlGetStarted = () => {
  return (
    <>
      <section className="call-to-action girl-get-started">
        <img src={girlGetStarted} className="girl-started" alt="" />
        <img src={getStarted} className="get-started" alt="" />
      </section>
    </>
  );
};
export default GirlGetStarted;
