import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import coursesss from "./pages/Courses";
import index from "./pages/Index";
import topics from "./pages/Topics";
import userDetails from "./pages/UserDetails";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const studentList = [
    {
      studentID: 101,
      firstname: "Winston",
      lastname: "Downes",
      birthdate: "25 July 1983",
      username: "win",
      password: "pass"
    },
    {
      studentID: 102,
      firstname: "Simon",
      lastname: "Armour",
      birthdate: "25 July 1987",
      username: "si",
      password: "pass"
    }
  ];

  const [students, setStudent] = useState(studentList);

  const [signedIn, setSignedIn] = useState({
    studentID: 0,
    firstname: "",
    lastname: "",
    birthdate: "",
    username: "",
    password: ""
  });

  const [target, setTarget] = useState();
  function setName(e) {
    setTarget(e.target.value);
  }

  const [password, setPassword] = useState();
  function setPass(e) {
    setPassword(e.target.value);
  }

  const copyState = signedIn;

  function loginHandler() {
    if (loggedIn) {
      setLoggedIn(false);
      return;
    }
    for (let i = 0; i < students.length; i++) {
      if (
        students[i].username === target &&
        students[i].password === password
      ) {
        copyState.studentID = students[i].studentID;
        copyState.firstname = students[i].firstname;
        copyState.lastname = students[i].lastname;
        copyState.birthdate = students[i].birthdate;
        copyState.username = students[i].username;
        copyState.password = students[i].password;
        setSignedIn(copyState);
        setLoggedIn(true);
        return;
      }
      setLoggedIn(false);
    }
  }

  return (
    <BrowserRouter>
      <div className={loggedIn ? "visible" : "invisible"}>
        {" "}
        <strong>Welcome {signedIn.username}</strong>
      </div>
      <div className="App">
        <nav align="left">
          <ul>
            <li>
              <NavLink
                className="Navlink-style"
                to="/"
                exact
                activeStyle={{ color: "green" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Navlink-style"
                to="/topics"
                exact
                activeStyle={{ color: "green" }}
              >
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink
                className="Navlink-style"
                to="/courses"
                exact
                activeStyle={{ color: "green" }}
              >
                Courses
              </NavLink>
            </li>
            <li className={loggedIn ? "visible" : "invisible"}>
              <NavLink
                to={{
                  pathname: "/details",
                  state: {
                    current: signedIn
                  }
                }}
                exact
                activeStyle={{ color: "green" }}
              >
                Details
              </NavLink>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <h1 className="green App-title">Stonzim Insitute of Technology</h1>
        </header>
        <form className="login">
          <label align="left">Name</label>
          <input
            type="text"
            placeholder="Enter username here"
            onChange={setName}
          ></input>
          <br />
          <label align="left">Password</label>
          <input
            type="password"
            placeholder="Enter password here"
            onChange={setPass}
          ></input>
          <br />
          <button className="halfSize" type="reset" onClick={loginHandler}>
            {loggedIn ? "Log out" : "Log in"}
          </button>
          <button className="halfSize">Sign up</button>
        </form>
        <hr></hr>
        <Route path="/" exact component={index}></Route>
        <Route path="/courses" exact component={coursesss}></Route>
        <Route path="/topics" exact component={topics}></Route>
        <Route
          render={() => {
            return loggedIn ? (
              <Route path="/details" component={userDetails}></Route>
            ) : (
              <Redirect to="/" component={index}></Redirect>
            );
          }}
        ></Route>
      </div>
    </BrowserRouter>
  );
}
export default App;
