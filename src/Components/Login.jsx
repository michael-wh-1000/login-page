import logo from "../assets/images/google-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="create-account">
      <div className="content">
        <div className="heading">
          <p className="heading-big-text">Sign in</p>
          <p className="subheading">
            Do not have an account?&nbsp;
            <Link to="/" className="login-link">
              Create Account
            </Link>
          </p>
        </div>
        <form className="account-form" action="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            className="text-input"
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            className="text-input"
            placeholder="Password"
          />
          <button type="submit" className="submit-button">
            Sign in
          </button>
          <button className="google-login">
            <img src={logo} />
            <p>Sign in with google</p>
          </button>
        </form>
      </div>
    </div>
  );
};
