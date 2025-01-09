import { Link } from "react-router-dom";
import "./SignUp.css";
import { Helmet } from "react-helmet";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign up | Stackwisr</title>
        <meta
          name="description"
          content="Join Stackwisr today and gain access to curated resources, expert guidance, and personalized career pathways. Sign up now to start your journey!"
        ></meta>
      </Helmet>
      <section className="sign-up-body">
        <div className="signup-form-body">
          <h2>SIGN UP</h2>
          <form>
            <div className="form-input-row">
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>

            <div className="form-input-row">
              <label htmlFor="password">Password</label>
              <div className="input-password-validators">
                <input type="password" />
                <div className="password-validators">
                  <ul>
                    {[
                      "Password length must be at least 8",
                      "Password must not be common",
                      "Password must not contain personal details",
                      "Password should be alphanumeric",
                    ].map((validator, index) => (
                      <li key={index}>{validator}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="form-input-row">
              <label htmlFor="password">Repeat Password</label>
              <input type="password" />
            </div>
            <button disabled className="form-submit-btn">
              <h3>CREATE ACCOUNT</h3>
            </button>
          </form>
          <p>
            Already have an account? <Link to="/auth/login">Sign in</Link>
          </p>
        </div>
      </section>
    </>
  );
};
export default SignUp;
