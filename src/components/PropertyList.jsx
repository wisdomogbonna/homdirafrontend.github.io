import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await axios.get(`${API_URL}/api/properties`);
      setProperties(data);
    };
    fetchProperties();
  }, []);

  return (
    <div className="property-list">
      <style>{`
        .property-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          padding: 20px;
          background: #f9fdf9;
        }
      `}</style>

      {properties.length > 0 ? (
        properties.map((p, i) => <PropertyCard key={i} property={p} />)
      ) : (
        <p style={{ color: "#555" }}>No properties available yet.</p>
      )}
    </div>
  );
};

export default PropertyList;