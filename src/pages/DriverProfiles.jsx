// DriverProfiles.jsx
import React, { useState, useEffect } from 'react';
import "../App.css";

export const DriverProfiles = () => {
  const drivers = [
    { name: "Mukesh Kumar", description: "5 years of experience. Friendly and professional." },
    { name: "Pradeep Kumar", description: "Expert in safe driving. Loves to chat!" },
    { name: "Amit Bharti", description: "Passionate about providing great service." },
    { name: "Tejash Raj", description: "Professional Auto and all vehicle driver." },
  ];

  const backgroundImages = [
    '/images/drivers 1.jpg',
    '/images/drivers 2.jpg',
    '/images/drivers 3.jpg',
    '/images/drivers 4.jpg',
    '/images/drivers 5.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, 3000); // Change every 3 seconds for faster slideshow speed

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="driver-profiles">
      {/* Background images in slideshow */}
      <div className="driver-background-images">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={`driver-bg-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Driver name and description */}
      <div className="driver-profile-info">
        <div className="headline-box">
          <h2 className="headline">Meet Our Drivers</h2>
        </div>
        <div className="driver-profiles-grid">
          {drivers.map((driver, index) => (
            <div className="driver-profile-card" key={index}>
              <h3 className="driver-name">{driver.name}</h3>
              <p className="driver-description">{driver.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverProfiles;