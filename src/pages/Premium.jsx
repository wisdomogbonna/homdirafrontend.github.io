import React from "react";
import { PaystackButton } from "react-paystack-v3";
import SidebarMenu from "../components/SidebarMenu";

const Premium = () => {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const amount = 300000; // ₦3,000 (Paystack works in kobo)
  const email = localStorage.getItem("userEmail") || "homdira@example.com";
  const name = localStorage.getItem("userName") || "Homdira User";
  const phone = localStorage.getItem("userPhone") || "08000000000";

  const paystackProps = {
    email,
    amount,
    publicKey,
    text: "Upgrade to Premium",
    metadata: {
      name,
      phone
    },
    onSuccess: () => alert("✅ Payment Successful! Enjoy your premium benefits."),
    onClose: () => alert("❌ Transaction cancelled.")
  };

  return (
    <div style={styles.page}>
      <SidebarMenu />
      <div style={styles.container}>
        <h1 style={styles.title}>Upgrade to Premium</h1>
        <p style={styles.desc}>
          Enjoy <strong>unlimited property postings</strong>, <strong>more views</strong>,
          and <strong>priority listings</strong> on Homdira.
        </p>

        <div style={styles.benefits}>
          <h3>Premium Benefits:</h3>
          <ul>
            <li>⭐ Unlimited property uploads</li>
            <li>📈 Priority in search results</li>
            <li>👀 Increased listing visibility</li>
            <li>📞 Direct tenant contacts</li>
            <li>💬 Access to in-app messaging</li>
          </ul>
        </div>

        <div style={styles.paymentBox}>
          <p style={styles.amount}>₦3,000 / month</p>
          <PaystackButton {...paystackProps} className="paystack-button" />
        </div>

        <div style={styles.accountInfo}>
          <h3>Manual Payment Option</h3>
          <p>💳 UBA — <strong>2142407622</strong></p>
          <p><strong>Ajuzieogu Light Ihechi</strong></p>
        </div>
      </div>
    </div>
  );
};

// Inline CSS (green/white theme)
const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f5fff7",
    color: "#0b5e3c",
    fontFamily: "Inter, sans-serif"
  },
  container: {
    flex: 1,
    padding: "2rem",
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center"
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#0b5e3c"
  },
  desc: {
    fontSize: "1.1rem",
    marginBottom: "2rem"
  },
  benefits: {
    textAlign: "left",
    marginBottom: "2rem"
  },
  paymentBox: {
    backgroundColor: "#0b5e3c",
    color: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "2rem"
  },
  amount: {
    fontSize: "1.5rem",
    marginBottom: "1rem"
  },
  accountInfo: {
    marginTop: "1.5rem",
    background: "#e8f9f0",
    padding: "1rem",
    borderRadius: "8px"
  }
};

export default Premium;