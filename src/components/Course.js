import React from "react";
import "./Course.scss";

function Course(props) {
  return (
    <div className="course-style">
      <h3>{props.course.name}</h3>
      <hr></hr>
      <p>{props.course.description}</p>
      <button name={props.course.id} onClick={props.onClick}>
        Add Course
      </button>
    </div>
  );
}

export default Course;
