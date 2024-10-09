import './CareerpathHero.css'
import groupCareerpaths from "../../../../assets/images/group-careerpath.png";

const CareerpathHero = () => {
  return (
    <section className="careerpaths">
        <div className="wrapper">
          <div className="career-paths-title">
            <h1>CAREER <br/>&nbsp;&nbsp;&nbsp;PATHS</h1>
          </div>
          <p>
            Our flexible programs are designed to fit your work schedule and
            provide you with the skills needed to excel in today&apos;s job
            market.
          </p>
          <div className="action-btns">
            <button className="get-started">Get Started</button>
          </div>
          <img src={groupCareerpaths} alt="" />
        </div>
      </section>
  )
}
export default CareerpathHero