import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Register.css";
import AuthContext from "../../context/Auth/AuthContext";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const { RegisterUser, isAuthenticate } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate, navigate]);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleKeyUpName = () => {
    if (user.name.trim() === "" || user.name.trim().length < 1) {
      setError({ ...error, name: "Organization Name is required" });
    } else {
      setError({ ...error, name: "" });
    }
  };
  const handleKeyUpEmail = () => {
    if (user.email.trim() === "" || user.email.trim().length < 1) {
      setError({ ...error, email: "Email is required" });
    } else {
      setError({ ...error, email: "" });
    }
  };
  const handleKeyUpPassword = () => {
    if (user.password.trim() !== user.confirm.trim()) {
      setError({
        ...error,
        confirm: "Password and Confirm Password must match",
      });
    } else {
      setError({ ...error, confirm: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name.trim() === "" ||
      user.email.trim().length < 1 ||
      user.password.trim().length < 4 ||
      user.password.trim() !== user.confirm.trim()
    ) {
      if (user.name.trim() === "" || user.name.trim().length < 1) {
        setError({ ...error, name: "Organization name is required" });
      }
      if (user.email.trim().length < 1) {
        setError({ ...error, email: "Email is required" });
      }
      if (user.password.trim().length < 4) {
        setError({
          ...error,
          password: "Password must be at least 4 characters",
        });
      }
      if (user.password !== user.confirm) {
        setError({ ...error, confirm: "Passwords must match" });
      }
    } else {
      setError({});
      const data = {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.confirm,
      };
      RegisterUser(data);
    }
  };
  return (
    <div className="card1">
      <div className="logo">PMS</div>
      <div className="title">Register your Organization</div>
      <div className="title2">Create your Organization</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="organization" className="organizationLabel">
          Organization Name
        </label>
        {error.name && (
          <span className="error" style={{ color: "red", marginLeft: "60px" }}>
            {error.name}
          </span>
        )}
        <input
          type="text"
          name="name"
          placeholder="Organization Name"
          className="organization"
          required
          onKeyUp={handleKeyUpName}
          value={user.name}
          onChange={handleChange}
        />

        <label htmlFor="organization" className="emailLabel">
          Email
        </label>
        <br />
        {error.email && (
          <span className="error" style={{ color: "red", marginLeft: "60px" }}>
            {error.email}
          </span>
        )}
        <input
          type="email"
          name="email"
          placeholder="info@company.com"
          className="email"
          value={user.email}
          required
          onChange={handleChange}
          onKeyUp={handleKeyUpEmail}
        />

        <label htmlFor="organization" className="passwordLabel">
          Password
        </label>
        {error.password && (
          <span className="error" style={{ color: "red", marginLeft: "60px" }}>
            {error.password}
          </span>
        )}
        <input
          type="password"
          name="password"
          placeholder="***********"
          className="password"
          required
          onChange={handleChange}
          onKeyUp={handleKeyUpPassword}
        />

        <label htmlFor="organization" className="confirmLabel">
          Confirm Password
        </label>
        {error.confirm && (
          <span className="error" style={{ color: "red", marginLeft: "60px" }}>
            {error.confirm}
          </span>
        )}
        <input
          name="confirm"
          type="password"
          placeholder="***********"
          className="confirm"
          required
          onChange={handleChange}
          onKeyUp={handleKeyUpPassword}
        />

        <input type="submit" className="submit" value="Register" />
        <input type="submit" className="submit2" value="Create" />
      </form>

      <div className="footer">
        Already have an account?{" "}
        <Link to="/login" className="link">
          {" "}
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;
