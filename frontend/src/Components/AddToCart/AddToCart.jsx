import React, { useState } from 'react';

function AddToCart({ onClose }) {
  // This state controls whether the popup is visible
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle the popup visibility
  const toggleLocalPopup = () => {
    setIsOpen(!isOpen);
    onClose(); // Call the onClose function provided by the parent component
  };



  return (
    <div>
      {/* Popup UI - shown based on the `isOpen` state */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)'
        }}>
          <h2>Popup Title</h2>
          <p>This is a simple popup!</p>
          <button> Place Order</button>
          <button onClick={toggleLocalPopup}>Close</button>
        </div>
      )}

      {/* Optional: Overlay to darken the background when the popup is visible */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }} onClick={toggleLocalPopup}></div>
      )}
    </div>
  );
}

export default AddToCart;
