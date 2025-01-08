// import pinkBg from "../../../assets/svg/pinkbg.svg";
import testimonyBanner from "../../../assets/svg/real-story.svg";
// import testifier from "../../../assets/images/testifier.jpg";
// import testifier2 from "../../../assets/images/testifier2.png";
import "./Testimonial.css";
import { testimonies } from "./staticTestimonies";
import stackwisrLogo from "../../../assets/logo/Ellipse.svg";
const Testimonial = () => {
  return (
    <section className="testimonials">
      {/* <img src={pinkBg} className="testimonials-bg" alt="" /> */}
      <div className="wrapper">
        {/* <div className="section-text__header">
          <div className="main-desc">
            <div className="desc-bar"></div>
            <h4>Some Testimonies</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>Testimonial</h1>
          <p>Let your success and journey be written in stones</p>
        </div> */}

        <div className="testimonial-body-grid">
          <div className="testimonial-grid-boxx">
            <h1>Our Testimonial</h1>
            <p>
              We have trained close to 3,000 delegates from across the world and
              have received great testimonial about their success story.
            </p>
          </div>

          <div className="frame-wrapper">
            <iframe
              loading="lazy"
              width={350}
              height={300}
              allowfullscreen="allowfullscreen"
              src="//www.youtube.com/embed/E-NKSnqU0Oc?rel=0&amp;autoplay=0&amp;controls=0"
            ></iframe>
          </div>

          {testimonies.map(({ name, jobTitle, testimony }, index) => {
            return (
              <div className="box-replica testimonial-grid-boxx" key={index}>
                <img
                  src={stackwisrLogo}
                  alt="stackwisr logo"
                  className="logo"
                />
                <h2>{name}</h2>
                <h5 style={{fontWeight:600}}>{jobTitle}</h5>
                <h5>{testimony}</h5>
              </div>
            );
          })}
        </div>

        {/* <a href="/testimonies">
          <h3>See more &rarr;</h3>
        </a> */}
      </div>
    </section>
  );
};
export default Testimonial;
