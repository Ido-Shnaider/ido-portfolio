import React, { useState } from 'react';
import './Testimonials.css'; // Ensure the CSS is correctly linked

const testimonials = [
  {
    quote: "If you do the job badly enough, sometimes you don't get asked to do it again.",
    name: "Wisteria Ravenclaw",
    company: "Google Inc."
  },
  {
    quote: "I'm killing time while I wait for life to shower me with meaning and happiness.",
    name: "Ursula Gurnmeister",
    company: "Facebook"
  },
  {
    quote: "The only skills I have the patience to learn are those that have no real application in life.",
    name: "Ingredia Nutrisha",
    company: "Twitter"
  }
];

const Testimonials = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <figure key={index}
                className={`snip1533 ${hoverIndex === index ? 'hover' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
          <figcaption>
            <blockquote>
              <p>{testimonial.quote}</p>
            </blockquote>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.company}</h4>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Testimonials;
