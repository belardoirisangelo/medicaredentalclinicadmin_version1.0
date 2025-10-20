import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/Layout.css";
import "../styles/TableStyles.css";
import "../styles/actionbutton.css";

const TotalSalaryList = () => {
  const salaryData = [
    {
      totalSalaryId: "TS001",
      PersonnelId: "1001",
      calcDate: "09/30/2025",
      totalHours: "160",
      rate: "₱187.5/hr",
      amount: "₱30,000"
    }
  ];

  return (
    <div className="layout">
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="table-container">
          <div className="table-header">
            <h2>Total Salary List</h2>
            <div className="page-actions">
                <input type="text" placeholder="Search Total Salary" />
                <Link to="/addtotalsalary" className="action-btn add">
                    ➕ Add Total Salary
                </Link>
                </div>
          </div>
           <hr />

          <table>
            <thead>
              <tr>
                <th>Total Salary ID</th>
                <th>Personnel ID</th>
                <th>Calculation Date</th>
                <th>Total Hours</th>
                <th>Rate</th>
                <th>Calculated Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((s, i) => (
                <tr key={i}>
                  <td>{s.totalSalaryId}</td>
                  <td>{s.PersonnelId}</td>
                  <td>{s.calcDate}</td>
                  <td>{s.totalHours}</td>
                  <td>{s.rate}</td>
                  <td>{s.amount}</td>
                  <td>
                    <Link to="/edittotalsalary" className="action-btn edit">
                      ✏️
                    </Link>
                    <Link to="/addtotalsalary" className="action-btn delete">
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

export default TotalSalaryList;