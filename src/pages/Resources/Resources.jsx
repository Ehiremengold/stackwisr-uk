import "./Resources.css";
import ResourcesHero from "./components/ResourcesHero/ResourcesHero.jsx";
import pinkBg from "../../assets/svg/pinkbg.svg";

const Resources = () => {
  return (
    <>
      <ResourcesHero />
      <section className="resources-body">
        <img src={pinkBg} className="pink-bg" alt="" />
        <div className="wrapper">
          
          <div className="our-resources-title">
            <div className="blue-title">
              <div className="desc-bar"></div>
              <h4>Resources</h4>
              <div className="desc-bar"></div>
            </div>
            <h1>Our Resources</h1>
          </div>

        </div>
      </section>
    </>
  );
};
export default Resources;
