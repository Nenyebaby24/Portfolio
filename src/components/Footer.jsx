import React from "react";
import emailIcon from "../assets/email.png";
import whatsappIcon from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Chinenye Udo. All rights reserved.</p>

      <div className="footer-icons">
        <a href="mailto:udochinenye16@gmail.com">
          <img src={emailIcon} alt="email" />
        </a>
        <a href="https://wa.me/2347060785187">
          <img src={whatsappIcon} alt="whatsapp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

