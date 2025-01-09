import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { createAccount } from "../../features/accounts/signup/createAccountSlice";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import { div } from "framer-motion/client";

const SignUp = () => {
  const { isError, isLoading, isSuccess, errorMsg } = useSelector(
    (store) => store.createAccount
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData);
    dispatch(createAccount(formDataObj));
  };

  if (isSuccess) {
    navigate("/auth/login");
  }

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
          <form onSubmit={handleSignUp}>
            <div className="form-input-row">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" />
            </div>

            <div className="form-input-row">
              <label htmlFor="password">Password</label>
              <div className="input-password-validators">
                <input name="password" type="password" />
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
              <input name="confirm_password" type="password" />
            </div>
            <button className="form-submit-btn">
              {isLoading ? <ButtonLoader /> : <h3>CREATE ACCOUNT</h3>}
            </button>
            {isError && (
              <div className="errorMsg-container">
                <p>{errorMsg}</p>
              </div>
            )}
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
