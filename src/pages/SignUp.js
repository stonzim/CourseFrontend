import React from "react";
import "./page.scss";

function SignUp() {
  return (
    <section>
      <h2>Sign up</h2>
      <table>
        <tbody>
          <tr>
            <th>First name:</th>
            <td>
              <input placeholder="Enter first name"></input>
            </td>
          </tr>
          <tr>
            <th>Last name:</th>
            <td>
              <input placeholder="Enter Last name"></input>
            </td>
          </tr>
          <tr>
            <th>Date of birth:</th>
            <td>
              <input placeholder="Enter birth date"></input>
            </td>
          </tr>
          <tr>
            <th>Username:</th>
            <td>
              <input placeholder="Enter username"></input>
            </td>
          </tr>
          <tr>
            <th>Password:</th>
            <td>
              <input placeholder="Enter password"></input>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default SignUp;
