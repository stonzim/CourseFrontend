import React, { useState, useEffect } from "react";
import Course from "../components/Course";
import { useLocation } from "react-router";

function Courses() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const index = location.state.index + 1;
  const hola = "http://localhost:8090/courseapi/topics/" + index + "/courses";

  async function getTopics() {
    const response = await fetch(hola);
    const json = await response.json();
    setCourses(json);
  }
  useEffect(() => {
    getTopics();
  }, []);

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
