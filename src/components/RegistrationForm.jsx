import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm({ onClose }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(); // Parse the JSON response
      if (response.ok) {
        console.log('Registration successful!!', data.user);
        // Store the first name and last name in local storage
        localStorage.setItem('firstName', data.user.firstName);
        localStorage.setItem('lastName', data.user.lastName);
        onClose();
        navigate('/login'); // Redirect to the login page
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };
  
  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register for Session</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                {passwordMatchError && <div className="text-danger">Passwords do not match</div>}
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <button className="btn btn-link" onClick={handleSignInClick}>Already registered? Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
