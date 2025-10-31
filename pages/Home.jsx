import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyList from "../components/PropertyList";
import SearchModal from "../components/SearchModal";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchProperties = async () => {
    const res = await axios.get(`${API_URL}/api/properties`);
    setProperties(res.data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="home">
      <style>{`
        .home {
          background: #f9fdf9;
          min-height: 100vh;
        }
        .header {
          background: #0a9d57;
          color: white;
          padding: 20px;
          font-size: 20px;
          text-align: center;
        }
      `}</style>
      <div className="header">Find Your Next Home 🏡</div>
      <SearchModal onSearch={() => {}} />
      <PropertyList properties={properties} />
    </div>
  );
};

export default Home;