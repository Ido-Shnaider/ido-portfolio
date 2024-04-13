import React from 'react';
import GoogleMap from './GoogleMap';
import './Contact.css'; // Make sure the CSS file is in the correct directory

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You'll need to integrate with your backend or a service like EmailJS here.
  };

  return (
    <div className="contact-container">
      <div className="info-boxes">
        <div className="info-box">
          <p>+972 506414262</p>
          <p>Fell free to call</p>
        </div>
        <div className="info-box">
          <p>shnaider2605@gmail.com</p>
          <p>Fell free to email me</p>
        </div>
        <div className="info-box">
          <p>Haifa City</p>
          <p>Born & Raised</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="form-container">
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
            <textarea placeholder="Message *" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="map-container">
        <GoogleMap /> {/* Using the GoogleMap component */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
