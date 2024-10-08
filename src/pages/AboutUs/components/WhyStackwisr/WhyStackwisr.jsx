import "./WhyStackwisr.css";
import whyImage from "../../../../assets/images/why.png";
import stackwisrCardBg from "../../../../assets/svg/back-blue.svg";
import expertLed from "../../../../assets/images/expert.png";
import payment from "../../../../assets/images/payment.png";
import proven from "../../../../assets/images/proven.png";

const WhyStackwisr = () => {
  return (
    <section className="why-stackwisr">
      <div className="wrapper">
        <div className="why-stackwisr-title">
          <div className="line-bar"></div>
          <div className="why-stackwisr-title-texts">
            <h1>Why StackwisR?</h1>
            <h4>How we differ</h4>
          </div>
        </div>

        <div className="why-stackwisr-container">
          <div className="why-stackwisr-left">
            <img src={whyImage} alt="" />
          </div>

          <div className="why-stackwisr-right">
            <div className="left-cards">
              <div className="why-stackwisr-card">
                <img
                  src={stackwisrCardBg}
                  alt=""
                  className="why-stackwisr-card-bg"
                />
                <img src={expertLed} alt="" className="desc-icon" />
                <h4>Expert-Led Training</h4>
                <p>
                  At StackwisR, we offer training led by industry veterans and
                  provide real-world projects to ensure you gain the practical
                  skills that employers demand. Our programs include one-on-one
                  expert mentorship and continuous on-the-job support to help
                  you thrive in your new career.
                </p>
              </div>
              <div className="why-stackwisr-card col-2">
                <img
                  src={stackwisrCardBg}
                  alt=""
                  className="why-stackwisr-card-bg"
                />
                <img src={payment} alt="" className="desc-icon" />
                <h4>Flexible Payment and Support</h4>
                <p>
                  We understand that financial flexibility is crucial, which is
                  why we offer instalment payment plans. Our support doesn’t end
                  at training; we provide continuous guidance and job placement
                  assistance to ensure your success.
                </p>
              </div>
            </div>

            <div className="right-cards">
              <div className="why-stackwisr-card">
                <img
                  src={stackwisrCardBg}
                  alt=""
                  className="why-stackwisr-card-bg"
                />
                <img src={proven} alt="" className="desc-icon" />
                <h4>Proven Track Record</h4>
                <p>
                  Our results speak for themselves with over 2000+ professionals
                  developed, 500+ businesses benefited, and a 4.7+ customer
                  satisfaction score. Our programs boast a 98% job placement
                  rate, ensuring that our delegates not only learn but also
                  secure employment in their desired fields
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyStackwisr;
