import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./LoginPage.css";
function LoginPage() {
  const [login, setLogin] = useState("");

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login-menu">
          <h1 className="login-heading">Login</h1>
          <h2>Password</h2>
          <input
            className="login-input"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
          />
          <Link to="/files">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
