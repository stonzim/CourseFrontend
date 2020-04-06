import React from "react";
import "./App.scss";
// import Course from "./components/Course";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import coursesss from "./pages/Courses";
import index from "./pages/Index";
import topics from "./pages/Topics";

// const initialCourses = [
//   {
//     id: 1,
//     title: "Neural Networks",
//     desc: "This course teaches you to make a neural network"
//   },
//   {
//     id: 2,
//     title: "History of AI",
//     desc: "A look at the last 100 years of AI"
//   }
// ];

function App() {
  //   const [courses, setCourses] = useState(initialCourses);

  //   function addCourseHandler(e) {
  //     const copyCourses = courses.filter(
  //       course => course.id !== parseInt(e.target.name)
  //     );

  //     setCourses(copyCourses);
  //   }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
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
            </ul>
          </nav>
          <h1 className="green App-title">Stonzim Insitute of Technology</h1>
          <Route path="/" exact component={index}></Route>
          <Route path="/courses" exact component={coursesss}></Route>
          <Route path="/topics" exact component={topics}></Route>
          {/* {courses.map((course, i) => (
            <div key={i}>
              <Course
                course={course}
                key={i}
                onClick={addCourseHandler}
              ></Course> */}
          {/* </div> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
