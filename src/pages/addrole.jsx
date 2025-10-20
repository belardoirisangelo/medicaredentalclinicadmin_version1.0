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
const AddRole = ({ initialData, onSubmit, onBack }) => {
  const isEditMode = !!initialData;
  const pageTitle = isEditMode ? 'Edit Role' : 'Add Role';
  const submitButtonText = isEditMode ? 'Save Changes' : 'Add';

  // Initial state for form fields
  const [formData, setFormData] = useState({
    roleId: '',
    role: '',
    description: '',
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
          <h2 className="personnel-list-title">Roles and Departments</h2>
          <h3 className="page-action-title">{pageTitle}</h3>

          <form onSubmit={handleSubmit} className="personnel-form">
            {/* Top Row Inputs */}
            <div className="form-row">
                <label className="form-label half-width">
                    <span>Role ID:</span>
                    <input
                        type="text"
                        name="roleId"
                        value={formData.roleId}
                        onChange={handleChange}
                        readOnly={isEditMode} // Typically, the ID is not editable
                />
                </label>
            </div>

            {/* Other Information */}
            <div className="form-row">
                <label className="form-label full-width">
                    <span>Role:</span>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} />
                </label>
            </div>
            <div className="form-row">
                <label className="form-label full-width">
                    <span className="required-field">Description:</span>
                    <input type="text" name="rate" value={formData.description} onChange={handleChange} />
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

export default AddRole;