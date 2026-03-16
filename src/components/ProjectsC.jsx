import React, { useState } from "react";

import "./Projectsa.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const data = [
    { 
      title: "Conversion Landing Page",
      link: "https://conversion-landing-page-five.vercel.app/",
      screenshot: "/assets/conversion.png",
      description: "I built a full-conversion lading page that shows clearly lead capture, booking and sales." 
    },
    { 
      title: "Glowhaus Beauty & Lifestyle Web Platform",
      link: "https://glowhaus.vercel.app/",
      screenshot: "/assets/glowhaus.jpg",
      description: "GlowHaus is a modern beauty and lifestyle web platform designed to showcase salon services, beauty transformations, and products in an elegant, user-friendly interface. Built with Next.js and Typescript, the platform features responsive design, dynamic service listings, a visual gallery for hair, makeup, and nail transformations, and optimized image rendering for performance."  
    },
    
  ];

  return (
    <section id="projectsC" className="projects-section">
      <h2>Projects C</h2>

      <div className="projects-grid">
        {data.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.screenshot} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <button className="details-btn" onClick={() => setSelectedProject(p)}>
              View Live
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedProject.screenshot} 
              alt={selectedProject.title} 
              className="modal-img" 
            />
            <h2>{selectedProject.title}</h2>
            <p className="modal-desc">{selectedProject.description}</p>

            <div className="modal-actions">
              <a 
                href={selectedProject.link}
                target="_blank"
                className="open-live"
              >
                Open Live Website
              </a>

              <button 
                className="close-modal"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;