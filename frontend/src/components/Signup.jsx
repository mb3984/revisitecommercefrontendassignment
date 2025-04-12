import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Signup.css"; // Import CSS for styling

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://revisitecommercebackendproject.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      // Check if the response status is OK (status 2xx)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Signup failed. User already exists"
        );
      }

      // If the request was successful, parse the response data
      const data = await response.json();
      console.log(data);
      alert("User signup successful. Please Login");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(err.message); // Show the error message in case of failure
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
