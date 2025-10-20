import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/TableStyles.css";
import "../styles/Layout.css";
import "../styles/actionbutton.css";

const RolesAndDepartments = () => {
  const RolesData = [
    {
      roleId: "12",
      role: "Dental Doctor",
      description: "Helps with underlying conditions from a patients dental health.",
    }
  ];

  const DepartmentsData = [
    {
      departmentId: "int (2)",
      branch: "varchar (255)",
      manager: "varchar (255)",
    }
  ];

  return (
    <div className="layout">
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="table-container">
          <div className="table-header">
            <h2>Roles And Departments</h2>
            <div className="page-actions">
                <input type="text" placeholder="Search Role" />
                    <Link to="/addpersonnel" className="action-btn add">
                        ➕ Add Role
                    </Link>
            </div>
          </div>
          <hr />

          <table>
            <thead>
              <tr>
                <th>Role ID</th>
                <th>Role</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {RolesData.map((roles, index) => (
                <tr key={index}>
                  <td>{roles.roleId}</td>
                  <td>{roles.role}</td>
                  <td>{roles.description}</td>
                  <td>
                    <Link to="/editrole" className="action-btn edit">
                      ✏️
                    </Link>
                    <Link to="/addrole" className="action-btn delete">
                      🗑️
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            <br />
            <br />
            <div className="page-actions">
                <input type="text" placeholder="Search Department" />
                    <Link to="/addpersonnel" className="action-btn add">
                        ➕ Add Department
                    </Link>
            </div>
            <hr />
            <br />
          <table>
            <thead>
              <tr>
                <th>Department ID</th>
                <th>Branch</th>
                <th>Manager</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {DepartmentsData.map((departments, index) => (
                <tr key={index}>
                  <td>{departments.departmentId}</td>
                  <td>{departments.branch}</td>
                  <td>{departments.manager}</td>
                  <td>
                    <Link to="/editdepartment" className="action-btn edit">
                      ✏️
                    </Link>
                    <Link to="/adddepartment" className="action-btn delete">
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

export default RolesAndDepartments;