import React, { useState } from "react";

import "../css/login.css";
import axios from "axios";

export default function AppUsers() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [resMessage, setResMessage] = useState("");

  const createUser = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("sign up clicked!!!!");
    console.log("username---->" + username);
    console.log("password---->" + password);

    const user = {
      username,
      password,
    };

    axios.post("http://localhost:8080/gaurav/user/add",user).then((res) => {
      console.log("result from spring boot--->" + res.data);
      setResMessage(res.data);
    });
  };
  const getUserName = (e: any) => {
    setUsername(e.target.value);
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="loginDes">
      <div className="res">{resMessage}</div>
      <form>
        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input onChange={getUserName} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={getPassword}
            type="password"
            className="form-control"
          />
        </div>
        <button onClick={createUser} type="submit" className="btn btn-primary">
          Sign Up
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}
