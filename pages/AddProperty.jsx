import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState({
    title: "",
    location: "",
    price: "",
    contact: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/api/properties`, data);
    alert("Property added successfully!");
  };

  return (
    <div className="add-property">
      <style>{`
        .add-property {
          padding: 30px;
          background: #f9fdf9;
          height: 100vh;
        }
        .add-property h2 {
          color: #0a9d57;
          text-align: center;
          margin-bottom: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          max-width: 400px;
          margin: 0 auto;
        }
        input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        button {
          background: #0a9d57;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
      <h2>Add Apartment</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setData({ ...data, title: e.target.value })} />
        <input placeholder="Location" onChange={(e) => setData({ ...data, location: e.target.value })} />
        <input placeholder="Price (₦)" onChange={(e) => setData({ ...data, price: e.target.value })} />
        <input placeholder="Contact Number" onChange={(e) => setData({ ...data, contact: e.target.value })} />
        <input placeholder="Image URL" onChange={(e) => setData({ ...data, image: e.target.value })} />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;