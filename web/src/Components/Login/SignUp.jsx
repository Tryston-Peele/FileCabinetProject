import React from "react";
import "./SignUp.css";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  withRouter,
  useHistory,
} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";

function SignUp() {
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="signup-bg">
      <div className="signup-container">
        <div className="signup-menu">
          <h1 className="signup-heading">Sign Up</h1>
          <h2>Email</h2>
          <input
            className="signup-input"
            type="text"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <h2>Password</h2>
          <input
            className="signup-input"
            type="text"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>create User</button>
          <Link to="/files">
            <button className="signup-button">Confirm Password</button>
          </Link>

          <h4>
            Already have a password? Click <Link to="/login">here</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
