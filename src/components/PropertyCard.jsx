import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <style>{`
        .property-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.2s ease;
          width: 280px;
        }
        .property-card:hover {
          transform: translateY(-5px);
        }
        .property-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .property-info {
          padding: 10px 15px;
        }
        .property-info h3 {
          font-size: 16px;
          color: #0a9d57;
          margin-bottom: 5px;
        }
        .property-info p {
          margin: 0;
          color: #555;
          font-size: 14px;
        }
      `}</style>

      <img src={property.image} alt="apartment" />
      <div className="property-info">
        <h3>₦{property.price.toLocaleString()}</h3>
        <p>{property.location}</p>
        <p>{property.description}</p>
        <p>📞 {property.contact}</p>
      </div>
    </div>
  );
};

export default PropertyCard;