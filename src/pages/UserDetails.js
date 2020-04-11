import React from "react";
import { useLocation } from "react-router";
import "./page.scss";

function Userdetails() {
  const location = useLocation();
  return (
    <section>
      <h2>Personal details</h2>
      <table>
        <tbody>
          <tr>
            <th>Student ID:</th>
            <td>{location.state.current.studentID}</td>
          </tr>
          <tr>
            <th>First name:</th>
            <td>{location.state.current.firstname}</td>
          </tr>
          <tr>
            <th>Last name:</th>
            <td>{location.state.current.lastname}</td>
          </tr>
          <tr>
            <th>Date of birth:</th>
            <td>{location.state.current.birthdate}</td>
          </tr>
          <tr>
            <th>Username:</th>
            <td>{location.state.current.username}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Userdetails;
