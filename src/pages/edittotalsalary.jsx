import "../styles/Layout.css";
import "../styles/TableStyles.css";
import React, { useState, useEffect } from 'react';
import '../styles/adminform.css'; // Import the shared CSS file
import AddTotalSalary from './addtotalsalary';

// This is dummy data to simulate a fetch request for a personnel record
const dummytotalSalaryData = {
    totalSalaryId: '1234567',
    personnelId: '1234',
    calcDate: '12-12-2012',
    totalHours: '',
    rate: '',
    amount: '',
};

const EditTotalSalary = () => {
  const [totalSalaryData, settotalSalaryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data on component mount
  useEffect(() => {
    // In a real application, you would make an API call here
    // Example: fetch(`/api/personnel/${personnelId}`)
    setTimeout(() => {
      settotalSalaryData(dummytotalSalaryData);
      setLoading(false);
    }, 500); // Simulate network delay
  }, []); // Empty dependency array means run once on mount

  const handleFormSubmit = (updatedData) => {
    console.log('Submitting updated personnel data:', updatedData);
    // In a real application, you would call an API to update the record (PUT/PATCH request)
    alert('Patient record updated successfully!');
    // Then typically redirect back to the personnel list
  };

  const handleBack = () => {
    console.log('Navigating back to Patient List...');
    // In a real application, this would be a navigation function (e.g., using React Router's history.push)
  };

  if (loading) {
    return <div className="loading-state">Loading personnel data...</div>;
  }

  if (error) {
    return <div className="error-state">Error loading data: {error}</div>;
  }

  return (
    <AddTotalSalary
      initialData={totalSalaryData} // Pass the fetched data to pre-fill the form
      onSubmit={handleFormSubmit}
      onBack={handleBack}
    />
  );
};

export default EditTotalSalary;