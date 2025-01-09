import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <section className="sign-in-body">
      <div className="login-form-body">
        <h2>SIGN IN</h2>
        <form>
          <div className="form-input-row">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>

          <div className="form-input-row">
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <button disabled className="form-submit-btn">
            Login
          </button>
        </form>
        <p>
          Don&apos;t have an account? <Link to="/auth/create-account">Sign up</Link>
        </p>
      </div>
    </section>
  );
};
export default SignIn;
