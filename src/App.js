import React from "react";
import "./App.scss";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="green">Available Courses</h1>
        <Course
          title="Neural Networks"
          desc="This course teaches you to make a neural network"
        ></Course>
        <Course
          title="History of AI"
          desc="A look at the last 100 years of AI"
        ></Course>
      </header>
    </div>
  );
}

export default App;
