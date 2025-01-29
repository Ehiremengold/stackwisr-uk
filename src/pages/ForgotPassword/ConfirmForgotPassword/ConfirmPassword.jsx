import { useDispatch, useSelector } from "react-redux";
import "./ConfirmForgotPassword.css";
import { Helmet } from "react-helmet";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import { useNavigate, useLocation } from "react-router-dom";
import { forgotPasswordConfirm } from "../../../features/accounts/forgotpassword/forgotpassswordSlice";

const ConfirmForgotPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isSuccess, isError, errorMsg } = useSelector(
    (store) => store.forgotPassword
  );

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const uid = queryParams.get("uid");
  const token = queryParams.get("token");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.uid = uid;
    data.token = token;

    if (data.new_password !== data.confirm_new_password) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(forgotPasswordConfirm(data));
    if (isSuccess) {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <Helmet>
        <title>Reset Password | Stackwisr</title>
        <meta
          name="description"
          content="Reset password for Stackwisr Account"
        ></meta>
      </Helmet>
      <section className="sign-in-body">
        <div className="login-form-body">
          <h2>RESET PASSWORD</h2>
          {isError ? (
            <p className="message error">{errorMsg}</p>
          ) : (
            isSuccess && <p className="message">Password Reset Successfully!</p>
          )}
          <form onSubmit={handlePasswordReset}>
            <div className="form-input-row">
              <label htmlFor="password">New Password</label>
              <input name="new_password" required type="password" />
            </div>
            <div className="form-input-row">
              <label htmlFor="password">Confirm New Password</label>
              <input name="confirm_new_password" required type="password" />
            </div>
            <button className="form-submit-btn">
              {isLoading ? <ButtonLoader /> : <h3>RESET</h3>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default ConfirmForgotPassword;
