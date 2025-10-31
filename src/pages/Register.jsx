import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const API_URL = import.meta.env.VITE_API_URL;

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/api/auth/register`, data);
    navigate("/login");
  };

  return (
    <div className="register">
      <style>{`
        .register {
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
      <form onSubmit={handleRegister}>
        <h2 style={{ textAlign: "center", color: "#0a9d57" }}>Register</h2>
        <input placeholder="Full Name" onChange={(e) => setData({ ...data, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;