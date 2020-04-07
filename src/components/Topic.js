import React from "react";
import "./Topic.scss";

function Topic(props) {
  return (
    <div className="topic-style">
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
