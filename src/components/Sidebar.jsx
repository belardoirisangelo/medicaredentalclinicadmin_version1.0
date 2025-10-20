import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Layout.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button onClick={() => navigate("/dashboardadmin")}>🏠</button>
      <button onClick={() => navigate("/personnellist")}>👥</button>
      <button onClick={() => navigate("/patientlistadmin")}>🧍‍♀️</button>
      <button onClick={() => navigate("/totalsalarylist")}>💰</button>
      <button onClick={() => navigate("/rolesanddepartments")}>💼🏬</button>
      <button onClick={() => navigate("/workinghours")}>👨🏻‍💻</button>
      <button onClick={() => navigate("/leavemanagement")}>🏃🚪</button>
      <button onClick={() => navigate("/logout")}>Log Out</button>
    </div>
  );
};

export default Sidebar;