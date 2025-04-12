// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./Login.css"; // Importing the CSS file for styling

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       alert("User Login Successfully.");
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Login failed..");
//       console.log(err);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <input
//           className="form-input"
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />
//         <input
//           className="form-input"
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         />
//         <button className="form-button" type="submit">
//           Login
//         </button>
//       </form>

//       <div className="register-link">
//         <p>
//           Don't have an account?{" "}
//           <Link to="/signup" className="register-link-text">
//             Please register First.
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Login.css"; // Importing the CSS file for styling

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://revisitecommercebackendproject.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form), // Send the form data as the request body
        }
      );

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.token); // Store token in localStorage
        alert("User Login Successfully.");
        setForm({ email: "", password: "" }); // Reset form after successful login
        navigate("/dashboard"); // Navigate to the dashboard
      } else {
        alert("Login failed..");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
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
          value={form.email} // Bind input value to state
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          value={form.password} // Bind input value to state
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
