import React, { useState } from "react";

function Database() {
  const studentList = [
    {
      id: 1,
      username: "winston",
      password: "winston"
    },
    {
      id: 2,
      username: "simon",
      password: "simon"
    }
  ];
  const [studentsss, setStudent] = useState(studentList);

  return studentsss;
}

export default Database;
