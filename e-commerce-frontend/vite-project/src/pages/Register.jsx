import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ username, email, password }); // Ajout de logs pour vérifier les données
    try {
      await axios.post("http://localhost:5000/api/user/register", { username, email, password });
      alert("User registered successfully");
    } catch (error) {
      console.error("There was an error registering!", error);
      if (error.response && error.response.data && error.response.data.errors) {
        alert("Validation errors: " + JSON.stringify(error.response.data.errors));
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
