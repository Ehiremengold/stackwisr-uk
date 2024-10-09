import './Recruitment.css'
import blackDude from "../../../../assets/images/black-dude.png";
import roadMap from "../../../../assets/images/roadmap.png";
import rocket from "../../../../assets/images/rocket.png";
import recruitImg from "../../../../assets/images/recruit-img.png";

const Recruitment = () => {
  return (
    <section className="how-you-get-the-job">
      <img src={rocket} className="rocket-img" alt="" />
      <div className="wrapper">
        <div className="the-journey">
          <img src={blackDude} className="blackdude" alt="" />

          <div className="the-journey-right">
            <div className="the-journey-top">
              <div className="desc-bar"></div>
              <h5>The Journey</h5>
              <div className="desc-bar-none"></div>
            </div>
            <h1>How You Get The Job</h1>
            <p>
              <span className="at-stackwisr">
                At StackwisR, we&apos;re not just offering training
              </span>
              {/* <br /> */}
              &nbsp;we&apos;re your career partner, guiding you from interviews
              and job tests to career growth and promotions. Wherever your
              career takes you, we&apos;re with you every step of the way
            </p>
          </div>
        </div>
        <img src={roadMap} className="road-map" alt="" />
      </div>
      <div className="recruitment-box">
        <img src={recruitImg} alt="" />
        <div className="recruitment-text">
          <h1>RECRUITMENT</h1>
          <p>
            As you advance along your career journey, it’s time to initiate the
            recruitment phase. At this stage, you will already be well-prepared
            for the job market, possessing the skills and confidence necessary
            to excel in interviews. Your thorough preparation will enable you to
            navigate the interview process with ease, showcasing your
            qualifications and strengths effectively. This readiness will
            significantly enhance your chances of landing desirable roles that
            align with your career aspirations, setting you on a path toward
            continued professional growth and success.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Recruitment;
