import React, { useState } from "react";

import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const data = [
    { 
      title: "Luchi Abacha Dashboard",
      link: "https://luchi-special-abacha-dashboard.vercel.app/",
      screenshot: "/assets/luchi-dashboard.jpg",
      description: "A React admin dashboard designed for product management, sales tracking, and smooth analytics." 
    },
    { 
      title: "Luchi Special Abacha Website",
      link: "https://luchi-abacha-website.vercel.app/",
      screenshot: "/assets/luchi-abacha.jpg",
      description: "A modern, responsive website for a food brand showcasing products and customer engagement."  
    },
    { 
      title: "Tobams Training Website",
      link: "https://tobams-training-website-72ad.vercel.app/",
      screenshot: "/assets/tobams.jpg",
      description: "A corporate training website designed for service presentation and lead generation."  
    },
    { 
      title: "Gemini Chatbot",
      link: "https://chatbot-with-germini-api.vercel.app/",
      screenshot: "/assets/geminichat.jpg",
      description: "A custom-built chatbot interface integrated with the Gemini API."  
    },
    { 
      title: "GlowOn Landing Page",
      link: "https://grow-on-landing-page-7r5c.vercel.app/",
      screenshot: "/assets/glowon.jpg",
      description: "A sleek landing page with strong CTA flow and conversion-focused UI."  
    },

    {
      title: "Kloudspot project",
      link: "https://kloudspot-project-8vil.vercel.app/",
      screenshot: "/assets/kloudspot.jpg",
      description: "A Crowd Solutions Management App. The Crowd Management System aims to provide a unified interface for stakeholders to view live and historical crowd analytics. The designs represent the core user experience, including login, dashboard and crowd entries visibility."


    },
     {
      title: "Nado Ventures Ltd project",
      link: "https://next-js-project-weld-iota.vercel.app/",
      screenshot: "/assets/nado.jpg",
      description: " entries visibility."


    },
    {
    title: "Flowva Hub project",
      link: "https://flowva-hub.vercel.app/",
      screenshot: "/assets/flowva-hub.jpg",
      description: "A centralized platform designed to help brands and digital products reach and engage with a highly active audience of tech-savvy users."
    

    },

  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

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
