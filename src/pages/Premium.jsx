import React from "react";
import { PaystackButton } from "react-paystack";
import SidebarMenu from "../components/SidebarMenu"; // left menu (dashboard)
import "../App.css";

const Premium = () => {
  // Fetch public key from environment variable
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const email = localStorage.getItem("userEmail") || "example@email.com";
  const amount = 5000 * 100; // ₦5,000 premium upgrade
  const name = localStorage.getItem("userName") || "Homdira User";

  const accountName = import.meta.env.VITE_ACCOUNT_NAME || "Ajuzieogu Light Ihechi";
  const accountNumber = import.meta.env.VITE_ACCOUNT_NUMBER || "2142407622";
  const bankName = import.meta.env.VITE_BANK_NAME || "UBA";

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: "Upgrade to Premium",
    onSuccess: () => alert("✅ Payment successful! You are now a Premium Landlord."),
    onClose: () => alert("Transaction closed."),
  };

  return (
    <div className="premium-container">
      <SidebarMenu />

      <div className="premium-content">
        <h1 className="premium-title">Go Premium 🔑</h1>
        <p className="premium-subtitle">
          Upgrade your Homdira account and enjoy exclusive landlord benefits:
        </p>

        <ul className="premium-list">
          <li>🏡 Unlimited Property Listings</li>
          <li>👀 More Views on Your Apartments</li>
          <li>💬 Direct Chat with Verified Tenants</li>
          <li>⭐ Verified Landlord Badge</li>
        </ul>

        <div className="premium-payment">
          <h3>Payment Options</h3>
          <div className="paystack-section">
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>

          <div className="manual-payment">
            <h4>Or Pay Manually:</h4>
            <p><strong>Account Name:</strong> {accountName}</p>
            <p><strong>Account Number:</strong> {accountNumber}</p>
            <p><strong>Bank:</strong> {bankName}</p>
          </div>
        </div>
      </div>

      <style>{`
        .premium-container {
          display: flex;
          min-height: 100vh;
          background-color: #f5fff8;
          color: #1e3c24;
          font-family: 'Poppins', sans-serif;
        }

        .premium-content {
          flex: 1;
          padding: 2rem;
          text-align: center;
        }

        .premium-title {
          color: #1b5e20;
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }

        .premium-subtitle {
          color: #2e7d32;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .premium-list {
          list-style: none;
          padding: 0;
          margin: 1rem auto;
          text-align: left;
          max-width: 400px;
        }

        .premium-list li {
          background: #e8f5e9;
          margin: 0.5rem 0;
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 1rem;
        }

        .premium-payment {
          margin-top: 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          display: inline-block;
          text-align: left;
        }

        .premium-payment h3 {
          color: #1b5e20;
          text-align: center;
          margin-bottom: 1rem;
        }

        .paystack-button {
          background-color: #2e7d32;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem;
          transition: background 0.3s ease;
          width: 100%;
        }

        .paystack-button:hover {
          background-color: #1b5e20;
        }

        .manual-payment {
          margin-top: 1.5rem;
          background: #f1f8e9;
          padding: 1rem;
          border-radius: 8px;
        }

        .manual-payment p {
          margin: 0.2rem 0;
          color: #1b5e20;
        }

        @media (max-width: 768px) {
          .premium-content {
            padding: 1.2rem;
          }
          .premium-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Premium;