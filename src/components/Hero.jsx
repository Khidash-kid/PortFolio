import React from "react";
import About from "./About";
import '../styles/Hero.css'
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div className="Hero">
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}