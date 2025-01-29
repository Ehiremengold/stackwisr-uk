import { Link } from "react-router-dom";
import "./SignIn.css";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../features/accounts/signin/signInSlice";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
const SignIn = () => {
  const { isError, isLoading, isAuthenticated } = useSelector(
    (store) => store.signIn
  );
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation

  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData);
    dispatch(signIn(formDataObj));
  };

  // Redirect after successful login
  if (isAuthenticated) {
    console.log("dashboard");

    setTimeout(() => navigate("/dashboard"), 2000);
  }

  return (
    <>
      <Helmet>
        <title>Sign in | Stackwisr</title>
        <meta
          name="description"
          content="Sign in to Stackwisr to access expertly curated content from certified Stackwisr tutors and advance your career today."
        ></meta>
      </Helmet>
      <section className="sign-in-body">
        <div className="login-form-body">
          <h2>SIGN IN</h2>
          {isError && (
            <p className="signin-error-message">
              Login failed. Please Check Email/Password.
            </p>
          )}
          <form onSubmit={handleSignIn}>
            <div className="form-input-row">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" />
            </div>

            <div className="form-input-row">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" />
            </div>
            <a href="/auth/forgot-password">
              <p style={{ textAlign: "right" }}>Forgot Password?</p>
            </a>
            <button className="form-submit-btn">
              {isLoading ? <ButtonLoader /> : <h3>LOGIN</h3>}
            </button>
          </form>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/auth/create-account">Sign up</Link>
          </p>
        </div>
      </section>
    </>
  );
};
export default SignIn;
