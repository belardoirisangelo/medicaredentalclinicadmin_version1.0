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
const AddWorkingHours = ({ initialData, onSubmit, onBack }) => {
  const isEditMode = !!initialData;
  const pageTitle = isEditMode ? 'Edit Working Hours' : 'Add Working Hours';
  const submitButtonText = isEditMode ? 'Save Changes' : 'Add';

  // Initial state for form fields
  const [formData, setFormData] = useState({
    scheduleId: '',
    personnelId: '',
    departmentId: '',
    timeIn: '',
    timeOut: '',
    breakStartTime: '',
    breakEndTime: '',
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
          <h2 className="personnel-list-title">Working Hours</h2>
          <h3 className="page-action-title">{pageTitle}</h3>

          <form onSubmit={handleSubmit} className="personnel-form">
            {/* Top Row Inputs */}
            <div className="form-row">
              <label className="form-label half-width">
                <span>Schedule ID:</span>
                <input
                  type="text"
                  name="scheduleId"
                  value={formData.scheduleId}
                  onChange={handleChange}
                  readOnly={isEditMode} // Typically, the ID is not editable
                />
              </label>
            </div>

            {/* IDs and day of week */}
            <div className="form-row"> 
              <label className="form-label half-width">
                <span>Personnel ID:</span>
                <input type="text" name="personnelId" value={formData.personnelId} onChange={handleChange} />
              </label>
              <label className="form-label half-width">
                <span>Department ID:</span>
                <input type="text" name="departmentId" value={formData.departmentId} onChange={handleChange} />
              </label>
              <label className="form-label half-width">
                <span>Day of Week:</span>
                <input type="text" name="dayofweek" value={formData.dayofweek} onChange={handleChange} />
              </label>
            </div>

            {/* Schedule */}
            <label className="form-label half-width">
                <span>Time In:</span>
                <input type="time" name="BirthDate" value={formData.BirthDate} onChange={handleChange} />
              </label>
            <label className="form-label half-width">
                <span>Time Out:</span>
                <input type="time" name="primaryNumber" value={formData.primaryNumber} onChange={handleChange} />
              </label>
            <label className="form-label full-width">
              <span>Break Start Time:</span>
              <input type="time" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label className="form-label full-width">
              <span className="required-field">Break End Time:</span>
              <input type="time" name="Address" value={formData.Address} onChange={handleChange} />
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

export default AddWorkingHours;