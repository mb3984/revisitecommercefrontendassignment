import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Signup.css"; // Import CSS for styling

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      alert("User signup successful.Please Login");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Signup failed. User already exists");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="form-button" type="submit">
          Signup
        </button>
      </form>

      {/* Span to display the login link */}
      <span className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default Signup;
