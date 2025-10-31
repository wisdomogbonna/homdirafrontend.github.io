import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyList from "../components/PropertyList";

const MyApartments = () => {
  const [properties, setProperties] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/api/properties/landlord/me`).then((res) => setProperties(res.data));
  }, []);

  return (
    <div className="my-apartments">
      <style>{`
        .my-apartments {
          background: #f9fdf9;
          min-height: 100vh;
        }
        h2 {
          text-align: center;
          color: #0a9d57;
          padding: 20px;
        }
      `}</style>
      <h2>My Apartments</h2>
      <PropertyList properties={properties} />
    </div>
  );
};

export default MyApartments;