import React from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const Premium = () => {
  const navigate = useNavigate();
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const email = "landlord@example.com";
  const amount = 300000; // ₦3,000 * 100 (Paystack uses kobo)
  const name = "Homdira Premium";

  const componentProps = {
    email,
    amount,
    metadata: { name },
    publicKey,
    text: "Upgrade to Premium",
    onSuccess: () => navigate("/premium-success"),
    onClose: () => alert("Transaction canceled"),
  };

  return (
    <div className="premium">
      <style>{`
        .premium {
          background: #f9fdf9;
          min-height: 100vh;
          padding: 40px;
          color: #333;
          font-family: 'Poppins', sans-serif;
        }
        .premium-container {
          max-width: 500px;
          margin: 0 auto;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        h2 {
          text-align: center;
          color: #0a9d57;
          margin-bottom: 15px;
        }
        ul {
          padding-left: 20px;
          color: #555;
        }
        button {
          background: #0a9d57;
          color: white;
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }
        .bank {
          margin-top: 30px;
          background: #e8f5ee;
          padding: 15px;
          border-radius: 8px;
          font-size: 14px;
        }
      `}</style>

      <div className="premium-container">
        <h2>Homdira Premium</h2>
        <p>Enjoy exclusive benefits with a small one-time payment:</p>
        <ul>
          <li>✅ Unlimited property postings</li>
          <li>✅ Increased visibility in search results</li>
          <li>✅ Priority support</li>
        </ul>

        <PaystackButton {...componentProps} />

        <div className="bank">
          <p><strong>Manual Payment:</strong></p>
          <p>Account Number: 2142407622</p>
          <p>Bank: UBA</p>
          <p>Name: Ajuzieogu Light Ihechi</p>
        </div>
      </div>
    </div>
  );
};

export default Premium;