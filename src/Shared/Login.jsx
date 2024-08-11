import React, { useState } from "react";

import "./Login.css";

import LoginMode from "./LoginMode";
import SignupMode from "./SignupMode";

const Login = (props) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const loginMode = () => {
    setIsLoginMode(true);
  };
  const signupMode = () => {
    setIsLoginMode(false);
  };
  return (
    <div className="login-main">
      {isLoginMode ? (
        <LoginMode changeMode={signupMode} onClose={props.onClose} />
      ) : (
        <SignupMode changeMode={loginMode} onClose={props.onClose} />
      )}
    </div>
  );
};

export default Login;
