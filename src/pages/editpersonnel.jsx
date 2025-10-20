import AddPersonnel from './addpersonnel'; // Import the shared form component
import "../styles/Layout.css";
import "../styles/TableStyles.css";
import React, { useState, useEffect } from 'react';
import '../styles/adminform.css'; // Import the shared CSS file

// This is dummy data to simulate a fetch request for a personnel record
const dummyPersonnelData = {
  personnelId: 'P00123',
  roleId: 'R005',
  lastName: 'Anderson',
  firstName: 'Jane',
  middleName: 'M.',
  email: 'jane.a@medicare.com',
  primaryAddress: '123 Main St, Anytown, CA',
  secondaryAddress: 'PO Box 456',
  password: '', // Password is usually left blank or handled separately in edit mode
  priNumber: '555-123-4567',
  secNumber: '555-987-6543',
  departmentId: 'DNTL',
  licenseNumber: 'L34567',
  hireDate: '2020-08-15', // Format compatible with type="date"
  salary: '75000',
};

const EditPersonnel = () => {
  const [personnelData, setPersonnelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data on component mount
  useEffect(() => {
    // In a real application, you would make an API call here
    // Example: fetch(`/api/personnel/${personnelId}`)
    setTimeout(() => {
      setPersonnelData(dummyPersonnelData);
      setLoading(false);
    }, 500); // Simulate network delay
  }, []); // Empty dependency array means run once on mount

  const handleFormSubmit = (updatedData) => {
    console.log('Submitting updated personnel data:', updatedData);
    // In a real application, you would call an API to update the record (PUT/PATCH request)
    alert('Personnel record updated successfully!');
    // Then typically redirect back to the personnel list
  };

  const handleBack = () => {
    console.log('Navigating back to Personnel List...');
    // In a real application, this would be a navigation function (e.g., using React Router's history.push)
  };

  if (loading) {
    return <div className="loading-state">Loading personnel data...</div>;
  }

  if (error) {
    return <div className="error-state">Error loading data: {error}</div>;
  }

  return (
    <AddPersonnel
      initialData={personnelData} // Pass the fetched data to pre-fill the form
      onSubmit={handleFormSubmit}
      onBack={handleBack}
    />
  );
};

export default EditPersonnel;