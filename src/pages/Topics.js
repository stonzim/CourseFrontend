import React, { useState, useEffect } from "react";
import Topic from "../components/Topic";
import { Route, useHistory } from "react-router-dom";
import courses from "../pages/Courses";

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

  let history = useHistory();

  return (
    <div>
      <header>
        <h2>Topics</h2>
      </header>
      {topics.map((topic, i) => (
        <div key={i}>
          <Topic
            topic={topic}
            key={i}
            onClick={() => history.push("/courses", { index: i })}
          ></Topic>
        </div>
      ))}
      <Route path="/courses" exact component={courses}></Route>
    </div>
  );
}
// onClick={goToCoursesHandler}
export default Topics;
