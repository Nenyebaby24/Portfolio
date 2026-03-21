import React, { useState } from "react";

import "./Projectsa.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const data = [
    { 
      title: "MiniCart Dashboard",
      link: "https://admin-minicart-dashboard.vercel.app/",
      screenshot: "/assets/minicart.png",
      description: "A React admin dashboard designed for product management, sales tracking, and smooth analytics." 
    },
    { 
      title: "Axial-Logic",
      link: "https://axial-logic.vercel.app/",
      screenshot: "/assets/axial-skeleton.png",
      description: "the interactive 3D implementation of the Axial Skeleton, specifically focusing on the Skull and Torso technical module. This project is built using React-Three-Fiber (R3F) and Vite, providing an educational interface for anatomical study."  
    },
    { 
      title: "3D Environment",
      link: "https://3-d-environment.vercel.app/",
      screenshot: "/assets/3D-environment.png",
      description: "I build a single-page React application demonstrating seamless state synchronization between a Three.js scene and a React HUD."  
    },
   
     {
      title: "Nado Ventures Ltd project",
      link: "https://next-js-project-weld-iota.vercel.app/",
      screenshot: "/assets/nado.jpg",
      description: "A landing page for an Edtech portal. Tools: Next.js, Tailwind CSS, Shadcn UI and Framer Motion"


    },
    {
    title: "Flowva Hub project",
      link: "https://flowva-hub.vercel.app/",
      screenshot: "/assets/flowva-hub.jpg",
      description: "A centralized platform designed to help brands and digital products reach and engage with a highly active audience of tech-savvy users. Tools: React, Tailwind, shadcn UI and Supabase(for Backend and Database)"
    

    },
    {
    title: "Appointment Booking App",
      link: "https://appointment-booking-app-chl3.vercel.app/",
      screenshot: "/assets/appointment.jpg",
      description: "Full-stack Dental Booking System that allows patients to book appointments online, and it automatically generates new available time slots once existing ones are fully booked.The designs represent the core user experience, including login,signup, dashboard. Tools: React, Tailwind,and Supabase(for Backend and Database)"
    

    },

  ];

  return (
    <section id="projectsA" className="projects-section">
      <h2>Projects A</h2>

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
