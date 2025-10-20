import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/Layout.css";
import "../styles/TableStyles.css";
import "../styles/actionbutton.css";

const PatientListAdmin = () => {
  const patientData = [
    {
      patientId: "2000001",
      firstName: "Jane",
      lastName: "Doe",
      dob: "06-01-1998",
      primaryNumber: "+639123456789",
      email: "jane.doe@gmail.com",
      address: "House #18, Quezon City"
    }
  ];

  return (
    <div className="layout">
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="table-container">
          <div className="table-header">
            <h2>Patient List</h2>
            <div className="page-actions">
            <input type="text" placeholder="Search Patient" />
                <Link to="/addpatient" className="action-btn add">
                    ➕ Add Patient
                </Link>
            </div>
          </div>
           <hr />

          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Primary Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((p, i) => (
                <tr key={i}>
                  <td>{p.patientId}</td>
                  <td>{p.firstName}</td>
                  <td>{p.lastName}</td>
                  <td>{p.dob}</td>
                  <td>{p.primaryNumber}</td>
                  <td>{p.email}</td>
                  <td>{p.address}</td>
                  <td>
                    <Link to="/editpatient" className="action-btn edit">
                      ✏️
                    </Link>
                    <Link to="/addpatient" className="action-btn delete">
                      🗑️
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientListAdmin;
