import React from "react";
import Button from "./utilities/Button";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Signup = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [submit, setSubmit] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password are neccessary");
    }

    // call function to fetch
    if (password === confirmPass) {
      setSubmit(
        await onSignUp({ email, first_name, last_name, phone_number, password })
      );
    } else {
      alert("confirm password not matched");
    }
  };

  return (
    <div className="create shadow-lg p-3 mb-5 bg-white rounded">
      <h2>User Registration</h2>
      <label>First Name: </label>
      <input
        type="text"
        required
        value={first_name}
        placeholder= "First_name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <label>Last Name: </label>
      <input
        type="text"
        required
        value={last_name}
        placeholder= "Last_name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
       <div className="form-group"></div>
      <label>Gender: </label>
      <select className="form-select" name="Gender">
      <option value="Select">Select</option>
      <option value="male">Male</option>
      <option value="Female">Female</option>
      <option value="others">Others</option>
      placeholder= "oast_name"
      </select>
        
       < div/>

      <label>Phone Number: </label>
      <input
        type="text"
        required
        value={phone_number}
        placeholder= "phone_number"
        onChange={(e) => {
          setPhoneNo(e.target.value);
          
        }}
      />



      <label>Email: </label>
      <input
        type="email"
        required
        value={email}
        placeholder= "@gmail"
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
      <label>Confirm Password: </label>
      <input
        type="password"
        required
        value={confirmPass}
        placeholder= "Confirm Password"
        onChange={(e) => {
          setConfirmPass(e.target.value);
        }}
      />
      <br></br>
      <Button
        btn_type="success"
        text="Register"
        type="submit"
        onCick={onSubmit}
      />
      <br />
      <br></br>
      <p>already have an account< Link to="/login"> Login</Link> </p>
      {submit ? <Redirect to="/" /> : " "}
    </div>
  );
};

export default Signup;
