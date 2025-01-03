import React, { useState } from 'react';

const RequestQuoteForm = ({ onClosePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    contact: '',
    workType: '',
    details: '',
    budget: '',
    source: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Name, Email, and Phone are required.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for your message! We have received your request and will get back to you shortly.');
        setErrorMessage('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          contact: '',
          workType: '',
          details: '',
          budget: '',
          source: '',
        });
      } else {
        setErrorMessage('Please Try Again After Some Time.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while sending the msg.');
      setSuccessMessage('');
    }
  };

  return (
    <div style={popupStyle}>
      <div style={popupContentStyle}>
        <button style={closeButtonStyle} onClick={onClosePopup}>
          &times;
        </button>
        <h2 style={{ textAlign: 'center' }}>Get A Free Quote!</h2>
        <p style={{ textAlign: 'center' , paddingTop:"5px"}}>Let's Create Your Dream App or Website Together</p>
        {/* Display Success or Error Message */}
        {successMessage && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}

        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <input
              style={inputStyle}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              style={inputStyle}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <input
              style={inputStyle}
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone No"
              required
            />
            <input
              style={inputStyle}
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Country / State / City"
            />
          </div>
          <div style={inputGroupStyle}>
            <input
              style={inputStyle}
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Skype / Whatsapp"
            />
            <select
              style={selectStyle}
              name="workType"
              value={formData.workType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Type of work required
              </option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>Other</option>
            </select>
          </div>
          <textarea
            style={textareaStyle}
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Project Details"
            rows="4"
          ></textarea>
          <div style={inputGroupStyle}>
            <select
              style={selectStyle}
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="" disabled>
                Your Budget
              </option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
            <select
              style={selectStyle}
              name="source"
              value={formData.source}
              onChange={handleChange}
            >
              <option value="" disabled>
                How Did You Hear About Us?
              </option>
              <option>Google</option>
              <option>Facebook</option>
              <option>Other</option>
            </select>
          </div>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
           
            <button style={submitButtonStyle} type="submit"
           
>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};




// Inline styles
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
  backgroundColor: 'rgb(2 21 51 / var(--tw-bg-opacity))',
  padding: '30px', // Increased padding for better spacing
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
  color: 'black',
};

const inputGroupStyle = {
  display: 'flex',
  gap: '15px', // Increased gap between input fields
  marginBottom: '15px', // Increased margin for spacing
};

const inputStyle = {
  flex: 1,
  padding: '12px', // Increased padding for better readability
  borderRadius: '8px', // Slightly rounder edges for input fields
  border: '1px solid #ccc',
  backgroundColor: '#f4f4f4', // Light background color to match theme
  color: '#333', // Dark text for better readability
  fontSize: '16px', // Increased font size for better accessibility
};

const selectStyle = {
  flex: 1,
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f4f4f4', // Matching background for the select input
  color: '#333', // Dark text for better readability
  fontSize: '16px',
  appearance: 'none', // Removes default browser styles
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
};

const textareaStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f4f4f4', // Light background color
  color: '#333',
  fontSize: '16px',
  marginBottom: '15px',
};

const submitButtonStyle = {
  backgroundColor: 'rgb(12 89 219 / var(--tw-bg-opacity))', // Bright red button for attention
  color: '#fff',
  border: 'none',
  padding: '12px 24px', // Increased padding for larger button
  borderRadius: '8px', // Rounded corners for the button
  cursor: 'pointer',
  fontSize: '16px', // Increased font size for readability
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Shadow for depth
  transition: 'background-color 0.3s ease', // Smooth hover transition
};

export default RequestQuoteForm;
