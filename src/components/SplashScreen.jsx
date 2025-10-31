import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const title = "Homdira";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < title.length) {
        setText(title.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => navigate("/home"), 1000);
      }
    }, 200);
  }, [navigate]);

  return (
    <div className="splash">
      <style>{`
        .splash {
          height: 100vh;
          background: linear-gradient(135deg, #0a9d57, #ffffff);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: white;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }
        .splash h1 {
          font-size: 60px;
          font-weight: 700;
          color: white;
        }
      `}</style>
      <h1>{text}</h1>
    </div>
  );
};

export default SplashScreen;