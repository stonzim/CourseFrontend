import React, { useState, useEffect } from "react";
import Course from "../components/Course";
// import axios from "axios";

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
  const [courses, setCourses] = useState([]);
  const [blah, setBlah] = useState();

  async function getTopics() {
    const response = await fetch("http://localhost:8090/courseapi/topics");
    const json = await response.json();
    setBlah(json);
  }

  useEffect(() => {
    getTopics();
  }, []);

  console.log(blah);

  function addCourseHandler(e) {
    const copyCourses = courses.filter(
      course => course.id !== parseInt(e.target.name)
    );

    setCourses(copyCourses);
  }

  return (
    <div>
      <header>
        <h2>Courses</h2>
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
