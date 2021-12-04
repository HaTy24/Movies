import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.scss";

function Login({ login }) {
  const [user, setUser] = useState([]);
  const [inputSignIn, setInputSignIn] = useState({
    userName: "",
    password: "",
  });

  const [inputSignUp, setInputSignUp] = useState({
    email: "",
    userName: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
    email: "",
    confirm: "",
  });

  useEffect(() => {
    axios
      .get(" http://localhost:3000/user")
      .then((response) => setUser(response.data));
  }, []);

  const handleInputSignIn = (e) => {
    let newData = { ...inputSignIn };
    newData[e.target.id] = e.target.value;
    setInputSignIn(newData);
    console.log([e.target.id]);
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleInputSignUp = (e) => {
    let newData = { ...inputSignUp };
    newData[e.target.id] = e.target.value;
    setInputSignUp(newData);
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validation = (e) => {
    if (e.target.value === "" && [e.target.id] == "userName") {
      setErrors({ ...errors, userName: "Please enter your name!!!" });
    }
    if (e.target.value === "" && [e.target.id] == "password") {
      setErrors({ ...errors, password: "Please enter your password!!!" });
    }
    if (e.target.value === "" && [e.target.id] == "email") {
      setErrors({ ...errors, email: "Please enter your email!!!" });
    }
    if (e.target.value === "" && [e.target.id] == "confirm") {
      setErrors({ ...errors, confirm: "Please confirm password!!!" });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    user.forEach((i) => {
      if (
        i.userName === inputSignIn.userName &&
        i.password === inputSignIn.password
      ) {
        login(0);
      }
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/user", {
      userName: inputSignUp.userName,
      password: inputSignUp.password,
      email: inputSignUp.email,
    });
    inputSignUp.password !== inputSignUp.confirm
      ? setErrors({ ...errors, confirm: "Please confirm password!!!" })
      : setInputSignUp({
          email: "",
          userName: "",
          password: "",
          confirm: "",
        });
  };

  const handleSlide = () => {
    document.querySelector(".login-slider").classList.toggle("slide");
  };

  const handleLogin = () => {
    login(0);
  };

  return (
    <div className="login">
      <div className="login-left">
        <button className="login-back" onClick={() => handleLogin()}>
          <i class="fas fa-long-arrow-alt-left"></i>
          Back
        </button>
        <h2>Sign up</h2>
        <p>
          Billion is much better when you have an account
          <br /> Get it one
        </p>
      </div>
      <div className="login-right">
        <div className="login-slider">
          <form action="" className="login-signIn">
            <label htmlFor="userName">User Name</label>
            <input
              onBlur={(e) => validation(e)}
              onChange={(e) => handleInputSignIn(e)}
              type="text"
              id="userName"
              value={inputSignIn.userName}
            />
            <p className="login-errors">{errors.userName}</p>
            <label htmlFor="password">Password</label>
            <input
              onBlur={validation}
              onChange={(e) => handleInputSignIn(e)}
              type="password"
              id="password"
              value={inputSignIn.password}
            />
            <p className="login-errors">{errors.password}</p>
            <button className="login-button" onClick={(e) => handleSignIn(e)}>
              Sign in
            </button>
            <span style={{ marginRight: "6px" }}>or </span>
            <span className="login-changeMode" onClick={() => handleSlide()}>
              Sign up
            </span>
          </form>
          <form action="" className="login-signUp">
            <label htmlFor="userName">User Name</label>
            <input
              onBlur={validation}
              onChange={(e) => handleInputSignUp(e)}
              type="text"
              id="userName"
              value={inputSignUp.userName}
            />
            <span className="login-errors">{errors.userName}</span>
            <label htmlFor="email">Email</label>
            <input
              onBlur={validation}
              onChange={(e) => handleInputSignUp(e)}
              type="text"
              id="email"
              value={inputSignUp.email}
            />
            <span className="login-errors">{errors.email}</span>
            <label htmlFor="password">Password</label>
            <input
              onBlur={validation}
              onChange={(e) => handleInputSignUp(e)}
              type="password"
              id="password"
              value={inputSignUp.password}
            />
            <span className="login-errors">{errors.password}</span>
            <label htmlFor="confirm">Confirm Password</label>
            <input
              onBlur={validation}
              onChange={(e) => handleInputSignUp(e)}
              type="password"
              id="confirm"
              value={inputSignUp.confirm}
            />
            <span className="login-errors">{errors.confirm}</span>
            <button className="login-button" onClick={(e) => handleSignUp(e)}>
              Sign up
            </button>
            <span className="login-changeMode" onClick={(e) => handleSlide(e)}>
              Sign in
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
