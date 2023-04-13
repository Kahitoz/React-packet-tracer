import React from "react";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const email = localStorage.getItem("userEmail"); // retrieve email from localStorage
  const name = email ? `Welcome  ${email}` : "Welcome Back";

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // remove email from localStorage
    navigate("/login"); // navigate to login page
  };

  return (
    <div>
      <div className="box">
        <p className="Text">{name}</p>
        
      </div>
      <button onClick={handleLogout} className="button">Logout</button>
    </div>
  );
}

export default Dashboard;
