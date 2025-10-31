import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: ${open ? "0" : "-250px"};
          width: 250px;
          height: 100vh;
          background-color: #0a9d57;
          color: white;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          padding: 20px;
          z-index: 1000;
        }
        .menu-button {
          position: fixed;
          top: 20px;
          left: 20px;
          font-size: 24px;
          background: none;
          color: #0a9d57;
          border: none;
          cursor: pointer;
          z-index: 1100;
        }
        .sidebar a {
          color: white;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          font-weight: 500;
        }
        .sidebar a:hover {
          color: #c4ffc4;
        }
        .logout {
          margin-top: auto;
          color: #fff;
          background: #f44336;
          border: none;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>

      <button className="menu-button" onClick={() => setOpen(!open)}>☰</button>
      <div className="sidebar">
        <h2 style={{ color: "white", textAlign: "center" }}>Homdira</h2>
        <Link to="/home">🏠 Home</Link>
        <Link to="/my-apartments">🏢 My Apartments</Link>
        <Link to="/premium">💎 Premium</Link>
        <button className="logout" onClick={() => window.location.href = "/login"}>Logout</button>
      </div>
    </>
  );
};

export default SidebarMenu;