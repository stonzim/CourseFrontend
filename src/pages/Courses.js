import React, { useState } from "react";
import Course from "../components/Course";

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

function Courses() {
  const [courses, setCourses] = useState(initialCourses);

  function addCourseHandler(e) {
    const copyCourses = courses.filter(
      course => course.id !== parseInt(e.target.name)
    );

    setCourses(copyCourses);
  }

  return (
    <div>
      <header>
        <h1>Courses</h1>
      </header>
      {courses.map((course, i) => (
        <div key={i}>
          <Course course={course} key={i} onClick={addCourseHandler}></Course>
        </div>
      ))}
    </div>
  );
}

export default Courses;