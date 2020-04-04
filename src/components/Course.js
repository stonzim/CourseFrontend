import React from "react";

function Course(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default Course;
