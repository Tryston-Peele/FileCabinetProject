import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import File from "./Components/File";
import SignUp from "./Components/Login/SignUp";

import LoginPage from "./Components/Login/LoginPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/files" element={<File />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
