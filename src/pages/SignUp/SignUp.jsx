import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
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
            <input type="password" />
          </div>

          <div className="form-input-row">
            <label htmlFor="password">Repeat Password</label>
            <input type="password" />
          </div>
          <button disabled className="form-submit-btn">
            Create Account
          </button>
        </form>
        <p>
          Already have an account? <Link to="/auth/login">Sign in</Link>
        </p>
      </div>
    </section>
  );
};
export default SignUp;
