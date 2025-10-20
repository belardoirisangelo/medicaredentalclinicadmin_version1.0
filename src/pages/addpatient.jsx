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
const AddPatient = ({ initialData, onSubmit, onBack }) => {
  const isEditMode = !!initialData;
  const pageTitle = isEditMode ? 'Edit Patient' : 'Add Patient';
  const submitButtonText = isEditMode ? 'Save Changes' : 'Add';

  // Initial state for form fields
  const [formData, setFormData] = useState({
    patientId: '',
    firstName: '',
    lastName: '',
    dob: '',
    priNumber: '',
    secNumber: '',
    email: '',
    address: '',
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
          <h2 className="personnel-list-title">Patient List</h2>
          <h3 className="page-action-title">{pageTitle}</h3>

          <form onSubmit={handleSubmit} className="personnel-form">
            {/* Top Row Inputs */}
            <div className="form-row">
              <label className="form-label half-width">
                <span>Patient ID:</span>
                <input
                  type="text"
                  name="patientId" // Using patientID as a placeholder for Personnel ID from screenshot
                  value={formData.patientId}
                  onChange={handleChange}
                  readOnly={isEditMode} // Typically, the ID is not editable
                />
              </label>
            </div>

            {/* Name Fields (Full Width) */}
            <label className="form-label full-width">
              <span>First Name:</span>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            <label className="form-label full-width">
              <span>Last Name:</span>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>

            {/* Other Information */}
            <label className="form-label half-width">
                <span>Date of Birth:</span>
                {/* Simplified date input based on screenshot's dropdowns */}
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </label>
            <label className="form-label half-width">
                <span className="required-field">Primary Number:</span>
                <input type="tel" name="primaryNumber" value={formData.primaryNumber} onChange={handleChange} />
              </label>
            <label className="form-label full-width">
              <span>Email:</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label className="form-label full-width">
              <span className="required-field">Address:</span>
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>

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

export default AddPatient;