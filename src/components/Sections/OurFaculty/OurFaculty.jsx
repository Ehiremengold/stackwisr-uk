import "./OurFaculty.css";
import groupImage from "../../../assets/images/about-us.png";

const OurFaculty = () => {
  return (
    <section className="ourFaculty">
      <div className="wrapper">
        <div className="section_header__text">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Our Faculty</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>From across the world</h1>
          <p>
            At StackwisR, we embrace the information age with solutions to help
            you build and thrive in the ever-expanding tech industry.
          </p>
        </div>
        <img src={groupImage} className="group-img" alt="" />
      </div>
    </section>
  );
};
export default OurFaculty;
