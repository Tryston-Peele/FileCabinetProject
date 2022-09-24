import "./Home.css";
import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  withRouter,
  useHistory,
} from "react-router-dom";

function Home() {
  const currentDate = new Date();
  const cDay = currentDate.getDate();
  const cMonth = currentDate.getMonth() + 1;
  const cYear = currentDate.getFullYear();

  //let history = useHistory();
  //on click
  //have it refresh page on click

  /*const handleClick = () => {
      history.push("/files");
    }*/

  /*<button type = "button" onClick={handleClick} className = "button">Open</button> */
  /*      <BrowserRouter>
        <Link to="/files">
        <button type = "button" className = "button">Open</button>
        </Link>
      </BrowserRouter> */
  return (
    <>
      <div className="App">
        <h1 className="square font">Filing Cabinet</h1>

        {/* <Link to="/files">
        <button type = "button" className = "button">Open</button>
        </Link> */}

        <Link to="/signup">
          <button type="button" className="button">
            Open
          </button>
        </Link>

        <h2 className="handle"></h2>
        <h3 className="square2 font">
          {cMonth}/{cDay}/{cYear}
        </h3>
        <h4 className="line"></h4>
        <h5 className="handle2"></h5>
        <button type="button" className="button2">
          Date
        </button>
      </div>
    </>
  );
}

export default Home;
