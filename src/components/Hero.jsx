import React from "react";


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Hello, I'm <span>Chinenye Udo</span></h1>
        <p>Frontend Developer, Sales & Marketing Specialist</p>

        <a href="#projects" className="hero-btn">View My Projects</a>
      </div>

      <div className="hero-image">
        <img 
          src="/assets/my-photo.jpg" 
          alt="Chinenye Udo" 
        />
      </div>
    </section>
  );
};

export default Hero;

