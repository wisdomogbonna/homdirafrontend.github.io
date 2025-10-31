import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const fullText = "Homdira";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 150);

    setTimeout(() => navigate("/login"), 3000);
  }, []);

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
          font-family: 'Poppins', sans-serif;
          color: #0a9d57;
        }
        .splash h1 {
          font-size: 50px;
          font-weight: 700;
          color: #fff;
        }
      `}</style>

      <h1>{text}</h1>
    </div>
  );
};

export default SplashScreen;