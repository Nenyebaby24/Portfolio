import React from "react";
import emailIcon from "../assets/email.png";
import whatsappIcon from "../assets/whatsapp.png";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-text">
          <p>
            Need a website, landing page, or digital marketing support?  
            I’d love to work with you. Reach out using any of the channels below.
          </p>

          <div className="contact-icons">
            <a href="mailto:udochinenye16@gmail.com" className="contact-btn">
              <img src={emailIcon} alt="Email" />
              Email Me
            </a>

            <a href="https://wa.me/2347060785187" className="contact-btn">
              <img src={whatsappIcon} alt="WhatsApp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
