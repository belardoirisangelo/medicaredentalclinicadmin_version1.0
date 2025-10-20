import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/TableStyles.css";
import "../styles/Layout.css";
import "../styles/actionbutton.css";

const PersonnelList = () => {
  const personnelData = [
    {
      personnelId: "1001",
      roleId: "rxc(1)",
      lastName: "Doe",
      firstName: "John",
      middleName: "A.",
      email: "john.doe@gmail.com",
      primaryAddress: "Quezon City",
      secondaryAddress:"",
      password:"",
      priNumber:"",
      secNumber:"",
      departmentId:"",
      licenseNumber:"",
      hireDate: "2024-02-10",
      salary: "₱30,000"
    }
  ];

  return (
    <div className="layout">
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="table-container">
          <div className="table-header">
            <h2>Personnel List</h2>
            <div className="page-actions">
            <input type="text" placeholder="Search Personnel" />
            <Link to="/addpersonnel" className="action-btn add">
                ➕ Add Personnel
            </Link>
            </div>
          </div>
          <hr />

          <table>
            <thead>
              <tr>
                <th>Personnel ID</th>
                <th>Role ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Email</th>
                <th>Primary Address</th>
                <th>Secondary Address</th>
                <th>Password Hash</th>
                <th>Primary Number</th>
                <th>Secondary Number</th>
                <th>Department ID</th>
                <th>License Number</th>
                <th>Hire Date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {personnelData.map((person, index) => (
                <tr key={index}>
                  <td>{person.personnelId}</td>
                  <td>{person.roleId}</td>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
                  <td>{person.middleName}</td>
                  <td>{person.email}</td>
                  <td>{person.primaryAddress}</td>
                  <td>{person.secondaryAddress}</td>
                  <td>{person.password}</td>
                  <td>{person.priNumber}</td>
                  <td>{person.secNumber}</td>
                  <td>{person.departmentId}</td>
                  <td>{person.licenseNumber}</td>
                  <td>{person.hireDate}</td>
                  <td>{person.salary}</td>
                  <td>
                    <Link to="/editpersonnel" className="action-btn edit">
                      ✏️
                    </Link>
                    <Link to="/addpersonnel" className="action-btn delete">
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

export default PersonnelList;