// import pinkBg from "../../../assets/svg/pinkbg.svg";
import testimonyBanner from "../../../assets/svg/real-story.svg";
// import testifier from "../../../assets/images/testifier.jpg";
// import testifier2 from "../../../assets/images/testifier2.png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonials">
      {/* <img src={pinkBg} className="testimonials-bg" alt="" /> */}
      <div className="wrapper">
        <div className="section-text__header">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Some Testimonies</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>Testimonial</h1>
          <p>Let your success and journey be written in stones</p>
        </div>

        <div className="frame-wrapper">
          <iframe
            loading="lazy"
            width={500}
            height={300}
            allowfullscreen="allowfullscreen"
            src="//www.youtube.com/embed/E-NKSnqU0Oc?rel=0&amp;autoplay=0&amp;controls=0"
          ></iframe>
        </div>

        <a href="/testimonies">
          <h3>See more &rarr;</h3>
        </a>
      </div>
    </section>
  );
};
export default Testimonial;
