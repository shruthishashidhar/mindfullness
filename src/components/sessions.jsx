import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

function Sessions() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    setShowRegistration(true);
  };

  const handleCloseRegistration = () => {
    setShowRegistration(false);
  };

  return (
    <div className="container">
      <p className="display-7 text-center my-2">
        We are excited to see you joining our session. Register now and start your
        wonderful journey towards self-care.
      </p>
      <div className="row">
        <div className="col">
          <h2
            onClick={() => handleSlotClick('Meditation')}
            className="slot"
            style={{
              cursor: 'pointer',
              backgroundColor: '#FFD700',
              padding: '10px',
              borderRadius: '5px',
              color: '#333',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
            }}
          >
            Monday - Friday 7:00 AM (Meditation)
          </h2>
          <h2
            onClick={() => handleSlotClick('Yoga')}
            className="slot"
            style={{
              cursor: 'pointer',
              backgroundColor: '#90EE90',
              padding: '10px',
              borderRadius: '5px',
              color: '#333',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
            }}
          >
            Monday - Friday 9:00 AM (Yoga)
          </h2>
          <h2
            onClick={() => handleSlotClick('Dance')}
            className="slot"
            style={{
              cursor: 'pointer',
              backgroundColor: '#87CEFA',
              padding: '10px',
              borderRadius: '5px',
              color: '#333',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
            }}
          >
            Monday - Friday 5:00 PM (Dance)
          </h2>
          {/* Add more slots as needed */}
        </div>
      </div>
      {showRegistration && <RegistrationForm onClose={handleCloseRegistration} selectedSlot={selectedSlot} />}
    </div>
  );
}

export default Sessions;
