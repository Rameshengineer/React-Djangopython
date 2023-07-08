import React from "react";
import Button from "./utilities/Button";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = ({ onlogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter all the fields");
    }

  
    const ret = await onlogin({ email, password })
    console.log(ret)
    setSubmit(ret);

  };

  return (
    <div className="create shadow-lg p-3 mb-5 bg-white rounded">
      <h2 style={{color:"black"}}>Login</h2>
      <label>Username: </label>
      <input
        type="text"
        required
        value={email}
        placeholder= "Username"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label>Password: </label>
      <input
        type="password"
        required
        value={password}
        placeholder= "Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
       <br></br>
      <Button btn_type="success"    text="Login" type="submit" onCick={onSubmit} />
      <br />
      <br></br>
      <p>Dont have an account?<Link  to="/sign-up">Register</Link></p>
      {submit ? <Redirect to="/" /> : " "}
    </div>
  );
};

export default Login;
