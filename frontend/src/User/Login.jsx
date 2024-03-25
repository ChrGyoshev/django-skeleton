import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(" http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const { accessToken, refreshToken } = await response.json();
      // Store the tokens in local storage or state for future requests
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      // Redirect or perform any necessary actions after successful login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to="/register">
        <button>Logout</button>
      </Link>
    </div>
  );
};

export default LoginForm;
