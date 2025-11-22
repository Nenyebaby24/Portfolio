import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Portfolio-Style CV</h2>

      <div className="about-grid">

        {/* LEFT SECTION */}
        <div className="about-left">
          <h3>Profile</h3>
          <p>
            I’m a Frontend Developer and Marketing Specialist with strong experience
            in crafting conversion-focused digital products. I blend design thinking,
            clean UI development, and marketing psychology to build websites that
            not only look good but also generate results.
          </p>

          <h3>Contact</h3>
          <p>Email: <a href="mailto:udochinenye16@gmail.com">udochinenye16@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/2347060785187">+234 706 078 5187</a></p>

          <h3>Tools & Skills</h3>
          <ul>
            <li>React.js,javaScript, Bootstrap, CSS3, HTML5,</li>
            <li>Dashboard Creation</li>
            <li>Responsive UI Design</li>
            <li>Landing Page Development</li>
            <li>Marketing Campaigns</li>
            <li>SEO Basics & User Psychology</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="about-right">
          <h3>Experience</h3>

          <div className="exp-card">
            <h4>Frontend Developer</h4>
            <p className="exp-company">Freelance • Jan 2025 – Present</p>
            <ul>
              <li>Built responsive websites for SMEs and personal brands</li>
              <li>Created high-performance landing pages that boosted conversions</li>
              <li>Integrated chatbots, contact forms, and interactive components</li>
            </ul>
          </div>

          <div className="exp-card">
            <h4>Sales Representative</h4>
            <p className="exp-company">Pharmaceutical and Tech Companies • </p>
            <ul>
              <li>Executed targeted marketing campaigns across multiple regions</li>
              <li>Led customer engagement and product/services awareness strategies</li>
              <li>Developed messaging frameworks and outreach sequences</li>
            </ul>
          </div>

          <h3>Education</h3>
          <p>B.Sc Industrial Chemistry — Nigerian University</p>
        </div>
      </div>
    </section>
  );
};

export default About;
