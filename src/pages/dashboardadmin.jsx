import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/dashboardadmin.css";
import "../styles/Layout.css";
  
const DashboardAdmin = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: "30px" }}>
          <h2>Dashboard (Admin)</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "30px"
            }}
          >
            <div className="dashboard-buttons-container">
                <Link to="/personnellist" className="dashboard-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Employee" className="card-icon" />
                    <span className="card-text">Employee List</span>
                </Link>

                <Link to="/patientlistadmin" className="dashboard-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Patient" className="card-icon" />
                    <span className="card-text">Patient List</span>
                </Link>

                <Link to="/totalsalarylist" className="dashboard-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Salary" className="card-icon" />
                    <span className="card-text">Total Salary List</span>
                </Link>

                <Link to="/rolesanddepartments" className="dashboard-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1570/1570990.png" alt="Roles" className="card-icon" />
                    <span className="card-text">Roles & Department List</span>
                </Link>

                <Link to="/workinghours" className="dashboard-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Working Hours" className="card-icon" />
                    <span className="card-text">Working Hours</span>
                </Link>

                <Link to="/leavemanagement" className="dashboard-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="Leave" className="card-icon" />
                    <span className="card-text">Leave Management</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
