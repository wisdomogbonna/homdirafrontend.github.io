import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const API_URL = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/api/auth/login`, data);
    navigate("/home");
  };

  return (
    <div className="login">
      <style>{`
        .login {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(135deg, #0a9d57, #ffffff);
        }
        form {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        button {
          background: #0a9d57;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
      <form onSubmit={handleLogin}>
        <h2 style={{ textAlign: "center", color: "#0a9d57" }}>Login</h2>
        <input placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;