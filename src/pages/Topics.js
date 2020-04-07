import React, { useState } from "react";
import Topic from "../components/Topic";

const initialTopics = [
  {
    id: 1,
    title: "AI",
    desc: "Learn different aspects of AI"
  }
];

function Topics() {
  const [topics, setTopics] = useState(initialTopics);

  function addTopicHandler(e) {
    const copyTopics = topics.filter(
      topic => topic.id !== parseInt(e.target.name)
    );

    setTopics(copyTopics);
  }

  return (
    <div>
      <header>
        <h2>Topics</h2>
      </header>
      {topics.map((topic, i) => (
        <div key={i}>
          <Topic topic={topic} key={i} onClick={addTopicHandler}></Topic>
        </div>
      ))}
    </div>
  );
}

export default Topics;
