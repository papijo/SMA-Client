import "./register.css";

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "./../../utils/requestMethods";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const name = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords do not match!!!!");
    } else {
      const user = {
        email: email.current.value,
        name: name.current.value,
        username: username.current.value,
        password: password.current.value,
        passwordAgain: passwordAgain.current.value,
      };

      try {
        await publicRequest.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Papi Social</h3>
          <span className="loginDesc">
            Connect with friends and conquer the World.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleSubmit} className="registerBox">
            <input
              type="text"
              required
              placeholder="name"
              ref={name}
              className="loginInput"
            />
            <input
              type="text"
              required
              placeholder="Username"
              ref={username}
              className="loginInput"
            />
            <input
              type="email"
              required
              placeholder="something@email.com"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              required
              className="loginInput"
              placeholder="Password"
              ref={password}
              minLength="6"
            />
            <input
              type="password"
              required
              className="loginInput"
              placeholder="Password Again"
              ref={passwordAgain}
              minLength="6"
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>

            <button className="registerLoginButton">
              <Link
                className="link"
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                Log Into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
