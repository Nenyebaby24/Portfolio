import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectsA from "./components/ProjectsA";
import ProjectsB from "./components/ProjectsB";
import ProjectsC from "./components/ProjectsC";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Services />
      <ProjectsA />
      <ProjectsB />
      <ProjectsC />
      <Contact />
      <Footer />
    </>
  );
}

export default App;


