import React from 'react';
import {
  IoHomeOutline,
  IoPersonCircleOutline,
  IoBriefcaseOutline,
  IoChatbubblesOutline,
  IoMailOutline
} from 'react-icons/io5';
import './Header.css';
// import logoImage from '../../assets/logo.png'; 

const Header = () => {
    return (
<header className="sticky-header">
  <div className="brand-name">Ido</div>
  <div className="navbar-links">
    <a href="#home"><IoHomeOutline />Home</a>
    <a href="#about"><IoPersonCircleOutline />About</a>
    <a href="#services"><IoBriefcaseOutline />Service</a>
    <a href="#testimonials"><IoChatbubblesOutline />Testimonials</a>
    <a href="#contact"><IoMailOutline />Contact</a>
  </div>
</header>
    );
  };
  
  export default Header;
