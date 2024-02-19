import React, { useState } from "react";
import Dashboard from "./Dashboard";

function LoginPage() {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(); // Parse the JSON response
      if (response.ok) {
        // Authentication successful
        setLoggedIn(true); // Set loggedIn state to true
      } else {
        setError(data.message); // Display error message from server
      }
    } catch (error) {
      console.error("Server error:", error);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="container_1">
      {!loggedIn ? ( // Render the login form if user is not logged in
        <>
       
            <h2 className="success-message">
              You have Successfully Registered with us! :)
            </h2>
       

          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        </>
      ) : (
        // Render the Dashboard if user is logged in
        <Dashboard firstName={firstName} lastName={lastName} />
      )}
    </div>
  );
}

export default LoginPage;
