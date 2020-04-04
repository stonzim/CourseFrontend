import React, { useState, useRef } from "react";
import "./App.scss";
import Course from "./components/Course";
import { ADDRCONFIG } from "dns";

const initialCourses = [
  {
    id: 1,
    title: "Neural Networks",
    desc: "This course teaches you to make a neural network"
  },
  {
    id: 2,
    title: "History of AI",
    desc: "A look at the last 100 years of AI"
  }
];

function App() {
  const [courses, setCourses] = useState(initialCourses);

  const addCourseHandler = e => {
    const copyCourses = courses.filter(course => course !== this);
    setCourses(copyCourses);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="green App-title">Available Courses</h1>
        {courses.map((course, i) => (
          <div>
            <Course
              title={course.title}
              desc={course.desc}
              key={`${i}${course.title}${course.desc}`}
              onClick={addCourseHandler}
            ></Course>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
