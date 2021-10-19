import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import "./Register.style.css";
import { Link } from "react-router-dom";
function Register() {
  const history = useHistory();

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== repassword.current.value) {
      repassword.current.setCustomValidity("Password's dont match");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/register`,
          user
        );
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
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
          <form onSubmit={handleClick} className="login__bodyRightContent">
            <input
              type="text"
              className="input__username"
              placeholder="Username"
              required
              ref={username}
            />
            <input
              required
              type="email"
              className="input__email"
              ref={email}
              placeholder="Email adress"
            />
            <input
              required
              ref={password}
              type="password"
              className="input__password"
              placeholder="Password"
              minLength="6"
            />
            <input
              required
              type="password"
              className="input__password"
              placeholder="Password Again"
              minLength="6"
              ref={repassword}
            />
            <button type="submit" className="input__button">
              Sign Up
            </button>
            <Link to="/login" style={{ textAlign: "center" }}>
              <button className="input__register">Log Into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
