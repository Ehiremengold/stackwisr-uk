import "./EnrollForm.css";
import cancelIcon from "../../../../assets/svg/cancel.svg";
import { useSelector } from "react-redux";
import successful from "../../../../assets/animations/success.json";
import unSuccessful from "../../../../assets/animations/unsuccessful.json";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import PageLoader from "../../../../components/PageLoader/PageLoader.jsx";

const EnrollForm = ({ enrollNow, career_name, setEnrollFormData }) => {
  const { countries, isError: gettingCountryError } = useSelector(
    (store) => store.countries
  );

  const { isSuccess, isLoading, isError } = useSelector((store) => store.leads);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setEnrollFormData(Object.fromEntries(formData));
    e.currentTarget.reset();
  };

  const animationContainer = useRef(null);

  useEffect(() => {
    let animationInstance;
    let timeoutId;
    if (isSuccess) {
      // Load success animation
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: successful,
      });

      animationInstance.addEventListener("complete", () => {
        timeoutId = setTimeout(() => {
          enrollNow();
        }, 3000);
      });
    } else if (isError) {
      // Load error animation
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: unSuccessful,
      });

      animationInstance.addEventListener("complete", () => {
        timeoutId = setTimeout(() => {
          enrollNow();
        }, 2000);
      });
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear the timeout if it exists
      }

      if (animationInstance) {
        animationInstance.destroy(); // Clean up on unmount or when form status changes
      }
    };
  }, [isSuccess, isError, enrollNow]);

  return (
    <div className="grey-shade js-grey-shade">
      <div className="enroll-form-container">
        <div className="enroll-form">
          <img
            src={cancelIcon}
            alt="cancel-icon"
            onClick={() => enrollNow()}
            className="cancel-icon"
          />
          {isLoading ? (
            <div className="center-loader">
              <PageLoader />
            </div>
          ) : isSuccess || isError ? (
            <div ref={animationContainer}>
              {isSuccess && (
                <h2>Welcome! A representative will reach out to you shortly</h2>
              )}
            </div>
          ) : (
            <>
              <h1>{career_name}</h1>
              <form action="" onSubmit={handleSubmit}>
                <div className="names">
                  <input
                    type="text"
                    required
                    placeholder="Firstname"
                    name="firstName"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Lastname"
                    name="lastName"
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="job-title-company">
                  <input type="text" placeholder="Job Title" name="job-title" />
                  <input type="text" placeholder="Company" name="company" />
                </div>
                <div className="country-phone">
                  <select name="country" id="">
                    <option value="Choose a country">Choose a country</option>
                    {gettingCountryError && (
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
                  <input
                    type="text"
                    required
                    placeholder="Phone"
                    name="phone"
                  />
                </div>
                <div className="message">
                  <input type="text" placeholder="Message" name="message" />
                </div>
                <div className="means-of-info">
                  <select name="source" id="">
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
                  <input name="subscribe" type="checkbox" />
                  <p>
                    I want to hear about exciting jobs and events in DataTech,
                    free tutorials, solutions and insights that may benefit my
                    career
                  </p>
                </div>
                <button type="submit">SUBMIT</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default EnrollForm;
