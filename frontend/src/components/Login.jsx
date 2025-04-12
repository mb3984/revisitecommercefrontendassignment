import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Login.css"; // Importing the CSS file for styling

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("User Login Successfully..");
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>

      <div className="register-link">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="register-link-text">
            Please register First.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
