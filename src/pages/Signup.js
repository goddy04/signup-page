import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // State to hold form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false); // Track if the email field has been touched
  const [touchedPassword, setTouchedPassword] = useState(false); // Track if the password field has been touched
  const [selectedCollege, setSelectedCollege] = useState(null);
  const navigate = useNavigate();

  const colleges = [
    { name: "Rajalakshmi Institute of Technology", code: "RIT" },
    { name: "Rajalakshmi Engineering College", code: "REC" },
    { name: "Chennai Insititute of Technology", code: "CIT" },
  ];

  const validateEmail = (email) => {
    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex_email.test(email);
  };

  // Function to validate password strength
  const validatePassword = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    return regex.test(password);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouchedEmail(true); // Mark the email field as touched on submission
    setTouchedPassword(true); // Mark the password field as touched on submission
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError("Weak Password");
    } else {
      setPasswordError("");
    }
    if (validateEmail(email) && validatePassword(password)) {
      // You can add the API call to submit form data here
      navigate('/dashboard');
    }
  };

  return (
    <div className="signupcontainer">
      <div className="title">
        <span>Welcome Back</span>
        <h3>Please log in to continue</h3>
      </div>
      <div className="signup-inputs">
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email">Email Address</label>
            <br></br>
            {emailError && <p className="error">{emailError}</p>}
            <div className="card flex justify-content-center input-container">
              <InputText
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouchedEmail(true)}
                invalid={touchedEmail && !validateEmail(email)}
                placeholder="Enter Email"
              />
            </div>
          </div>

          {/* Organization Field */}
          <div>
            <label htmlFor="organization">Organization</label>
            <div className="card flex justify-content-center input-container">
              <Dropdown
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.value)}
                options={colleges}
                optionLabel="name"
                editable
                placeholder="Select a College"
                className=" input w-full md:w-14rem"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password">Password</label>
            <br></br>
            {passwordError && <p className="error">{passwordError}</p>}{" "}
            {/* Display password error message */}
            <div className="input-container">
              <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                feedback={false}
                onBlur={() => setTouchedPassword(true)}
                toggleMask
                invalid={touchedPassword && !validatePassword(password)}
                placeholder="Enter Password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="p-component signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
