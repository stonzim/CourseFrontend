import React from "react";

function Topic(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default Topic;
