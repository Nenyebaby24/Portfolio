import React, { useState } from "react";
import "../App.css";
import emailIcon from "../assets/email.png";
import whatsappIcon from "../assets/whatsapp.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Chinenye Udo</div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>

        {/* DROPDOWN */}
        <li className="dropdown">
          <span className="dropdown-title">Projects</span>

          <ul className="dropdown-menu">
            <li>
              <a href="#projectsA" onClick={() => setOpen(false)}>
                Projects A
              </a>
            </li>

            <li>
              <a href="#projectsB" onClick={() => setOpen(false)}>
                Projects B
              </a>
            </li>

            <li>
              <a href="#projectsC" onClick={() => setOpen(false)}>
                Projects C
              </a>
            </li>
          </ul>
        </li>

        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>

        <div className="nav-icons-mobile">
          <a href="mailto:udochinenye16@gmail.com">
            <img src={emailIcon} alt="email" />
          </a>
          <a href="https://wa.me/2347060785187">
            <img src={whatsappIcon} alt="whatsapp" />
          </a>
        </div>
      </ul>

      <div className="nav-icons-desktop">
        <a href="mailto:udochinenye16@gmail.com">
          <img src={emailIcon} alt="email" />
        </a>
        <a href="https://wa.me/2347060785187">
          <img src={whatsappIcon} alt="whatsapp" />
        </a>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "bar rotate1" : "bar"}></div>
        <div className={open ? "bar hide" : "bar"}></div>
        <div className={open ? "bar rotate2" : "bar"}></div>
      </div>
    </nav>
  );
};

export default Navbar;


