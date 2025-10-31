import React from "react";
import { useNavigate } from "react-router-dom";

const PremiumSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="premium-success">
      <style>{`
        .premium-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #e8f5ee;
          font-family: 'Poppins', sans-serif;
        }
        h1 {
          color: #0a9d57;
          font-size: 28px;
        }
        button {
          background: #0a9d57;
          color: white;
          padding: 10px 25px;
          border: none;
          border-radius: 6px;
          margin-top: 20px;
          cursor: pointer;
        }
      `}</style>
      <h1>🎉 Premium Activated Successfully!</h1>
      <p>Welcome to Homdira Premium.</p>
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
  );
};

export default PremiumSuccess;