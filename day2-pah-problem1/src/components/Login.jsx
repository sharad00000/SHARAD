import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
    console.log({ username, password });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>LOGIN FORM</h1>
      <div className="box">
        <div className="input-container">
          <h4>USERNAME</h4>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="input-container">
          <h4>PASSWORD</h4>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="but-ton">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
