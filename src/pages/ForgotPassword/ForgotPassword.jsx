import "./ForgotPassword.css";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../features/accounts/forgotpassword/forgotpassswordSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, errorMsg } = useSelector(
    (store) => store.forgotPassword
  );

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    dispatch(forgotPassword(Object.fromEntries(formData)));
  };
  return (
    <>
      <Helmet>
        <title>Forgot Password | Stackwisr</title>
        <meta name="description" content="Forgot Password page"></meta>
      </Helmet>
      <section className="sign-in-body">
        <div className="login-form-body">
          <h2>FORGOT PASSWORD</h2>
          {isSuccess ? (
            <p className="message">
              An Email has been sent if it&apos;s registered
            </p>
          ) : (
            isError && (
              <>
                <p className="message error">{errorMsg}</p>
              </>
            )
          )}
          <form onSubmit={handleForgotPassword}>
            <div className="form-input-row">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" />
            </div>
            <button className="form-submit-btn">
              {isLoading ? <ButtonLoader /> : <h3>SUBMIT</h3>}
            </button>
          </form>
          <p style={{ textAlign: "center" }}>
            <Link to="/">Go Home</Link>
          </p>
        </div>
      </section>
    </>
  );
};
export default ForgotPassword;
