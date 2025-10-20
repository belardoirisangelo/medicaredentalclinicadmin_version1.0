import React from "react";
import "../styles/Layout.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1>MEDICARE - DENTAL CLINIC</h1>
      <div className="header-profile">
        <span>Sofia Smith</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
        />
        <span className="status-dot"></span>
      </div>
    </div>
  );
};

export default Header;