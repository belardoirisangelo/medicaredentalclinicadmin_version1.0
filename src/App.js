import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboardadmin";
import PersonnelList from "./pages/personnellist";
import PatientListAdmin from "./pages/patientlistadmin";
import TotalSalaryList from "./pages/totalsalarylist";
import RolesAndDepartments from "./pages/rolesanddepartments";
import WorkingHours from "./pages/workinghours";
import LeaveManagement from "./pages/leavemanagement";
import AddPersonnel from "./pages/addpersonnel";
import EditPersonnel from "./pages/editpersonnel";
import AddPatient from "./pages/addpatient";
import EditPatient from "./pages/editpatient";
import AddTotalSalary from './pages/addtotalsalary';
import EditTotalSalary from './pages/edittotalsalary';
import AddRole from './pages/addrole';
import EditRole from './pages/editrole';
import AddDepartment from './pages/adddepartment';
import EditDepartment from './pages/editdepartment';
import AddWorkingHours from './pages/addworkinghours';
import EditWorkingHours from './pages/editworkinghours';
import AddLeave from './pages/addleave';
import EditLeave from './pages/editleave';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardAdmin />} />
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="personnellist" element={<PersonnelList />} />
          <Route path="patientlistadmin" element={<PatientListAdmin />}/>
          <Route path="totalsalarylist" element={<TotalSalaryList />}/>
          <Route path="rolesanddepartments" element={<RolesAndDepartments />}/>
          <Route path="workinghours" element={<WorkingHours />}/>
          <Route path="leavemanagement" element={<LeaveManagement />}/>
          <Route path="addpersonnel" element={<AddPersonnel />}/>
          <Route path="editpersonnel" element={<EditPersonnel />}/>
          <Route path="addpatient" element={<AddPatient />}/>
          <Route path="editpatient" element={<EditPatient />}/>
          <Route path="addtotalsalary" element={<AddTotalSalary/>}/>
          <Route path="edittotalsalary" element={<EditTotalSalary/>}/>
          <Route path="addrole" element={<AddRole/>}/>
          <Route path="editrole" element={<EditRole/>}/>
          <Route path="adddepartment" element={<AddDepartment/>}/>
          <Route path="editdepartment" element={<EditDepartment/>}/>
          <Route path="addworkinghours" element={<AddWorkingHours/>}/>
          <Route path="editworkinghours" element={<EditWorkingHours/>}/>
          <Route path="addleave" element={<AddLeave/>}/>
          <Route path="editleave" element={<EditLeave/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;