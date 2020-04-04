import React, { useState } from "react";
import "./Course.scss";

function Course(props) {
  //   const [flag, setFlag] = useState(false);
  //   let flag = false;
  return (
    <div className="course-style">
      <h3>{props.title}</h3>
      <hr></hr>
      <p>{props.desc}</p>
      <button onClick={props.onClick}>Add Course</button>
    </div>
  );
}

export default Course;
