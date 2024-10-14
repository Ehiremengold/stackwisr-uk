import "./CallToAction.css"
import getStarted from "../../../assets/svg/get-started.svg";
import orangeMan from "../../../assets/icons/orange-man.png";
import orangePlane from "../../../assets/icons/orange-plane.png";
import topDrop from "../../../assets/svg/top-drop.svg";
// import ctaBackdrop from "../../assets/svg/cta-backdrop.svg";
import { NavLink } from "react-router-dom";
const CallToAction = () => {
  return (
    <section className="call-to-action">
        <img src={getStarted} className="get-started" alt="" />
        <img src={topDrop} className="cta-top-drop" alt="" />
        <img src={orangeMan} className="orange-man" alt="" />
        <img src={orangePlane} className="orange-plane" alt="" />
        {/* <img src={ctaBackdrop} className="cta-backdrop" alt="" /> */}
        <div className="wrapper">
          <div className="cta__section_content">
            <div className="text-section">
              <h2>Speak with our career consultant</h2>
              <p>Secure your spot now! Seats are filling up fast.</p>
            </div>
            <div className="form-section">
              <form action="">
                <div className="name">
                  <input type="text" placeholder="Firstname" />
                  <input type="text" placeholder="Lastname" />
                </div>
                <input type="text" placeholder="Email" />
                <select name="Country" id="" placeholder="Choose a Country">
                  <option>-- Select a Country --</option>
                  {/* {countries.map((country, index) => (
                    <option key={index} value={`${country}`}>
                      {country}
                    </option>
                  ))} */}
                </select>
                <input type="text" placeholder="Phone" />
              </form>
              <NavLink to="tel:+2348009078235">
                <div className="cta-btn">BOOK A CALL</div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
  )
}
export default CallToAction