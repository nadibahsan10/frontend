import React, { useState } from "react";

import "./Login.css";

import LoginMode from "./LoginMode";
import SignupMode from "./SignupMode";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const loginMode = () => {
    setIsLoginMode(true);
  };
  const signupMode = () => {
    setIsLoginMode(false);
  };
  return (
    <div className="login-main">
      {isLoginMode ? <LoginMode /> : <SignupMode />}
    </div>
  );
};

export default Login;
