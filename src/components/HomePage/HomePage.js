import React from 'react';
import './HomePage.css'; // Adjust the path to your CSS file as necessary
import profileImage from '../../assets/profile.jpeg'; // Adjust the path to your profile image
import cv from '../../assets/IdoShnaiderCV.pdf'; // Adjust the path to your CV PDF
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {


  return (

    <div className="home-container">
      <div id="tv">
        {/* Profile image, placed in the center */}
        <img src={profileImage} alt="profile" />
      </div>
      <div className="intro-text">
        <h2>Hello, I'm Ido Shnaider</h2>
        <div className="typewriter">
          <h1>Software Developer</h1>
        </div>
        <p class="text aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
        I'm a Freelancer Software Developer based in Israel,<br></br>
        with over 3 years of professional experience.
        </p>
        <div className="social-links">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div className="cv-download">
        <a href={cv} download="Ido_Shnaider_CV.pdf">
          Download CV
        </a>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
