import React from "react";
import "./Course.scss";

function Topic(props) {
  return (
    <div className="course-style">
      <h3>{props.topic.title}</h3>
      <hr></hr>
      <p>{props.topic.desc}</p>
      <button name={props.topic.id} onClick={props.onClick}>
        Add Topic
      </button>
    </div>
  );
}

export default Topic;
