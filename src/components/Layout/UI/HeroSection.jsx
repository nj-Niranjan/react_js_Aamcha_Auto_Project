import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HeroSection = ({ setShowAbout }) => {
  const navigate = useNavigate();

  const handleStartRide = () => {
    navigate('/book-ride'); 
  };

  const handleLogoClick = () => {
    setShowAbout(prev => !prev); // Toggle the About section visibility
  };

  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Get The Best Ride Here.</h1>
          <p className="paragraph">
            The Ride You Need, <br /> The Pay Drivers Deserve
          </p>
          <button className="btn btn-darken btn-inline bg-white-box" onClick={handleStartRide}>
            Start Ride <FaArrowRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/epv.png" alt="EV Auto" className="banner-image" />
        </div>
      </div>

      {/* Logo Section */}
      <div className="logo-container" onClick={handleLogoClick}>
        <img src="/images/logo1.png" alt="Company Logo" className="logo" />
      </div>
    </main>
  );
};
