import "./EnrollForm.css";
import cancelIcon from "../../../../assets/svg/cancel.svg";
import { useSelector } from "react-redux";

const EnrollForm = ({ enrollNow, career_name }) => {
  const { countries, isError } = useSelector((store) => store.countries);

  return (
    <div className="grey-shade js-grey-shade">
      <div className="enroll-form-container">
        <div className="enroll-form">
          <img
            src={cancelIcon}
            alt="cancel"
            onClick={() => enrollNow()}
            className="cancel-icon"
          />
          <h1>{career_name}</h1>
          <form action="">
            <div className="names">
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
            </div>
            <div className="email">
              <input type="text" placeholder="Email" />
            </div>
            <div className="job-title-company">
              <input type="text" placeholder="Job Title" />
              <input type="text" placeholder="Company" />
            </div>
            <div className="country-phone">
              <select name="" id="">
                <option value="Choose a country">Choose a country</option>
                {isError && (
                  <div className="center-loader">
                    <h4>Error Loading Countries</h4>
                  </div>
                )}
                {countries.map((country, index) => {
                  return (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  );
                })}
              </select>
              <input type="text" placeholder="Phone" />
            </div>
            <div className="message">
              <input type="text" placeholder="Message" />
            </div>
            <div className="means-of-info">
              <select name="" id="">
                <option value="">How did you hear about StackwisR</option>
                <option value="A Friend">A Friend</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Job Boards">Job Boards</option>
                <option value="Trust Pilot">Trust Pilot</option>
                <option value="Email" id="">
                  Email
                </option>

                <option value="Newsletter">Newsletter</option>
                <option value="Google">Google</option>
              </select>
            </div>
            <div className="more-insights">
              <input type="checkbox" />
              <p>
                I want to hear about exciting jobs and events in DataTech, free
                tutorials, solutions and insights that may benefit my career
              </p>
            </div>
            <button type="submit" onClick={(e) => e.preventDefault()}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EnrollForm;
