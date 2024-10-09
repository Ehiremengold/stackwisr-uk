import "./GrowWithStackwisr.css"
import stackwisrProg from "../../../../assets/images/stackwisrprog.png";
import blueDot from "../../../../assets/icons/blue-dot.png";

const GrowWithStackwisr = () => {
  return (
    <section className="grow-with-stackwisr">
        <div className="grow-with-header">
          <div className="grow-with-top">
            <h4>Grow with Stackwisr</h4>
            <div className="desc-bar"></div>
          </div>
          <h1>StackwisR Programmes</h1>
          <p>
            We provide a structured learning paths designed to take you from
            beginner to advanced. Whether you&apos;re just starting out or are a
            seasoned professional looking to up skill, StackwisR offers a clear
            progression in your learning journey
          </p>
        </div>

        <img src={stackwisrProg} className="stackwisr-prog-img" alt="" />

        <div className="program-cards-grid">
          <div className="program-cards-grid-1">
            <div className="program-card-item">
              <img src={blueDot} alt="" />
              <p>Flexible Learning</p>
            </div>
            <div className="program-card-item">
              <img src={blueDot} alt="" />
              <p>Expert-led Training</p>
            </div>
            <div className="program-card-item">
              <img src={blueDot} alt="" />
              <p>Future-Proofed Curriculum</p>
            </div>
            <div className="program-card-item">
              <img src={blueDot} alt="" />
              <p>Support Session with Experts</p>
            </div>
          </div>

          <div className="program-cards-grid-2">
            <div className="program-card-item">
              <img src={blueDot} alt="" />
              <p>Holistic Talent Development</p>
            </div>
            <div className="program-card-item item-6">
              <img src={blueDot} alt="" />
              <p>Comprehensive Learning Paths</p>
            </div>
          </div>
        </div>

        <button className="explore-courses">Explore Courses</button>
      </section>
  )
}
export default GrowWithStackwisr