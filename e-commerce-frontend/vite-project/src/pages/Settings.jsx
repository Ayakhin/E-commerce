import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Settings = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.get("http://localhost:5000/api/user/profile") // Assurez-vous que l'URL est correcte
        .then((response) => {
          setUser(response.data);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error("There was an error fetching the user profile!", error);
        });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/api/user/profile", { email, password }) // Assurez-vous que l'URL est correcte
      .then((response) => {
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("There was an error updating the profile!", error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" value={user.username} readOnly />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Settings;
