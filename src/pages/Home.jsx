import React, { useState } from "react";
import { HeroSection } from "../components/Layout/UI/HeroSection"; 
import HeroSection2 from "./HeroSection2";

import { About } from "./About"; // Assuming About is a component that holds the About section
import Features from "./Features";
import HowItWorks from "./HowItWorks"; 
import ServiceTypes from "./ServiceTypes";
import DriverProfiles from "./DriverProfiles"; 
import Testimonials from "./Testimonials"; 
import Promotions from "./Promotions"; 
import FAQ from "./FAQ"; 

export const Home = () => {
  const [showAbout, setShowAbout] = useState(false); // State to manage About section visibility

  return (
    <>
      <HeroSection setShowAbout={setShowAbout} />
      {showAbout && <About />} {/* Display About section if showAbout is true */}
      <HeroSection2 />
      
      <DriverProfiles />
      <Features />
      <HowItWorks />
      <ServiceTypes />
      <Testimonials />
      <Promotions />
      <FAQ />
    </>
  );
};
