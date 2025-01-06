import logo from "../assets/images/google-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
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
          <p className="heading-big-text">Create Account</p>
          <p className="subheading">
            Already have an account?&nbsp;
            <Link to="/login" className="login-link">
              Sign in
            </Link>
          </p>
        </div>
        <form className="account-form" action="">
          <label htmlFor="name">Full name</label>
          <input
            name="name"
            type="text"
            id="name"
            className="text-input"
            onChange={handleChange}
            placeholder="Enter name"
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className="text-input"
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="text-input"
            onChange={handleChange}
            placeholder="Password"
          />
          <button
            type="button"
            className="submit-button"
            onClick={() => console.log(formData)}
          >
            Create Account
          </button>
          <button className="google-login">
            <img src={logo} />
            <p>Sign up with google</p>
          </button>
        </form>
      </div>
    </div>
  );
};
