import axios from "axios";
import React, { useEffect, useState } from "react";

import "../css/login.css";
import { useNavigate } from "react-router-dom";

export default function DisplayAllUsers() {
  const [users, setUsers] = useState([]);

  const sinup = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/gaurav/user/get/all").then((abc) => {
      setUsers(abc.data);
    });
  }, []);

  const gotoSignUp = () => {
    sinup("/");
  };

  return (
    <div className="loginDes">
      <div>
        <button onClick={gotoSignUp} type="button" className="btn btn-warning">
          Add
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((eachUser) => (
            <tr>
              <th scope="row">{eachUser.username}</th>
              <td>{eachUser.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
