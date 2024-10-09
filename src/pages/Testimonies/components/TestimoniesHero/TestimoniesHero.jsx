import "./TestimoniesHero.css";
import testifiersImg from "../../../../assets/images/testifiers.png";

const TestimoniesHero = () => {
  return (
    <section className="testimonies-hero">
      <div className="wrapper">
        <div className="stories-more-title">
          <h1>
            DELEGATE
            <br />
            &nbsp;&nbsp;&nbsp;STORIES
          </h1>
        </div>
        <p>Checkout some of the real stories that define StackwisR</p>
        <img src={testifiersImg} alt="" />
      </div>
    </section>
  );
};
export default TestimoniesHero;
