import React from "react";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Services</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            I build clean, responsive,interactive and high-performing websites using React and
            modern web technologies. Optimized for speed, UI clarity, and mobile
            friendliness.
          </p>
        </div>

        <div className="service-card">
          <h3>Landing Pages</h3>
          <p>
            Clean and conversion-focused landing pages that help you attract and engage users.
          </p>
        </div>
        <div className="service-card">
          <h3>Dashboard Creation</h3>
          <p>Interactive and responsive dashboards using modern front-end technologies.Transforms data into clear,user-friendly visual interfaces with carts,tables,filters and real-time updates</p>
        </div>

        <div className="service-card">
          <h3>Chatbot Application</h3>
          <p>I develop AI powered chatbot apps that enhance customer support and automate conversations</p>
        </div>

        <div className="service-card">
          <h3>Sales Development Representative</h3>

          <p>Email Marketing: Able to design targeted email campaigns that nurture prospects, increase engagement, and support sales conversion.</p>

<p>Cold Emailing: Skilled in writing personalized cold outreach sequences that capture attention and initiate qualified sales conversations.</p>

<p>Data Scraping & Lead Sourcing: Experienced in scraping, enriching, and organizing prospect data to build accurate, high-intent lead lists.</p>

<p>LinkedIn Outreach: Proficient in personalized LinkedIn connection strategies, messaging, and follow-up flows to generate interest and book meetings.</p>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
