import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integration logic for EmailJS would go here
    console.log("Form Submitted:", formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          placeholder="Your Name" 
          required 
        />
      </div>
      {/* Repeat for Email and Message */}
      <button type="submit" className="send-button">
        <img src="images/icons/paper-plane-tilt.svg" alt="" />
        <span>Send</span>
      </button>
    </form>
  );
};