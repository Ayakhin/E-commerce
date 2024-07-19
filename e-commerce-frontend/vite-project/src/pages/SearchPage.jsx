import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Search for Products</h1>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default SearchPage;
