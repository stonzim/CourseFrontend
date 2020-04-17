import React, { useState, useEffect } from "react";
import Topic from "../components/Topic";

function Topics() {
  const [topics, setTopics] = useState([{}]);

  async function getTopics() {
    const response = await fetch("http://localhost:8090/courseapi/topics");
    const json = await response.json();
    setTopics(json);
  }
  useEffect(() => {
    getTopics();
  }, []);

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
