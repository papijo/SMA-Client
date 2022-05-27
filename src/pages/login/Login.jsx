import "./login.css";

import React, { useContext, useRef } from "react";
import { loginCall } from "../../utils/apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
        <form className="loginRight" onSubmit={handleSubmit}>
          <div className="loginBox">
            <input
              type="email"
              placeholder="something@email.com"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="warning" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>

            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="warning" size="20px" />
              ) : (
                <Link
                  className="link"
                  style={{ color: "white" }}
                  to="/register"
                >
                  Create a New Account
                </Link>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
