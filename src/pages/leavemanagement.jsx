import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/Layout.css";
import "../styles/TableStyles.css";
import "../styles/actionbutton.css";

const LeaveManagement = () => {
  const leavemanagementData = [
    {
      leaveId: "1234567",
      personnelId: "1234",
      leaveStartDate: "09/01/2020",
      leaveEndDate: "10/01/2020",
      reason: "personal problems"
    }
  ];

  return (
    <div className="layout">
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="table-container">
          <div className="table-header">
            <h2>Working Hours</h2>
            <div className="page-actions">
                <input type="text" placeholder="Search Leave" />
                    <Link to="/addleave" className="action-btn add">
                        ➕ Add Leave
                    </Link>
                </div>
          </div>
           <hr />

          <table>
            <thead>
              <tr>
                <th>Leave ID</th>
                <th>Personnel ID</th>
                <th>Leave Start Date</th>
                <th>Leave End Date</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leavemanagementData.map((leavingpersonnel, index) => (
                <tr key={index}>
                  <td>{leavingpersonnel.leaveId}</td>
                  <td>{leavingpersonnel.personnelId}</td>
                  <td>{leavingpersonnel.leaveStartDate}</td>
                  <td>{leavingpersonnel.leaveEndDate}</td>
                  <td>{leavingpersonnel.reason}</td>
                  <td>
                    <Link to="/editleave" className="action-btn edit">
                      ✏️
                    </Link>
                    <Link to="/addleave" className="action-btn delete">
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

export default LeaveManagement;