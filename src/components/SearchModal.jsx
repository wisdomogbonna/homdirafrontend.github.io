import React, { useState } from "react";

const SearchModal = ({ onSearch }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <style>{`
        .search-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 22px;
          background: none;
          color: #0a9d57;
          border: none;
          cursor: pointer;
          z-index: 1000;
        }
        .search-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: ${open ? "flex" : "none"};
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .search-box {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .search-box input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .search-box button {
          background: #0a9d57;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>

      <button className="search-btn" onClick={() => setOpen(true)}>🔍</button>

      <div className="search-modal" onClick={() => setOpen(false)}>
        <div className="search-box" onClick={(e) => e.stopPropagation()}>
          <input
            placeholder="Search apartments..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => onSearch(query)}>Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchModal;