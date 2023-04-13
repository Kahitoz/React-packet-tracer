import React from "react";
import "./Dashboard.css"

function Dashboard() {
  const email = localStorage.getItem("userEmail"); // retrieve email from localStorage
  const name = email ? `Welcome  ${email}` : "Welcome Back";

  return (
    <div>
      <div>
        <p className="Text">{name}</p>
      </div>
    </div>
  );
}

export default Dashboard;
