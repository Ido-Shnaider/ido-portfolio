import React from 'react';
import './Services.css'; // Make sure the CSS file is in the same directory

const Services = () => {
  const services = [
    { title: 'Motion & Web Graphy', description: 'Explaining your service.' },
    { title: 'UI/UX Consultancy', description: 'Explaining your service.' },
    { title: 'Branding & Design', description: 'Explaining your service.' },
    { title: 'Mobile App Design', description: 'Explaining your service.' }
  ];

  return (
    <div className="services-container">
      <h1>What I do</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Mauris ipsum sit nibh amet egestas tellus.</p>
      <div className="cards-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
