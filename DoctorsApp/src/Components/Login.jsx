import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = response.data;
        // Store full user data including token in localStorage
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Login successful!");
        navigate("/"); // Redirect to home page or any other page
      }
    } catch (err) {
      const errMessage = err.response?.data?.message || "Login failed";
      setError(errMessage);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-box">
        <h2 className="login-title">Login Here!</h2>
        <form className="login-form" onSubmit={HandleLogin}>
          <div className="login-form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="login-form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Login
          </button>

          {error && <p className="login-error">❌ {error}</p>}
        </form>

        <div className="login-redirect">
          <span>Don't have an account?</span>
          <a onClick={() => navigate("/signup")}> Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
