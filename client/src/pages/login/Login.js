import React, { useRef, useContext } from "react";
import "./Login.style.css";
import { CircularProgress } from "@material-ui/core";
import { loginCall } from "../../apiCall";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login__container">
      <div className="login__body">
        <div className="login__bodyLeft">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt=""
          />
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div className="login__bodyRight">
          <form className="login__bodyRightContent" onSubmit={handleSubmit}>
            <input
              type="email"
              className="input__email"
              placeholder="Email adress"
              ref={email}
              required
            />
            <input
              type="password"
              required
              ref={password}
              minLength="6"
              className="input__password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="input__button"
              disabled={isFetching}
            >
              {isFetching ? (
                <CircularProgress color="inherit" size="30px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="input__forgotPass">Forgotten password?</span>
            <Link style={{ textAlign: "center" }} to="/register">
              <button
                disabled={isFetching}
                type="submit"
                className="input__register"
              >
                {isFetching ? (
                  <CircularProgress color="inherit" size="30px" />
                ) : (
                  "Create New Account"
                )}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
