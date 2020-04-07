import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import coursesss from "./pages/Courses";
import index from "./pages/Index";
import topics from "./pages/Topics";
import userDetails from "./pages/UserDetails";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function loginHandler() {
    setLoggedIn(!loggedIn);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <nav align="left">
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "green" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/topics" exact activeStyle={{ color: "green" }}>
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" exact activeStyle={{ color: "green" }}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/details" exact activeStyle={{ color: "green" }}>
                Details
              </NavLink>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <h1 className="green App-title">Stonzim Insitute of Technology</h1>
        </header>
        <div className="login">
          <label align="left">Name</label>
          <input placeholder="Enter username here"></input>
          <br />
          <label align="left">Password</label>
          <input placeholder="Enter password here"></input>
          <br />
          <button onClick={loginHandler}>
            {loggedIn ? "Log out" : "Log in"}
          </button>
          <button>Sign up</button>
        </div>
        <Route path="/" exact component={index}></Route>
        <Route path="/courses" exact component={coursesss}></Route>
        <Route path="/topics" exact component={topics}></Route>
        {loggedIn ? (
          <Route path="/details" exact component={userDetails}></Route>
        ) : (
          <Route path="/" exact component={index}></Route>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
