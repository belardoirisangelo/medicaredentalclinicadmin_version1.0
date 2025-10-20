import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/Layout.css";
import "../styles/TableStyles.css";
import "../styles/actionbutton.css";

const WorkingHours = () => {
  const workinghoursData = [
    {
      scheduleId: "1234567",
      personnelId: "1234",
      departmentId: "12",
      dayofweek: "Tuesday",
      timeIn: "9:00 A.M.",
      timeOut: "5:00 P.M.",
      breakStartTime: "1:00 P.M.",
      breakEndTime: "2:00 P.M."
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
                <input type="text" placeholder="Search Working Hours" />
                <Link to="/addworkinghours" className="action-btn add">
                    ➕ Add Working Hours
                </Link>
            </div>
          </div>
           <hr />

          <table>
            <thead>
              <tr>
                <th>Schedule ID</th>
                <th>Personnel ID</th>
                <th>Department ID</th>
                <th>Day Of Week</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Break Start Time</th>
                <th>Break End Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {workinghoursData.map((workhours, index) => (
                <tr key={index}>
                  <td>{workhours.scheduleId}</td>
                  <td>{workhours.personnelId}</td>
                  <td>{workhours.departmentId}</td>
                  <td>{workhours.dayofweek}</td>
                  <td>{workhours.timeIn}</td>
                  <td>{workhours.timeOut}</td>
                  <td>{workhours.breakStartTime}</td>
                  <td>{workhours.breakEndTime}</td>
                  <td>
                    <Link to="/editworkinghours" className="action-btn edit">
                      ✏️
                    </Link>
                    <Link to="/addworkinghours" className="action-btn delete">
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

export default WorkingHours;