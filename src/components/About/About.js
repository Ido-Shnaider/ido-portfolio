import React from 'react';
import './About.css'; // Ensure this is the correct path to your CSS file
import aboutImage from '../../assets/About.jpeg'; // Replace with the path to your actual image
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {

     // An array containing skill names and their proficiency levels
    const skills = [
        { name: 'HTML', now: 80 },
        { name: 'CSS', now: 80 },
        { name: 'React', now: 75 },
        { name: 'JavaScript', now: 75 },
        { name: 'Object Oriented', now: 80 },
        { name: 'Java', now: 85 },
        { name: 'Systems Analysis', now: 80 },
        { name: 'Canva', now: 85 },
        { name: 'ChatGPT', now: 85 },
        // ... add other skills here as needed
      ];

        // Divide the skills into two equal parts for displaying in two columns
        const firstColumnSkills = skills.slice(0, Math.ceil(skills.length / 2));
        const secondColumnSkills = skills.slice(Math.ceil(skills.length / 2));
  
    // The JSX returned here constructs the layout of the About page
  return (
    <div className="about-container">
      <div className="about-text">
        <p className="about-header">About Me</p>
        <h1>Hi, I'm Ido Shnaider</h1>
        <p>I'm a Freelancer Software Developer with over 3 years of experience. I'm from Israel. I code and create web elements for amazing people around the world. I like to work with new people.</p>
        <h2>What is my skill level?</h2>
        <div className="skills-container">
          <div className="skills-column">
             {/* ... progress bars ... */}
            {firstColumnSkills.map((skill) => (
              <div key={skill.name} className="skill-bar">
                <span>{skill.name}</span>
                <ProgressBar now={skill.now} label={`${skill.now}%`} />
              </div>
            ))}
          </div>
          <div className="skills-column">
            {secondColumnSkills.map((skill) => (
              <div key={skill.name} className="skill-bar">
                <span>{skill.name}</span>
                <ProgressBar now={skill.now} label={`${skill.now}%`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="AboutImg" />
      </div>
    </div>
  );
};

export default About;