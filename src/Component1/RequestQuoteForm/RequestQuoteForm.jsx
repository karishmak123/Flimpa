import React, { useState } from 'react';


const RequestQuoteForm = ({ onClosePopup }) => {
    return (
      <div style={popupStyle}>
        <div style={popupContentStyle}>
          {/* Close button */}
          <button style={closeButtonStyle} onClick={onClosePopup}>
            &times;
          </button>
          <h2 style={{ textAlign: 'center' }}>Get A Free Quote!</h2>
          <p style={{ textAlign: 'center' }}>
            We're eager to work with you. Please share your project goals and contact
            information. Our team will respond to you within 24 hours.
          </p>
          <form style={formStyle}>
            {/* Form content */}
            <div style={inputGroupStyle}>
              <input style={inputStyle} type="text" placeholder="Your Name" required />
              <input style={inputStyle} type="email" placeholder="Your Email" required />
            </div>
            <div style={inputGroupStyle}>
              <input style={inputStyle} type="text" placeholder="Your Phone No" required />
              <input style={inputStyle} type="text" placeholder="Country / State / City" />
            </div>
            <div style={inputGroupStyle}>
              <input style={inputStyle} type="text" placeholder="Skype / Whatsapp" />
              <select style={selectStyle}>
                <option value="" disabled selected>
                  Type of work required
                </option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Other</option>
              </select>
            </div>
            <textarea
              style={textareaStyle}
              placeholder="Project Details"
              rows="4"
            ></textarea>
            <div style={inputGroupStyle}>
              <select style={selectStyle}>
                <option value="" disabled selected>
                  Your Budget
                </option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
              </select>
              <select style={selectStyle}>
                <option value="" disabled selected>
                  How Did You Hear About Us?
                </option>
                <option>Google</option>
                <option>Facebook</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <div style={{ marginBottom: '10px' }}>
                <input type="checkbox" required /> I'm not a robot
              </div>
              <button style={submitButtonStyle} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

// Inline styles
const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupContentStyle = {
  backgroundColor: '#FF4E4E',
  padding: '20px',
  borderRadius: '10px',
  width: '90%',
  maxWidth: '600px',
  color: '#fff',
  position: 'relative',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '20px',
  color: '#fff',
  cursor: 'pointer',
};

const formStyle = {
  marginTop: '20px',
};

const inputGroupStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '10px',
};

const inputStyle = {
  flex: 1,
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const selectStyle = {
  flex: 1,
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  color: 'rgb(148 142 142)',
  fontSize: '16px',
  appearance: 'none', // Removes default browser styles
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',

};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};

const submitButtonStyle = {
  backgroundColor: '#fff',
  color: '#FF4E4E',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default RequestQuoteForm;
