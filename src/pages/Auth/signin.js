import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import "../../styles/signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { LoginUser, isAuthenticate } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim().length < 4) {
      setError("Please fill all fields");
    } else {
      setError("");
      LoginUser(email, password);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="logo">PMS</h2>
        <p className="title">Sign in to your account </p>
        <p className="title2">Sign in to your account </p>
        <div className="form">
          <form onSubmit={handleLogin}>
            {error && (
              <span
                className="error"
                style={{ color: "red", marginLeft: "60px" }}
              >
                {error}
              </span>
            )}
            <label className="email">Email</label>
            <input
              className="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="info@company.com"
              required
            />

            <label className="password">Password</label>
            <input
              className="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***********"
              required
            />

            <div className="fp-section">
              <input type="checkbox" />
              <div className="remember">
                <p className="rm">Remember me</p>
                <p className="fp">Forgot password?</p>
              </div>
            </div>
            <input type="submit" value="Sign In" className="signin" />
          </form>
        </div>

        <div className="account">
          Don’t have an account?{" "}
          <Link to="/register" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
