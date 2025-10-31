import React, { useState } from "react";
import { PaystackButton } from "react-paystack-v2";

const Premium = () => {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const amount = 5000 * 100; // Fixed ₦5,000 — Paystack expects kobo
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay ₦5,000 for Premium",
    onSuccess: () =>
      alert("Payment successful! Your premium access is now active."),
    onClose: () => alert("Payment cancelled."),
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Upgrade to Premium</h1>
        <p style={styles.subtitle}>
          Enjoy unlimited listings, boosted visibility, and verified landlord
          status on <strong>Homdira</strong>.
        </p>

        <ul style={styles.benefits}>
          <li>✅ Unlimited property postings</li>
          <li>🚀 Higher ranking in search results</li>
          <li>📞 Direct tenant contact</li>
          <li>🛡 Verified landlord badge</li>
          <li>💬 Priority support</li>
        </ul>

        <div style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />

          {/* Display fixed amount */}
          <div style={styles.amountBox}>Amount: ₦5,000</div>

          <PaystackButton {...componentProps} className="payButton" />
        </div>

        <div style={styles.accountDetails}>
          <p style={styles.accountTitle}>Manual Payment Option:</p>
          <p>Account Number: <strong>2142407622</strong></p>
          <p>Bank: <strong>UBA</strong></p>
          <p>Account Name: <strong>Ajuzieogu Light Ihechi</strong></p>
        </div>
      </div>
    </div>
  );
};

// 💅 Inline styling for a clean green-white Homdira look
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fdf8",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "15px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    color: "#0f5132",
    fontSize: "2rem",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#555",
    marginBottom: "20px",
  },
  benefits: {
    textAlign: "left",
    marginBottom: "20px",
    color: "#333",
    lineHeight: "1.8",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
  },
  amountBox: {
    backgroundColor: "#e6f4ea",
    color: "#0f5132",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  accountDetails: {
    marginTop: "30px",
    backgroundColor: "#f1fdf3",
    padding: "15px",
    borderRadius: "10px",
    color: "#333",
  },
  accountTitle: {
    color: "#0f5132",
    fontWeight: "bold",
    marginBottom: "5px",
  },
};

export default Premium;