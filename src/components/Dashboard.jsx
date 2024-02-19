import React from 'react';

function Dashboard({ firstName }) {
  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:5000/register-for-activity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem('email'), // Retrieve the user's email from localStorage
          activity: 'Dance',
          date: '2024-02-05', // Replace with the date of the activity
          time: '5:00 PM', // Replace with the time of the activity
        }),
      });
      const data = await response.json(); // Parse the JSON response
      if (response.ok) {
        console.log('Registration successful!!');
        // Display a success message to the user
        alert('You have successfully registered for Dance at 5:00 PM!');
      } else {
        console.error('Registration failed');
        // Display an error message to the user
        alert('Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Server error:', error);
      // Display an error message to the user
      alert('Server error. Please try again later.');
    }
  };
  

  return (
    <div className="dashboard">
      <h2>Welcome, {firstName}!</h2>
      <h3>Here are your slots for the current week:</h3>
      <div className="slot-container">
        <div className="slot" onClick={handleRegistration}>
          <div className="time">5:00 PM</div>
          <div className="activity">Dance</div>
        </div>
        {/* Add more slots here */}
      </div>
    </div>
  );
}

export default Dashboard;
