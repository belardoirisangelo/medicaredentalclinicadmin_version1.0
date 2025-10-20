import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/Layout.css";
import "../styles/TableStyles.css";
import React, { useState, useEffect } from 'react';
import '../styles/adminform.css'; // Import the shared CSS file

/**
 * Reusable component for both Adding and Editing Personnel.
 *
 * @param {object} props
 * @param {object} props.initialData - Personnel data to pre-fill the form for editing.
 * If null or undefined, it's an "Add" operation.
 * @param {function} props.onSubmit - Function to handle form submission.
 * @param {function} props.onBack - Function to handle the "Back" action.
 */
const AddPersonnel = ({ initialData, onSubmit, onBack }) => {
  const isEditMode = !!initialData;
  const pageTitle = isEditMode ? 'Edit Personnel' : 'Add Personnel';
  const submitButtonText = isEditMode ? 'Save Changes' : 'Add';

  // Initial state for form fields
  const [formData, setFormData] = useState({
    personnelId: '',
    roleId: '',
    lastName: '',
    firstName: '',
    middleName: '',
    email: '',
    primaryAddress: '',
    secondaryAddress: '',
    password: '',
    priNumber: '',
    secNumber: '',
    departmentId: '',
    licenseNumber: '',
    hireDate: '', // Date will be handled as a string for simplicity
    salary: '',
    ...initialData, // Overwrite with initialData if in edit mode
  });

  // Effect to update form data if initialData changes (useful in a larger application)
  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation could go here
    onSubmit(formData);
  };

  return (
    <div className="layout">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        {/* Main Content Area */}
      <div className="personnel-form-content">

        <div className="form-area">
          <h2 className="personnel-list-title">Personnel List</h2>
          <h3 className="page-action-title">{pageTitle}</h3>

          <form onSubmit={handleSubmit} className="personnel-form">
            {/* Top Row Inputs */}
            <div className="form-row">
              <label className="form-label half-width">
                <span>Personnel ID:</span>
                <input
                  type="text"
                  name="personnelId" // Using patientID as a placeholder for Personnel ID from screenshot
                  value={formData.personnelId}
                  onChange={handleChange}
                  readOnly={isEditMode} // Typically, the ID is not editable
                />
              </label>
              <label className="form-label half-width">
                <span>Role ID:</span>
                <input
                  type="text"
                  name="roleID"
                  value={formData.roleID}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Name Fields (Full Width) */}
            <label className="form-label full-width">
              <span>Last Name:</span>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
            <label className="form-label full-width">
              <span>First Name:</span>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            <label className="form-label full-width">
              <span>Middle Name:</span>
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
            </label>

            {/* Contact Fields (Full Width) */}
            <label className="form-label full-width">
              <span>Email:</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label className="form-label full-width">
              <span className="required-field">Primary Address:</span>
              <input type="text" name="primaryAddress" value={formData.primaryAddress} onChange={handleChange} />
            </label>
            <label className="form-label full-width">
              <span>Secondary Address:</span>
              <input type="text" name="secondaryAddress" value={formData.secondaryAddress} onChange={handleChange} />
            </label>

            {/* Password Field */}
            {/* Only show password field on Add or with specific logic in Edit */}
            {!isEditMode && (
              <label className="form-label full-width">
                <span>Password:</span>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
              </label>
            )}

            {/* Numbers Row */}
            <div className="form-row">
              <label className="form-label half-width">
                <span className="required-field">Primary Number:</span>
                <input type="tel" name="primaryNumber" value={formData.primaryNumber} onChange={handleChange} />
              </label>
              <label className="form-label half-width">
                <span>Secondary Number:</span>
                <input type="tel" name="secondaryNumber" value={formData.secondaryNumber} onChange={handleChange} />
              </label>
            </div>

            {/* IDs and License Row */}
            <div className="form-row">
              <label className="form-label half-width">
                <span>Department ID:</span>
                <input type="text" name="departmentID" value={formData.departmentID} onChange={handleChange} />
              </label>
              <label className="form-label half-width">
                <span>License Number:</span>
                <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
              </label>
            </div>

            {/* Hire Date and Salary Row */}
            <div className="form-row">
              <label className="form-label half-width">
                <span>Hire Date:</span>
                {/* Simplified date input based on screenshot's dropdowns */}
                <input type="date" name="hireDate" value={formData.hireDate} onChange={handleChange} />
              </label>
              <label className="form-label half-width">
                <span>Salary:</span>
                <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="submit" className="submit-button">{submitButtonText}</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddPersonnel;